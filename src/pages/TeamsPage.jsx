import { useMemo, useState } from 'react';
import { getWeekId, todayKey } from '../utils/dateUtils';
import { teamGenerator, getPlayerName } from '../utils/teamUtils';
import { useAppData } from '../context/AppDataContext';

const MAX_TEAM_GENERATIONS = 2;
const TEAM_GENERATE_PASSWORD = '9322070390';

function TeamsPage() {
  const { players, teams, updateAppState, resetAppState } = useAppData();
  const [weekId] = useState(getWeekId());
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');

  const currentTeams = useMemo(() => teams[weekId] || null, [teams, weekId]);
  const currentGenerationCount = useMemo(() => {
    if (!currentTeams) return 0;
    return currentTeams.generationCount ?? 1;
  }, [currentTeams]);
  const maxTeamSize = useMemo(() => {
    if (!currentTeams) return 0;
    return Math.max(currentTeams.teamA.length, currentTeams.teamB.length);
  }, [currentTeams]);
  const hasReachedGenerationLimit = currentGenerationCount >= MAX_TEAM_GENERATIONS;
  const pastWeeks = useMemo(
    () => Object.values(teams).sort((a, b) => (a.weekId < b.weekId ? 1 : -1)),
    [teams]
  );

  const generateTeams = () => {
    if (hasReachedGenerationLimit) {
      setMessageType('warning');
      setMessage('Generation limit reached. Teams can be generated only 2 times this week.');
      return;
    }

    const enteredPassword = window.prompt('Enter admin password to generate teams:');
    if (enteredPassword === null) {
      setMessageType('warning');
      setMessage('Team generation cancelled.');
      return;
    }

    if (enteredPassword.trim() !== TEAM_GENERATE_PASSWORD) {
      setMessageType('warning');
      setMessage('Incorrect admin password. Team generation not allowed.');
      return;
    }

    const newTeams = teamGenerator(players);
    const nextGenerationCount = currentGenerationCount + 1;
    const nextTeams = {
      ...teams,
      [weekId]: { weekId, date: todayKey(), generationCount: nextGenerationCount, ...newTeams },
    };
    updateAppState({ teams: nextTeams });
    setMessageType('success');
    setMessage(
      nextGenerationCount >= MAX_TEAM_GENERATIONS
        ? 'Weekly teams generated (2/2). Generate button is now disabled for this week.'
        : `Weekly teams generated successfully (${nextGenerationCount}/2).`
    );
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
          <p className="page-intro">Team generation requires admin password and is limited to 2 times per week.</p>
        </div>
      </div>

      <div className="section-grid" style={{ gridTemplateColumns: '1fr', gap: '18px' }}>
        <div className="card">
          <h2 className="card-title">Current week: {weekId}</h2>
          <p className="pill">Members available: {players.length}</p>
          <p className="pill" style={{ marginTop: '10px' }}>
            Generated this week: {currentGenerationCount}/{MAX_TEAM_GENERATIONS}
          </p>
          <div className="button-row" style={{ marginTop: '14px' }}>
            <button
              className="button-primary button-small"
              onClick={generateTeams}
              disabled={hasReachedGenerationLimit}
            >
              Generate Weekly Teams
            </button>
          </div>
          {hasReachedGenerationLimit && (
            <p className="warning-text" style={{ marginTop: '12px' }}>
              Team generation limit reached for this week.
            </p>
          )}
          {message && (
            <p className={messageType === 'success' ? 'success-text' : 'warning-text'} style={{ marginTop: '14px' }}>
              {message}
            </p>
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
