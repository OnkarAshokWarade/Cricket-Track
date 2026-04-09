import { getData, saveData, STORAGE_KEYS } from '../utils/storage';

const APP_START_DATE = '2026-04-08';

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

const createPlayers = () => {
  return defaultPlayers.map((name, index) => ({
    id: `player-${index + 1}`,
    name,
  }));
};

const isValidDateKey = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);

const isOnOrAfterAppStart = (dateKey) => isValidDateKey(dateKey) && dateKey >= APP_START_DATE;

const buildStatsFromMatches = (matches) => {
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
  return matchesData.filter((match) => isOnOrAfterAppStart(match?.date));
};

export const initializeAppData = () => {
  if (getData(STORAGE_KEYS.players, null) === null) {
    saveData(STORAGE_KEYS.players, createPlayers());
  }

  if (getData(STORAGE_KEYS.teams, null) === null) {
    saveData(STORAGE_KEYS.teams, {});
  }

  const existingCaptains = getData(STORAGE_KEYS.captains, {});
  saveData(STORAGE_KEYS.captains, sanitizeCaptainsData(existingCaptains));

  const existingMatches = getData(STORAGE_KEYS.matches, []);
  const sanitizedMatches = sanitizeMatchesData(existingMatches);
  saveData(STORAGE_KEYS.matches, sanitizedMatches);

  saveData(STORAGE_KEYS.stats, buildStatsFromMatches(sanitizedMatches));
};

export const resetAppData = () => {
  Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
  initializeAppData();
};
