import { useMemo, useState } from 'react';
import { getWeekId, todayKey, isSameDay } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
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
  const todayMatch = matches.find((match) => isSameDay(match.date, todayKey()));
  const visibleCaptains = todayCaptains || captains[currentWeekId]?.dailyCaptains?.slice(-1)?.[0] || null;
  const visibleCaptainAName = visibleCaptains?.teamA ? getPlayerName(players, visibleCaptains.teamA) : '--';
  const visibleCaptainBName = visibleCaptains?.teamB ? getPlayerName(players, visibleCaptains.teamB) : '--';

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
      <div className="top-nav">
        <div>
          <h1 className="page-title">Dashboard</h1>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Dashboard Information</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>घटक</th>
                <th>मूल्य</th>
              </tr>
            </thead>
            <tbody style={{ fontWeight: 700 }}>
              <tr>
                <td>खेळाडू</td>
                <td>{players.length} सदस्य लोड झाले</td>
              </tr>
              <tr>
                <td>चालू आठवडा</td>
                <td>{currentWeekId}</td>
              </tr>
              <tr>
                <td>साप्ताहिक टीम स्थिती</td>
                <td>{currentWeekTeam ? `${teamCount} खेळाडू 2 टीममध्ये विभागले` : 'टीम अजून तयार झालेल्या नाहीत'}</td>
              </tr>
              <tr>
                <td>आज</td>
                <td>
                  {todayMatch
                    ? todayMatch.status === 'no-match'
                      ? 'आज नो मॅच म्हणून नोंद केले'
                      : 'आजची मॅच नोंद झाली आहे'
                    : 'आजची मॅच अजून नोंदलेली नाही'}
                </td>
              </tr>
              <tr>
                <td>जमा रक्कम</td>
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
          <h2 className="card-title">चालू आठवड्याची स्थिती</h2>
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
                      <span className="empty-state">अजून तयार नाही</span>
                    </td>
                    <td className="team-players-cell team-col-b">
                      <span className="empty-state">अजून तयार नाही</span>
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
