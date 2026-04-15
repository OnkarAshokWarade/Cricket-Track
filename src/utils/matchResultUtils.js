export const MATCH_PENALTY_AMOUNT = 100;
export const RESULT_TEAM_A = 'A';
export const RESULT_TEAM_B = 'B';
export const RESULT_NO_MATCH = 'NO_MATCH';

export const getMatchResultSelection = (match) => {
  if (match?.status === 'no-match') {
    return RESULT_NO_MATCH;
  }

  return match?.winnerTeam === 'teamB' ? RESULT_TEAM_B : RESULT_TEAM_A;
};

export const buildMatchResultPayload = ({
  selection,
  baseMatch = {},
  captainA = '',
  captainB = '',
  penaltyAmount = MATCH_PENALTY_AMOUNT,
}) => {
  const safeCaptainA = captainA || baseMatch.captainA || '';
  const safeCaptainB = captainB || baseMatch.captainB || '';

  if (selection === RESULT_NO_MATCH) {
    return {
      ...baseMatch,
      status: 'no-match',
      score: 'No match',
      winnerTeam: '',
      loserCaptain: '',
      penalty: 0,
      penaltyPaid: true,
      captainA: safeCaptainA,
      captainB: safeCaptainB,
    };
  }

  if (!safeCaptainA || !safeCaptainB) {
    return null;
  }

  const winnerTeam = selection === RESULT_TEAM_B ? 'teamB' : 'teamA';
  const loserCaptain = winnerTeam === 'teamA' ? safeCaptainB : safeCaptainA;
  const penaltyAlreadyBelongsToLoser =
    baseMatch.status !== 'no-match' && baseMatch.loserCaptain === loserCaptain;

  return {
    ...baseMatch,
    status: 'played',
    score: winnerTeam === 'teamA' ? 'Team A won' : 'Team B won',
    winnerTeam,
    loserCaptain,
    penalty: penaltyAmount,
    penaltyPaid: penaltyAlreadyBelongsToLoser ? baseMatch.penaltyPaid === true : false,
    captainA: safeCaptainA,
    captainB: safeCaptainB,
  };
};
