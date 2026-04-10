import { useMemo } from 'react';
import { getPlayerName } from '../utils/teamUtils';

function MatchFee({ matches, players, currentWeekId }) {
  const weeklyData = useMemo(() => {
    const weekMatches = matches.filter(match => match.weekId === currentWeekId);

    const playerPenalties = {};
    let totalPaid = 0;
    let totalUnpaid = 0;

    weekMatches.forEach(match => {
      const loserId = match.loserCaptain;
      const penaltyPaid = match.penaltyPaid !== undefined ? match.penaltyPaid : false;

      if (!playerPenalties[loserId]) {
        playerPenalties[loserId] = {
          playerId: loserId,
          totalPenalties: 0,
          paidCount: 0,
          unpaidCount: 0,
          matches: []
        };
      }

      playerPenalties[loserId].totalPenalties += match.penalty;
      playerPenalties[loserId].matches.push({
        id: match.id,
        date: match.date,
        penalty: match.penalty,
        paid: penaltyPaid
      });

      if (penaltyPaid) {
        playerPenalties[loserId].paidCount += 1;
        totalPaid += match.penalty;
      } else {
        playerPenalties[loserId].unpaidCount += 1;
        totalUnpaid += match.penalty;
      }
    });

    return {
      playerPenalties: Object.values(playerPenalties),
      totalPaid,
      totalUnpaid,
      totalCollected: totalPaid,
      totalOutstanding: totalUnpaid
    };
  }, [matches, currentWeekId]);

  const sortedPlayers = useMemo(() => {
    return weeklyData.playerPenalties.sort((a, b) => b.totalPenalties - a.totalPenalties);
  }, [weeklyData.playerPenalties]);

  return (
    <div className="match-fee-sidebar">
      <div className="sidebar-header">
        <h3>Match Fee Tracker</h3>
        <p className="week-indicator">{currentWeekId}</p>
      </div>

      <div className="fee-summary">
        <div className="summary-item collected">
          <span className="label">Collected</span>
          <span className="amount">₹{weeklyData.totalCollected}</span>
        </div>
        <div className="summary-item outstanding">
          <span className="label">Outstanding</span>
          <span className="amount">₹{weeklyData.totalOutstanding}</span>
        </div>
      </div>

      <div className="player-penalties">
        <h4>Player Penalties</h4>
        {sortedPlayers.length > 0 ? (
          <div className="penalty-list">
            {sortedPlayers.map(playerData => (
              <div key={playerData.playerId} className="player-penalty-card">
                <div className="player-header">
                  <span className="player-name">{getPlayerName(players, playerData.playerId)}</span>
                  <span className="total-amount">₹{playerData.totalPenalties}</span>
                </div>

                <div className="penalty-breakdown">
                  <span className="paid-count paid">Paid: {playerData.paidCount}</span>
                  <span className="unpaid-count unpaid">Unpaid: {playerData.unpaidCount}</span>
                </div>

                <div className="match-details">
                  {playerData.matches.map(match => (
                    <div key={match.id} className={`match-item ${match.paid ? 'paid' : 'unpaid'}`}>
                      <span className="match-date">{new Date(match.date).toLocaleDateString()}</span>
                      <span className="match-amount">₹{match.penalty}</span>
                      <span className={`status-badge ${match.paid ? 'paid' : 'unpaid'}`}>
                        {match.paid ? '✓' : '✗'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No penalties recorded this week</p>
        )}
      </div>
    </div>
  );
}

export default MatchFee;