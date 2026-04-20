import { useEffect, useMemo, useRef, useState } from 'react';
import {
  getCaptainSelectionDateKeys,
  addDaysToDateKey,
  formatDate,
  getWeekId,
  isSameDay,
  todayKey,
  tomorrowKey,
} from '../utils/dateUtils';
import { captainSelector, getPlayerName, teamGenerator } from '../utils/teamUtils';
import {
  getTeamGenerationStatus,
  getTeamGenerationLockedMessage,
  getTeamGenerationPromptText,
  getTeamGenerationSuccessMessage,
  TEAM_GENERATE_PASSWORD,
} from '../utils/teamGenerationUtils';
import MatchDetails from '../components/MatchDetails';
import ubedUpiQr from '../assets/ubed-upi-qr.jpeg';
import { useAppData } from '../context/AppDataContext';
import useAutoClearMessage from '../hooks/useAutoClearMessage';
import { openCaptainDayPdf } from '../utils/pdfUtils';
import {
  RESULT_NO_MATCH,
  RESULT_TEAM_A,
  RESULT_TEAM_B,
  buildMatchResultPayload,
  getMatchResultSelection,
} from '../utils/matchResultUtils';

const PENALTY_AMOUNT = 100;
const PAYMENT_RECEIVER_EN = 'Ubed Shaikh';
const PAYMENT_RECEIVER_MR = '\u0909\u092c\u0947\u0926 \u0936\u0947\u0916';
const PAYMENT_RECEIVER_LABEL = `${PAYMENT_RECEIVER_EN} (${PAYMENT_RECEIVER_MR})`;
const PAYMENT_UPI_ID = 'ubbus313-3@okaxis';
const MATCH_CENTER_CAPTAIN_WINDOW_DAYS = 3;
const MAX_CAPTAIN_CHANGES_PER_DAY = 2;
const createEmptyWeekCaptains = (weekId) => ({
  weekId,
  usedCaptains: { teamA: [], teamB: [] },
  dailyCaptains: [],
});

const getCaptainChangeCount = (entry) => {
  const parsedChangeCount = Number(entry?.changeCount);
  return Number.isFinite(parsedChangeCount) && parsedChangeCount >= 0 ? parsedChangeCount : 0;
};

const buildUsedCaptainsFromDailyCaptains = (dailyCaptains = []) =>
  dailyCaptains.reduce(
    (usedCaptains, entry) => {
      if (entry?.teamA && !usedCaptains.teamA.includes(entry.teamA)) {
        usedCaptains.teamA.push(entry.teamA);
      }

      if (entry?.teamB && !usedCaptains.teamB.includes(entry.teamB)) {
        usedCaptains.teamB.push(entry.teamB);
      }

      return usedCaptains;
    },
    { teamA: [], teamB: [] }
  );

const buildWeekCaptainsState = (targetWeekId, targetWeekCaptains, dailyCaptains = []) => ({
  ...targetWeekCaptains,
  weekId: targetWeekId,
  usedCaptains: buildUsedCaptainsFromDailyCaptains(dailyCaptains),
  dailyCaptains,
});

const isDateAllowedForMatchCenterCaptain = (dateValue) => {
  const startDateKey = todayKey();
  const endDateKey = addDaysToDateKey(startDateKey, MATCH_CENTER_CAPTAIN_WINDOW_DAYS - 1);

  return Boolean(dateValue && dateValue >= startDateKey && dateValue <= endDateKey);
};

const getCaptainResultClass = (match, captainId) => {
  if (!captainId) {
    return '';
  }

  if (!match || match.status === 'no-match' || !match.winnerTeam) {
    return 'captain-neutral-color';
  }

  const winnerCaptainId = match.winnerTeam === 'teamA' ? match.captainA : match.captainB;
  const loserCaptainId = match.winnerTeam === 'teamA' ? match.captainB : match.captainA;

  if (captainId === winnerCaptainId) {
    return 'captain-win-color';
  }

  if (captainId === loserCaptainId) {
    return 'captain-loss-color';
  }

  if (captainId === match.loserCaptain) {
    return 'captain-loss-color';
  }

  return 'captain-neutral-color';
};

function MatchCenterPage({ accessMode }) {
  const { players, teams, captains, matches, addMatch, updateMatch, updateAppState, saveWeeklyTeams } = useAppData();
  const [selectedWinner, setSelectedWinner] = useState(RESULT_TEAM_A);
  const [teamMessage, setTeamMessage] = useState('');
  const [teamMessageType, setTeamMessageType] = useState('success');
  const [showTeamPasswordModal, setShowTeamPasswordModal] = useState(false);
  const [teamPassword, setTeamPassword] = useState('');
  const [isSubmittingTeamGeneration, setIsSubmittingTeamGeneration] = useState(false);
  const [captainMessage, setCaptainMessage] = useState('');
  const [captainMessageType, setCaptainMessageType] = useState('success');
  const [activeCaptainChangeDate, setActiveCaptainChangeDate] = useState('');
  const [captainChangePassword, setCaptainChangePassword] = useState('');
  const [isSubmittingCaptainChange, setIsSubmittingCaptainChange] = useState(false);
  const [matchMessage, setMatchMessage] = useState('');
  const [captainOverrides, setCaptainOverrides] = useState({});
  const captainsSectionRef = useRef(null);

  useAutoClearMessage(teamMessage, setTeamMessage);
  useAutoClearMessage(captainMessage, setCaptainMessage);
  useAutoClearMessage(matchMessage, setMatchMessage);

  const weekId = getWeekId();
  const currentTeams = teams[weekId] || null;
  const getResolvedWeekCaptains = (targetWeekId) => {
    if (!targetWeekId) {
      return createEmptyWeekCaptains('');
    }

    return captainOverrides[targetWeekId] || captains[targetWeekId] || createEmptyWeekCaptains(targetWeekId);
  };
  const currentWeekCaptains = getResolvedWeekCaptains(weekId);
  const todayMatch = matches.find((match) => isSameDay(match.date, todayKey()));
  const todayCaptains = currentWeekCaptains.dailyCaptains?.find((entry) => entry.date === todayKey()) || null;
  const latestWeekCaptains = currentWeekCaptains.dailyCaptains?.slice(-1)?.[0] || null;
  const visibleCaptains = todayCaptains || latestWeekCaptains;
  const isAdmin = accessMode === 'admin';
  const captainAName = todayCaptains ? getPlayerName(players, todayCaptains.teamA) : '--';
  const captainBName = todayCaptains ? getPlayerName(players, todayCaptains.teamB) : '--';
  const visibleCaptainAName = visibleCaptains?.teamA ? getPlayerName(players, visibleCaptains.teamA) : '--';
  const visibleCaptainBName = visibleCaptains?.teamB ? getPlayerName(players, visibleCaptains.teamB) : '--';

  const maxTeamSize = useMemo(() => {
    if (!currentTeams) return 0;
    return Math.max(currentTeams.teamA.length, currentTeams.teamB.length);
  }, [currentTeams]);
  const formatTeamPlayerLabel = (playerId, index) => (playerId ? `${index + 1}. ${getPlayerName(players, playerId)}` : '--');

  const {
    currentGenerationCount,
    hasReachedGenerationLimit,
    canGenerateTeams,
    lockedMessage: teamGenerationLockedMessage,
  } = useMemo(() => getTeamGenerationStatus(currentTeams), [currentTeams]);

  useEffect(() => {
    if (!isAdmin || !teamGenerationLockedMessage) {
      return;
    }

    setTeamMessageType('warning');
    setTeamMessage((currentMessage) => currentMessage || teamGenerationLockedMessage);
  }, [isAdmin, teamGenerationLockedMessage]);

  useEffect(() => {
    setCaptainOverrides({});
    setActiveCaptainChangeDate('');
    setCaptainChangePassword('');
    setIsSubmittingCaptainChange(false);
  }, [captains]);

  const availableCounts = useMemo(() => {
    if (!currentTeams) {
      return { teamA: 0, teamB: 0 };
    }

    const usedA = currentWeekCaptains.usedCaptains?.teamA || [];
    const usedB = currentWeekCaptains.usedCaptains?.teamB || [];

    return {
      teamA: currentTeams.teamA.filter((playerId) => !usedA.includes(playerId)).length,
      teamB: currentTeams.teamB.filter((playerId) => !usedB.includes(playerId)).length,
    };
  }, [currentTeams, currentWeekCaptains]);

  const actionableCaptainDays = useMemo(
    () =>
      getCaptainSelectionDateKeys(MATCH_CENTER_CAPTAIN_WINDOW_DAYS).map((dateKey) => {
        const targetWeekId = getWeekId(dateKey);
        const targetWeekCaptains = getResolvedWeekCaptains(targetWeekId);

        return {
        date: dateKey,
        weekId: targetWeekId,
        formatted: formatDate(dateKey),
        isToday: dateKey === todayKey(),
        isTomorrow: dateKey === tomorrowKey(),
        teams: teams[targetWeekId] || null,
        captains: targetWeekCaptains.dailyCaptains?.find((entry) => entry.date === dateKey) || null,
        };
      }),
    [captainOverrides, captains, teams]
  );
  const visibleCaptainHistoryDays = useMemo(
    () =>
      actionableCaptainDays
        .filter((day) => day.captains)
        .slice()
        .sort((a, b) => (a.date < b.date ? -1 : 1)),
    [actionableCaptainDays]
  );

  const canMarkNoMatch = useMemo(() => !todayMatch, [todayMatch]);
  const isWinnerSelectionReady = selectedWinner === RESULT_NO_MATCH || Boolean(currentTeams && todayCaptains);

  useEffect(() => {
    if (todayMatch) {
      setSelectedWinner(getMatchResultSelection(todayMatch));
      return;
    }

    setSelectedWinner(RESULT_TEAM_A);
  }, [todayMatch]);

  const openTeamPasswordModal = () => {
    if (!isAdmin) {
      setTeamMessageType('warning');
      setTeamMessage('Only admin can generate weekly teams.');
      setShowTeamPasswordModal(false);
      return;
    }

    if (hasReachedGenerationLimit) {
      setTeamMessageType('warning');
      setTeamMessage(getTeamGenerationLockedMessage());
      setShowTeamPasswordModal(false);
      return;
    }

    setTeamPassword('');
    setShowTeamPasswordModal(true);
  };

  const closeTeamPasswordModal = () => {
    setShowTeamPasswordModal(false);
    setTeamPassword('');
  };

  const generateTeams = async (event) => {
    event.preventDefault();

    if (isSubmittingTeamGeneration) {
      return;
    }

    const enteredPassword = teamPassword.trim();
    closeTeamPasswordModal();

    if (enteredPassword !== TEAM_GENERATE_PASSWORD) {
      setTeamMessageType('warning');
      setTeamMessage('Incorrect admin password. Click "Generate Weekly Teams" to try again.');
      return;
    }

    setIsSubmittingTeamGeneration(true);

    if (hasReachedGenerationLimit) {
      setTeamMessageType('warning');
      setTeamMessage(getTeamGenerationLockedMessage());
      setIsSubmittingTeamGeneration(false);
      return;
    }

    try {
      const newTeams = teamGenerator(players);
      const nextGenerationCount = currentGenerationCount + 1;
      const hadExistingCaptainSelections = (currentWeekCaptains.dailyCaptains?.length || 0) > 0;
      const nextCaptainsData = { ...captains, ...captainOverrides };
      const clearedWeekCaptains = createEmptyWeekCaptains(weekId);

      delete nextCaptainsData[weekId];

      await saveWeeklyTeams(weekId, {
        weekId,
        date: todayKey(),
        generationCount: nextGenerationCount,
        ...newTeams,
      });
      await updateAppState({ captains: nextCaptainsData });
      setCaptainOverrides((currentOverrides) => ({
        ...currentOverrides,
        [weekId]: clearedWeekCaptains,
      }));

      setTeamMessageType('success');
      setTeamMessage(getTeamGenerationSuccessMessage(nextGenerationCount));
      setCaptainMessageType('success');
      setCaptainMessage(
        hadExistingCaptainSelections
          ? 'Captain selections were refreshed for the newly generated teams. Please choose fresh captains for today and the next 2 days.'
          : 'New teams are ready. Please choose captains for today and the next 2 days.'
      );
      window.setTimeout(() => {
        captainsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 180);
    } catch (error) {
      console.error('Error generating weekly teams:', error);
      setTeamMessageType('warning');
      setTeamMessage('Teams could not be generated. Please verify Firebase configuration and try again.');
    } finally {
      setIsSubmittingTeamGeneration(false);
    }
  };

  const selectCaptainsForDay = async (targetDate) => {
    if (!isAdmin) {
      setCaptainMessageType('warning');
      setCaptainMessage('Only admin can select captains.');
      return;
    }

    if (!isDateAllowedForMatchCenterCaptain(targetDate)) {
      setCaptainMessageType('warning');
      setCaptainMessage('Captain can only be selected for today and the next 2 days.');
      return;
    }

    const targetWeekId = getWeekId(targetDate);
    const targetTeams = teams[targetWeekId] || null;
    const targetWeekCaptains = getResolvedWeekCaptains(targetWeekId);

    if (!targetTeams) {
      setCaptainMessageType('warning');
      setCaptainMessage(`Please generate weekly teams for ${targetWeekId} before selecting captains for ${formatDate(targetDate)}.`);
      return;
    }

    const existingCaptains = targetWeekCaptains.dailyCaptains?.find((item) => item.date === targetDate);
    if (existingCaptains) {
      setCaptainMessageType('warning');
      setCaptainMessage('Captains have already been selected for this day.');
      return;
    }

    const selection = captainSelector(targetTeams, targetWeekCaptains.usedCaptains);
    if (!selection) {
      setCaptainMessageType('warning');
      setCaptainMessage('No available captain candidates remain for one or both teams this week.');
      return;
    }

    const nextDailyCaptains = [
      ...(targetWeekCaptains.dailyCaptains || []),
      { date: targetDate, teamA: selection.teamA, teamB: selection.teamB, changeCount: 0 },
    ];
    const nextWeekCaptains = buildWeekCaptainsState(targetWeekId, targetWeekCaptains, nextDailyCaptains);

    try {
      await updateAppState({
        captains: {
          ...captains,
          ...captainOverrides,
          [targetWeekId]: nextWeekCaptains,
        },
      });

      setCaptainOverrides((currentOverrides) => ({
        ...currentOverrides,
        [targetWeekId]: nextWeekCaptains,
      }));
      setCaptainMessageType('success');
      setCaptainMessage(`Captains selected successfully for ${formatDate(targetDate)}.`);
    } catch (error) {
      console.error('Error selecting captains:', error);
      setCaptainMessageType('warning');
      setCaptainMessage('Captains could not be saved. Please verify Firebase configuration and try again.');
    }
  };

  const openCaptainChangePanel = (targetDate) => {
    if (!isAdmin) {
      setCaptainMessageType('warning');
      setCaptainMessage('Only admin can change captains.');
      return;
    }

    const relatedMatch = matches.find((match) => isSameDay(match.date, targetDate)) || null;
    if (relatedMatch) {
      setCaptainMessageType('warning');
      setCaptainMessage(`Captain change is locked for ${formatDate(targetDate)} because that match result is already saved.`);
      return;
    }

    const targetWeekId = getWeekId(targetDate);
    const targetWeekCaptains = getResolvedWeekCaptains(targetWeekId);
    const existingCaptains = targetWeekCaptains.dailyCaptains?.find((entry) => entry.date === targetDate) || null;
    const remainingChanges = Math.max(MAX_CAPTAIN_CHANGES_PER_DAY - getCaptainChangeCount(existingCaptains), 0);

    if (!existingCaptains) {
      setCaptainMessageType('warning');
      setCaptainMessage(`Select captains for ${formatDate(targetDate)} first.`);
      return;
    }

    if (remainingChanges === 0) {
      setCaptainMessageType('warning');
      setCaptainMessage(`Captain changes are finished for ${formatDate(targetDate)}.`);
      return;
    }

    setActiveCaptainChangeDate(targetDate);
    setCaptainChangePassword('');
  };

  const closeCaptainChangePanel = () => {
    setActiveCaptainChangeDate('');
    setCaptainChangePassword('');
  };

  const changeCaptainsForDay = async (event, targetDate) => {
    event.preventDefault();

    if (isSubmittingCaptainChange) {
      return;
    }

    if (!isAdmin) {
      setCaptainMessageType('warning');
      setCaptainMessage('Only admin can change captains.');
      return;
    }

    const targetWeekId = getWeekId(targetDate);
    const targetTeams = teams[targetWeekId] || null;
    const targetWeekCaptains = getResolvedWeekCaptains(targetWeekId);
    const currentEntryIndex = targetWeekCaptains.dailyCaptains?.findIndex((entry) => entry.date === targetDate) ?? -1;
    const existingCaptains = currentEntryIndex >= 0 ? targetWeekCaptains.dailyCaptains[currentEntryIndex] : null;

    if (!targetTeams || !existingCaptains) {
      setCaptainMessageType('warning');
      setCaptainMessage(`Captain data for ${formatDate(targetDate)} is not ready yet.`);
      return;
    }

    const relatedMatch = matches.find((match) => isSameDay(match.date, targetDate)) || null;
    if (relatedMatch) {
      setCaptainMessageType('warning');
      setCaptainMessage(`Captain change is locked for ${formatDate(targetDate)} because that match result is already saved.`);
      closeCaptainChangePanel();
      return;
    }

    const existingChangeCount = getCaptainChangeCount(existingCaptains);
    const remainingChanges = Math.max(MAX_CAPTAIN_CHANGES_PER_DAY - existingChangeCount, 0);
    if (remainingChanges === 0) {
      setCaptainMessageType('warning');
      setCaptainMessage(`Captain changes are finished for ${formatDate(targetDate)}.`);
      closeCaptainChangePanel();
      return;
    }

    if (captainChangePassword.trim() !== TEAM_GENERATE_PASSWORD) {
      setCaptainMessageType('warning');
      setCaptainMessage('Incorrect admin password. Captain change was not applied.');
      return;
    }

    const selection = captainSelector(
      targetTeams,
      buildUsedCaptainsFromDailyCaptains(targetWeekCaptains.dailyCaptains || [])
    );

    if (!selection) {
      setCaptainMessageType('warning');
      setCaptainMessage('No unused replacement captains remain for one or both teams on this week.');
      return;
    }

    if (selection.teamA === existingCaptains.teamA && selection.teamB === existingCaptains.teamB) {
      setCaptainMessageType('warning');
      setCaptainMessage('A different captain pair could not be found right now. Please try again later.');
      return;
    }

    const nextDailyCaptains = (targetWeekCaptains.dailyCaptains || []).map((entry, index) =>
      index === currentEntryIndex
        ? {
            ...entry,
            teamA: selection.teamA,
            teamB: selection.teamB,
            changeCount: existingChangeCount + 1,
          }
        : entry
    );
    const nextWeekCaptains = buildWeekCaptainsState(targetWeekId, targetWeekCaptains, nextDailyCaptains);

    setIsSubmittingCaptainChange(true);

    try {
      await updateAppState({
        captains: {
          ...captains,
          ...captainOverrides,
          [targetWeekId]: nextWeekCaptains,
        },
      });

      setCaptainOverrides((currentOverrides) => ({
        ...currentOverrides,
        [targetWeekId]: nextWeekCaptains,
      }));
      closeCaptainChangePanel();

      const nextRemainingChanges = Math.max(MAX_CAPTAIN_CHANGES_PER_DAY - (existingChangeCount + 1), 0);
      setCaptainMessageType('success');
      setCaptainMessage(
        `Captains changed for ${formatDate(targetDate)}. ${nextRemainingChanges} change chance${nextRemainingChanges === 1 ? '' : 's'} left for this date.`
      );
    } catch (error) {
      console.error('Error changing captains:', error);
      setCaptainMessageType('warning');
      setCaptainMessage('Captain change could not be saved. Please verify Firebase configuration and try again.');
    } finally {
      setIsSubmittingCaptainChange(false);
    }
  };

  const handleSaveMatch = async () => {
    if (!isAdmin) {
      setMatchMessage('Only admin can record matches.');
      return;
    }

    if (!isWinnerSelectionReady) {
      setMatchMessage("A result cannot be saved right now. Please check today's captains.");
      return;
    }

    const baseMatch = {
      ...todayMatch,
      date: todayKey(),
      weekId,
      teamA: currentTeams?.teamA || todayMatch?.teamA || [],
      teamB: currentTeams?.teamB || todayMatch?.teamB || [],
      captainA: todayCaptains?.teamA || todayMatch?.captainA || '',
      captainB: todayCaptains?.teamB || todayMatch?.captainB || '',
      penalty: todayMatch?.penalty || PENALTY_AMOUNT,
      penaltyPaid: todayMatch?.penaltyPaid === true,
    };
    const payload = buildMatchResultPayload({
      selection: selectedWinner,
      baseMatch,
      captainA: baseMatch.captainA,
      captainB: baseMatch.captainB,
      penaltyAmount: PENALTY_AMOUNT,
    });

    if (!payload) {
      setMatchMessage("Today's captains are required before saving a winning team result.");
      return;
    }

    try {
      if (todayMatch) {
        await updateMatch(todayMatch.id, payload);
      } else {
        await addMatch(payload);
      }

      if (payload.status === 'no-match') {
        setMatchMessage(todayMatch ? 'Today was updated as a no-match day.' : 'No match was recorded for today.');
        return;
      }

      setMatchMessage(
        todayMatch
          ? `Match result updated. \u20B9${PENALTY_AMOUNT} penalty is now assigned to ${getPlayerName(players, payload.loserCaptain)}.`
          : `Match recorded. \u20B9${PENALTY_AMOUNT} penalty assigned to ${getPlayerName(players, payload.loserCaptain)}.`
      );
    } catch (error) {
      console.error('Error recording match:', error);
      setMatchMessage('Match result could not be saved. Please verify Firebase configuration and try again.');
    }
  };

  const handleSaveNoMatch = async () => {
    if (!isAdmin) {
      setMatchMessage('Only admin can record matches.');
      return;
    }

    if (!canMarkNoMatch) {
      setMatchMessage("A no-match entry cannot be recorded right now. Please check today's data.");
      return;
    }

    try {
      await addMatch({
        date: todayKey(),
        weekId,
        status: 'no-match',
        teamA: currentTeams?.teamA || [],
        teamB: currentTeams?.teamB || [],
        score: 'No match',
        captainA: todayCaptains?.teamA || '',
        captainB: todayCaptains?.teamB || '',
        winnerTeam: '',
        loserCaptain: '',
        penalty: 0,
        penaltyPaid: true,
      });

      setMatchMessage('No match was recorded for today.');
    } catch (error) {
      console.error('Error recording no-match day:', error);
      setMatchMessage('No-match status could not be recorded. Please verify Firebase configuration and try again.');
    }
  };

  const handleCaptainPdf = (entry, targetWeekId) => {
    const targetTeams = teams[targetWeekId] || null;

    if (!targetTeams || !entry) {
      setCaptainMessageType('warning');
      setCaptainMessage('Captain team sheet is not ready yet.');
      return;
    }

    const didOpen = openCaptainDayPdf({
      date: entry.date,
      weekId: targetWeekId,
      captains: entry,
      teams: targetTeams,
      players,
    });

    setCaptainMessageType(didOpen ? 'success' : 'warning');
    setCaptainMessage(
      didOpen
        ? `Captain team sheet opened for ${formatDate(entry.date)}. Choose "Save as PDF" to share it.`
        : 'PDF preview could not be prepared. Please try again.'
    );
  };

  return (
    <section>
      <div className="top-nav">
        <div>
          <h1 className="page-title">Match Center</h1>
        </div>
      </div>

      <div className="section-grid" style={{ gridTemplateColumns: '1fr', gap: '18px' }}>
        <div className="card">
          <h2 className="card-title">1. Weekly Teams</h2>
          <p className="pill">Current week: {weekId}</p>
          <p className="pill" style={{ marginTop: '10px' }}>Members available: {players.length}</p>

          <div className="button-row" style={{ marginTop: '14px' }}>
            <button
              className="button-primary button-small"
              type="button"
              onClick={openTeamPasswordModal}
              disabled={!isAdmin || !canGenerateTeams || showTeamPasswordModal || isSubmittingTeamGeneration}
            >
              Generate Weekly Teams
            </button>
          </div>

          {!isAdmin ? (
            <p className="warning-text" style={{ marginTop: '12px' }}>
              Login as admin to generate weekly teams.
            </p>
          ) : null}

          {teamMessage ? (
            <p className={teamMessageType === 'success' ? 'success-text' : 'warning-text'} style={{ marginTop: '14px' }}>
              {teamMessage}
            </p>
          ) : null}

          {showTeamPasswordModal ? (
            <div className="team-password-panel">
              <h3 id="team-password-title" className="card-title">
                Enter Admin Password
              </h3>
              <p className="page-intro" style={{ marginBottom: '12px' }}>
                {getTeamGenerationPromptText()}
              </p>
              <form className="team-password-form" onSubmit={generateTeams}>
                <label className="input-label" htmlFor="team-generate-password">
                  Admin Password
                </label>
                <input
                  id="team-generate-password"
                  type="password"
                  value={teamPassword}
                  onChange={(event) => setTeamPassword(event.target.value)}
                  placeholder="Enter admin password"
                  autoFocus
                  required
                />
                <div className="button-row team-password-actions" style={{ marginTop: '8px' }}>
                  <button className="button-primary button-small" type="submit" disabled={isSubmittingTeamGeneration}>
                    Generate Teams
                  </button>
                  <button
                    className="button-secondary button-small"
                    type="button"
                    onClick={closeTeamPasswordModal}
                    disabled={isSubmittingTeamGeneration}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : null}

          <div className="overflow-x-auto" style={{ marginTop: '18px' }}>
            <table className="table team-table split-team-table">
              <thead>
                <tr>
                  <th>
                    Team A ({currentTeams ? currentTeams.teamA.length : 0}) - Captain: <strong>{visibleCaptainAName}</strong>
                  </th>
                  <th>
                    Team B ({currentTeams ? currentTeams.teamB.length : 0}) - Captain: <strong>{visibleCaptainBName}</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                {!currentTeams ? (
                  <tr>
                    <td className="team-players-cell team-col-a">
                      <span className="empty-state">Not generated yet</span>
                    </td>
                    <td className="team-players-cell team-col-b">
                      <span className="empty-state">Not generated yet</span>
                    </td>
                  </tr>
                ) : (
                  Array.from({ length: maxTeamSize }, (_, index) => {
                    const playerAId = currentTeams.teamA[index];
                    const playerBId = currentTeams.teamB[index];

                    return (
                      <tr key={`match-center-team-row-${index}`}>
                        <td className="team-players-cell team-col-a">
                          {playerAId ? <span className="team-player-name">{formatTeamPlayerLabel(playerAId, index)}</span> : <span className="empty-state">--</span>}
                        </td>
                        <td className="team-players-cell team-col-b">
                          {playerBId ? <span className="team-player-name">{formatTeamPlayerLabel(playerBId, index)}</span> : <span className="empty-state">--</span>}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card" ref={captainsSectionRef}>
          <h2 className="card-title">2. Captains</h2>
          {!currentTeams ? (
            <p className="empty-state">Generate weekly teams first to unlock captain selection.</p>
          ) : (
            <>
              <div className="button-row" style={{ marginBottom: '14px' }}>
                <span className="status-pill">Team A available: {availableCounts.teamA}</span>
                <span className="status-pill">Team B available: {availableCounts.teamB}</span>
              </div>

              {captainMessage ? (
                <p className={captainMessageType === 'success' ? 'success-text' : 'warning-text'} style={{ marginTop: '14px' }}>
                  {captainMessage}
                </p>
              ) : null}

              <p className="page-intro" style={{ marginTop: '14px' }}>
                Admin can choose captains only for today and the next 2 days. Each selected date can also change captains up to {MAX_CAPTAIN_CHANGES_PER_DAY} times with the admin password before that date&apos;s match is saved.
              </p>

              <div className="section-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                {actionableCaptainDays.map((day) => {
                  const isSelectable = !day.captains && Boolean(day.teams) && isDateAllowedForMatchCenterCaptain(day.date);
                  const relatedMatch = matches.find((match) => isSameDay(match.date, day.date)) || null;
                  const changeCount = getCaptainChangeCount(day.captains);
                  const remainingChanges = Math.max(MAX_CAPTAIN_CHANGES_PER_DAY - changeCount, 0);
                  const isChangePanelOpen = activeCaptainChangeDate === day.date;
                  const isCaptainChangeLocked = Boolean(relatedMatch);
                  const canChangeCaptains = Boolean(day.captains) && !isCaptainChangeLocked && remainingChanges > 0;

                  return (
                    <div
                      key={day.date}
                      className={`card ${day.isToday ? 'today-highlight' : ''} ${!isSelectable && !day.captains ? 'disabled-card' : ''}`}
                    >
                      <h3 className="card-title">
                        {day.formatted}
                        {day.isToday ? ' (Today)' : ''}
                        {day.isTomorrow && !day.isToday ? ' (Tomorrow)' : ''}
                      </h3>
                      <p className="page-intro" style={{ marginBottom: '10px' }}>Week: {day.weekId}</p>

                      {day.captains ? (
                        <div>
                          <p>
                            Team A:{' '}
                            <strong className={getCaptainResultClass(relatedMatch, day.captains.teamA)}>
                              {getPlayerName(players, day.captains.teamA)}
                            </strong>
                          </p>
                          <p>
                            Team B:{' '}
                            <strong className={getCaptainResultClass(relatedMatch, day.captains.teamB)}>
                              {getPlayerName(players, day.captains.teamB)}
                            </strong>
                          </p>
                          <button
                            className="button-secondary button-small"
                            type="button"
                            onClick={() => handleCaptainPdf(day.captains, day.weekId)}
                            data-guest-allowed="true"
                          >
                            {isAdmin ? 'Share Captain PDF' : 'Open Captain PDF'}
                          </button>
                          {isAdmin ? (
                            <button
                              className="button-primary button-small"
                              type="button"
                              onClick={() => openCaptainChangePanel(day.date)}
                              disabled={!canChangeCaptains || isSubmittingCaptainChange}
                              style={{ marginLeft: '8px', marginTop: '8px' }}
                            >
                              Change Captains
                            </button>
                          ) : null}

                          {isAdmin ? (
                            <p className="page-intro" style={{ marginTop: '10px', marginBottom: 0 }}>
                              Change chances left: {remainingChanges}/{MAX_CAPTAIN_CHANGES_PER_DAY}
                            </p>
                          ) : null}

                          {isCaptainChangeLocked ? (
                            <p className="warning-text" style={{ marginTop: '10px' }}>
                              Captain change is locked because this date already has a saved match result.
                            </p>
                          ) : null}

                          {!isCaptainChangeLocked && remainingChanges === 0 ? (
                            <p className="warning-text" style={{ marginTop: '10px' }}>
                              Captain changes are finished for this date.
                            </p>
                          ) : null}

                          {isAdmin && isChangePanelOpen ? (
                            <div className="team-password-panel" style={{ marginTop: '12px' }}>
                              <h4 className="card-title" style={{ marginBottom: '6px' }}>
                                Change Captains
                              </h4>
                              <p className="page-intro" style={{ marginBottom: '12px' }}>
                                Confirm admin password to use 1 of this date&apos;s {MAX_CAPTAIN_CHANGES_PER_DAY} captain-change chances.
                              </p>
                              <form className="team-password-form" onSubmit={(event) => changeCaptainsForDay(event, day.date)}>
                                <label className="input-label" htmlFor={`captain-change-password-${day.date}`}>
                                  Admin Password
                                </label>
                                <input
                                  id={`captain-change-password-${day.date}`}
                                  type="password"
                                  value={captainChangePassword}
                                  onChange={(event) => setCaptainChangePassword(event.target.value)}
                                  placeholder="Enter admin password"
                                  autoFocus
                                  required
                                />
                                <div className="button-row team-password-actions" style={{ marginTop: '8px' }}>
                                  <button className="button-primary button-small" type="submit" disabled={isSubmittingCaptainChange}>
                                    Confirm Change
                                  </button>
                                  <button
                                    className="button-secondary button-small"
                                    type="button"
                                    onClick={closeCaptainChangePanel}
                                    disabled={isSubmittingCaptainChange}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </form>
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <>
                          <button
                            className="button-primary button-small"
                            type="button"
                            onClick={() => selectCaptainsForDay(day.date)}
                            disabled={!isAdmin || !isSelectable}
                          >
                            Select Captains
                          </button>
                          {!day.teams ? (
                            <p className="warning-text" style={{ marginTop: '10px' }}>
                              Generate weekly teams for {day.weekId} to unlock this date.
                            </p>
                          ) : null}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="captain-history-panel" style={{ marginTop: '20px' }}>
                <div className="captain-history-panel-head">
                  <div>
                    <h3 className="card-title" style={{ marginBottom: '6px' }}>Date-wise Captain Color</h3>
                    <p className="captain-color-legend" style={{ marginBottom: 0 }}>
                      <span className="captain-loss-color">लाल</span> = हरलेला कर्णधार, <span className="captain-win-color">हिरवा</span> = जिंकलेला कर्णधार, <span className="captain-neutral-color">निळा</span> = कर्णधार निवडलेला आहे पण निकाल नोंदलेला नाही
                    </p>
                  </div>
                </div>
                {visibleCaptainHistoryDays.length > 0 ? (
                  <div className="captain-history-list">
                    {visibleCaptainHistoryDays.map((day) => {
                      const relatedMatch = matches.find((match) => isSameDay(match.date, day.date)) || null;
                      const teamAClassName = getCaptainResultClass(relatedMatch, day.captains.teamA) || 'captain-neutral-color';
                      const teamBClassName = getCaptainResultClass(relatedMatch, day.captains.teamB) || 'captain-neutral-color';

                      return (
                        <article className="captain-history-card" key={day.date}>
                          <div className="captain-history-card-top">
                            <strong className="captain-history-card-date">{formatDate(day.date)}</strong>
                          </div>
                          <div className="captain-history-card-grid">
                            <div className="captain-history-field">
                              <span>Team A Captain</span>
                              <strong className={teamAClassName}>
                                {getPlayerName(players, day.captains.teamA)}
                              </strong>
                            </div>
                            <div className="captain-history-field">
                              <span>Team B Captain</span>
                              <strong className={teamBClassName}>
                                {getPlayerName(players, day.captains.teamB)}
                              </strong>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  <p className="empty-state">No captain selections recorded yet for the visible captain dates.</p>
                )}
              </div>
            </>
          )}
        </div>
        <MatchDetails todayMatch={todayMatch} players={players} />

        {isAdmin ? (
          <div className="card">
            <h2 className="card-title">3. Winning Team Selection</h2>
            <p className="page-intro" style={{ marginBottom: '14px' }}>
              Admin can save or change today&apos;s result anytime.
            </p>

            {!currentTeams ? <p className="empty-state">Weekly teams are not ready yet, but you can still mark today as match not conducted.</p> : null}
            {!todayCaptains && currentTeams ? <p className="empty-state">Select captains for today before saving Team A or Team B as winner.</p> : null}

            <div className="winner-selection-panel">
              <div className="winner-selection-grid">
                <article className={`winner-selection-card ${selectedWinner === RESULT_TEAM_A ? 'active' : ''}`}>
                  <span className="winner-selection-label">Team A</span>
                  <strong className="winner-selection-name">{captainAName}</strong>
                </article>
                <article className={`winner-selection-card ${selectedWinner === RESULT_TEAM_B ? 'active' : ''}`}>
                  <span className="winner-selection-label">Team B</span>
                  <strong className="winner-selection-name">{captainBName}</strong>
                </article>
              </div>

              <div className="input-group" style={{ marginTop: 0 }}>
                <div>
                  <label className="input-label" style={{ fontWeight: 700 }}>Match result</label>
                  <select
                    value={selectedWinner}
                    onChange={(event) => setSelectedWinner(event.target.value)}
                  >
                    <option value={RESULT_NO_MATCH}>No Match</option>
                    <option value={RESULT_TEAM_A}>Team A ({captainAName})</option>
                    <option value={RESULT_TEAM_B}>Team B ({captainBName})</option>
                  </select>
                </div>

                <div className="button-row">
                  <button className="button-primary button-small" type="button" onClick={handleSaveMatch} disabled={!isWinnerSelectionReady}>
                    {todayMatch ? 'Update Result' : 'Save Result'}
                  </button>
                  {!todayMatch ? (
                    <button className="button-secondary button-small" type="button" onClick={handleSaveNoMatch} disabled={!canMarkNoMatch}>
                      Match Not Conducted
                    </button>
                  ) : null}
                </div>
              </div>
            </div>

            {matchMessage ? (
              <p className="success-text" style={{ marginTop: '16px' }}>
                {matchMessage}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="card">
          <h2 className="card-title">4. Match Result</h2>
          {!todayMatch ? (
            <p className="empty-state">No match result is recorded for today yet.</p>
          ) : (
            <div>
              {todayMatch.status === 'no-match' ? (
                <>
                  <p className="success-text">Today is marked as a no-match day.</p>
                  <p>Status: <strong>No match</strong></p>
                </>
              ) : (
                <>
                  <p className="success-text">A match is already recorded today.</p>
                  <p>Winner: <strong>{todayMatch.winnerTeam === 'teamA' ? 'Team A' : 'Team B'}</strong></p>
                  <p>
                    Captain A:{' '}
                    <strong className={todayMatch.winnerTeam === 'teamA' ? 'captain-win-color' : 'captain-loss-color'}>
                      {getPlayerName(players, todayMatch.captainA)}
                    </strong>
                  </p>
                  <p>
                    Captain B:{' '}
                    <strong className={todayMatch.winnerTeam === 'teamB' ? 'captain-win-color' : 'captain-loss-color'}>
                      {getPlayerName(players, todayMatch.captainB)}
                    </strong>
                  </p>
                  <p>Penalty paid by: <strong>{getPlayerName(players, todayMatch.loserCaptain)}</strong></p>
                </>
              )}
            </div>
          )}
        </div>

        {!isAdmin ? (
          <div className="card match-payment-card">
            <h2 className="card-title">Contribution Payment QR</h2>
            <p className="page-intro" style={{ marginBottom: '12px' }}>
              Pay contribution to {PAYMENT_RECEIVER_LABEL}
            </p>
            <div style={{ display: 'grid', gap: '10px', width: 'fit-content' }}>
              <img className="fund-qr-image" src={ubedUpiQr} alt={`UPI QR for ${PAYMENT_RECEIVER_LABEL}`} />
              <p className="fund-upi-id">UPI ID: {PAYMENT_UPI_ID}</p>
            </div>
          </div>
        ) : null}
      </div>

    </section>
  );
}

export default MatchCenterPage;
