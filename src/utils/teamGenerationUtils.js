import { todayKey, toDateKey } from './dateUtils';

export const MAX_TEAM_GENERATIONS = 2;
export const TEAM_GENERATE_PASSWORD = '9322070390';

export const getTeamGenerationLockedMessage = () =>
  `Today's ${MAX_TEAM_GENERATIONS} team-generation chances are over. You can generate teams again tomorrow.`;

export const getTeamGenerationSuccessMessage = (generationCount) => {
  const remainingGenerations = Math.max(MAX_TEAM_GENERATIONS - generationCount, 0);

  if (remainingGenerations === 0) {
    return 'Weekly teams generated successfully. This was your final team generation for today.';
  }

  return `Weekly teams generated successfully. ${remainingGenerations} team-generation chance${remainingGenerations === 1 ? '' : 's'} left today.`;
};

export const getTeamGenerationIntroText = () =>
  `Admin can generate weekly teams up to ${MAX_TEAM_GENERATIONS} times per day.`;

export const getTeamGenerationCount = (weekTeams, dateValue = todayKey()) => {
  if (!weekTeams) {
    return 0;
  }

  const activeDateKey = toDateKey(dateValue);
  const savedDateKey = toDateKey(weekTeams.date);
  if (!activeDateKey || activeDateKey !== savedDateKey) {
    return 0;
  }

  const parsedCount = Number(weekTeams.generationCount);
  if (Number.isFinite(parsedCount) && parsedCount >= 0) {
    return parsedCount;
  }

  const playerCount =
    (Array.isArray(weekTeams.teamA) ? weekTeams.teamA.length : 0) +
    (Array.isArray(weekTeams.teamB) ? weekTeams.teamB.length : 0);

  return playerCount > 0 ? 1 : 0;
};

export const getTeamGenerationStatus = (weekTeams, dateValue = todayKey()) => {
  const currentGenerationCount = getTeamGenerationCount(weekTeams, dateValue);
  const hasReachedGenerationLimit = currentGenerationCount >= MAX_TEAM_GENERATIONS;

  let lockedMessage = '';

  if (hasReachedGenerationLimit) {
    lockedMessage = getTeamGenerationLockedMessage();
  }

  return {
    currentGenerationCount,
    hasReachedGenerationLimit,
    canGenerateTeams: !hasReachedGenerationLimit,
    lockedMessage,
  };
};
