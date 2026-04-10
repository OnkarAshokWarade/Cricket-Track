export const STORAGE_KEYS = Object.freeze({
  players: 'patoda_players',
  teams: 'patoda_teams',
  captains: 'patoda_captains',
  matches: 'patoda_matches',
  stats: 'patoda_stats',
});

export const getData = (_key, fallback = null) => fallback;

export const saveData = () => undefined;

export const removeData = () => undefined;
