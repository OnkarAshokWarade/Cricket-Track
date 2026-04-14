import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate, getWeekId, todayKey, isSameDay } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
import PendingFeeNotice from '../components/PendingFeeNotice';
import PaymentQrCard from '../components/PaymentQrCard';
import { useAppData } from '../context/AppDataContext';
import useAutoClearMessage from '../hooks/useAutoClearMessage';

function Dashboard({ accessMode }) {
  const { players, teams, captains, matches, resetAppState } = useAppData();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [isResetting, setIsResetting] = useState(false);
  const isGuest = accessMode === 'guest';
  const isAdmin = accessMode === 'admin';

  useAutoClearMessage(message, setMessage);

  const currentWeekId = getWeekId();
  const currentWeekTeam = teams[currentWeekId] || null;
  const todayCaptains = captains[currentWeekId]?.dailyCaptains?.find((entry) => entry.date === todayKey()) || null;
  const currentCaptains = captains[currentWeekId]?.dailyCaptains?.slice(-1)?.[0] || null;
  const todayMatch = matches.find((match) => isSameDay(match.date, todayKey()));
  const currentCaptainsMatch = currentCaptains ? matches.find((match) => isSameDay(match.date, currentCaptains.date)) || null : null;
  const visibleCaptains = todayCaptains || currentCaptains;
  const visibleCaptainAName = visibleCaptains?.teamA ? getPlayerName(players, visibleCaptains.teamA) : '--';
  const visibleCaptainBName = visibleCaptains?.teamB ? getPlayerName(players, visibleCaptains.teamB) : '--';
  const latestWinnerLabel =
    currentCaptainsMatch && currentCaptainsMatch.status !== 'no-match'
      ? currentCaptainsMatch.winnerTeam === 'teamA'
        ? 'Team A'
        : 'Team B'
      : null;
  const captainAResultClass =
    currentCaptainsMatch && currentCaptainsMatch.status !== 'no-match'
      ? currentCaptainsMatch.winnerTeam === 'teamA'
        ? 'captain-win-color'
        : 'captain-loss-color'
      : '';
  const captainBResultClass =
    currentCaptainsMatch && currentCaptainsMatch.status !== 'no-match'
      ? currentCaptainsMatch.winnerTeam === 'teamB'
        ? 'captain-win-color'
        : 'captain-loss-color'
      : '';

  const totalPenalty = useMemo(
    () => matches.reduce((sum, match) => sum + (match.penalty || 0), 0),
    [matches]
  );

  const teamCount = currentWeekTeam ? currentWeekTeam.teamA.length + currentWeekTeam.teamB.length : 0;
  const maxTeamSize = useMemo(() => {
    if (!currentWeekTeam) return 0;
    return Math.max(currentWeekTeam.teamA.length, currentWeekTeam.teamB.length);
  }, [currentWeekTeam]);
  const formatTeamPlayerLabel = (playerId, index) => (playerId ? `${index + 1}. ${getPlayerName(players, playerId)}` : '--');

  const handleResetApp = async () => {
    if (!isAdmin || isResetting) {
      return;
    }

    const confirmed = window.confirm('This will reset ALL application data including players, teams, captains, and matches. Are you sure?');
    if (!confirmed) return;

    setIsResetting(true);
    try {
      await resetAppState();
      setMessageType('success');
      setMessage('Application data has been reset successfully!');
    } catch (error) {
      console.error('Error resetting app data:', error);
      setMessageType('warning');
      setMessage('Application data could not be reset. Please verify Firebase configuration and try again.');
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <section>
      <PendingFeeNotice matches={matches} players={players} />

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
                <td>
                  {todayMatch
                    ? todayMatch.status === 'no-match'
                      ? 'Today marked as no match'
                      : 'Match recorded today'
                    : 'No match recorded yet'}
                </td>
              </tr>
              <tr>
                <td>Money collected</td>
                <td>Rs. {totalPenalty}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {isGuest ? (
        <div style={{ marginTop: '20px' }}>
          <PaymentQrCard title="Contribution Payment QR" />
        </div>
      ) : null}

      <div className="section-grid" style={{ gridTemplateColumns: '1fr', marginTop: '20px' }}>
        <div className="card">
          <h2 className="card-title">Current week status</h2>
          <div className="overflow-x-auto">
            <table className="table team-table split-team-table">
              <thead>
                <tr>
                  <th>
                    Team A ({currentWeekTeam ? currentWeekTeam.teamA.length : 0}) - Captain: <strong>{visibleCaptainAName}</strong>
                  </th>
                  <th>
                    Team B ({currentWeekTeam ? currentWeekTeam.teamB.length : 0}) - Captain: <strong>{visibleCaptainBName}</strong>
                  </th>
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
                            <span className="team-player-name">{formatTeamPlayerLabel(playerAId, index)}</span>
                          ) : (
                            <span className="empty-state">--</span>
                          )}
                        </td>
                        <td className="team-players-cell team-col-b">
                          {playerBId ? (
                            <span className="team-player-name">{formatTeamPlayerLabel(playerBId, index)}</span>
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
              <p className="card-title" style={{ fontWeight: 800 }}>Last selected captains</p>
              <p className="pill" style={{ marginBottom: '12px', fontWeight: 800 }}>
                Date: {formatDate(currentCaptains.date)}
              </p>
              {latestWinnerLabel ? (
                <p className="pill" style={{ marginBottom: '12px', fontWeight: 800 }}>
                  Winner: {latestWinnerLabel}
                </p>
              ) : null}
              <div className="overflow-x-auto">
                <table className="table team-table split-team-table">
                  <thead>
                    <tr>
                      <th>Captain A</th>
                      <th>Captain B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="team-players-cell team-col-a">
                        <span className={`team-player-name ${captainAResultClass}`}>{getPlayerName(players, currentCaptains.teamA)}</span>
                      </td>
                      <td className="team-players-cell team-col-b">
                        <span className={`team-player-name ${captainBResultClass}`}>{getPlayerName(players, currentCaptains.teamB)}</span>
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
          <Link to="/match-center" className="button-secondary button-small">
            Open Match Center
          </Link>
        </div>
      </div>

      {isAdmin ? (
        <div className="card" style={{ marginTop: '24px' }}>
          <h2 className="card-title">Application Settings</h2>
          <div className="button-row">
            <button
              className="button-secondary button-small"
              onClick={handleResetApp}
              disabled={isResetting}
            >
              {isResetting ? 'Resetting...' : 'Reset Application Data'}
            </button>
          </div>
          {message && (
            <p className={messageType === 'success' ? 'success-text' : 'warning-text'} style={{ marginTop: '14px' }}>
              {message}
            </p>
          )}
        </div>
      ) : null}
    </section>
  );
}

export default Dashboard;
