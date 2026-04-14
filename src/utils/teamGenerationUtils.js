import { todayKey, toDateKey } from './dateUtils';

export const MAX_TEAM_GENERATIONS = 4;
export const TEAM_GENERATE_PASSWORD = '9322070390';

export const getTeamGenerationLockedMessage = () =>
  `Today's ${MAX_TEAM_GENERATIONS} team-generation chances are over. You can generate teams again tomorrow.`;

export const getTeamGenerationSuccessMessage = (generationCount) =>
  generationCount >= MAX_TEAM_GENERATIONS
    ? `Weekly teams generated successfully. Generated today: ${MAX_TEAM_GENERATIONS}/${MAX_TEAM_GENERATIONS}. You can generate teams again tomorrow.`
    : `Weekly teams generated successfully. Generated today: ${generationCount}/${MAX_TEAM_GENERATIONS}.`;

export const getTeamGenerationPromptText = () =>
  `Confirm password to use 1 of today's ${MAX_TEAM_GENERATIONS} team-generation chances.`;

export const getTeamGenerationIntroText = () =>
  `Team generation requires admin password and is limited to ${MAX_TEAM_GENERATIONS} times per day.`;

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
