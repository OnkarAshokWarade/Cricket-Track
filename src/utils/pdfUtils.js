import { formatDate } from './dateUtils';
import { getPlayerName } from './teamUtils';

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const PENDING_NOTICE_TITLE_MR = '\u092a\u094d\u0930\u0932\u0902\u092c\u093f\u0924 \u092e\u0945\u091a \u092b\u0940 \u0938\u0942\u091a\u0928\u093e';
const PENDING_NOTICE_COPY_MR =
  '\u0916\u093e\u0932\u0940\u0932 \u0916\u0947\u0933\u093e\u0921\u0942\u0902\u0928\u0940 100 \u0930\u0941\u092a\u092f\u0947 \u0909\u092c\u0947\u0926 \u0936\u0947\u0916 \u092f\u093e\u0902\u091a\u094d\u092f\u093e\u0915\u0921\u0947 \u0932\u0935\u0915\u0930\u093e\u0924 \u0932\u0935\u0915\u0930 \u091c\u092e\u093e \u0915\u0930\u093e\u0935\u0947\u0924:';
const PDF_PRINT_COLOR_CSS = `
          html {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          *,
          *::before,
          *::after {
            -webkit-print-color-adjust: inherit;
            print-color-adjust: inherit;
          }
`;

const getPaymentStatusLabel = (match) => {
  if (!match) {
    return 'Not recorded';
  }

  if (match.status === 'no-match') {
    return 'No payment needed';
  }

  return match.penaltyPaid === true ? 'Paid' : 'Pending';
};

const getPaymentStatusClassName = (match) => {
  if (!match || match.status === 'no-match') {
    return 'neutral';
  }

  return match.penaltyPaid === true ? 'paid' : 'pending';
};

const getResultStatusClassName = (match) => {
  if (!match) {
    return 'upcoming';
  }

  if (match.status === 'no-match') {
    return 'neutral';
  }

  if (!match.winnerTeam) {
    return 'upcoming';
  }

  return 'paid';
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
  const formattedDate = formatDate(date);
  const matchStatusClassName = getResultStatusClassName(match);
  const paymentStatusClassName = getPaymentStatusClassName(match);

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
        <style>
          ${PDF_PRINT_COLOR_CSS}
          :root {
            color-scheme: light;
            font-family: Arial, sans-serif;
          }

          body {
            margin: 0;
            padding: 20px;
            color: #0f172a;
            background: #f8fafc;
          }

          .sheet {
            max-width: 860px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 20px;
            padding: 24px;
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

          .status-paid {
            color: #15803d;
          }

          .status-pending {
            color: #dc2626;
          }

          .status-upcoming {
            color: #2563eb;
          }

          .status-neutral {
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
              <p>Match status: <strong class="status-${escapeHtml(matchStatusClassName)}">${escapeHtml(outcome.matchStatusLabel)}</strong></p>
              <p>Penalty status: <strong class="status-${escapeHtml(paymentStatusClassName)}">${escapeHtml(outcome.paymentStatusLabel)}</strong></p>
            </div>
          </header>

          <section class="summary-grid">
            <article class="card">
              <h2>Day Result</h2>
              <div class="meta-row">
                <span>Result Date</span>
                <strong>${escapeHtml(formattedDate)}</strong>
              </div>
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
                <span>Captain Date</span>
                <strong>${escapeHtml(formattedDate)}</strong>
              </div>
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

const getWeeklyStatusClassName = (match) => {
  if (!match || match.status === 'no-match') {
    return 'neutral';
  }

  return match.penaltyPaid === true ? 'paid' : 'pending';
};

const getWeeklyResultClassName = (match) => {
  if (!match) {
    return 'status-upcoming';
  }

  if (match.status === 'no-match') {
    return 'status-neutral';
  }

  if (!match.winnerTeam) {
    return 'status-upcoming';
  }

  return 'status-win';
};

const getWeeklyWinnerLabel = (match) => {
  if (!match) {
    return 'Result pending';
  }

  if (match.status === 'no-match') {
    return 'No Match';
  }

  if (!match.winnerTeam) {
    return 'Result pending';
  }

  return match.winnerTeam === 'teamA' ? 'Team A' : 'Team B';
};

const getWeeklySummaryHtml = ({ title, week, players = [] }) => {
  const losses = Object.entries(week.losses || {}).sort(([, amountA], [, amountB]) => amountB - amountA);
  const pendingMatches = (week.matches || []).filter((match) => match.status !== 'no-match' && match.penaltyPaid !== true);

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
        <style>
          ${PDF_PRINT_COLOR_CSS}
          @page {
            size: A4 portrait;
            margin: 10mm;
          }

          :root {
            color-scheme: light;
            font-family: Arial, sans-serif;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            color: #0f172a;
            background: #f8fafc;
            font-size: 12px;
          }

          body {
            padding: 16px;
          }

          .sheet {
            max-width: 920px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 18px;
            padding: 18px;
            display: grid;
            gap: 14px;
          }

          .hero {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 12px;
            padding-bottom: 12px;
            border-bottom: 2px solid #e2e8f0;
          }

          .hero h1 {
            margin: 0 0 6px;
            font-size: 24px;
          }

          .hero p {
            margin: 2px 0;
            color: #475569;
          }

          .pill-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 6px 10px;
            border-radius: 999px;
            background: #e2e8f0;
            color: #334155;
            font-weight: 700;
          }

          .pill.pending {
            background: #fee2e2;
            color: #b91c1c;
          }

          .pill.paid {
            background: #dcfce7;
            color: #166534;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .notice-list {
            margin: 0;
            padding-left: 18px;
            display: grid;
            gap: 8px;
          }

          .notice-copy {
            margin: 0;
            color: #334155;
            font-weight: 700;
            line-height: 1.45;
          }

          .section-card {
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            background: #f8fafc;
            padding: 14px;
            display: grid;
            gap: 10px;
          }

          .section-card h2 {
            margin: 0;
            font-size: 17px;
          }

          .losses-heading {
            color: #dc2626;
          }

          .stats-list {
            display: grid;
            gap: 8px;
          }

          .stats-row {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 8px 10px;
            border-radius: 12px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            font-weight: 700;
          }

          .date-list,
          .loss-list {
            display: grid;
            gap: 10px;
          }

          .date-card,
          .loss-item {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #ffffff;
            padding: 10px;
            break-inside: avoid-page;
            page-break-inside: avoid;
          }

          .date-card-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 8px;
          }

          .date-card-top strong {
            font-size: 14px;
          }

          .date-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
          }

          .date-field {
            display: grid;
            gap: 4px;
            padding: 8px;
            border-radius: 10px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
          }

          .date-field span {
            color: #64748b;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
          }

          .date-field strong {
            color: #0f172a;
            font-size: 12px;
          }

          .status-paid {
            color: #15803d;
          }

          .status-pending,
          .loss-item strong,
          .loss-amount,
          .notice-list strong {
            color: #dc2626;
          }

          .status-upcoming {
            color: #2563eb;
          }

          .status-neutral {
            color: #2563eb;
          }

          .status-win {
            color: #15803d;
          }

          .status-loss {
            color: #dc2626;
          }

          .loss-item {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            align-items: center;
            font-weight: 700;
            color: #dc2626;
          }

          .empty-state {
            margin: 0;
            color: #64748b;
            font-weight: 700;
          }

          .footer-note {
            margin: 0;
            color: #475569;
            font-size: 11px;
          }

          @media print {
            body {
              background: #ffffff;
              padding: 0;
            }

            .sheet {
              max-width: none;
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
              <p>Week: ${escapeHtml(week.weekId || '--')}</p>
              <p>Total records: ${escapeHtml(String(week.matches?.length || 0))}</p>
            </div>
            <div class="pill-row">
              <span class="pill">Matches: ${escapeHtml(String(week.matchesPlayed || 0))}</span>
              <span class="pill ${(week.pendingCount || 0) > 0 ? 'pending' : 'paid'}">Pending: ${escapeHtml(String(week.pendingCount || 0))}</span>
            </div>
          </header>

          <section class="section-card">
            <h2>Week Snapshot</h2>
            <div class="stats-grid">
              <div class="stats-list">
                <div class="stats-row"><span>Matches Played</span><strong>${escapeHtml(String(week.matchesPlayed || 0))}</strong></div>
                <div class="stats-row"><span>No-match Days</span><strong>${escapeHtml(String(week.noMatchDays || 0))}</strong></div>
                <div class="stats-row"><span>Total Money</span><strong>Rs ${escapeHtml(String(week.totalMoney || 0))}</strong></div>
              </div>
              <div class="stats-list">
                <div class="stats-row"><span>Pending Money</span><strong class="status-pending">Rs ${escapeHtml(String(week.pendingMoney || 0))}</strong></div>
                <div class="stats-row"><span>Pending Status</span><strong class="${(week.pendingCount || 0) > 0 ? 'status-pending' : 'status-paid'}">${(week.pendingCount || 0) > 0 ? 'Pending' : 'Clear'}</strong></div>
                <div class="stats-row"><span>Pending Matches</span><strong class="${(week.pendingCount || 0) > 0 ? 'status-pending' : 'status-paid'}">${escapeHtml(String(week.pendingCount || 0))}</strong></div>
              </div>
            </div>
          </section>

          ${pendingMatches.length > 0
            ? `
          <section class="section-card">
            <h2>${escapeHtml(PENDING_NOTICE_TITLE_MR)}</h2>
            <p class="notice-copy">${escapeHtml(PENDING_NOTICE_COPY_MR)}</p>
            <ul class="notice-list">
              ${pendingMatches
                .map(
                  (match) => `
                    <li>
                      ${escapeHtml(formatDate(match.date))} &mdash;
                      <strong>${escapeHtml(match.loserCaptain ? getPlayerName(players, match.loserCaptain) : 'Result pending')}</strong>
                    </li>
                  `
                )
                .join('')}
            </ul>
          </section>
          `
            : ''}

          <section class="section-card">
            <h2>Date-wise Details</h2>
            <div class="date-list">
              ${(week.matches || [])
                .map((match) => {
                  const statusLabel = getPaymentStatusLabel(match);
                  const winningCaptainLabel =
                    match.status === 'no-match'
                      ? 'No Match'
                      : match.winnerTeam === 'teamA'
                      ? getPlayerName(players, match.captainA)
                      : match.winnerTeam === 'teamB'
                      ? getPlayerName(players, match.captainB)
                      : 'Result pending';
                  const losingCaptainLabel =
                    match.status === 'no-match'
                      ? 'No Match'
                      : match.loserCaptain
                      ? getPlayerName(players, match.loserCaptain)
                      : 'Result pending';
                  const resultClassName = getWeeklyResultClassName(match);

                  return `
                    <article class="date-card">
                      <div class="date-card-top">
                        <strong>${escapeHtml(formatDate(match.date))}</strong>
                        <span class="pill ${escapeHtml(getWeeklyStatusClassName(match))}">${escapeHtml(statusLabel)}</span>
                      </div>
                      <div class="date-grid">
                        <div class="date-field">
                          <span>Winner</span>
                          <strong class="${escapeHtml(resultClassName)}">${escapeHtml(getWeeklyWinnerLabel(match))}</strong>
                        </div>
                        <div class="date-field">
                          <span>Winning Captain</span>
                          <strong class="${escapeHtml(resultClassName)}">${escapeHtml(winningCaptainLabel)}</strong>
                        </div>
                        <div class="date-field">
                          <span>Losing Captain</span>
                          <strong class="${!match || match.status === 'no-match' ? 'status-neutral' : !match.winnerTeam ? 'status-upcoming' : 'status-loss'}">${escapeHtml(losingCaptainLabel)}</strong>
                        </div>
                      </div>
                    </article>
                  `;
                })
                .join('') || '<p class="empty-state">No date-wise records available for this week.</p>'}
            </div>
          </section>

          <section class="section-card">
            <h2 class="losses-heading">Losses Breakdown</h2>
            <div class="loss-list">
              ${losses.length > 0
                ? losses
                    .map(
                      ([playerId, amount]) => `
                        <div class="loss-item">
                          <strong>${escapeHtml(getPlayerName(players, playerId))}</strong>
                          <span class="loss-amount">Rs ${escapeHtml(String(amount))}</span>
                        </div>
                      `
                    )
                    .join('')
                : '<p class="empty-state">No penalties recorded this week yet.</p>'}
            </div>
          </section>

          <p class="footer-note">Use the print dialog and choose "Save as PDF" to keep this weekly summary.</p>
        </main>
      </body>
    </html>
  `;
};

const getCaptainTableRowsMarkup = ({ teamAIds = [], teamBIds = [], captainAId = '', captainBId = '', players = [] }) => {
  const maxTeamSize = Math.max(teamAIds.length, teamBIds.length);

  return Array.from({ length: maxTeamSize }, (_, index) => {
    const playerAId = teamAIds[index];
    const playerBId = teamBIds[index];
    const playerAName = playerAId ? getPlayerName(players, playerAId) : '--';
    const playerBName = playerBId ? getPlayerName(players, playerBId) : '--';
    const isCaptainA = playerAId && String(playerAId) === String(captainAId);
    const isCaptainB = playerBId && String(playerBId) === String(captainBId);

    return `
      <tr>
        <td class="${isCaptainA ? 'captain-cell' : ''}">
          <span class="player-index">${index + 1}.</span>
          <span class="player-name">${escapeHtml(playerAName)}</span>
          ${isCaptainA ? '<span class="captain-badge">Captain</span>' : ''}
        </td>
        <td class="${isCaptainB ? 'captain-cell' : ''}">
          <span class="player-index">${index + 1}.</span>
          <span class="player-name">${escapeHtml(playerBName)}</span>
          ${isCaptainB ? '<span class="captain-badge">Captain</span>' : ''}
        </td>
      </tr>
    `;
  }).join('');
};

const getCaptainSheetHtml = ({ title, weekId, date, captainAName, captainBName, teams, captains, players = [] }) => {
  const teamAIds = teams?.teamA || [];
  const teamBIds = teams?.teamB || [];
  const formattedDate = formatDate(date);

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
        <style>
          ${PDF_PRINT_COLOR_CSS}
          @page {
            size: A4 portrait;
            margin: 7mm;
          }

          :root {
            color-scheme: light;
            font-family: Arial, sans-serif;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            color: #0f172a;
            background: #f1f5f9;
            font-size: 10px;
          }

          body {
            padding: 8px;
          }

          .sheet {
            max-width: 820px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 12px;
            padding: 10px;
            display: grid;
            gap: 8px;
          }

          .hero {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            align-items: flex-start;
            padding-bottom: 8px;
            border-bottom: 1px solid #e2e8f0;
          }

          .hero h1 {
            margin: 0 0 4px;
            font-size: 18px;
          }

          .hero p {
            margin: 1px 0;
            color: #475569;
            font-size: 10px;
          }

          .match-date-value {
            color: #000000;
            font-weight: 800;
          }

          .pill-row {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 4px 8px;
            border-radius: 999px;
            background: #dbeafe;
            color: #1d4ed8;
            font-weight: 700;
            font-size: 9px;
          }

          .summary-box {
            border: 1px solid #dbeafe;
            border-radius: 12px;
            background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
            padding: 8px;
            display: grid;
            gap: 8px;
          }

          .summary-box h2 {
            margin: 0;
            font-size: 13px;
          }

          .summary-box p {
            margin: 0;
            color: #475569;
            font-size: 9px;
          }

          .team-table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
          }

          .team-table th,
          .team-table td {
            border: 1px solid #dbeafe;
            padding: 6px 8px;
            vertical-align: middle;
          }

          .team-table th {
            background: #dbeafe;
            color: #1e3a8a;
            font-size: 10px;
            text-align: left;
          }

          .team-table td {
            background: #ffffff;
            font-size: 9.5px;
            line-height: 1.15;
          }

          .team-table tbody tr:nth-child(odd) td {
            background: #f8fafc;
          }

          .captain-row td {
            background: #eff6ff !important;
            font-weight: 800;
          }

          .captain-cell {
            background: #eff6ff !important;
          }

          .player-index {
            color: #64748b;
            font-weight: 700;
            margin-right: 4px;
          }

          .player-name {
            font-weight: 700;
          }

          .captain-badge {
            float: right;
            padding: 2px 6px;
            border-radius: 999px;
            background: #dbeafe;
            color: #1d4ed8;
            font-size: 8px;
            font-weight: 800;
            text-transform: uppercase;
          }

          .footer-note {
            margin: 0;
            color: #475569;
            font-size: 9px;
          }

          @media print {
            body {
              background: #ffffff;
              padding: 0;
            }

            .sheet {
              max-width: none;
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
              <p>Date of Match: <strong class="match-date-value">${escapeHtml(formattedDate)}</strong></p>
            </div>
            <div class="pill-row">
              <span class="pill">Team A Captain: ${escapeHtml(captainAName)}</span>
              <span class="pill">Team B Captain: ${escapeHtml(captainBName)}</span>
            </div>
          </header>

          <section class="summary-box">
            <div>
              <h2>Captain Team Sheet</h2>
              <p>Both teams are grouped in one compact table so the PDF stays on a single page.</p>
            </div>

            <table class="team-table">
              <thead>
                <tr>
                  <th>Team A (${teamAIds.length})</th>
                  <th>Team B (${teamBIds.length})</th>
                </tr>
              </thead>
              <tbody>
                <tr class="captain-row">
                  <td>Captain: ${escapeHtml(captains?.teamA ? getPlayerName(players, captains.teamA) : '--')}</td>
                  <td>Captain: ${escapeHtml(captains?.teamB ? getPlayerName(players, captains.teamB) : '--')}</td>
                </tr>
                ${getCaptainTableRowsMarkup({
                  teamAIds,
                  teamBIds,
                  captainAId: captains?.teamA,
                  captainBId: captains?.teamB,
                  players,
                })}
              </tbody>
            </table>
          </section>

          <p class="footer-note">Use the print dialog and choose "Save as PDF" to share this team sheet.</p>
        </main>
      </body>
    </html>
  `;
};

const getCaptainHistoryWinnerLabel = (match) => {
  if (!match) {
    return 'Not recorded';
  }

  if (match.status === 'no-match') {
    return 'No Match';
  }

  if (!match.winnerTeam) {
    return 'Result pending';
  }

  return match.winnerTeam === 'teamA' ? 'Team A' : 'Team B';
};

const getCaptainHistoryPaymentStatusLabel = (match) => {
  if (!match) {
    return 'Not recorded';
  }

  if (match.status === 'no-match') {
    return 'No payment needed';
  }

  return match.penaltyPaid === true ? 'Paid' : 'Pending';
};

const getCaptainHistoryPaymentStatusClassName = (match) => {
  if (!match || match.status === 'no-match') {
    return 'status-neutral';
  }

  return match.penaltyPaid === true ? 'status-paid' : 'status-pending';
};

const getCaptainHistoryWeekHtml = ({ title, weekId, matches = [], players = [] }) => {
  const sortedMatches = matches.slice().sort((a, b) => (a.date < b.date ? 1 : -1));

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
        <style>
          ${PDF_PRINT_COLOR_CSS}
          @page {
            size: A4 portrait;
            margin: 8mm;
          }

          :root {
            color-scheme: light;
            font-family: Arial, sans-serif;
          }

          body {
            margin: 0;
            padding: 12px;
            color: #0f172a;
            background: #f8fafc;
            font-size: 11px;
          }

          .sheet {
            max-width: 980px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 16px;
            padding: 16px;
            display: grid;
            gap: 12px;
          }

          .hero {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 12px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
          }

          .hero h1 {
            margin: 0 0 4px;
            font-size: 22px;
          }

          .hero p {
            margin: 2px 0;
            color: #475569;
          }

          .pill-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .pill {
            border-radius: 999px;
            padding: 4px 10px;
            background: #e2e8f0;
            color: #334155;
            font-weight: 700;
          }

          .table-wrap {
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #ffffff;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          th,
          td {
            border-bottom: 1px solid #e2e8f0;
            padding: 8px 10px;
            text-align: left;
            vertical-align: top;
          }

          thead th {
            background: #f1f5f9;
            color: #334155;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.03em;
          }

          tbody tr:last-child td {
            border-bottom: 0;
          }

          .captain-win {
            color: #15803d;
            font-weight: 800;
          }

          .captain-loss {
            color: #dc2626;
            font-weight: 800;
          }

          .captain-neutral,
          .status-neutral {
            color: #334155;
            font-weight: 700;
          }

          .status-paid {
            color: #15803d;
            font-weight: 800;
          }

          .status-pending {
            color: #dc2626;
            font-weight: 800;
          }

          .footer-note {
            margin: 0;
            color: #475569;
            font-size: 10px;
          }

          @media print {
            body {
              background: #ffffff;
              padding: 0;
            }

            .sheet {
              max-width: none;
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
              <p>Date-wise records: ${escapeHtml(String(sortedMatches.length))}</p>
            </div>
            <div class="pill-row">
              <span class="pill">Saved in Firebase</span>
              <span class="pill">Week-wise history</span>
            </div>
          </header>

          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Team A Captain</th>
                  <th>Team B Captain</th>
                  <th>Winner</th>
                  <th>Losing Captain</th>
                  <th>Penalty</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                ${sortedMatches
                  .map((match) => {
                    const teamAClassName =
                      match.status === 'no-match' || !match.winnerTeam
                        ? 'captain-neutral'
                        : match.loserCaptain && match.captainA === match.loserCaptain
                        ? 'captain-loss'
                        : 'captain-win';
                    const teamBClassName =
                      match.status === 'no-match' || !match.winnerTeam
                        ? 'captain-neutral'
                        : match.loserCaptain && match.captainB === match.loserCaptain
                        ? 'captain-loss'
                        : 'captain-win';

                    return `
                      <tr>
                        <td><strong>${escapeHtml(formatDate(match.date))}</strong></td>
                        <td><span class="${escapeHtml(teamAClassName)}">${escapeHtml(match.captainA ? getPlayerName(players, match.captainA) : match.status === 'no-match' ? 'No Match' : '--')}</span></td>
                        <td><span class="${escapeHtml(teamBClassName)}">${escapeHtml(match.captainB ? getPlayerName(players, match.captainB) : match.status === 'no-match' ? 'No Match' : '--')}</span></td>
                        <td><strong>${escapeHtml(getCaptainHistoryWinnerLabel(match))}</strong></td>
                        <td>${escapeHtml(match.status === 'no-match' ? 'No Match' : match.loserCaptain ? getPlayerName(players, match.loserCaptain) : 'Result pending')}</td>
                        <td>${match.status === 'no-match' ? 'No penalty' : getCurrencyHtml(match.penalty)}</td>
                        <td><span class="${escapeHtml(getCaptainHistoryPaymentStatusClassName(match))}">${escapeHtml(getCaptainHistoryPaymentStatusLabel(match))}</span></td>
                      </tr>
                    `;
                  })
                  .join('')}
              </tbody>
            </table>
          </div>

          <p class="footer-note">Use the print dialog and choose "Save as PDF" to keep this captain history by week.</p>
        </main>
      </body>
    </html>
  `;
};

const getFundTypeLabel = (type) => {
  if (type === 'credit-fixed') {
    return 'जमा (Fixed ₹100)';
  }

  if (type === 'credit-manual' || type === 'credit') {
    return 'जमा';
  }

  return 'खर्च';
};

const isFundCreditType = (type) => type === 'credit-fixed' || type === 'credit-manual' || type === 'credit';
const isRelevantMatchFeeRecord = (match) =>
  match && match.status !== 'no-match' && match.loserCaptain && (Number(match.penalty) || 0) > 0;
const getCurrencyHtml = (value) => `&#8377;${escapeHtml(String(Number(value) || 0))}`;

const getGroundFundSummaryHtml = ({ title, matches = [], players = [], transactions = [] }) => {
  const sortedTransactions = transactions
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const matchFeeRecords = matches
    .filter(isRelevantMatchFeeRecord)
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const matchFeeTotals = matchFeeRecords.reduce(
    (accumulator, match) => {
      const penalty = Number(match.penalty) || 0;
      accumulator.totalPenalty += penalty;

      if (match.penaltyPaid === true) {
        accumulator.totalCollected += penalty;
      } else {
        accumulator.totalOutstanding += penalty;
      }

      return accumulator;
    },
    { totalPenalty: 0, totalCollected: 0, totalOutstanding: 0 }
  );

  const groundExpenseTotals = sortedTransactions.reduce(
    (accumulator, transaction) => {
      const amount = Number(transaction.amount) || 0;
      if (isFundCreditType(transaction.type)) {
        accumulator.totalCredit += amount;
      } else {
        accumulator.totalDebit += amount;
      }
      return accumulator;
    },
    { totalCredit: 0, totalDebit: 0 }
  );

  const combinedTotals = {
    totalCredit: groundExpenseTotals.totalCredit + matchFeeTotals.totalCollected,
    totalDebit: groundExpenseTotals.totalDebit,
  };

  combinedTotals.balance = combinedTotals.totalCredit - combinedTotals.totalDebit;

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
        <style>
          ${PDF_PRINT_COLOR_CSS}
          @page {
            size: A4 portrait;
            margin: 8mm;
          }

          :root {
            color-scheme: light;
            font-family: Arial, sans-serif;
          }

          body {
            margin: 0;
            padding: 14px;
            color: #0f172a;
            background: #f8fafc;
            font-size: 11px;
          }

          .sheet {
            max-width: 980px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 16px;
            padding: 16px;
            display: grid;
            gap: 12px;
          }

          .hero {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 12px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
          }

          .hero h1 {
            margin: 0 0 4px;
            font-size: 22px;
          }

          .hero p {
            margin: 2px 0;
            color: #475569;
          }

          .pill-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .pill {
            border-radius: 999px;
            padding: 4px 10px;
            background: #e2e8f0;
            color: #334155;
            font-weight: 700;
          }

          .pill.credit {
            background: #dcfce7;
            color: #166534;
          }

          .pill.debit {
            background: #fee2e2;
            color: #b91c1c;
          }

          .summary-grid,
          .details-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .summary-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .summary-card,
          .section-card {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #f8fafc;
            padding: 10px;
            display: grid;
            gap: 8px;
          }

          .summary-card span {
            color: #475569;
            font-weight: 700;
          }

          .summary-card strong {
            font-size: 20px;
          }

          .summary-card.credit strong,
          .type-credit,
          .status-paid {
            color: #15803d;
          }

          .summary-card.debit strong,
          .type-debit,
          .status-pending {
            color: #dc2626;
          }

          .summary-card.balance strong {
            color: #1d4ed8;
          }

          .section-card h2 {
            margin: 0;
            font-size: 15px;
          }

          .stats-list {
            display: grid;
            gap: 8px;
          }

          .stats-row {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 8px 10px;
            border-radius: 10px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            font-weight: 700;
          }

          .table-wrap {
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            background: #ffffff;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          th,
          td {
            border-bottom: 1px solid #e2e8f0;
            padding: 7px 8px;
            text-align: left;
            vertical-align: top;
          }

          thead th {
            background: #f1f5f9;
            color: #334155;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.03em;
          }

          tbody tr:last-child td,
          tfoot td {
            border-bottom: 0;
          }

          .section-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
          }

          .meta-copy {
            color: #475569;
            font-weight: 700;
          }

          .empty-state {
            margin: 0;
            color: #64748b;
            font-weight: 700;
          }

          .footer-note {
            margin: 0;
            color: #475569;
            font-size: 10px;
          }

          @media print {
            body {
              background: #ffffff;
              padding: 0;
            }

            .sheet {
              max-width: none;
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
              <p>Match fee records: ${escapeHtml(String(matchFeeRecords.length))}</p>
              <p>Ground transactions: ${escapeHtml(String(sortedTransactions.length))}</p>
            </div>
            <div class="pill-row">
              <span class="pill credit">Total Credit: ${getCurrencyHtml(combinedTotals.totalCredit)}</span>
              <span class="pill debit">Total Debit: ${getCurrencyHtml(combinedTotals.totalDebit)}</span>
              <span class="pill">Balance: ${getCurrencyHtml(combinedTotals.balance)}</span>
            </div>
          </header>

          <section class="summary-grid">
            <article class="summary-card credit">
              <span>Total Credit</span>
              <strong>${getCurrencyHtml(combinedTotals.totalCredit)}</strong>
            </article>
            <article class="summary-card debit">
              <span>Total Debit</span>
              <strong>${getCurrencyHtml(combinedTotals.totalDebit)}</strong>
            </article>
            <article class="summary-card balance">
              <span>Balance</span>
              <strong>${getCurrencyHtml(combinedTotals.balance)}</strong>
            </article>
          </section>

          <section class="details-grid">
            <article class="section-card">
              <h2>Collection Breakdown</h2>
              <div class="stats-list">
                <div class="stats-row"><span>Collected Match Fees</span><strong>${getCurrencyHtml(matchFeeTotals.totalCollected)}</strong></div>
                <div class="stats-row"><span>Outstanding Match Fees</span><strong class="status-pending">${getCurrencyHtml(matchFeeTotals.totalOutstanding)}</strong></div>
                <div class="stats-row"><span>Ground Credits</span><strong class="status-paid">${getCurrencyHtml(groundExpenseTotals.totalCredit)}</strong></div>
                <div class="stats-row"><span>Ground Expenses</span><strong class="status-pending">${getCurrencyHtml(groundExpenseTotals.totalDebit)}</strong></div>
              </div>
            </article>

            <article class="section-card">
              <h2>Calculation</h2>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ground Credits</td>
                      <td>${getCurrencyHtml(groundExpenseTotals.totalCredit)}</td>
                    </tr>
                    <tr>
                      <td>Collected Match Fees</td>
                      <td>${getCurrencyHtml(matchFeeTotals.totalCollected)}</td>
                    </tr>
                    <tr>
                      <td>Total Credit</td>
                      <td>${getCurrencyHtml(combinedTotals.totalCredit)}</td>
                    </tr>
                    <tr>
                      <td>Total Debit</td>
                      <td>${getCurrencyHtml(combinedTotals.totalDebit)}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td><strong>Balance</strong></td>
                      <td><strong>${getCurrencyHtml(combinedTotals.balance)}</strong></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </article>
          </section>

          <section class="section-card">
            <div class="section-head">
              <h2>Match Fee Records</h2>
              <span class="meta-copy">Total penalty: ${getCurrencyHtml(matchFeeTotals.totalPenalty)}</span>
            </div>
            ${
              matchFeeRecords.length === 0
                ? '<p class="empty-state">No match fee records available.</p>'
                : `
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Week</th>
                      <th>Losing Captain</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${matchFeeRecords
                      .map(
                        (match) => `
                      <tr>
                        <td>${escapeHtml(match.date ? formatDate(match.date) : '--')}</td>
                        <td>${escapeHtml(match.weekId || '--')}</td>
                        <td><strong>${escapeHtml(match.loserCaptain ? getPlayerName(players, match.loserCaptain) : '--')}</strong></td>
                        <td class="${match.penaltyPaid === true ? 'status-paid' : 'status-pending'}">${match.penaltyPaid === true ? 'Paid' : 'Pending'}</td>
                        <td>${getCurrencyHtml(match.penalty)}</td>
                      </tr>
                    `
                      )
                      .join('')}
                  </tbody>
                </table>
              </div>
            `
            }
          </section>

          <section class="section-card">
            <div class="section-head">
              <h2>Ground Transactions</h2>
              <span class="meta-copy">Entries: ${escapeHtml(String(sortedTransactions.length))}</span>
            </div>
            ${
              sortedTransactions.length === 0
                ? '<p class="empty-state">No ground transactions available.</p>'
                : `
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Week</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${sortedTransactions
                      .map(
                        (transaction) => `
                      <tr>
                        <td>${escapeHtml(transaction.date ? formatDate(transaction.date) : '--')}</td>
                        <td>${escapeHtml(transaction.weekId || '--')}</td>
                        <td><strong>${escapeHtml(transaction.name || '--')}</strong></td>
                        <td class="${isFundCreditType(transaction.type) ? 'type-credit' : 'type-debit'}">${escapeHtml(getFundTypeLabel(transaction.type))}</td>
                        <td>${getCurrencyHtml(transaction.amount)}</td>
                      </tr>
                    `
                      )
                      .join('')}
                  </tbody>
                </table>
              </div>
            `
            }
          </section>

          <p class="footer-note">Use the print dialog and choose "Save as PDF" to keep this ground fund summary.</p>
        </main>
      </body>
    </html>
  `;
};

const getFundTransactionsHtml = ({ title, transactions = [], archives = [] }) => {
  const sortedCurrent = transactions
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const currentTotals = sortedCurrent.reduce(
    (accumulator, transaction) => {
      if (isFundCreditType(transaction.type)) {
        accumulator.credit += Number(transaction.amount) || 0;
      } else {
        accumulator.debit += Number(transaction.amount) || 0;
      }
      return accumulator;
    },
    { credit: 0, debit: 0 }
  );

  const sortedArchives = archives
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((archive) => ({
      ...archive,
      transactions: (archive.transactions || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1)),
    }));

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
        <style>
          ${PDF_PRINT_COLOR_CSS}
          @page {
            size: A4 portrait;
            margin: 8mm;
          }

          :root {
            color-scheme: light;
            font-family: Arial, sans-serif;
          }

          body {
            margin: 0;
            padding: 14px;
            color: #0f172a;
            background: #f8fafc;
            font-size: 11px;
          }

          .sheet {
            max-width: 980px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 16px;
            padding: 16px;
            display: grid;
            gap: 12px;
          }

          .hero {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 12px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
          }

          .hero h1 {
            margin: 0 0 4px;
            font-size: 22px;
          }

          .hero p {
            margin: 2px 0;
            color: #475569;
          }

          .pill-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .pill {
            border-radius: 999px;
            padding: 4px 10px;
            background: #e2e8f0;
            color: #334155;
            font-weight: 700;
          }

          .pill.credit {
            background: #dcfce7;
            color: #166534;
          }

          .pill.debit {
            background: #fee2e2;
            color: #b91c1c;
          }

          .section-card {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #f8fafc;
            padding: 10px;
            display: grid;
            gap: 8px;
          }

          .section-card h2 {
            margin: 0;
            font-size: 15px;
          }

          .table-wrap {
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            background: #ffffff;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          th,
          td {
            border-bottom: 1px solid #e2e8f0;
            padding: 7px 8px;
            text-align: left;
            vertical-align: top;
          }

          thead th {
            background: #f1f5f9;
            color: #334155;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.03em;
          }

          tbody tr:last-child td {
            border-bottom: 0;
          }

          .type-credit {
            color: #15803d;
            font-weight: 700;
          }

          .type-debit {
            color: #dc2626;
            font-weight: 700;
          }

          .archive-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
          }

          .archive-meta {
            color: #475569;
            font-weight: 700;
          }

          .empty-state {
            margin: 0;
            color: #64748b;
            font-weight: 700;
          }

          .footer-note {
            margin: 0;
            color: #475569;
            font-size: 10px;
          }

          @media print {
            body {
              background: #ffffff;
              padding: 0;
            }

            .sheet {
              max-width: none;
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
              <p>Total current transactions: ${escapeHtml(String(sortedCurrent.length))}</p>
              <p>Total archives: ${escapeHtml(String(sortedArchives.length))}</p>
            </div>
            <div class="pill-row">
              <span class="pill credit">जमा: ₹${escapeHtml(String(currentTotals.credit))}</span>
              <span class="pill debit">खर्च: ₹${escapeHtml(String(currentTotals.debit))}</span>
              <span class="pill">शिल्लक: ₹${escapeHtml(String(currentTotals.credit - currentTotals.debit))}</span>
            </div>
          </header>

          <section class="section-card">
            <h2>Current Transactions</h2>
            ${
              sortedCurrent.length === 0
                ? '<p class="empty-state">No current transactions available.</p>'
                : `
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Week</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${sortedCurrent
                      .map(
                        (transaction) => `
                      <tr>
                        <td>${escapeHtml(transaction.date ? formatDate(transaction.date) : '--')}</td>
                        <td>${escapeHtml(transaction.weekId || '--')}</td>
                        <td><strong>${escapeHtml(transaction.name || '--')}</strong></td>
                        <td class="${isFundCreditType(transaction.type) ? 'type-credit' : 'type-debit'}">${escapeHtml(getFundTypeLabel(transaction.type))}</td>
                        <td>₹${escapeHtml(String(transaction.amount || 0))}</td>
                      </tr>
                    `
                      )
                      .join('')}
                  </tbody>
                </table>
              </div>
            `
            }
          </section>

          <section class="section-card">
            <h2>All Archived Transaction History</h2>
            ${
              sortedArchives.length === 0
                ? '<p class="empty-state">No archived transaction history available.</p>'
                : sortedArchives
                    .map((archive) => {
                      const archiveTotals = (archive.transactions || []).reduce(
                        (accumulator, transaction) => {
                          if (isFundCreditType(transaction.type)) {
                            accumulator.credit += Number(transaction.amount) || 0;
                          } else {
                            accumulator.debit += Number(transaction.amount) || 0;
                          }
                          return accumulator;
                        },
                        { credit: 0, debit: 0 }
                      );

                      return `
                        <article class="section-card">
                          <div class="archive-head">
                            <strong>${escapeHtml(archive.date ? formatDate(archive.date) : '--')}</strong>
                            <span class="archive-meta">Week: ${escapeHtml(archive.weekId || '--')} | Entries: ${escapeHtml(String((archive.transactions || []).length))}</span>
                            <span class="archive-meta">₹${escapeHtml(String(archiveTotals.credit - archiveTotals.debit))}</span>
                          </div>
                          ${
                            (archive.transactions || []).length === 0
                              ? '<p class="empty-state">No transactions in this archive.</p>'
                              : `
                            <div class="table-wrap">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Date</th>
                                    <th>Week</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  ${(archive.transactions || [])
                                    .map(
                                      (transaction) => `
                                    <tr>
                                      <td>${escapeHtml(transaction.date ? formatDate(transaction.date) : '--')}</td>
                                      <td>${escapeHtml(transaction.weekId || '--')}</td>
                                      <td><strong>${escapeHtml(transaction.name || '--')}</strong></td>
                                      <td class="${isFundCreditType(transaction.type) ? 'type-credit' : 'type-debit'}">${escapeHtml(getFundTypeLabel(transaction.type))}</td>
                                      <td>₹${escapeHtml(String(transaction.amount || 0))}</td>
                                    </tr>
                                  `
                                    )
                                    .join('')}
                                </tbody>
                              </table>
                            </div>
                          `
                          }
                        </article>
                      `;
                    })
                    .join('')
            }
          </section>

          <p class="footer-note">Use the print dialog and choose "Save as PDF" to keep this complete transaction history.</p>
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

export const openCaptainHistoryWeekPdf = ({ weekId, matches = [], players = [] }) => {
  if (typeof window === 'undefined' || !weekId || matches.length === 0) {
    return false;
  }

  return openPrintDocument(
    getCaptainHistoryWeekHtml({
      title: 'Patoda XI Captain History by Week',
      weekId,
      matches,
      players,
    })
  );
};

export const openWeekSummaryPdf = ({ week, players = [] }) => {
  if (typeof window === 'undefined' || !week) {
    return false;
  }

  return openPrintDocument(
    getWeeklySummaryHtml({
      title: 'Patoda XI Weekly Summary',
      week,
      players,
    })
  );
};

export const openFundTransactionsPdf = ({ transactions = [], archives = [] }) => {
  if (typeof window === 'undefined') {
    return false;
  }

  return openPrintDocument(
    getFundTransactionsHtml({
      title: 'Patoda XI Transactions History',
      transactions,
      archives,
    })
  );
};

export const openGroundFundSummaryPdf = ({ matches = [], players = [], transactions = [] }) => {
  if (typeof window === 'undefined') {
    return false;
  }

  return openPrintDocument(
    getGroundFundSummaryHtml({
      title: 'Patoda XI Ground Fund Summary',
      matches,
      players,
      transactions,
    })
  );
};
