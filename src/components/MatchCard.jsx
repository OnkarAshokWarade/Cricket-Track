import { useState } from 'react';
import { formatDate } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
import { useAppData } from '../context/AppDataContext';

function MatchCard({ match, players }) {
  const { updateMatch } = useAppData();
  const [isUpdating, setIsUpdating] = useState(false);
  const isNoMatch = match.status === 'no-match';
  const captainAResultClass = !isNoMatch ? (match.winnerTeam === 'teamA' ? 'captain-win-color' : 'captain-loss-color') : '';
  const captainBResultClass = !isNoMatch ? (match.winnerTeam === 'teamB' ? 'captain-win-color' : 'captain-loss-color') : '';

  const handlePenaltyStatusChange = async (newStatus) => {
    setIsUpdating(true);
    try {
      await updateMatch(match.id, { penaltyPaid: newStatus });
    } catch (error) {
      console.error('Error updating penalty status:', error);
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
              <span className="amount">₹{match.penalty}</span>
              <span className="loser">({getPlayerName(players, match.loserCaptain)})</span>
            </div>

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
          </div>
        )}
      </div>
    </div>
  );
}

export default MatchCard;
