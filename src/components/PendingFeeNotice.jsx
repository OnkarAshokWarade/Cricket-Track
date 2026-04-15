import { useMemo } from 'react';
import { formatDate } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';

const UNKNOWN_PLAYER_LABEL = '\u0905\u091c\u094d\u091e\u093e\u0924';
const PENDING_NOTICE_TITLE = '\u092a\u094d\u0930\u0932\u0902\u092c\u093f\u0924 \u092e\u0945\u091a \u092b\u0940 \u0938\u0942\u091a\u0928\u093e';
const PENDING_NOTICE_COPY =
  '\u0916\u093e\u0932\u0940\u0932 \u0916\u0947\u0933\u093e\u0921\u0942\u0902\u0928\u0940 100 \u0930\u0941\u092a\u092f\u0947 \u0909\u092c\u0947\u0926 \u0936\u0947\u0916 \u092f\u093e\u0902\u091a\u094d\u092f\u093e\u0915\u0921\u0947 \u0932\u0935\u0915\u0930\u093e\u0924 \u0932\u0935\u0915\u0930 \u091c\u092e\u093e \u0915\u0930\u093e\u0935\u0947\u0924:';

const normalizePlayerName = (players, playerId) => {
  const name = getPlayerName(players, playerId);
  return name === 'Unknown' ? UNKNOWN_PLAYER_LABEL : name;
};

function PendingFeeNotice({ matches = [], players = [] }) {
  const pendingNotices = useMemo(
    () =>
      matches
        .filter((match) => match.status !== 'no-match' && match.penaltyPaid !== true)
        .slice()
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((match) => ({
          id: match.id,
          date: formatDate(match.date),
          loserName: normalizePlayerName(players, match.loserCaptain),
        })),
    [matches, players]
  );

  if (pendingNotices.length === 0) {
    return null;
  }

  return (
    <aside className="match-fee-toast visible" role="note" aria-live="polite">
      <p className="match-fee-toast-title">{PENDING_NOTICE_TITLE}</p>
      <p className="match-fee-toast-copy">{PENDING_NOTICE_COPY}</p>
      <ul className="match-fee-toast-list">
        {pendingNotices.map((notice) => (
          <li key={notice.id}>
            <span className="match-fee-toast-date">{notice.date}</span>
            {' \u2014 '}
            <strong className="match-fee-toast-name">{notice.loserName}</strong>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default PendingFeeNotice;
