import { useMemo, useState } from 'react';
import { getWeekId, todayKey, isSameDay } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
import MatchDetails from '../components/MatchDetails';
import ubedUpiQr from '../assets/ubed-upi-qr.jpeg';
import { useAppData } from '../context/AppDataContext';

const PENALTY_AMOUNT = 100;
const PAYMENT_RECEIVER_EN = 'Ubed Shaikh';
const PAYMENT_RECEIVER_MR = '\u0909\u092c\u0947\u0926 \u0936\u0947\u0916';
const PAYMENT_RECEIVER_LABEL = `${PAYMENT_RECEIVER_EN} (${PAYMENT_RECEIVER_MR})`;
const PAYMENT_UPI_ID = 'ubbus313-3@okaxis';

function MatchPage() {
  const { players, teams, captains, matches, stats, updateAppState } = useAppData();
  const [selectedWinner, setSelectedWinner] = useState('A');
  const [message, setMessage] = useState('');

  const weekId = getWeekId();
  const currentTeams = teams[weekId] || null;
  const todayCaptains = captains[weekId]?.dailyCaptains?.find((entry) => entry.date === todayKey());
  const todayMatch = matches.find((match) => isSameDay(match.date, todayKey()));

  const captainAName = todayCaptains ? getPlayerName(players, todayCaptains.teamA) : '--';
  const captainBName = todayCaptains ? getPlayerName(players, todayCaptains.teamB) : '--';
  const pendingMatches = useMemo(
    () =>
      matches
        .filter((match) => match.penaltyPaid !== true)
        .slice()
        .sort((a, b) => (a.date < b.date ? 1 : -1)),
    [matches]
  );
  const maxTeamSize = useMemo(() => {
    if (!currentTeams) return 0;
    return Math.max(currentTeams.teamA.length, currentTeams.teamB.length);
  }, [currentTeams]);

  const canRecordMatch = useMemo(() => !!currentTeams && !!todayCaptains && !todayMatch, [currentTeams, todayCaptains, todayMatch]);

  const handleSaveMatch = () => {
    if (!canRecordMatch) {
      setMessage("A match cannot be recorded right now. Please check teams and today's captains.");
      return;
    }

    const winnerTeam = selectedWinner === 'A' ? 'teamA' : 'teamB';
    const loserCaptain = selectedWinner === 'A' ? todayCaptains.teamB : todayCaptains.teamA;
    const matchEntry = {
      id: `match-${Date.now()}`,
      date: todayKey(),
      weekId,
      teamA: currentTeams.teamA,
      teamB: currentTeams.teamB,
      captainA: todayCaptains.teamA,
      captainB: todayCaptains.teamB,
      winnerTeam,
      loserCaptain,
      penalty: PENALTY_AMOUNT,
    };

    const nextMatches = [...matches, matchEntry];
    const nextStats = {
      ...stats,
      [loserCaptain]: (stats[loserCaptain] || 0) + PENALTY_AMOUNT,
    };

    updateAppState({ matches: nextMatches, stats: nextStats });
    setMessage(`Match recorded. \u20B9${PENALTY_AMOUNT} penalty assigned to ${getPlayerName(players, loserCaptain)}.`);
  };

  return (
    <section>
      <div className="top-nav">
        <div>
          <h1 className="page-title">Match</h1>
          <p className="page-intro">Record today's winning team and apply the penalty to the losing captain.</p>
        </div>
      </div>

      <div className="section-grid" style={{ gridTemplateColumns: '1fr', gap: '18px' }}>
        <MatchDetails todayMatch={todayMatch} players={players} pendingMatches={pendingMatches} />

        <div className="card">
          <h2 className="card-title">Today's match</h2>
          {!currentTeams && <p className="empty-state">Generate this week's teams first.</p>}
          {!todayCaptains && currentTeams && <p className="empty-state">Select captains for today before recording a match.</p>}

          {todayMatch && (
            <div>
              <p className="success-text">A match is already recorded today.</p>
              <p>
                Winner: <strong>{todayMatch.winnerTeam === 'teamA' ? 'Team A' : 'Team B'}</strong>
              </p>
              <p>
                Penalty paid by: <strong>{getPlayerName(players, todayMatch.loserCaptain)}</strong>
              </p>
            </div>
          )}

          {currentTeams && todayCaptains && !todayMatch && (
            <div className="input-group">
              <div>
                <p className="card-title">Teams and captains</p>
                <div className="overflow-x-auto">
                  <table className="table team-table split-team-table">
                    <thead>
                      <tr>
                        <th>Team A</th>
                        <th>Team B</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="team-players-cell team-col-a">
                          <span className="team-label">Captain: </span>
                          <span className="team-player-name">{captainAName}</span>
                        </td>
                        <td className="team-players-cell team-col-b">
                          <span className="team-label">Captain: </span>
                          <span className="team-player-name">{captainBName}</span>
                        </td>
                      </tr>
                      {Array.from({ length: maxTeamSize }, (_, index) => {
                        const playerAId = currentTeams.teamA[index];
                        const playerBId = currentTeams.teamB[index];

                        return (
                          <tr key={`match-team-row-${index}`}>
                            <td className="team-players-cell team-col-a">
                              {playerAId ? (
                                <span className="team-player-name">{getPlayerName(players, playerAId)}</span>
                              ) : (
                                <span className="empty-state">--</span>
                              )}
                            </td>
                            <td className="team-players-cell team-col-b">
                              {playerBId ? (
                                <span className="team-player-name">{getPlayerName(players, playerBId)}</span>
                              ) : (
                                <span className="empty-state">--</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <label className="input-label">Winning team</label>
                <select value={selectedWinner} onChange={(event) => setSelectedWinner(event.target.value)}>
                  <option value="A">Team A</option>
                  <option value="B">Team B</option>
                </select>
              </div>
              <div className="button-row">
                <button className="button-primary button-small" type="button" onClick={handleSaveMatch} disabled={!canRecordMatch}>
                  Record Match
                </button>
              </div>
            </div>
          )}

          {message && (
            <p className="success-text" style={{ marginTop: '16px' }}>
              {message}
            </p>
          )}
        </div>

        <div className="card match-payment-card">
          <h2 className="card-title">Contribution Payment QR</h2>
          <p className="page-intro" style={{ marginBottom: '12px' }}>
            Pay contribution to {PAYMENT_RECEIVER_LABEL}
          </p>
          <div style={{ display: 'grid', gap: '10px', width: 'fit-content' }}>
            <img className="fund-qr-image" src={ubedUpiQr} alt={`UPI QR for ${PAYMENT_RECEIVER_LABEL}`} />
            <p className="fund-upi-id">UPI ID: {PAYMENT_UPI_ID}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MatchPage;
