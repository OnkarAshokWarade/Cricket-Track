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
