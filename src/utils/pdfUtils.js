import { formatDate } from './dateUtils';
import { getPlayerName } from './teamUtils';

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const getPaymentStatusLabel = (match) => {
  if (!match) {
    return 'Not recorded';
  }

  if (match.status === 'no-match') {
    return 'No payment needed';
  }

  return match.penaltyPaid === true ? 'Paid' : 'Unpaid';
};

const getDayOutcome = ({ captainAName, captainBName, players = [], match = null }) => {
  if (!match) {
    return {
      winningCaptainName: 'Not recorded',
      losingCaptainName: 'Not recorded',
      paymentStatusLabel: 'Not recorded',
      matchStatusLabel: 'Result pending',
      winningCaptainClass: 'neutral',
      losingCaptainClass: 'neutral',
    };
  }

  if (match.status === 'no-match') {
    return {
      winningCaptainName: 'No Match',
      losingCaptainName: 'No Match',
      paymentStatusLabel: getPaymentStatusLabel(match),
      matchStatusLabel: 'No match',
      winningCaptainClass: 'neutral',
      losingCaptainClass: 'neutral',
    };
  }

  return {
    winningCaptainName: match.winnerTeam === 'teamA' ? captainAName : captainBName,
    losingCaptainName: match.loserCaptain ? getPlayerName(players, match.loserCaptain) : '--',
    paymentStatusLabel: getPaymentStatusLabel(match),
    matchStatusLabel: match.winnerTeam === 'teamA' ? 'Team A' : 'Team B',
    winningCaptainClass: 'win',
    losingCaptainClass: 'loss',
  };
};

const getMatchSummaryHtml = ({ title, weekId, date, captainAName, captainBName, players = [], match = null }) => {
  const outcome = getDayOutcome({ captainAName, captainBName, players, match });

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
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

          .summary-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
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

          .value-win {
            color: #15803d;
          }

          .value-loss {
            color: #dc2626;
          }

          .value-neutral {
            color: #334155;
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
              <h1>${escapeHtml(title)}</h1>
              <p>Week: ${escapeHtml(weekId || '--')}</p>
              <p>Date: ${escapeHtml(formatDate(date))}</p>
              <span class="pill">Day summary</span>
            </div>
            <div>
              <p>Match status: <strong>${escapeHtml(outcome.matchStatusLabel)}</strong></p>
              <p>Penalty status: <strong>${escapeHtml(outcome.paymentStatusLabel)}</strong></p>
            </div>
          </header>

          <section class="summary-grid">
            <article class="card">
              <h2>Day Result</h2>
              <div class="meta-row">
                <span>Winning Captain</span>
                <strong class="value-${escapeHtml(outcome.winningCaptainClass)}">${escapeHtml(outcome.winningCaptainName)}</strong>
              </div>
              <div class="meta-row">
                <span>Losing Captain</span>
                <strong class="value-${escapeHtml(outcome.losingCaptainClass)}">${escapeHtml(outcome.losingCaptainName)}</strong>
              </div>
            </article>

            <article class="card">
              <h2>Selected Captains</h2>
              <div class="meta-row">
                <span>Team A Captain</span>
                <strong>${escapeHtml(captainAName)}</strong>
              </div>
              <div class="meta-row">
                <span>Team B Captain</span>
                <strong>${escapeHtml(captainBName)}</strong>
              </div>
            </article>
          </section>

          <p class="footer-note">Use the print dialog and choose "Save as PDF" to keep this weekly history summary.</p>
        </main>
      </body>
    </html>
  `;
};

const getTeamListMarkup = ({ teamName, playerIds = [], captainId = '', players = [] }) => `
  <article class="team-card">
    <div class="team-card-header">
      <div>
        <h2>${escapeHtml(teamName)}</h2>
        <p>Captain: <strong>${escapeHtml(captainId ? getPlayerName(players, captainId) : '--')}</strong></p>
      </div>
      <span class="team-count">${playerIds.length} players</span>
    </div>
    <ol class="player-list">
      ${playerIds
        .map((playerId) => {
          const isCaptain = String(playerId) === String(captainId);
          const playerName = getPlayerName(players, playerId);

          return `
            <li class="${isCaptain ? 'captain-player' : ''}">
              <span>${escapeHtml(playerName)}</span>
              ${isCaptain ? '<strong>Captain</strong>' : ''}
            </li>
          `;
        })
        .join('')}
    </ol>
  </article>
`;

const getCaptainSheetHtml = ({ title, weekId, date, captainAName, captainBName, teams, captains, players = [] }) => {
  const teamAIds = teams?.teamA || [];
  const teamBIds = teams?.teamB || [];

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
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
            max-width: 980px;
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
            background: #dbeafe;
            color: #1d4ed8;
            font-weight: 700;
          }

          .captain-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin-bottom: 20px;
          }

          .captain-card,
          .team-card {
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 16px;
            background: #f8fafc;
          }

          .captain-card h2,
          .team-card h2 {
            margin: 0 0 10px;
            font-size: 18px;
          }

          .captain-name {
            font-size: 22px;
            font-weight: 800;
            color: #0f172a;
          }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .team-card-header {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            align-items: flex-start;
            margin-bottom: 12px;
          }

          .team-card-header p {
            margin: 0;
            color: #475569;
          }

          .team-count {
            padding: 6px 10px;
            border-radius: 999px;
            background: #e2e8f0;
            color: #334155;
            font-weight: 700;
            white-space: nowrap;
          }

          .player-list {
            margin: 0;
            padding-left: 20px;
            display: grid;
            gap: 8px;
          }

          .player-list li {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            align-items: center;
            padding: 8px 10px;
            border-radius: 10px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
          }

          .player-list li strong {
            color: #1d4ed8;
            font-size: 12px;
            text-transform: uppercase;
          }

          .captain-player {
            border-color: #93c5fd !important;
            background: #eff6ff !important;
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

          @media (max-width: 760px) {
            .captain-grid,
            .team-grid {
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>
      <body>
        <main class="sheet">
          <header class="hero">
            <div>
              <h1>${escapeHtml(title)}</h1>
              <p>Week: ${escapeHtml(weekId || '--')}</p>
              <p>Date: ${escapeHtml(formatDate(date))}</p>
              <span class="pill">Captain team sheet</span>
            </div>
            <div>
              <p>Share this sheet with both teams for the day.</p>
            </div>
          </header>

          <section class="captain-grid">
            <article class="captain-card">
              <h2>Team A Captain</h2>
              <div class="captain-name">${escapeHtml(captainAName)}</div>
            </article>
            <article class="captain-card">
              <h2>Team B Captain</h2>
              <div class="captain-name">${escapeHtml(captainBName)}</div>
            </article>
          </section>

          <section class="team-grid">
            ${getTeamListMarkup({ teamName: 'Team A', playerIds: teamAIds, captainId: captains?.teamA, players })}
            ${getTeamListMarkup({ teamName: 'Team B', playerIds: teamBIds, captainId: captains?.teamB, players })}
          </section>

          <p class="footer-note">Use the print dialog and choose "Save as PDF" to share this team sheet.</p>
        </main>
      </body>
    </html>
  `;
};

const openPrintDocument = (html) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }

  const existingFrame = document.getElementById('patoda-print-frame');
  if (existingFrame) {
    existingFrame.remove();
  }

  const printFrame = document.createElement('iframe');
  printFrame.id = 'patoda-print-frame';
  printFrame.title = 'Patoda XI PDF Preview';
  printFrame.setAttribute('aria-hidden', 'true');
  printFrame.style.position = 'fixed';
  printFrame.style.width = '0';
  printFrame.style.height = '0';
  printFrame.style.border = '0';
  printFrame.style.right = '0';
  printFrame.style.bottom = '0';
  document.body.appendChild(printFrame);

  const frameWindow = printFrame.contentWindow;
  if (!frameWindow) {
    printFrame.remove();
    return false;
  }

  const cleanup = () => {
    window.setTimeout(() => {
      if (printFrame.parentNode) {
        printFrame.parentNode.removeChild(printFrame);
      }
    }, 1000);
  };

  frameWindow.onafterprint = cleanup;
  frameWindow.document.open();
  frameWindow.document.write(html);
  frameWindow.document.close();

  window.setTimeout(() => {
    frameWindow.focus();
    frameWindow.print();
  }, 250);

  return true;
};

export const openMatchDayPdf = ({ match, players = [] }) => {
  if (typeof window === 'undefined' || !match) {
    return false;
  }

  const captainAName = match.captainA ? getPlayerName(players, match.captainA) : '--';
  const captainBName = match.captainB ? getPlayerName(players, match.captainB) : '--';

  return openPrintDocument(
    getMatchSummaryHtml({
      title: 'Patoda XI Day Summary',
      weekId: match.weekId,
      date: match.date,
      captainAName,
      captainBName,
      players,
      match,
    })
  );
};

export const openCaptainDayPdf = ({ date, weekId, captains, teams, players = [], match = null }) => {
  if (typeof window === 'undefined' || !captains || !teams) {
    return false;
  }

  const captainAName = captains.teamA ? getPlayerName(players, captains.teamA) : '--';
  const captainBName = captains.teamB ? getPlayerName(players, captains.teamB) : '--';

  return openPrintDocument(
    getCaptainSheetHtml({
      title: 'Patoda XI Captain Team Sheet',
      weekId,
      date,
      captainAName,
      captainBName,
      teams,
      captains,
      players,
    })
  );
};
