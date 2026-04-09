const safeParse = (value, fallback) => {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

export const STORAGE_KEYS = {
  players: 'patoda_players',
  teams: 'patoda_teams',
  captains: 'patoda_captains',
  matches: 'patoda_matches',
  stats: 'patoda_stats',
};

export const getData = (key, fallback = null) => {
  const raw = localStorage.getItem(key);
  if (raw === null) {
    return fallback;
  }
  return safeParse(raw, fallback);
};

export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeData = (key) => {
  localStorage.removeItem(key);
};
