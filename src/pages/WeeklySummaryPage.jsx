import { useMemo } from 'react';
import { getPlayerName } from '../utils/teamUtils';
import { formatDate } from '../utils/dateUtils';
import PendingFeeNotice from '../components/PendingFeeNotice';
import { useAppData } from '../context/AppDataContext';

const getWinnerLabel = (match) => {
  if (match.status === 'no-match') {
    return 'No Match';
  }

  return match.winnerTeam === 'teamA' ? 'Team A' : 'Team B';
};

const getLosingCaptainLabel = (players, match) => {
  if (match.status === 'no-match') {
    return '--';
  }

  return getPlayerName(players, match.loserCaptain);
};

const getStatusLabel = (match) => {
  if (match.status === 'no-match') {
    return 'No Match';
  }

  return match.penaltyPaid === true ? 'Paid' : 'Pending';
};

function WeeklySummaryPage() {
  const { players, matches } = useAppData();

  const summaries = useMemo(() => {
    const weeklyMap = {};

    matches.forEach((match) => {
      if (!weeklyMap[match.weekId]) {
        weeklyMap[match.weekId] = { matches: [], losses: {}, playedMatches: 0, noMatchDays: 0 };
      }

      weeklyMap[match.weekId].matches.push(match);

      if (match.status === 'no-match') {
        weeklyMap[match.weekId].noMatchDays += 1;
        return;
      }

      weeklyMap[match.weekId].playedMatches += 1;
      weeklyMap[match.weekId].losses[match.loserCaptain] =
        (weeklyMap[match.weekId].losses[match.loserCaptain] || 0) + match.penalty;
    });

    return Object.entries(weeklyMap)
      .map(([weekId, summary]) => {
        const playedMatches = summary.matches.filter((item) => item.status !== 'no-match');
        const pendingMatches = playedMatches.filter((item) => item.penaltyPaid !== true);
        const topLoser = Object.entries(summary.losses).reduce(
          (best, [playerId, amount]) => (amount > best.amount ? { playerId, amount } : best),
          { playerId: null, amount: 0 }
        );

        return {
          weekId,
          matchesPlayed: summary.playedMatches,
          noMatchDays: summary.noMatchDays,
          totalMoney: playedMatches.reduce((sum, item) => sum + item.penalty, 0),
          pendingMoney: pendingMatches.reduce((sum, item) => sum + item.penalty, 0),
          pendingCount: pendingMatches.length,
          losses: summary.losses,
          matches: summary.matches.slice().sort((a, b) => (a.date < b.date ? 1 : -1)),
          topLoser,
        };
      })
      .sort((a, b) => (a.weekId < b.weekId ? 1 : -1));
  }, [matches]);

  return (
    <section>
      <PendingFeeNotice matches={matches} players={players} />

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

              <div className="weekly-summary-stats">
                <p>Matches played: {week.matchesPlayed}</p>
                <p>No-match days: {week.noMatchDays}</p>
                <p>Total money: {'\u20B9'} {week.totalMoney}</p>
                <p>Pending money: {'\u20B9'} {week.pendingMoney} ({week.pendingCount} matches)</p>
                <p>
                  Top losing player:{' '}
                  {week.topLoser.playerId ? `${getPlayerName(players, week.topLoser.playerId)} (\u20B9 ${week.topLoser.amount})` : 'None yet'}
                </p>
              </div>

              <div style={{ marginTop: '14px' }}>
                <p className="card-title">Date-wise details</p>
                <div className="weekly-date-list">
                  {week.matches.map((match) => {
                    const isNoMatch = match.status === 'no-match';
                    const statusLabel = getStatusLabel(match);

                    return (
                      <article className="weekly-date-card" key={match.id}>
                        <div className="weekly-date-card-top">
                          <strong className="weekly-date-card-date">{formatDate(match.date)}</strong>
                          <span className={isNoMatch || match.penaltyPaid === true ? 'weekly-status-paid' : 'weekly-status-pending'}>{statusLabel}</span>
                        </div>

                        <div className="weekly-date-card-grid">
                          <div className="weekly-date-field">
                            <span>Winner</span>
                            <strong>{getWinnerLabel(match)}</strong>
                          </div>
                          <div className="weekly-date-field">
                            <span>Losing Captain</span>
                            <strong>{getLosingCaptainLabel(players, match)}</strong>
                          </div>
                          <div className="weekly-date-field">
                            <span>Penalty</span>
                            <strong>{'\u20B9'} {match.penalty}</strong>
                          </div>
                        </div>
                      </article>
                    );
                  })}
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
