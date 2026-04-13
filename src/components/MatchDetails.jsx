import { useMemo } from 'react';
import { getPlayerName } from '../utils/teamUtils';
import { formatDate } from '../utils/dateUtils';

const UNKNOWN_PLAYER_LABEL = '\u0905\u091c\u094d\u091e\u093e\u0924';
const NO_MATCH_STATUS_LABEL = '\u0906\u091c \u0938\u093e\u092e\u0928\u093e \u091d\u093e\u0932\u093e \u0928\u093e\u0939\u0940.';
const NO_TODAY_MATCH_LABEL = '\u0906\u091c\u091a\u093e \u0938\u093e\u092e\u0928\u093e \u0905\u0926\u094d\u092f\u093e\u092a \u0928\u094b\u0902\u0926\u0935\u0932\u0947\u0932\u093e \u0928\u093e\u0939\u0940.';
const WINNER_TEAM_A_LABEL = '\u091f\u0940\u092e A';
const WINNER_TEAM_B_LABEL = '\u091f\u0940\u092e B';
const STATUS_LABEL = '\u0938\u094d\u0925\u093f\u0924\u0940';
const WINNER_LABEL = '\u0935\u093f\u091c\u0947\u0924\u093e \u091f\u0940\u092e';
const CAPTAINS_LABEL = '\u0915\u0930\u094d\u0923\u0927\u093e\u0930';
const LOSER_CAPTAIN_LABEL = '\u092a\u0930\u093e\u092d\u0942\u0924 \u0915\u0930\u094d\u0923\u0927\u093e\u0930';
const MATCH_FEE_LABEL = '\u092e\u0945\u091a \u092b\u0940';
const PAYMENT_STATUS_LABEL = '\u092a\u0947\u092e\u0947\u0902\u091f \u0938\u094d\u0925\u093f\u0924\u0940';
const PENDING_STATUS_LABEL = '\u092c\u093e\u0915\u0940 \u0906\u0939\u0947';
const PAID_STATUS_LABEL = '\u092d\u0930\u0932\u0940 \u0906\u0939\u0947';
const PENDING_NOTICE_TITLE = '\u092a\u094d\u0930\u0932\u0902\u092c\u093f\u0924 \u092e\u0945\u091a \u092b\u0940 \u0938\u0942\u091a\u0928\u093e';
const RECEIVER_NAME_MR = '\u0909\u092c\u0947\u0926 \u0936\u0947\u0916';

const formatMarathiDate = (dateValue = new Date()) =>
  new Intl.DateTimeFormat('mr-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateValue);

const normalizePlayerName = (players, playerId) => {
  const name = getPlayerName(players, playerId);
  return name === 'Unknown' ? UNKNOWN_PLAYER_LABEL : name;
};

const formatAmountMarathi = (amount = 0) =>
  new Intl.NumberFormat('mr-IN', { maximumFractionDigits: 0 }).format(amount);

function MatchDetails({ todayMatch, players, pendingMatches = [] }) {
  const matchInfo = useMemo(() => {
    if (!todayMatch) return null;

    if (todayMatch.status === 'no-match') {
      return {
        isNoMatch: true,
        statusLabel: NO_MATCH_STATUS_LABEL,
        captainAName: todayMatch.captainA ? normalizePlayerName(players, todayMatch.captainA) : '--',
        captainBName: todayMatch.captainB ? normalizePlayerName(players, todayMatch.captainB) : '--',
        penaltyAmount: 0,
        pendingFee: false,
      };
    }

    const loserName = normalizePlayerName(players, todayMatch.loserCaptain);
    const captainAName = normalizePlayerName(players, todayMatch.captainA);
    const captainBName = normalizePlayerName(players, todayMatch.captainB);

    return {
      isNoMatch: false,
      winnerLabel: todayMatch.winnerTeam === 'teamA' ? WINNER_TEAM_A_LABEL : WINNER_TEAM_B_LABEL,
      loserName,
      captainAName,
      captainBName,
      captainAResultClass: todayMatch.winnerTeam === 'teamA' ? 'captain-win-color' : 'captain-loss-color',
      captainBResultClass: todayMatch.winnerTeam === 'teamB' ? 'captain-win-color' : 'captain-loss-color',
      penaltyAmount: todayMatch.penalty || 0,
      pendingFee: todayMatch.penaltyPaid !== true,
    };
  }, [players, todayMatch]);

  const pendingNotices = useMemo(
    () =>
      pendingMatches.map((match) => ({
        id: match.id,
        date: formatDate(match.date),
        loserName: normalizePlayerName(players, match.loserCaptain),
        penaltyText: formatAmountMarathi(match.penalty || 0),
      })),
    [pendingMatches, players]
  );

  const hasPendingFee = pendingNotices.length > 0;

  return (
    <section className="card match-details-widget">
      <div className="match-details-header">
        <p className="match-details-date">{formatMarathiDate(new Date())}</p>
        <h2 className="card-title">Match Details</h2>
      </div>

      {!matchInfo && <p className="empty-state">{NO_TODAY_MATCH_LABEL}</p>}

      {matchInfo ? (
        <div className="match-details-body">
          <div className="match-details-row">
            <span className="match-details-label">{matchInfo.isNoMatch ? STATUS_LABEL : WINNER_LABEL}</span>
            <strong className="match-details-value">{matchInfo.isNoMatch ? matchInfo.statusLabel : matchInfo.winnerLabel}</strong>
          </div>
          <div className="match-details-row">
            <span className="match-details-label">{CAPTAINS_LABEL}</span>
            <strong className="match-details-value">
              {matchInfo.isNoMatch ? (
                `${matchInfo.captainAName} / ${matchInfo.captainBName}`
              ) : (
                <>
                  <span className={matchInfo.captainAResultClass}>{matchInfo.captainAName}</span>
                  {' / '}
                  <span className={matchInfo.captainBResultClass}>{matchInfo.captainBName}</span>
                </>
              )}
            </strong>
          </div>

          {!matchInfo.isNoMatch ? (
            <>
              <div className="match-details-row">
                <span className="match-details-label">{LOSER_CAPTAIN_LABEL}</span>
                <strong className="match-details-value captain-loss-color">{matchInfo.loserName}</strong>
              </div>
              <div className="match-details-row">
                <span className="match-details-label">{MATCH_FEE_LABEL}</span>
                <strong className="match-details-value">{`\u20B9${matchInfo.penaltyAmount}`}</strong>
              </div>
              <div className="match-details-row">
                <span className="match-details-label">{PAYMENT_STATUS_LABEL}</span>
                <strong className={`match-details-value ${matchInfo.pendingFee ? 'pending' : 'paid'}`}>
                  {matchInfo.pendingFee ? PENDING_STATUS_LABEL : PAID_STATUS_LABEL}
                </strong>
              </div>
            </>
          ) : null}
        </div>
      ) : null}

      {hasPendingFee ? (
        <aside className="match-fee-toast visible" role="status" aria-live="polite">
          <p className="match-fee-toast-title">{PENDING_NOTICE_TITLE}</p>
          <ul className="match-fee-toast-list">
            {pendingNotices.map((notice) => (
              <li key={notice.id}>
                {`\u0926\u093f\u0928\u093e\u0902\u0915 ${notice.date}: `}
                <strong className="match-fee-toast-name">{notice.loserName}</strong>
                {` \u092f\u093e\u0902\u0928\u0940 \u0932\u0935\u0915\u0930\u093e\u0924 \u0932\u0935\u0915\u0930 \u20B9${notice.penaltyText} ${RECEIVER_NAME_MR} \u092f\u093e\u0902\u091a\u094d\u092f\u093e\u0915\u0921\u0947 \u091c\u092e\u093e \u0915\u0930\u093e.`}
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </section>
  );
}

export default MatchDetails;
