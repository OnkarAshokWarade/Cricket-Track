import { useMemo, useState } from 'react';
import { getWeekId, todayKey, isSameDay } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
import MatchDetails from '../components/MatchDetails';
import ubedUpiQr from '../assets/ubed-upi-qr.jpeg';
import { useAppData } from '../context/AppDataContext';
import useAutoClearMessage from '../hooks/useAutoClearMessage';

const PENALTY_AMOUNT = 100;
const PAYMENT_RECEIVER_EN = 'Ubed Shaikh';
const PAYMENT_RECEIVER_MR = '\u0909\u092c\u0947\u0926 \u0936\u0947\u0916';
const PAYMENT_RECEIVER_LABEL = `${PAYMENT_RECEIVER_EN} (${PAYMENT_RECEIVER_MR})`;
const PAYMENT_UPI_ID = 'ubbus313-3@okaxis';

function MatchPage() {
  const { players, teams, captains, matches, addMatch } = useAppData();
  const [selectedWinner, setSelectedWinner] = useState('A');
  const [message, setMessage] = useState('');

  useAutoClearMessage(message, setMessage);

  const weekId = getWeekId();
  const currentTeams = teams[weekId] || null;
  const todayCaptains = captains[weekId]?.dailyCaptains?.find((entry) => entry.date === todayKey());
  const todayMatch = matches.find((match) => isSameDay(match.date, todayKey()));

  const captainAName = todayCaptains ? getPlayerName(players, todayCaptains.teamA) : '--';
  const captainBName = todayCaptains ? getPlayerName(players, todayCaptains.teamB) : '--';
  const maxTeamSize = useMemo(() => {
    if (!currentTeams) return 0;
    return Math.max(currentTeams.teamA.length, currentTeams.teamB.length);
  }, [currentTeams]);

  const canRecordMatch = useMemo(() => !!currentTeams && !!todayCaptains && !todayMatch, [currentTeams, todayCaptains, todayMatch]);
  const canMarkNoMatch = useMemo(() => !todayMatch, [todayMatch]);

  const handleSaveMatch = async () => {
    if (!canRecordMatch) {
      setMessage("A match cannot be recorded right now. Please check teams and today's captains.");
      return;
    }

    const winnerTeam = selectedWinner === 'A' ? 'teamA' : 'teamB';
    const loserCaptain = selectedWinner === 'A' ? todayCaptains.teamB : todayCaptains.teamA;
    const matchEntry = {
      date: todayKey(),
      weekId,
      teamA: currentTeams.teamA,
      teamB: currentTeams.teamB,
      score: selectedWinner === 'A' ? 'Team A won' : 'Team B won',
      captainA: todayCaptains.teamA,
      captainB: todayCaptains.teamB,
      winnerTeam,
      loserCaptain,
      penalty: PENALTY_AMOUNT,
      penaltyPaid: false,
    };

    try {
      await addMatch(matchEntry);
      setMessage(`Match recorded. \u20B9${PENALTY_AMOUNT} penalty assigned to ${getPlayerName(players, loserCaptain)}.`);
    } catch (error) {
      console.error('Error recording match:', error);
      setMessage('Match could not be recorded. Please verify Firebase configuration and try again.');
    }
  };

  const handleSaveNoMatch = async () => {
    if (!canMarkNoMatch) {
      setMessage('A no-match entry cannot be recorded right now. Please check today\'s data.');
      return;
    }

    const noMatchEntry = {
      date: todayKey(),
      weekId,
      status: 'no-match',
      teamA: currentTeams?.teamA || [],
      teamB: currentTeams?.teamB || [],
      score: 'No match',
      captainA: todayCaptains?.teamA || '',
      captainB: todayCaptains?.teamB || '',
      winnerTeam: '',
      loserCaptain: '',
      penalty: 0,
      penaltyPaid: true,
    };

    try {
      await addMatch(noMatchEntry);
      setMessage('No match was recorded for today.');
    } catch (error) {
      console.error('Error recording no-match day:', error);
      setMessage('No-match status could not be recorded. Please verify Firebase configuration and try again.');
    }
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
        <MatchDetails todayMatch={todayMatch} players={players} />

        <div className="card">
          <h2 className="card-title">Match Result</h2>
          {!currentTeams && <p className="empty-state">Weekly teams are not ready yet, but you can still mark today as match not conducted.</p>}
          {!todayCaptains && currentTeams && <p className="empty-state">Select captains for today to record a winner, or use Match Not Conducted if the game did not happen.</p>}

          {todayMatch && (
            <div>
              {todayMatch.status === 'no-match' ? (
                <>
                  <p className="success-text">Today is marked as a no-match day.</p>
                  <p>
                    Status: <strong>No match</strong>
                  </p>
                </>
              ) : (
                <>
                  <p className="success-text">A match is already recorded today.</p>
                  <p>
                    Winner: <strong>{todayMatch.winnerTeam === 'teamA' ? 'Team A' : 'Team B'}</strong>
                  </p>
                  <p>
                    Penalty paid by: <strong>{getPlayerName(players, todayMatch.loserCaptain)}</strong>
                  </p>
                </>
              )}
            </div>
          )}

          {!todayMatch && (
            <div className="input-group">
              {currentTeams ? (
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
              ) : null}
              <div>
                <label className="input-label">Winning team</label>
                <select value={selectedWinner} onChange={(event) => setSelectedWinner(event.target.value)} disabled={!todayCaptains}>
                  <option value="A">Team A</option>
                  <option value="B">Team B</option>
                </select>
              </div>
              <div className="button-row">
                <button className="button-primary button-small" type="button" onClick={handleSaveMatch} disabled={!canRecordMatch}>
                  Record Match
                </button>
                <button className="button-secondary button-small" type="button" onClick={handleSaveNoMatch} disabled={!canMarkNoMatch}>
                  Match Not Conducted
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
