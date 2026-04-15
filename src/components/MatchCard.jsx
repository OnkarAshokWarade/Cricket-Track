import { useState } from 'react';
import { formatDate } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
import { useAppData } from '../context/AppDataContext';

const PAYMENT_RECEIVER_MR = '\u0909\u092c\u0947\u0926 \u0936\u0947\u0916';

function MatchCard({ match, players, canEdit = false }) {
  const { updateMatch } = useAppData();
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');
  const isNoMatch = match.status === 'no-match';
  const captainAResultClass = !isNoMatch ? (match.winnerTeam === 'teamA' ? 'captain-win-color' : 'captain-loss-color') : '';
  const captainBResultClass = !isNoMatch ? (match.winnerTeam === 'teamB' ? 'captain-win-color' : 'captain-loss-color') : '';
  const loserName = match.loserCaptain ? getPlayerName(players, match.loserCaptain) : '--';

  const handlePenaltyStatusChange = async (newStatus) => {
    if (!canEdit) {
      return;
    }

    setIsUpdating(true);
    setError('');
    try {
      await updateMatch(match.id, { penaltyPaid: newStatus });
    } catch (updateError) {
      console.error('Error updating penalty status:', updateError);
      setError('Payment status could not be saved.');
    } finally {
      setIsUpdating(false);
    }
  };

  const penaltyPaid = match.penaltyPaid !== undefined ? match.penaltyPaid : false;

  return (
    <div className={`match-card ${isNoMatch || penaltyPaid ? 'paid' : 'unpaid'}`}>
      <div className="match-header">
        <div className="match-week">{match.weekId}</div>
      </div>

      <div className="match-details">
        <div className="match-summary-row">
          <span className="match-summary-label">Date:</span>
          <strong className="match-summary-value">{formatDate(match.date)}</strong>
        </div>

        <div className="match-summary-row">
          <span className="match-summary-label">Winner:</span>
          <strong className="match-summary-value">
            {isNoMatch ? 'No Match' : match.winnerTeam === 'teamA' ? 'Team A' : 'Team B'}
          </strong>
        </div>

        <div className="captains-info">
          <div className="captain-item">
            <span className="label">Captain A:</span>
            <span className={`name ${captainAResultClass}`}>{match.captainA ? getPlayerName(players, match.captainA) : '--'}</span>
          </div>
          <div className="captain-item">
            <span className="label">Captain B:</span>
            <span className={`name ${captainBResultClass}`}>{match.captainB ? getPlayerName(players, match.captainB) : '--'}</span>
          </div>
        </div>

        {isNoMatch ? (
          <div className="penalty-section">
            <div className="penalty-info">
              <span className="label">Status:</span>
              <span className="amount">{match.score || 'No match'}</span>
            </div>
          </div>
        ) : (
          <div className="penalty-section">
            <div className="penalty-info">
              <span className="label">Penalty:</span>
              <span className="amount">{`\u20B9${match.penalty}`}</span>
              <span className="loser">({loserName})</span>
            </div>

            {!penaltyPaid ? (
              <p className="match-unpaid-notice">
                <strong className="match-unpaid-name">{loserName}</strong>
                {`: ${match.penalty} \u0930\u0941\u092a\u092f\u0947 \u092c\u093e\u0915\u0940 \u0906\u0939\u0947\u0924, ${PAYMENT_RECEIVER_MR} \u092f\u093e\u0902\u0928\u093e \u0926\u094d\u092f\u093e.`}
              </p>
            ) : null}

            {canEdit ? (
              <div className="penalty-status">
                <label className="status-label">Payment Status:</label>
                <select
                  value={penaltyPaid ? 'paid' : 'not-paid'}
                  onChange={(event) => handlePenaltyStatusChange(event.target.value === 'paid')}
                  disabled={isUpdating}
                  className={`status-select ${penaltyPaid ? 'paid' : 'unpaid'}`}
                >
                  <option value="not-paid">Not Paid</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            ) : (
              <div className="penalty-status">
                <span className="status-label">Payment Status:</span>
                <span className={`status-select ${penaltyPaid ? 'paid' : 'unpaid'}`}>
                  {penaltyPaid ? 'Paid' : 'Not Paid'}
                </span>
              </div>
            )}
            {error ? <p className="warning-text">{error}</p> : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default MatchCard;
