import { useState } from 'react';
import { formatDate } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
import { useAppData } from '../context/AppDataContext';

function MatchCard({ match, players }) {
  const { updateMatch } = useAppData();
  const [isUpdating, setIsUpdating] = useState(false);

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
    <div className={`match-card ${penaltyPaid ? 'paid' : 'unpaid'}`}>
      <div className="match-header">
        <div className="match-date">{formatDate(match.date)}</div>
        <div className="match-week">{match.weekId}</div>
      </div>

      <div className="match-details">
        <div className="match-result">
          <span className="winner-badge">
            Winner: {match.winnerTeam === 'teamA' ? 'Team A' : 'Team B'}
          </span>
        </div>

        <div className="captains-info">
          <div className="captain-item">
            <span className="label">Captain A:</span>
            <span className="name">{getPlayerName(players, match.captainA)}</span>
          </div>
          <div className="captain-item">
            <span className="label">Captain B:</span>
            <span className="name">{getPlayerName(players, match.captainB)}</span>
          </div>
        </div>

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
              onChange={(e) => handlePenaltyStatusChange(e.target.value === 'paid')}
              disabled={isUpdating}
              className={`status-select ${penaltyPaid ? 'paid' : 'unpaid'}`}
            >
              <option value="not-paid">Not Paid</option>
              <option value="paid">Paid</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
