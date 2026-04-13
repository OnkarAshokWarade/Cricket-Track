import { useMemo, useState } from 'react';
import { getWeekId, todayKey } from '../utils/dateUtils';
import { teamGenerator, getPlayerName } from '../utils/teamUtils';
import { useAppData } from '../context/AppDataContext';
import {
  getTeamGenerationStatus,
  MAX_TEAM_GENERATIONS,
  TEAM_GENERATE_PASSWORD,
} from '../utils/teamGenerationUtils';
import useAutoClearMessage from '../hooks/useAutoClearMessage';

function TeamsPage() {
  const { players, teams, updateAppState, resetAppState } = useAppData();
  const [weekId] = useState(getWeekId());
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [showPasswordPanel, setShowPasswordPanel] = useState(false);
  const [teamPassword, setTeamPassword] = useState('');
  const [isSubmittingTeamGeneration, setIsSubmittingTeamGeneration] = useState(false);

  useAutoClearMessage(message, setMessage);

  const currentTeams = useMemo(() => teams[weekId] || null, [teams, weekId]);
  const maxTeamSize = useMemo(() => {
    if (!currentTeams) return 0;
    return Math.max(currentTeams.teamA.length, currentTeams.teamB.length);
  }, [currentTeams]);
  const {
    currentGenerationCount,
    hasReachedGenerationLimit,
    canGenerateTeams,
    lockedMessage,
  } = useMemo(() => getTeamGenerationStatus(currentTeams), [currentTeams]);
  const pastWeeks = useMemo(
    () => Object.values(teams).sort((a, b) => (a.weekId < b.weekId ? 1 : -1)),
    [teams]
  );

  const openPasswordPanel = () => {
    if (!canGenerateTeams) {
      setMessageType('warning');
      setMessage(lockedMessage || 'Today\'s 2 team-generation chances are over. You can generate teams again tomorrow.');
      setShowPasswordPanel(false);
      return;
    }

    setTeamPassword('');
    setShowPasswordPanel(true);
  };

  const closePasswordPanel = () => {
    setShowPasswordPanel(false);
    setTeamPassword('');
  };

  const generateTeams = async (event) => {
    event.preventDefault();

    if (isSubmittingTeamGeneration) {
      return;
    }

    const enteredPassword = teamPassword.trim();
    closePasswordPanel();

    if (enteredPassword !== TEAM_GENERATE_PASSWORD) {
      setMessageType('warning');
      setMessage('Incorrect admin password. Click "Generate Weekly Teams" to try again.');
      return;
    }

    if (hasReachedGenerationLimit) {
      setMessageType('warning');
      setMessage('Today\'s 2 team-generation chances are over. You can generate teams again tomorrow.');
      return;
    }

    if (!canGenerateTeams) {
      setMessageType('warning');
      setMessage(lockedMessage || 'Today\'s 2 team-generation chances are over. You can generate teams again tomorrow.');
      return;
    }

    setIsSubmittingTeamGeneration(true);

    try {
      const newTeams = teamGenerator(players);
      const nextGenerationCount = currentGenerationCount + 1;
      const nextTeams = {
        ...teams,
        [weekId]: { weekId, date: todayKey(), generationCount: nextGenerationCount, ...newTeams },
      };

      await updateAppState({ teams: nextTeams });
      setMessageType('success');
      setMessage(
        nextGenerationCount >= MAX_TEAM_GENERATIONS
          ? 'Weekly teams generated successfully. Generated today: 2/2. You can generate teams again tomorrow.'
          : `Weekly teams generated successfully. Generated today: ${nextGenerationCount}/2.`
      );
    } catch (error) {
      console.error('Error generating weekly teams:', error);
      setMessageType('warning');
      setMessage('Teams could not be generated. Please verify Firebase configuration and try again.');
    } finally {
      setIsSubmittingTeamGeneration(false);
    }
  };

  const handleReset = () => {
    const confirmed = window.confirm('Reset all Patoda XI app data and restore the default roster?');
    if (!confirmed) return;
    resetAppState();
    setMessageType('success');
    setMessage('App data has been reset. Default player roster restored.');
  };

  return (
    <section>
      <div className="top-nav">
        <div>
          <h1 className="page-title">Teams</h1>
          <p className="page-intro">Team generation requires admin password and is limited to 2 times per day.</p>
        </div>
      </div>

      <div className="section-grid" style={{ gridTemplateColumns: '1fr', gap: '18px' }}>
        <div className="card">
          <h2 className="card-title">Current week: {weekId}</h2>
          <p className="pill">Members available: {players.length}</p>
          <p className="pill" style={{ marginTop: '10px' }}>
            Generated today: {currentGenerationCount}/{MAX_TEAM_GENERATIONS}
          </p>
          <div className="button-row" style={{ marginTop: '14px' }}>
            <button
              className="button-primary button-small"
              type="button"
              onClick={openPasswordPanel}
              disabled={!canGenerateTeams || showPasswordPanel || isSubmittingTeamGeneration}
            >
              Generate Weekly Teams
            </button>
          </div>
          {lockedMessage && (
            <p className="warning-text" style={{ marginTop: '12px' }}>
              {lockedMessage}
            </p>
          )}
          {message && (
            <p className={messageType === 'success' ? 'success-text' : 'warning-text'} style={{ marginTop: '14px' }}>
              {message}
            </p>
          )}
          {showPasswordPanel && (
            <div className="team-password-panel">
              <h3 className="card-title">Enter Admin Password</h3>
              <p className="page-intro" style={{ marginBottom: '12px' }}>
                Confirm password to use 1 of today&apos;s 2 team-generation chances.
              </p>
              <form className="team-password-form" onSubmit={generateTeams}>
                <label className="input-label" htmlFor="teams-page-password">
                  Admin Password
                </label>
                <input
                  id="teams-page-password"
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
                    onClick={closePasswordPanel}
                    disabled={isSubmittingTeamGeneration}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="button-row" style={{ marginTop: '14px' }}>
            <button type="button" className="button-secondary button-small" onClick={handleReset}>
              Reset App Data
            </button>
          </div>

          <div className="overflow-x-auto" style={{ marginTop: '18px' }}>
            <table className="table team-table split-team-table">
              <thead>
                <tr>
                  <th>Team A ({currentTeams ? currentTeams.teamA.length : 0})</th>
                  <th>Team B ({currentTeams ? currentTeams.teamB.length : 0})</th>
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
                      <tr key={`team-row-${index}`}>
                        <td className="team-players-cell team-col-a">
                          {playerAId ? (
                            <span className="team-player-name">{getPlayerName(players, playerAId)}</span>
                          ) : (
                            <span className="empty-state">--</span>
                          )}
                        </td>
                        <td className="team-players-cell team-col-b">
                          {playerBId ? (
                            <span className="team-player-name">{getPlayerName(players, playerBId)}</span>
                          ) : (
                            <span className="empty-state">--</span>
                          )}
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
          <h2 className="card-title">Past weeks</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Week ID</th>
                <th>Players</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {pastWeeks.map((week) => (
                <tr key={week.weekId}>
                  <td>{week.weekId}</td>
                  <td>{week.teamA.length + week.teamB.length}</td>
                  <td>{week.date}</td>
                </tr>
              ))}
              {pastWeeks.length === 0 && (
                <tr>
                  <td colSpan="3" className="empty-state">
                    No weekly teams generated yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default TeamsPage;
