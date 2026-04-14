import { useMemo, useState } from 'react';
import { getPlayerName } from '../utils/teamUtils';
import { formatDate } from '../utils/dateUtils';
import { useAppData } from '../context/AppDataContext';
import useAutoClearMessage from '../hooks/useAutoClearMessage';
import { openMatchDayPdf } from '../utils/pdfUtils';
import PaymentQrCard from '../components/PaymentQrCard';

const getWinningCaptainLabel = (players, match) => {
  if (match.status === 'no-match') {
    return 'No Match';
  }

  const winnerCaptainId = match.winnerTeam === 'teamA' ? match.captainA : match.captainB;
  return winnerCaptainId ? getPlayerName(players, winnerCaptainId) : '--';
};

const getLosingCaptainLabel = (players, match) => {
  if (match.status === 'no-match') {
    return 'No Match';
  }

  return getPlayerName(players, match.loserCaptain);
};

const getStatusLabel = (match) => {
  if (match.status === 'no-match') {
    return 'No payment needed';
  }

  return match.penaltyPaid === true ? 'Paid' : 'Unpaid';
};

const getStatusClassName = (match) => {
  if (match.status === 'no-match') {
    return 'weekly-status-neutral';
  }

  return match.penaltyPaid === true ? 'weekly-status-paid' : 'weekly-status-pending';
};

function WeeklySummaryPage({ accessMode }) {
  const { players, matches } = useAppData();
  const [pdfMessage, setPdfMessage] = useState('');
  const [pdfMessageType, setPdfMessageType] = useState('success');
  const isAdmin = accessMode === 'admin';
  const isGuest = accessMode === 'guest';

  useAutoClearMessage(pdfMessage, setPdfMessage);

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

  const handleExportPdf = (match) => {
    if (!isAdmin) {
      setPdfMessageType('warning');
      setPdfMessage('Guest mode can only open captain PDFs from the Captains section.');
      return;
    }

    const didOpen = openMatchDayPdf({ match, players });
    setPdfMessageType(didOpen ? 'success' : 'warning');
    setPdfMessage(
      didOpen
        ? `Print dialog opened for ${formatDate(match.date)}. Choose "Save as PDF" to download it.`
        : 'PDF preview could not be prepared. Please try again.'
    );
  };

  return (
    <section>
      <div className="top-nav">
        <div>
          <h1 className="page-title">Weekly Summary</h1>
          <p className="page-intro">Review money totals, match counts, and top losing players by week.</p>
        </div>
      </div>

      {pdfMessage ? (
        <div className="card" style={{ marginBottom: '18px', padding: '14px 20px' }}>
          <p className={pdfMessageType === 'success' ? 'success-text' : 'warning-text'} style={{ margin: 0 }}>{pdfMessage}</p>
        </div>
      ) : null}

      {isGuest ? (
        <div style={{ marginBottom: '18px' }}>
          <PaymentQrCard title="Guest Contribution QR" />
        </div>
      ) : null}

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
                    const statusLabel = getStatusLabel(match);
                    const winningCaptainLabel = getWinningCaptainLabel(players, match);
                    const losingCaptainLabel = getLosingCaptainLabel(players, match);

                    return (
                      <article className="weekly-date-card" key={match.id}>
                        <div className="weekly-date-card-top">
                          <strong className="weekly-date-card-date">{formatDate(match.date)}</strong>
                          <div className="weekly-date-card-actions">
                            <span className={getStatusClassName(match)}>{statusLabel}</span>
                            {isAdmin ? (
                              <button type="button" className="button-secondary button-small" onClick={() => handleExportPdf(match)}>
                                Print / PDF
                              </button>
                            ) : null}
                          </div>
                        </div>

                        <div className="weekly-date-card-grid">
                          <div className="weekly-date-field">
                            <span>Winning Captain</span>
                            <strong className={match.status === 'no-match' ? '' : 'captain-win-color'}>{winningCaptainLabel}</strong>
                          </div>
                          <div className="weekly-date-field">
                            <span>Losing Captain</span>
                            <strong className={match.status === 'no-match' ? '' : 'captain-loss-color'}>{losingCaptainLabel}</strong>
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
