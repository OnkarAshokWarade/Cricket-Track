const APP_START_DATE = '2026-04-08';
const DATE_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const defaultPlayers = [
  'जगदीश',
  'उबेद',
  'राजू मोरे',
  'सिद्दीक',
  'थोरात साहेब',
  'राहुल वाबळे',
  'अनिरुद्ध',
  'प्रवीण शेठ शिकारे',
  'तंटामुक्ती अध्यक्ष श्री देवा मोरे',
  'आदिनाथ गव्हाणे',
  'सदाशिव कावदे',
  'विष्णू गंडाळ',
  'आयान पठाण',
  'दत्ता आमटे',
  'भैय्या थोरात',
  'पृथ्वी',
  'विष्णू बांधले',
  'अतिश',
  'मंगेश',
  'आप्पा',
  'शरद नाना',
  'दादा शिंदे',
  'रोहित',
  'अतुल',
  'विष्णू मेढकर',
  'सूरज वाबळे',
  'पंडित मोरे',
  'गोळ्या',
  'भाऊ शिंदे',
  'ओंकार वराडे',
];

const normalizeName = (value) => String(value || '').trim().toLowerCase();

const uniqueStrings = (items) => {
  const seen = new Set();
  const output = [];

  items.forEach((item) => {
    const value = String(item || '').trim();
    if (!value) {
      return;
    }

    const key = normalizeName(value);
    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    output.push(value);
  });

  return output;
};

const isValidDateKey = (value) => typeof value === 'string' && DATE_KEY_PATTERN.test(value);

const isOnOrAfterAppStart = (dateKey) => isValidDateKey(dateKey) && dateKey >= APP_START_DATE;

export const createPlayers = () => {
  return defaultPlayers.map((name, index) => ({
    id: `player-${index + 1}`,
    name,
  }));
};

export const buildStatsFromMatches = (matches) => {
  return matches.reduce((accumulator, match) => {
    if (!match?.loserCaptain) {
      return accumulator;
    }

    const penalty = Number(match.penalty) || 0;
    if (penalty <= 0) {
      return accumulator;
    }

    accumulator[match.loserCaptain] = (accumulator[match.loserCaptain] || 0) + penalty;
    return accumulator;
  }, {});
};

const sanitizeTeams = (teamsData) => {
  if (!teamsData || typeof teamsData !== 'object' || Array.isArray(teamsData)) {
    return {};
  }

  return Object.entries(teamsData).reduce((nextTeams, [weekId, weekData]) => {
    const teamA = Array.isArray(weekData?.teamA) ? weekData.teamA.filter(Boolean).map(String) : [];
    const teamB = Array.isArray(weekData?.teamB) ? weekData.teamB.filter(Boolean).map(String) : [];

    nextTeams[weekId] = {
      ...weekData,
      weekId: weekData?.weekId || weekId,
      date: isValidDateKey(weekData?.date) ? weekData.date : '',
      generationCount: Number(weekData?.generationCount) > 0 ? Number(weekData.generationCount) : 1,
      teamA,
      teamB,
    };

    return nextTeams;
  }, {});
};

const sanitizeCaptainsData = (captainsData) => {
  if (!captainsData || typeof captainsData !== 'object' || Array.isArray(captainsData)) {
    return {};
  }

  const nextCaptains = {};

  Object.entries(captainsData).forEach(([weekId, weekData]) => {
    const dailyCaptains = Array.isArray(weekData?.dailyCaptains)
      ? weekData.dailyCaptains.filter((entry) => isOnOrAfterAppStart(entry?.date))
      : [];

    if (dailyCaptains.length === 0) {
      return;
    }

    const usedCaptainsA = [];
    const usedCaptainsB = [];

    dailyCaptains.forEach((entry) => {
      if (entry?.teamA && !usedCaptainsA.includes(entry.teamA)) {
        usedCaptainsA.push(entry.teamA);
      }
      if (entry?.teamB && !usedCaptainsB.includes(entry.teamB)) {
        usedCaptainsB.push(entry.teamB);
      }
    });

    nextCaptains[weekId] = {
      ...weekData,
      usedCaptains: {
        teamA: usedCaptainsA,
        teamB: usedCaptainsB,
      },
      dailyCaptains,
    };
  });

  return nextCaptains;
};

const sanitizeMatchesData = (matchesData) => {
  if (!Array.isArray(matchesData)) {
    return [];
  }

  return matchesData
    .filter((match) => isOnOrAfterAppStart(match?.date))
    .map((match) => ({
      ...match,
      id: String(match?.id || `match-${Date.now()}`),
      weekId: String(match?.weekId || ''),
      teamA: Array.isArray(match?.teamA) ? match.teamA.filter(Boolean).map(String) : [],
      teamB: Array.isArray(match?.teamB) ? match.teamB.filter(Boolean).map(String) : [],
      penaltyPaid: match?.penaltyPaid === true,
    }));
};

const sanitizeFunds = (fundTransactions) => {
  if (!Array.isArray(fundTransactions)) {
    return [];
  }

  return fundTransactions
    .filter((item) => item && (item.type === 'credit' || item.type === 'debit'))
    .map((item) => ({
      id: item.id || `txn-${Date.now()}`,
      name: String(item.name || '').trim(),
      amount:
        item.type === 'credit'
          ? 100
          : Number.isFinite(Number(item.amount))
          ? Number(item.amount)
          : 0,
      type: item.type,
    }))
    .filter((item) => item.name && item.amount > 0);
};

const sanitizeContributionPlayers = (contributionPlayers, fundTransactions) => {
  const names = Array.isArray(contributionPlayers) ? contributionPlayers : [];
  const creditNames = Array.isArray(fundTransactions)
    ? fundTransactions.filter((item) => item?.type === 'credit').map((item) => item.name)
    : [];

  return uniqueStrings([...names, ...creditNames]);
};

const sanitizePlayers = (playersData) => {
  if (!Array.isArray(playersData)) {
    return createPlayers();
  }

  const players = playersData
    .filter((player) => player && typeof player === 'object')
    .map((player, index) => ({
      id: String(player.id || `player-${index + 1}`),
      name: String(player.name || '').trim(),
    }))
    .filter((player) => player.name);

  return players.length > 0 ? players : createPlayers();
};

export const createDefaultAppState = () => {
  return {
    players: createPlayers(),
    teams: {},
    captains: {},
    matches: [],
    stats: {},
    fundTransactions: [],
    contributionPlayers: [],
  };
};

export const sanitizeAppState = (rawState = {}) => {
  const players = sanitizePlayers(rawState.players);
  const teams = sanitizeTeams(rawState.teams);
  const captains = sanitizeCaptainsData(rawState.captains);
  const matches = sanitizeMatchesData(rawState.matches);
  const fundTransactions = sanitizeFunds(rawState.fundTransactions);
  const contributionPlayers = sanitizeContributionPlayers(rawState.contributionPlayers, fundTransactions);

  return {
    players,
    teams,
    captains,
    matches,
    stats: buildStatsFromMatches(matches),
    fundTransactions,
    contributionPlayers,
  };
};
