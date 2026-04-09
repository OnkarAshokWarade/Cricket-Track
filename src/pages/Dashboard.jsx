import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getWeekId, todayKey, isSameDay } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
import { useAppData } from '../context/AppDataContext';

function Dashboard() {
  const { players, teams, captains, matches, resetAppState } = useAppData();
  const [message, setMessage] = useState('');

  const currentWeekId = getWeekId();
  const currentWeekTeam = teams[currentWeekId] || null;
  const currentCaptains = captains[currentWeekId]?.dailyCaptains?.slice(-1)?.[0] || null;
  const todayMatch = matches.find((match) => isSameDay(match.date, todayKey()));

  const totalPenalty = useMemo(
    () => matches.reduce((sum, match) => sum + (match.penalty || 0), 0),
    [matches]
  );

  const teamCount = currentWeekTeam ? currentWeekTeam.teamA.length + currentWeekTeam.teamB.length : 0;
  const maxTeamSize = useMemo(() => {
    if (!currentWeekTeam) return 0;
    return Math.max(currentWeekTeam.teamA.length, currentWeekTeam.teamB.length);
  }, [currentWeekTeam]);

  const handleResetApp = async () => {
    const confirmed = window.confirm('This will reset ALL application data including players, teams, captains, and matches. Are you sure?');
    if (!confirmed) return;

    await resetAppState();
    setMessage('Application data has been reset successfully!');
  };

  return (
    <section>
      <div className="top-nav">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-intro">Quick review of Patoda XI weekly squads, captains, and money status.</p>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Dashboard information</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Players</td>
                <td>{players.length} members loaded</td>
              </tr>
              <tr>
                <td>Current week</td>
                <td>{currentWeekId}</td>
              </tr>
              <tr>
                <td>Weekly team status</td>
                <td>{currentWeekTeam ? `${teamCount} players split into 2 teams` : 'Teams not generated yet'}</td>
              </tr>
              <tr>
                <td>Today</td>
                <td>{todayMatch ? 'Match recorded today' : 'No match recorded yet'}</td>
              </tr>
              <tr>
                <td>Money collected</td>
                <td>Rs. {totalPenalty}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-grid" style={{ gridTemplateColumns: '1fr', marginTop: '20px' }}>
        <div className="card">
          <h2 className="card-title">Current week status</h2>
          <div className="overflow-x-auto">
            <table className="table team-table split-team-table">
              <thead>
                <tr>
                  <th>Team A ({currentWeekTeam ? currentWeekTeam.teamA.length : 0})</th>
                  <th>Team B ({currentWeekTeam ? currentWeekTeam.teamB.length : 0})</th>
                </tr>
              </thead>
              <tbody>
                {!currentWeekTeam ? (
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
                    const playerAId = currentWeekTeam.teamA[index];
                    const playerBId = currentWeekTeam.teamB[index];

                    return (
                      <tr key={`dashboard-team-row-${index}`}>
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
          {currentCaptains && (
            <div style={{ marginTop: '18px' }}>
              <p className="card-title">Last selected captains</p>
              <div className="overflow-x-auto">
                <table className="table team-table split-team-table">
                  <thead>
                    <tr>
                      <th>Team A</th>
                      <th>Team B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="team-players-cell team-col-a">
                        <span className="team-label">Captain: </span>
                        <span className="team-player-name">{getPlayerName(players, currentCaptains.teamA)}</span>
                      </td>
                      <td className="team-players-cell team-col-b">
                        <span className="team-label">Captain: </span>
                        <span className="team-player-name">{getPlayerName(players, currentCaptains.teamB)}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h2 className="card-title">Quick navigation</h2>
        <div className="button-row">
          <Link to="/players" className="button-secondary button-small">
            Manage players
          </Link>
          <Link to="/teams" className="button-secondary button-small">
            Generate teams
          </Link>
          <Link to="/captains" className="button-secondary button-small">
            Select captains
          </Link>
          <Link to="/match" className="button-secondary button-small">
            Record match
          </Link>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h2 className="card-title">Application Settings</h2>
        <div className="button-row">
          <button className="button-secondary button-small" onClick={handleResetApp}>
            Reset Application Data
          </button>
        </div>
        {message && <p className="success-text" style={{ marginTop: '14px' }}>{message}</p>}
      </div>
    </section>
  );
}

export default Dashboard;
