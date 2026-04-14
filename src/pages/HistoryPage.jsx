import { useMemo, useState } from 'react';
import { getWeekId, formatDate } from '../utils/dateUtils';
import { getPlayerName } from '../utils/teamUtils';
import MatchCard from '../components/MatchCard';
import MatchFee from '../components/MatchFee';
import { useAppData } from '../context/AppDataContext';

function HistoryPage({ accessMode }) {
  const { players, matches } = useAppData();
  const [weekFilter, setWeekFilter] = useState('all');
  const [playerFilter, setPlayerFilter] = useState('all');
  const isAdmin = accessMode === 'admin';

  const weeks = useMemo(() => {
    return Array.from(new Set(matches.map((match) => match.weekId))).sort((a, b) => (a < b ? 1 : -1));
  }, [matches]);

  const filteredMatches = useMemo(() => {
    return matches.filter((match) => {
      const matchesWeek = weekFilter === 'all' || match.weekId === weekFilter;
      const playerIds = [match.captainA, match.captainB, match.loserCaptain, ...match.teamA, ...match.teamB];
      const matchesPlayer = playerFilter === 'all' || playerIds.includes(playerFilter);
      return matchesWeek && matchesPlayer;
    });
  }, [matches, weekFilter, playerFilter]);

  const captainHistory = useMemo(() => {
    const history = {};
    matches.forEach((match) => {
      if (!history[match.weekId]) history[match.weekId] = [];
      history[match.weekId].push(match);
    });
    return history;
  }, [matches]);

  const selectedPlayer = useMemo(
    () => players.find((player) => player.id === playerFilter) || null,
    [playerFilter, players]
  );

  const selectedPlayerRecentHistory = useMemo(() => {
    if (playerFilter === 'all') {
      return [];
    }

    return filteredMatches
      .filter((match) => [match.captainA, match.captainB, ...match.teamA, ...match.teamB].includes(playerFilter))
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, 15)
      .map((match) => {
        const isTeamAPlayer = match.captainA === playerFilter || match.teamA.includes(playerFilter);
        const isCaptain = match.captainA === playerFilter || match.captainB === playerFilter;
        const teamLabel = isTeamAPlayer ? 'Team A' : 'Team B';
        const resultLabel =
          match.status === 'no-match'
            ? 'No Match'
            : (isTeamAPlayer && match.winnerTeam === 'teamA') || (!isTeamAPlayer && match.winnerTeam === 'teamB')
            ? 'Win'
            : 'Loss';

        return {
          id: match.id,
          date: match.date,
          weekId: match.weekId,
          teamLabel,
          roleLabel: isCaptain ? 'Captain' : 'Player',
          resultLabel,
          paymentLabel: match.penaltyPaid === true ? 'Paid' : match.status === 'no-match' ? 'Not needed' : 'Pending',
        };
      });
  }, [filteredMatches, playerFilter]);

  const currentWeekId = getWeekId();

  return (
    <div className="history-layout">
      <div className="history-main">
        <section>
          <div className="top-nav">
            <div>
              <h1 className="page-title">Match History</h1>
              <p className="page-intro">Browse all past matches with penalty tracking and payment status.</p>
            </div>
          </div>

          <div className="card">
            <div className="button-row" style={{ flexWrap: 'wrap' }}>
              <label className="input-label" htmlFor="week-filter">
                Filter by week
              </label>
              <select id="week-filter" value={weekFilter} onChange={(event) => setWeekFilter(event.target.value)}>
                <option value="all">All weeks</option>
                {weeks.map((weekId) => (
                  <option key={weekId} value={weekId}>
                    {weekId}
                  </option>
                ))}
              </select>
              <label className="input-label" htmlFor="player-filter">
                Filter by player
              </label>
              <select id="player-filter" value={playerFilter} onChange={(event) => setPlayerFilter(event.target.value)}>
                <option value="all">All players</option>
                {players.map((player) => (
                  <option key={player.id} value={player.id}>
                    {player.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="card" style={{ marginTop: '20px' }}>
            <h2 className="card-title">Match History</h2>
            {filteredMatches.length > 0 ? (
              <div className="matches-grid">
                {filteredMatches
                  .slice()
                  .sort((a, b) => (a.date < b.date ? 1 : -1))
                  .map((match) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                      players={players}
                      canEdit={isAdmin}
                    />
                  ))}
              </div>
            ) : (
              <p className="empty-state">No matches found for the selected filters.</p>
            )}
          </div>

          <div className="card" style={{ marginTop: '20px' }}>
            <h2 className="card-title">Player History - Last 15 Dates</h2>
            {selectedPlayer ? (
              selectedPlayerRecentHistory.length > 0 ? (
                <div className="weekly-date-table-wrap">
                  <table className="weekly-date-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Week</th>
                        <th>Team</th>
                        <th>Role</th>
                        <th>Result</th>
                        <th>Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedPlayerRecentHistory.map((entry) => (
                        <tr key={entry.id}>
                          <td data-label="Date" style={{ fontWeight: 800 }}>{formatDate(entry.date)}</td>
                          <td data-label="Week">{entry.weekId}</td>
                          <td data-label="Team">{entry.teamLabel}</td>
                          <td data-label="Role">{entry.roleLabel}</td>
                          <td data-label="Result">{entry.resultLabel}</td>
                          <td data-label="Payment">{entry.paymentLabel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="empty-state">No recent history found for {selectedPlayer.name}.</p>
              )
            ) : (
              <p className="empty-state">Select a player above to view that player&apos;s most recent 15 dates.</p>
            )}
          </div>

          <div className="card" style={{ marginTop: '20px' }}>
            <h2 className="card-title">Captain History by Week</h2>
            <p className="captain-color-legend">
              <span className="captain-loss-color">Red</span> = Losing captain, <span className="captain-win-color">Green</span> = Winning captain
            </p>
            {Object.keys(captainHistory).length > 0 ? (
              Object.entries(captainHistory).map(([weekId, weekMatches]) => (
                <div key={weekId} style={{ marginBottom: '18px' }}>
                  <p className="pill">{weekId}</p>
                  <table className="weekly-date-table captain-history-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Team A Captain</th>
                        <th>Team B Captain</th>
                        <th>Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weekMatches
                        .slice()
                        .sort((a, b) => (a.date < b.date ? 1 : -1))
                        .map((match) => (
                          <tr key={match.id}>
                            <td style={{ fontWeight: 800 }}>{formatDate(match.date)}</td>
                            <td>
                              <span
                                className={match.status === 'no-match' ? '' : match.captainA === match.loserCaptain ? 'captain-loss-color' : 'captain-win-color'}
                                style={{ fontWeight: 700 }}
                              >
                                {match.captainA ? getPlayerName(players, match.captainA) : match.status === 'no-match' ? 'No match' : '--'}
                              </span>
                            </td>
                            <td>
                              <span
                                className={match.status === 'no-match' ? '' : match.captainB === match.loserCaptain ? 'captain-loss-color' : 'captain-win-color'}
                                style={{ fontWeight: 700 }}
                              >
                                {match.captainB ? getPlayerName(players, match.captainB) : match.status === 'no-match' ? 'No match' : '--'}
                              </span>
                            </td>
                            <td style={{ fontWeight: 800 }}>{match.status === 'no-match' ? 'No Match' : match.winnerTeam === 'teamA' ? 'Team A' : 'Team B'}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ))
            ) : (
              <p className="empty-state">No recorded captain history yet.</p>
            )}
          </div>
        </section>
      </div>

      <aside className="history-sidebar">
        <MatchFee matches={matches} players={players} currentWeekId={currentWeekId} />
      </aside>
    </div>
  );
}

export default HistoryPage;
