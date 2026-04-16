import { useState } from 'react';
import { formatDate } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
import { useAppData } from '../context/AppDataContext';

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
  const paymentStatusLabel = isNoMatch ? 'No Match' : penaltyPaid ? 'Paid' : 'Not Paid';
  const paymentStatusClass = isNoMatch ? 'neutral' : penaltyPaid ? 'paid' : 'unpaid';

  return (
    <div className={`match-card ${isNoMatch || penaltyPaid ? 'paid' : 'unpaid'}`}>
      <div className="match-card-top">
        <div className="match-card-date-group">
          <span className="match-card-date-label">Match Date</span>
          <strong className="match-card-date">{formatDate(match.date)}</strong>
        </div>
        <div className="match-card-top-meta">
          <div className="match-week">{match.weekId}</div>
          <span className={`match-card-status-chip ${paymentStatusClass}`}>{paymentStatusLabel}</span>
        </div>
      </div>

      <div className="match-card-grid">
        <div className="match-card-field">
          <span className="match-card-field-label">Winner</span>
          <strong className="match-card-field-value">
            {isNoMatch ? 'No Match' : match.winnerTeam === 'teamA' ? 'Team A' : 'Team B'}
          </strong>
        </div>

        <div className="match-card-field">
          <span className="match-card-field-label">Captain A</span>
          <strong className={`match-card-field-value ${captainAResultClass}`}>
            {match.captainA ? getPlayerName(players, match.captainA) : '--'}
          </strong>
        </div>

        <div className="match-card-field">
          <span className="match-card-field-label">Captain B</span>
          <strong className={`match-card-field-value ${captainBResultClass}`}>
            {match.captainB ? getPlayerName(players, match.captainB) : '--'}
          </strong>
        </div>

        {isNoMatch ? (
          <div className="match-card-field match-card-field-wide">
            <span className="match-card-field-label">Status</span>
            <strong className="match-card-field-value">{match.score || 'No match'}</strong>
          </div>
        ) : (
          <>
            <div className="match-card-field">
              <span className="match-card-field-label">Penalty</span>
              <strong className="match-card-field-value">{`\u20B9${match.penalty}`}</strong>
              <span className="match-card-field-meta">{loserName}</span>
            </div>
            {canEdit ? (
              <div className="match-card-field match-card-field-wide">
                <label className="match-card-field-label" htmlFor={`payment-status-${match.id}`}>Payment Status</label>
                <select
                  id={`payment-status-${match.id}`}
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
              <div className="match-card-field">
                <span className="match-card-field-label">Payment Status</span>
                <span className={`status-select ${penaltyPaid ? 'paid' : 'unpaid'}`}>
                  {penaltyPaid ? 'Paid' : 'Not Paid'}
                </span>
              </div>
            )}
            {error ? <p className="warning-text">{error}</p> : null}
          </>
        )}
      </div>
    </div>
  );
}

export default MatchCard;
