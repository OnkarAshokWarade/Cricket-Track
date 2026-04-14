import { formatDate } from './dateUtils';
import { getPlayerName } from './teamUtils';

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatTeamList = (team = [], players = []) => {
  if (!Array.isArray(team) || team.length === 0) {
    return '<li>Not available</li>';
  }

  return team
    .map((playerId, index) => `<li>${index + 1}. ${escapeHtml(getPlayerName(players, playerId))}</li>`)
    .join('');
};

const getWinnerLabel = (match) => {
  if (match.status === 'no-match') {
    return 'No Match';
  }

  return match.winnerTeam === 'teamA' ? 'Team A' : 'Team B';
};

const getPaymentStatusLabel = (match) => {
  if (match.status === 'no-match') {
    return 'No payment needed';
  }

  return match.penaltyPaid === true ? 'Paid' : 'Pending';
};

export const openMatchDayPdf = ({ match, players = [] }) => {
  if (typeof window === 'undefined' || !match) {
    return false;
  }

  const printWindow = window.open('', '_blank', 'noopener,noreferrer,width=960,height=780');
  if (!printWindow) {
    return false;
  }

  const captainAName = match.captainA ? getPlayerName(players, match.captainA) : '--';
  const captainBName = match.captainB ? getPlayerName(players, match.captainB) : '--';
  const loserCaptainName = match.loserCaptain ? getPlayerName(players, match.loserCaptain) : '--';
  const printTitle = `Patoda XI ${match.weekId || 'Weekly'} ${formatDate(match.date)}`;

  printWindow.document.write(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(printTitle)}</title>
        <style>
          :root {
            color-scheme: light;
            font-family: Arial, sans-serif;
          }

          body {
            margin: 0;
            padding: 32px;
            color: #0f172a;
            background: #f8fafc;
          }

          .sheet {
            max-width: 860px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 20px;
            padding: 28px;
          }

          .hero {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            align-items: flex-start;
            margin-bottom: 24px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e2e8f0;
          }

          .hero h1 {
            margin: 0 0 8px;
            font-size: 28px;
          }

          .hero p {
            margin: 4px 0;
            color: #475569;
            font-size: 15px;
          }

          .pill {
            display: inline-block;
            margin-top: 8px;
            padding: 8px 14px;
            border-radius: 999px;
            background: #e0e7ff;
            color: #312e81;
            font-weight: 700;
          }

          .summary-grid,
          .team-grid {
            display: grid;
            gap: 16px;
          }

          .summary-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-bottom: 24px;
          }

          .team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .card {
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 16px;
            background: #f8fafc;
          }

          .card h2 {
            margin: 0 0 12px;
            font-size: 18px;
          }

          .meta-row {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            padding: 10px 0;
            border-bottom: 1px solid #e2e8f0;
          }

          .meta-row:last-child {
            border-bottom: 0;
            padding-bottom: 0;
          }

          .meta-row strong {
            text-align: right;
          }

          ul {
            margin: 0;
            padding-left: 20px;
          }

          li {
            margin: 8px 0;
          }

          .footer-note {
            margin-top: 24px;
            color: #475569;
            font-size: 13px;
          }

          @media print {
            body {
              background: #ffffff;
              padding: 0;
            }

            .sheet {
              border: 0;
              border-radius: 0;
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <main class="sheet">
          <header class="hero">
            <div>
              <h1>Patoda XI Day Summary</h1>
              <p>Week: ${escapeHtml(match.weekId || '--')}</p>
              <p>Date: ${escapeHtml(formatDate(match.date))}</p>
              <span class="pill">Winner: ${escapeHtml(getWinnerLabel(match))}</span>
            </div>
            <div>
              <p>Payment status: <strong>${escapeHtml(getPaymentStatusLabel(match))}</strong></p>
              <p>Penalty: <strong>Rs. ${escapeHtml(match.penalty || 0)}</strong></p>
              <p>Losing captain: <strong>${escapeHtml(loserCaptainName)}</strong></p>
            </div>
          </header>

          <section class="summary-grid">
            <article class="card">
              <h2>Day Captains</h2>
              <div class="meta-row">
                <span>Team A Captain</span>
                <strong>${escapeHtml(captainAName)}</strong>
              </div>
              <div class="meta-row">
                <span>Team B Captain</span>
                <strong>${escapeHtml(captainBName)}</strong>
              </div>
            </article>

            <article class="card">
              <h2>Match Details</h2>
              <div class="meta-row">
                <span>Status</span>
                <strong>${escapeHtml(match.status === 'no-match' ? 'No Match' : 'Played')}</strong>
              </div>
              <div class="meta-row">
                <span>Score</span>
                <strong>${escapeHtml(match.score || '--')}</strong>
              </div>
              <div class="meta-row">
                <span>Week ID</span>
                <strong>${escapeHtml(match.weekId || '--')}</strong>
              </div>
            </article>
          </section>

          <section class="team-grid">
            <article class="card">
              <h2>Week Team A</h2>
              <ul>${formatTeamList(match.teamA, players)}</ul>
            </article>
            <article class="card">
              <h2>Week Team B</h2>
              <ul>${formatTeamList(match.teamB, players)}</ul>
            </article>
          </section>

          <p class="footer-note">Use your browser print dialog and choose "Save as PDF" to keep this day summary as a PDF file.</p>
        </main>

        <script>
          window.addEventListener('load', function () {
            window.setTimeout(function () {
              window.focus();
              window.print();
            }, 150);
          });
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
  return true;
};
