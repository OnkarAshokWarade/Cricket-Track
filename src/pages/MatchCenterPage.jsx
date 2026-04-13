import { useMemo, useState } from 'react';
import {
  formatDate,
  getWeekId,
  isDateAllowedForCaptain,
  isSameDay,
  todayKey,
  tomorrowKey,
} from '../utils/dateUtils';
import { captainSelector, getPlayerName, teamGenerator } from '../utils/teamUtils';
import {
  getTeamGenerationStatus,
  MAX_TEAM_GENERATIONS,
  TEAM_GENERATE_PASSWORD,
} from '../utils/teamGenerationUtils';
import MatchDetails from '../components/MatchDetails';
import ubedUpiQr from '../assets/ubed-upi-qr.jpeg';
import { useAppData } from '../context/AppDataContext';

const PENALTY_AMOUNT = 100;
const PAYMENT_RECEIVER_EN = 'Ubed Shaikh';
const PAYMENT_RECEIVER_MR = '\u0909\u092c\u0947\u0926 \u0936\u0947\u0916';
const PAYMENT_RECEIVER_LABEL = `${PAYMENT_RECEIVER_EN} (${PAYMENT_RECEIVER_MR})`;
const PAYMENT_UPI_ID = 'ubbus313-3@okaxis';

function MatchCenterPage({ accessMode }) {
  const { players, teams, captains, matches, addMatch, updateAppState } = useAppData();
  const [selectedWinner, setSelectedWinner] = useState('A');
  const [teamMessage, setTeamMessage] = useState('');
  const [teamMessageType, setTeamMessageType] = useState('success');
  const [showTeamPasswordModal, setShowTeamPasswordModal] = useState(false);
  const [teamPassword, setTeamPassword] = useState('');
  const [isSubmittingTeamGeneration, setIsSubmittingTeamGeneration] = useState(false);
  const [captainMessage, setCaptainMessage] = useState('');
  const [matchMessage, setMatchMessage] = useState('');

  const weekId = getWeekId();
  const currentTeams = teams[weekId] || null;
  const currentWeekCaptains = captains[weekId] || { usedCaptains: { teamA: [], teamB: [] }, dailyCaptains: [] };
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

  const {
    currentGenerationCount,
    hasReachedGenerationLimit,
    canGenerateTeams,
    lockedMessage: teamGenerationLockedMessage,
  } = useMemo(() => getTeamGenerationStatus(currentTeams), [currentTeams]);

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
      [todayKey(), tomorrowKey()].map((dateKey) => ({
        date: dateKey,
        formatted: formatDate(dateKey),
        isToday: dateKey === todayKey(),
        isTomorrow: dateKey === tomorrowKey(),
        captains: currentWeekCaptains.dailyCaptains?.find((entry) => entry.date === dateKey) || null,
      })),
    [currentWeekCaptains.dailyCaptains]
  );

  const canRecordMatch = useMemo(() => !!currentTeams && !!todayCaptains && !todayMatch, [currentTeams, todayCaptains, todayMatch]);
  const canMarkNoMatch = useMemo(() => !!currentTeams && !todayMatch, [currentTeams, todayMatch]);

  const openTeamPasswordModal = () => {
    if (!isAdmin) {
      setTeamMessageType('warning');
      setTeamMessage('Only admin can generate weekly teams.');
      setShowTeamPasswordModal(false);
      return;
    }

    if (hasReachedGenerationLimit) {
      setTeamMessageType('warning');
      setTeamMessage('Today\'s 2 team-generation chances are over. You can generate teams again tomorrow.');
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
      setTeamMessage('Today\'s 2 team-generation chances are over. You can generate teams again tomorrow.');
      setIsSubmittingTeamGeneration(false);
      return;
    }

    try {
      const newTeams = teamGenerator(players);
      const nextGenerationCount = currentGenerationCount + 1;
      const nextTeams = {
        ...teams,
        [weekId]: { weekId, date: todayKey(), generationCount: nextGenerationCount, ...newTeams },
      };

      await updateAppState({ teams: nextTeams });
      setTeamMessageType('success');
      setTeamMessage(
        nextGenerationCount >= MAX_TEAM_GENERATIONS
          ? 'Weekly teams generated successfully. Generated today: 2/2. You can generate teams again tomorrow.'
          : `Weekly teams generated successfully. Generated today: ${nextGenerationCount}/2.`
      );
    } catch (error) {
      console.error('Error generating weekly teams:', error);
      setTeamMessageType('warning');
      setTeamMessage('Teams could not be generated. Please verify Firebase configuration and try again.');
    } finally {
      setIsSubmittingTeamGeneration(false);
    }
  };

  const selectCaptainsForDay = async (targetDate) => {
    if (!currentTeams) {
      setCaptainMessage('Please generate weekly teams before selecting captains.');
      return;
    }

    if (!isDateAllowedForCaptain(targetDate)) {
      setCaptainMessage('Captain can only be selected for today or tomorrow.');
      return;
    }

    const existingCaptains = currentWeekCaptains.dailyCaptains?.find((item) => item.date === targetDate);
    if (existingCaptains) {
      setCaptainMessage('Captains have already been selected for this day.');
      return;
    }

    const selection = captainSelector(currentTeams, currentWeekCaptains.usedCaptains);
    if (!selection) {
      setCaptainMessage('No available captain candidates remain for one or both teams this week.');
      return;
    }

    const nextWeekCaptains = {
      ...currentWeekCaptains,
      usedCaptains: {
        teamA: [...(currentWeekCaptains.usedCaptains.teamA || []), selection.teamA],
        teamB: [...(currentWeekCaptains.usedCaptains.teamB || []), selection.teamB],
      },
      dailyCaptains: [
        ...(currentWeekCaptains.dailyCaptains || []),
        { date: targetDate, teamA: selection.teamA, teamB: selection.teamB },
      ],
    };

    await updateAppState({
      captains: {
        ...captains,
        [weekId]: nextWeekCaptains,
      },
    });

    setCaptainMessage(`Captains selected successfully for ${formatDate(targetDate)}.`);
  };

  const handleSaveMatch = async () => {
    if (!canRecordMatch) {
      setMatchMessage("A match cannot be recorded right now. Please check teams and today's captains.");
      return;
    }

    const winnerTeam = selectedWinner === 'A' ? 'teamA' : 'teamB';
    const loserCaptain = selectedWinner === 'A' ? todayCaptains.teamB : todayCaptains.teamA;

    try {
      await addMatch({
        date: todayKey(),
        weekId,
        teamA: currentTeams.teamA,
        teamB: currentTeams.teamB,
        score: selectedWinner === 'A' ? 'Team A won' : 'Team B won',
        captainA: todayCaptains.teamA,
        captainB: todayCaptains.teamB,
        winnerTeam,
        loserCaptain,
        penalty: PENALTY_AMOUNT,
        penaltyPaid: false,
      });

      setMatchMessage(`Match recorded. \u20B9${PENALTY_AMOUNT} penalty assigned to ${getPlayerName(players, loserCaptain)}.`);
    } catch (error) {
      console.error('Error recording match:', error);
      setMatchMessage('Match could not be recorded. Please verify Firebase configuration and try again.');
    }
  };

  const handleSaveNoMatch = async () => {
    if (!canMarkNoMatch) {
      setMatchMessage("A no-match entry cannot be recorded right now. Please check today's data.");
      return;
    }

    try {
      await addMatch({
        date: todayKey(),
        weekId,
        status: 'no-match',
        teamA: currentTeams.teamA,
        teamB: currentTeams.teamB,
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

  return (
    <section>
      <div className="top-nav">
        <div>
          <h1 className="page-title">Match Center</h1>
          <p className="page-intro">Run the full weekly workflow here: generate teams, select captains, and record today&apos;s result.</p>
        </div>
      </div>

      <div className="section-grid" style={{ gridTemplateColumns: '1fr', gap: '18px' }}>
        <div className="card">
          <h2 className="card-title">1. Weekly Teams</h2>
          <p className="pill">Current week: {weekId}</p>
          <p className="pill" style={{ marginTop: '10px' }}>Members available: {players.length}</p>
          <p className="pill" style={{ marginTop: '10px' }}>
            Generated today: {currentGenerationCount}/{MAX_TEAM_GENERATIONS}
          </p>

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

          {isAdmin && teamGenerationLockedMessage ? (
            <p className="warning-text" style={{ marginTop: '12px' }}>
              {teamGenerationLockedMessage}
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
                Confirm password to use 1 of today&apos;s 2 team-generation chances.
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
                          {playerAId ? <span className="team-player-name">{getPlayerName(players, playerAId)}</span> : <span className="empty-state">--</span>}
                        </td>
                        <td className="team-players-cell team-col-b">
                          {playerBId ? <span className="team-player-name">{getPlayerName(players, playerBId)}</span> : <span className="empty-state">--</span>}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">2. Captains</h2>
          {!currentTeams ? (
            <p className="empty-state">Generate weekly teams first to unlock captain selection.</p>
          ) : (
            <>
              <div className="button-row" style={{ marginBottom: '14px' }}>
                <span className="status-pill">Team A available: {availableCounts.teamA}</span>
                <span className="status-pill">Team B available: {availableCounts.teamB}</span>
              </div>

              {captainMessage ? <p className="success-text" style={{ marginTop: '14px' }}>{captainMessage}</p> : null}

              <div className="section-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                {actionableCaptainDays.map((day) => {
                  const isSelectable = !day.captains && isDateAllowedForCaptain(day.date);

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

                      {day.captains ? (
                        <div>
                          <p>
                            Team A: <strong>{getPlayerName(players, day.captains.teamA)}</strong>
                          </p>
                          <p>
                            Team B: <strong>{getPlayerName(players, day.captains.teamB)}</strong>
                          </p>
                        </div>
                      ) : (
                        <button
                          className="button-primary button-small"
                          type="button"
                          onClick={() => selectCaptainsForDay(day.date)}
                          disabled={!isSelectable}
                        >
                          Select Captains
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: '20px' }}>
                <h3 className="card-title">Current Week Captain History</h3>
                {currentWeekCaptains.dailyCaptains?.length > 0 ? (
                  <div className="captain-history-list">
                    {currentWeekCaptains.dailyCaptains
                      .slice()
                      .sort((a, b) => (a.date < b.date ? -1 : 1))
                      .map((entry) => (
                        <article className="captain-history-card" key={entry.date}>
                          <div className="captain-history-card-top">
                            <strong className="captain-history-card-date">{formatDate(entry.date)}</strong>
                          </div>
                          <div className="captain-history-card-grid">
                            <div className="captain-history-field">
                              <span>Team A Captain</span>
                              <strong>{getPlayerName(players, entry.teamA)}</strong>
                            </div>
                            <div className="captain-history-field">
                              <span>Team B Captain</span>
                              <strong>{getPlayerName(players, entry.teamB)}</strong>
                            </div>
                          </div>
                        </article>
                      ))}
                  </div>
                ) : (
                  <p className="empty-state">No captain selections recorded yet this week.</p>
                )}
              </div>
            </>
          )}
        </div>
        <MatchDetails todayMatch={todayMatch} players={players} />

        <div className="card">
          <h2 className="card-title">3. Today&apos;s Match</h2>
          {!currentTeams ? <p className="empty-state">Generate this week&apos;s teams first.</p> : null}
          {!todayCaptains && currentTeams ? <p className="empty-state">Select captains for today before recording a match.</p> : null}

          {todayMatch ? (
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
          ) : (
            currentTeams ? (
              <div className="input-group">
                <div>
                  <p className="card-title">Teams and captains</p>
                  <div className="overflow-x-auto">
                    <table className="table team-table split-team-table">
                      <thead>
                        <tr>
                          <th>Team A - Captain: <strong>{captainAName}</strong></th>
                          <th>Team B - Captain: <strong>{captainBName}</strong></th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: maxTeamSize }, (_, index) => {
                          const playerAId = currentTeams.teamA[index];
                          const playerBId = currentTeams.teamB[index];

                          return (
                            <tr key={`match-center-row-${index}`}>
                              <td className="team-players-cell team-col-a">
                                {playerAId ? <span className="team-player-name">{getPlayerName(players, playerAId)}</span> : <span className="empty-state">--</span>}
                              </td>
                              <td className="team-players-cell team-col-b">
                                {playerBId ? <span className="team-player-name">{getPlayerName(players, playerBId)}</span> : <span className="empty-state">--</span>}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <label className="input-label" style={{ fontWeight: 700 }}>Winning team</label>
                  <select value={selectedWinner} onChange={(event) => setSelectedWinner(event.target.value)} disabled={!todayCaptains}>
                    <option value="A">Team A ({captainAName})</option>
                    <option value="B">Team B ({captainBName})</option>
                  </select>
                </div>

                <div className="button-row">
                  <button className="button-primary button-small" type="button" onClick={handleSaveMatch} disabled={!canRecordMatch}>
                    Record Match
                  </button>
                  <button className="button-secondary button-small" type="button" onClick={handleSaveNoMatch} disabled={!canMarkNoMatch}>
                    No Match Today
                  </button>
                </div>
              </div>
            ) : null
          )}

          {matchMessage ? (
            <p className="success-text" style={{ marginTop: '16px' }}>
              {matchMessage}
            </p>
          ) : null}
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
