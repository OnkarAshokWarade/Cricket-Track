import { useMemo, useState } from 'react';
import { getPlayerName } from '../utils/teamUtils';
import { formatDate } from '../utils/dateUtils';
import { useAppData } from '../context/AppDataContext';

function WeeklySummaryPage() {
  const { players, matches } = useAppData();

  const summaries = useMemo(() => {
    const weeklyMap = {};
    matches.forEach((match) => {
      if (!weeklyMap[match.weekId]) {
        weeklyMap[match.weekId] = { matches: [], losses: {} };
      }
      weeklyMap[match.weekId].matches.push(match);
      weeklyMap[match.weekId].losses[match.loserCaptain] =
        (weeklyMap[match.weekId].losses[match.loserCaptain] || 0) + match.penalty;
    });

    return Object.entries(weeklyMap).map(([weekId, summary]) => {
      const pendingMatches = summary.matches.filter((item) => item.penaltyPaid !== true);
      const topLoser = Object.entries(summary.losses).reduce(
        (best, [playerId, amount]) => (amount > best.amount ? { playerId, amount } : best),
        { playerId: null, amount: 0 }
      );

      return {
        weekId,
        matchesPlayed: summary.matches.length,
        totalMoney: summary.matches.reduce((sum, item) => sum + item.penalty, 0),
        pendingMoney: pendingMatches.reduce((sum, item) => sum + item.penalty, 0),
        pendingCount: pendingMatches.length,
        losses: summary.losses,
        matches: summary.matches.slice().sort((a, b) => (a.date < b.date ? 1 : -1)),
        topLoser,
      };
    });
  }, [matches]);

  return (
    <section>
      <div className="top-nav">
        <div>
          <h1 className="page-title">Weekly Summary</h1>
          <p className="page-intro">Review money totals, match counts, and top losing players by week.</p>
        </div>
      </div>

      {summaries.length > 0 ? (
        <div className="section-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {summaries.map((week) => (
            <div className="card weekly-summary-card" key={week.weekId}>
              <h2 className="card-title">{week.weekId}</h2>
              <p>Matches played: {week.matchesPlayed}</p>
              <p>Total money: {'\u20B9'} {week.totalMoney}</p>
              <p>Pending money: {'\u20B9'} {week.pendingMoney} ({week.pendingCount} matches)</p>
              {week.pendingMoney === 0 && (
                <p>Top losing player: {week.topLoser.playerId ? getPlayerName(players, week.topLoser.playerId) : 'None yet'}</p>
              )}

              <div style={{ marginTop: '14px' }}>
                <p className="card-title">Date-wise details</p>
                <div className="weekly-date-table-wrap">
                  <table className="weekly-date-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Losing Captain</th>
                        <th>Penalty</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {week.matches.map((match) => (
                        <tr key={match.id}>
                          <td data-label="Date">{formatDate(match.date)}</td>
                          <td data-label="Losing Captain">{getPlayerName(players, match.loserCaptain)}</td>
                          <td data-label="Penalty">{'\u20B9'} {match.penalty}</td>
                          <td data-label="Status">
                            <span className={match.penaltyPaid === true ? 'weekly-status-paid' : 'weekly-status-pending'}>
                              {match.penaltyPaid === true ? 'Paid' : 'Pending'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ marginTop: '14px' }}>
                <p className="card-title">Losses breakdown</p>
                <ul>
                  {Object.keys(week.losses).length > 0 ? (
                    Object.entries(week.losses).map(([playerId, amount]) => (
                      <li key={playerId}>
                        {getPlayerName(players, playerId)} - {'\u20B9'} {amount}
                      </li>
                    ))
                  ) : (
                    <li className="empty-state">No penalties recorded this week yet.</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card">
          <p className="empty-state">No weekly summary data available. Record a few matches first.</p>
        </div>
      )}
    </section>
  );
}

export default WeeklySummaryPage;
