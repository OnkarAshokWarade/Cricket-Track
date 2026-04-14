const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const teamGenerator = (players) => {
  const playerIds = players.map((player) => player.id);
  const shuffled = shuffle(playerIds);
  const half = Math.ceil(shuffled.length / 2);
  return {
    teamA: shuffled.slice(0, half),
    teamB: shuffled.slice(half),
  };
};

export const captainSelector = ({ teamA, teamB }, usedCaptains = {}) => {
  const usedA = usedCaptains.teamA || [];
  const usedB = usedCaptains.teamB || [];
  const availableA = shuffle(teamA.filter((playerId) => !usedA.includes(playerId)));
  const availableB = shuffle(teamB.filter((playerId) => !usedB.includes(playerId)));

  if (availableA.length === 0 || availableB.length === 0) {
    return null;
  }

  return {
    teamA: availableA[0],
    teamB: availableB[0],
  };
};

export const getPlayerName = (players, playerId) => {
  const normalizedPlayerId = playerId === null || playerId === undefined ? '' : String(playerId).trim();
  const player = players.find((item) => String(item.id).trim() === normalizedPlayerId);
  return player ? player.name : 'Unknown';
};
