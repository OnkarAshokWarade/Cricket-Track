import { useMemo, useState } from 'react';
import { getPlayerName } from '../utils/teamUtils';
import { formatDate } from '../utils/dateUtils';
import { useAppData } from '../context/AppDataContext';
import useAutoClearMessage from '../hooks/useAutoClearMessage';
import { openMatchDayPdf, openWeekSummaryPdf } from '../utils/pdfUtils';
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

  return match.penaltyPaid === true ? 'Paid' : 'Pending';
};

const getStatusClassName = (match) => {
  if (match.status === 'no-match') {
    return 'weekly-status-neutral';
  }

  return match.penaltyPaid === true ? 'weekly-status-paid' : 'weekly-status-pending';
};

const getWinningCaptainClassName = (match) => {
  if (match.status === 'no-match' || !match.winnerTeam) {
    return 'captain-neutral-color';
  }

  return 'captain-win-color';
};

const getLosingCaptainClassName = (match) => {
  if (match.status === 'no-match' || !match.loserCaptain) {
    return 'captain-neutral-color';
  }

  return 'captain-loss-color';
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
        const sortedMatches = summary.matches.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
        const playedMatches = sortedMatches.filter((item) => item.status !== 'no-match');
        const pendingMatches = playedMatches.filter((item) => item.penaltyPaid !== true);

        return {
          weekId,
          matchesPlayed: summary.playedMatches,
          noMatchDays: summary.noMatchDays,
          totalMoney: playedMatches.reduce((sum, item) => sum + item.penalty, 0),
          pendingMoney: pendingMatches.reduce((sum, item) => sum + item.penalty, 0),
          pendingCount: pendingMatches.length,
          pendingMatches,
          losses: summary.losses,
          matches: sortedMatches,
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

  const handleExportWeekPdf = (week) => {
    const didOpen = openWeekSummaryPdf({ week, players });
    setPdfMessageType(didOpen ? 'success' : 'warning');
    setPdfMessage(
      didOpen
        ? `Print dialog opened for ${week.weekId}. Choose "Save as PDF" to download the full date-wise summary.`
        : 'Weekly PDF preview could not be prepared. Please try again.'
    );
  };

  return (
    <section>
      <div className="top-nav">
        <div>
          <h1 className="page-title">Weekly Summary</h1>
          <p className="page-intro">साप्ताहिक मॅच संख्या, पैशांची एकूण रक्कम, बाकी फी आणि दिनांकानुसार कर्णधारांचे निकाल पहा.</p>
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
                <p className={week.pendingCount > 0 ? 'weekly-status-pending' : ''}>
                  Pending money: {'\u20B9'} {week.pendingMoney} ({week.pendingCount} matches)
                </p>
              </div>

              <div className="weekly-summary-panel" style={{ marginTop: '14px' }}>
                <div className="weekly-summary-panel-head">
                  <p className="card-title" style={{ margin: 0 }}>Date-wise Details</p>
                  {isAdmin ? (
                    <button type="button" className="button-secondary button-small" onClick={() => handleExportWeekPdf(week)}>
                      Week PDF
                    </button>
                  ) : null}
                </div>
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
                                Day PDF
                              </button>
                            ) : null}
                          </div>
                        </div>

                        <div className="weekly-date-card-grid">
                          <div className="weekly-date-field">
                            <span>Winning Captain</span>
                            <strong className={getWinningCaptainClassName(match)}>{winningCaptainLabel}</strong>
                          </div>
                          <div className="weekly-date-field">
                            <span>Losing Captain</span>
                            <strong className={getLosingCaptainClassName(match)}>{losingCaptainLabel}</strong>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="weekly-summary-panel" style={{ marginTop: '14px' }}>
                <p className="card-title" style={{ margin: 0 }}>Losses Breakdown</p>
                <ul className="weekly-loss-list">
                  {Object.keys(week.losses).length > 0 ? (
                    Object.entries(week.losses).map(([playerId, amount]) => (
                      <li key={playerId} className="weekly-loss-item">
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
