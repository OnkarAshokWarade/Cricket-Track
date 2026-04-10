import { useMemo } from 'react';
import { getPlayerName } from '../utils/teamUtils';
import { formatDate } from '../utils/dateUtils';

const formatMarathiDate = (dateValue = new Date()) => {
  return new Intl.DateTimeFormat('mr-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateValue);
};

const normalizePlayerName = (players, playerId) => {
  const name = getPlayerName(players, playerId);
  return name === 'Unknown' ? 'अज्ञात' : name;
};

const formatAmountMarathi = (amount = 0) =>
  new Intl.NumberFormat('mr-IN', { maximumFractionDigits: 0 }).format(amount);

function MatchDetails({ todayMatch, players, pendingMatches = [] }) {
  const matchInfo = useMemo(() => {
    if (!todayMatch) return null;

    const loserName = normalizePlayerName(players, todayMatch.loserCaptain);
    const captainAName = normalizePlayerName(players, todayMatch.captainA);
    const captainBName = normalizePlayerName(players, todayMatch.captainB);

    return {
      winnerLabel: todayMatch.winnerTeam === 'teamA' ? 'टीम A' : 'टीम B',
      loserName,
      captainAName,
      captainBName,
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
        penalty: match.penalty || 0,
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

      {!matchInfo && <p className="empty-state">आजचा सामना अद्याप नोंदवलेला नाही.</p>}

      {matchInfo && (
        <div className="match-details-body">
          <div className="match-details-row">
            <span className="match-details-label">विजेता टीम</span>
            <strong className="match-details-value">{matchInfo.winnerLabel}</strong>
          </div>
          <div className="match-details-row">
            <span className="match-details-label">कर्णधार</span>
            <strong className="match-details-value">{matchInfo.captainAName} / {matchInfo.captainBName}</strong>
          </div>
          <div className="match-details-row">
            <span className="match-details-label">पराभूत कर्णधार</span>
            <strong className="match-details-value">{matchInfo.loserName}</strong>
          </div>
          <div className="match-details-row">
            <span className="match-details-label">मॅच फी</span>
            <strong className="match-details-value">₹{matchInfo.penaltyAmount}</strong>
          </div>
          <div className="match-details-row">
            <span className="match-details-label">पेमेंट स्थिती</span>
            <strong className={`match-details-value ${matchInfo.pendingFee ? 'pending' : 'paid'}`}>
              {matchInfo.pendingFee ? 'बाकी आहे' : 'भरली आहे'}
            </strong>
          </div>
        </div>
      )}

      {hasPendingFee && (
        <aside className="match-fee-toast visible" role="status" aria-live="polite">
          <p className="match-fee-toast-title">प्रलंबित मॅच फी सूचना</p>
          <ul className="match-fee-toast-list">
            {pendingNotices.map((notice) => (
              <li key={notice.id}>
                दिनांक {notice.date}: कृपया <strong className="match-fee-toast-name">{notice.loserName}</strong> लवकरात लवकर {notice.penaltyText} रुपये उबेद पानसरे यांच्याकडे जमा करा.
              </li>
            ))}
          </ul>
        </aside>
      )}
    </section>
  );
}

export default MatchDetails;
