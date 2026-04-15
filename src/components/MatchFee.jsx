import { useMemo } from 'react';
import { formatDate } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';

const PAYMENT_RECEIVER_MR = '\u0909\u092c\u0947\u0926 \u0936\u0947\u0916';

function MatchFee({ matches, players, currentWeekId, showUnpaidNotice = true }) {
  const weeklyData = useMemo(() => {
    const weekMatches = matches.filter(
      (match) => match.weekId === currentWeekId && match.status !== 'no-match' && (match.penalty || 0) > 0 && match.loserCaptain
    );

    const playerPenalties = {};
    const unpaidNotices = [];
    let totalPaid = 0;
    let totalUnpaid = 0;

    weekMatches.forEach((match) => {
      const loserId = match.loserCaptain;
      const penaltyPaid = match.penaltyPaid !== undefined ? match.penaltyPaid : false;

      if (!playerPenalties[loserId]) {
        playerPenalties[loserId] = {
          playerId: loserId,
          totalPenalties: 0,
          paidCount: 0,
          unpaidCount: 0,
          matches: [],
        };
      }

      playerPenalties[loserId].totalPenalties += match.penalty;
      playerPenalties[loserId].matches.push({
        id: match.id,
        date: match.date,
        penalty: match.penalty,
        paid: penaltyPaid,
      });

      if (penaltyPaid) {
        playerPenalties[loserId].paidCount += 1;
        totalPaid += match.penalty;
      } else {
        playerPenalties[loserId].unpaidCount += 1;
        totalUnpaid += match.penalty;
        unpaidNotices.push({
          id: match.id,
          date: match.date,
          playerId: loserId,
          penalty: match.penalty,
        });
      }
    });

    return {
      playerPenalties: Object.values(playerPenalties),
      unpaidNotices: unpaidNotices.sort((a, b) => (a.date < b.date ? 1 : -1)),
      totalPaid,
      totalUnpaid,
      totalCollected: totalPaid,
      totalOutstanding: totalUnpaid,
    };
  }, [matches, currentWeekId]);

  const sortedPlayers = useMemo(
    () => weeklyData.playerPenalties.slice().sort((a, b) => b.totalPenalties - a.totalPenalties),
    [weeklyData.playerPenalties]
  );

  return (
    <div className="match-fee-sidebar">
      <div className="sidebar-header">
        <h3>Match Fee Tracker</h3>
        <p className="week-indicator">{currentWeekId}</p>
      </div>

      <div className="fee-summary">
        <div className="summary-item collected">
          <span className="label">जमा</span>
          <span className="amount">{`\u20B9${weeklyData.totalCollected}`}</span>
        </div>
        <div className="summary-item outstanding">
          <span className="label">बाकी</span>
          <span className="amount">{`\u20B9${weeklyData.totalOutstanding}`}</span>
        </div>
      </div>

      {showUnpaidNotice && weeklyData.unpaidNotices.length > 0 ? (
        <div className="player-penalties">
          <h4>Unpaid Notice</h4>
          <div className="penalty-list">
            {weeklyData.unpaidNotices.map((notice) => (
              <div key={notice.id} className="player-penalty-card">
                <p className="match-unpaid-notice" style={{ marginBottom: '10px' }}>
                  <strong className="match-unpaid-name">{getPlayerName(players, notice.playerId)}</strong>
                  {` : ${notice.penalty} \u0930\u0941\u092a\u092f\u0947 ${PAYMENT_RECEIVER_MR} \u092f\u093e\u0902\u091a\u094d\u092f\u093e\u0915\u0921\u0947 \u0932\u0935\u0915\u0930\u093e\u0924 \u0932\u0935\u0915\u0930 \u091c\u092e\u093e \u0915\u0930\u093e`}
                </p>
                <p className="page-intro" style={{ marginBottom: 0 }}>
                  Match Date: {formatDate(notice.date)}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="player-penalties">
        <h4>Player Penalties</h4>
        {sortedPlayers.length > 0 ? (
          <div className="penalty-list">
            {sortedPlayers.map((playerData) => (
              <div key={playerData.playerId} className="player-penalty-card">
                <div className="player-header">
                  <span className="player-name">{getPlayerName(players, playerData.playerId)}</span>
                  <span className="total-amount">{`\u20B9${playerData.totalPenalties}`}</span>
                </div>

                <div className="penalty-breakdown">
                  <span className="paid-count paid">Paid: {playerData.paidCount}</span>
                  <span className="unpaid-count unpaid">Unpaid: {playerData.unpaidCount}</span>
                </div>

                <div className="match-details">
                  {playerData.matches.map((match) => (
                    <div key={match.id} className={`match-item ${match.paid ? 'paid' : 'unpaid'}`}>
                      <span className="match-date">{formatDate(match.date)}</span>
                      <span className="match-amount">{`\u20B9${match.penalty}`}</span>
                      <span className={`status-badge ${match.paid ? 'paid' : 'unpaid'}`}>
                        {match.paid ? '\u2713' : '\u2717'}
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
