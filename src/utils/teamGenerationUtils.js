import { todayKey, toDateKey } from './dateUtils';

export const MAX_TEAM_GENERATIONS = 2;
export const TEAM_GENERATE_PASSWORD = '9322070390';

const getDayOfWeek = (dateValue = todayKey()) => {
  const dateKey = toDateKey(dateValue);
  if (!dateKey) {
    return -1;
  }

  const [year, month, day] = dateKey.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
};

export const isSunday = (dateValue = todayKey()) => getDayOfWeek(dateValue) === 0;

export const getTeamGenerationCount = (weekTeams) => {
  if (!weekTeams) {
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
  const currentGenerationCount = getTeamGenerationCount(weekTeams);
  const isGenerationDay = isSunday(dateValue);
  const hasReachedGenerationLimit = currentGenerationCount >= MAX_TEAM_GENERATIONS;

  let lockedMessage = '';

  if (!isGenerationDay) {
    lockedMessage = 'You can generate teams only on Sunday, and only 2 times per week.';
  } else if (hasReachedGenerationLimit) {
    lockedMessage = 'This week\'s 2 team-generation chances are over. You can generate teams again next Sunday.';
  }

  return {
    currentGenerationCount,
    isGenerationDay,
    hasReachedGenerationLimit,
    canGenerateTeams: isGenerationDay && !hasReachedGenerationLimit,
    lockedMessage,
  };
};
