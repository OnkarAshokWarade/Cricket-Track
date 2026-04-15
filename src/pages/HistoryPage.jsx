import { useMemo } from 'react';
import { getWeekId, formatDate } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
import MatchCard from '../components/MatchCard';
import MatchFee from '../components/MatchFee';
import PaymentQrCard from '../components/PaymentQrCard';
import { useAppData } from '../context/AppDataContext';

const getCaptainResultClass = (match, captainId) => {
  if (!captainId) {
    return '';
  }

  if (match.status === 'no-match' || !match.winnerTeam || !match.loserCaptain) {
    return 'captain-neutral-color';
  }

  return captainId === match.loserCaptain ? 'captain-loss-color' : 'captain-win-color';
};

function HistoryPage({ accessMode }) {
  const { players, matches } = useAppData();
  const isAdmin = accessMode === 'admin';
  const isGuest = accessMode === 'guest';
  const showSidebar = true;

  const sortedMatches = useMemo(
    () => matches.slice().sort((a, b) => (a.date < b.date ? 1 : -1)),
    [matches]
  );

  const captainHistory = useMemo(() => {
    const history = {};
    sortedMatches.forEach((match) => {
      if (!history[match.weekId]) {
        history[match.weekId] = [];
      }
      history[match.weekId].push(match);
    });
    return history;
  }, [sortedMatches]);

  const currentWeekId = getWeekId();

  return (
    <div className={`history-layout ${showSidebar ? '' : 'history-layout-single'}`.trim()}>
      <div className="history-main">
        <section>
          <div className="top-nav">
            <div>
              <h1 className="page-title">Match History</h1>
              <p className="page-intro">Browse all recorded matches with captain results, penalties, and payment status.</p>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">Match History</h2>
            {sortedMatches.length > 0 ? (
              <div className="matches-grid">
                {sortedMatches.map((match) => (
                  <MatchCard
                    key={match.id}
                    match={match}
                    players={players}
                    canEdit={isAdmin}
                  />
                ))}
              </div>
            ) : (
              <p className="empty-state">No matches recorded yet.</p>
            )}
          </div>

          <div className="card" style={{ marginTop: '20px' }}>
            <h2 className="card-title">Captain History by Week</h2>
            <p className="captain-color-legend">
              <span className="captain-loss-color">लाल</span> = हरलेला कर्णधार, <span className="captain-win-color">हिरवा</span> = जिंकलेला कर्णधार, <span className="captain-neutral-color">निळा</span> = कर्णधार निवडलेला आहे पण निकाल नोंदलेला नाही
            </p>
            {Object.keys(captainHistory).length > 0 ? (
              Object.entries(captainHistory).map(([weekId, weekMatches]) => (
                <div key={weekId} style={{ marginBottom: '18px' }}>
                  <p className="pill">{weekId}</p>
                  <table className="weekly-date-table captain-history-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Team A Captain</th>
                        <th>Team B Captain</th>
                        <th>Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weekMatches.map((match) => (
                        <tr key={match.id}>
                          <td data-label="Date" style={{ fontWeight: 800 }}>{formatDate(match.date)}</td>
                          <td data-label="Team A Captain">
                            <span
                              className={getCaptainResultClass(match, match.captainA)}
                              style={{ fontWeight: 700 }}
                            >
                              {match.captainA ? getPlayerName(players, match.captainA) : match.status === 'no-match' ? 'No match' : '--'}
                            </span>
                          </td>
                          <td data-label="Team B Captain">
                            <span
                              className={getCaptainResultClass(match, match.captainB)}
                              style={{ fontWeight: 700 }}
                            >
                              {match.captainB ? getPlayerName(players, match.captainB) : match.status === 'no-match' ? 'No match' : '--'}
                            </span>
                          </td>
                          <td data-label="Winner" style={{ fontWeight: 800 }}>
                            {match.status === 'no-match' ? 'No Match' : match.winnerTeam === 'teamA' ? 'Team A' : 'Team B'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))
            ) : (
              <p className="empty-state">No recorded captain history yet.</p>
            )}
          </div>

        </section>
      </div>

      {showSidebar ? (
        <aside className="history-sidebar">
          <MatchFee
            matches={matches}
            players={players}
            currentWeekId={currentWeekId}
            showUnpaidNotice={false}
          />
          {isGuest ? (
            <div style={{ marginTop: '18px' }}>
              <PaymentQrCard title="Guest Contribution QR" />
            </div>
          ) : null}
        </aside>
      ) : null}
    </div>
  );
}

export default HistoryPage;
