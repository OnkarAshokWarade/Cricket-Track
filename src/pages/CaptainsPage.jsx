import { useMemo, useState } from 'react';
import { getWeekId, todayKey, tomorrowKey, toDateKey, formatDate, isDateAllowedForCaptain } from '../utils/dateUtils';
import { captainSelector, getPlayerName } from '../utils/teamUtils';
import { useAppData } from '../context/AppDataContext';
import useAutoClearMessage from '../hooks/useAutoClearMessage';

function CaptainsPage() {
  const { players, teams, captains, updateAppState } = useAppData();
  const [message, setMessage] = useState('');

  useAutoClearMessage(message, setMessage);

  const weekId = getWeekId();
  const currentTeams = teams[weekId] || null;
  const weekCaptains = captains[weekId] || { usedCaptains: { teamA: [], teamB: [] }, dailyCaptains: [] };

  const currentDateKey = todayKey();
  const tomorrowDateKey = tomorrowKey();

  const captainSelectionDays = useMemo(
    () => {
      const today = new Date();
      const daysUntilSunday = (7 - today.getDay()) % 7;

      return Array.from({ length: daysUntilSunday + 1 }, (_, offset) => {
        const date = new Date(today);
        date.setDate(today.getDate() + offset);
        const dateKey = toDateKey(date);
        return {
        date: dateKey,
        formatted: formatDate(dateKey),
        isToday: dateKey === currentDateKey,
        isTomorrow: dateKey === tomorrowDateKey,
        captains: weekCaptains.dailyCaptains?.find((entry) => entry.date === dateKey) || null,
        };
      });
    },
    [currentDateKey, tomorrowDateKey, weekCaptains.dailyCaptains]
  );

  const availableCounts = useMemo(() => {
    if (!currentTeams) {
      return { teamA: 0, teamB: 0 };
    }
    const usedA = weekCaptains.usedCaptains?.teamA || [];
    const usedB = weekCaptains.usedCaptains?.teamB || [];
    return {
      teamA: currentTeams.teamA.filter((playerId) => !usedA.includes(playerId)).length,
      teamB: currentTeams.teamB.filter((playerId) => !usedB.includes(playerId)).length,
    };
  }, [currentTeams, weekCaptains]);

  const selectCaptainsForDay = async (targetDate) => {
    if (!currentTeams) {
      setMessage('Please generate weekly teams before selecting captains.');
      return;
    }

    if (!isDateAllowedForCaptain(targetDate)) {
      setMessage('Captain can only be selected for today or tomorrow.');
      return;
    }

    const existingCaptains = weekCaptains.dailyCaptains?.find((item) => item.date === targetDate);
    if (existingCaptains) {
      setMessage('Captains have already been selected for this day.');
      return;
    }

    const selection = captainSelector(currentTeams, weekCaptains.usedCaptains);
    if (!selection) {
      setMessage('No available captain candidates remain for one or both teams this week.');
      return;
    }

    const nextWeekCaptains = {
      ...weekCaptains,
      usedCaptains: {
        teamA: [...(weekCaptains.usedCaptains.teamA || []), selection.teamA],
        teamB: [...(weekCaptains.usedCaptains.teamB || []), selection.teamB],
      },
      dailyCaptains: [
        ...(weekCaptains.dailyCaptains || []),
        { date: targetDate, teamA: selection.teamA, teamB: selection.teamB },
      ],
    };

    const nextCaptainsData = {
      ...captains,
      [weekId]: nextWeekCaptains,
    };

    try {
      await updateAppState({ captains: nextCaptainsData });
      setMessage(`Captains selected successfully for ${formatDate(targetDate)}!`);
    } catch (error) {
      console.error('Error selecting captains:', error);
      setMessage('Captains could not be saved. Please verify Firebase configuration and try again.');
    }
  };

  return (
    <section>
      <div className="top-nav">
        <div>
          <h1 className="page-title">Captains</h1>
          <p className="page-intro">Choose captains for each day of the week without repeating the same player.</p>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Current Week: {weekId}</h2>
        {!currentTeams ? (
          <p className="empty-state">Generate weekly teams first on the Teams page.</p>
        ) : (
          <>
            <div className="button-row" style={{ marginBottom: '14px' }}>
              <span className="status-pill">Team A available: {availableCounts.teamA}</span>
              <span className="status-pill">Team B available: {availableCounts.teamB}</span>
            </div>
            {message && <p className="success-text" style={{ marginTop: '14px' }}>{message}</p>}

            <div className="section-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {captainSelectionDays.map((day) => {
                const isSelectable = !day.captains && isDateAllowedForCaptain(day.date);
                return (
                  <div
                    key={day.date}
                    className={`card ${day.isToday ? 'today-highlight' : ''} ${!isSelectable && !day.captains ? 'disabled-card' : ''}`}
                  >
                    <h3 className="card-title">
                      {day.formatted}
                      {day.isToday && ' (Today)'}
                      {day.isTomorrow && !day.isToday && ' (Tomorrow)'}
                    </h3>
                    {day.captains ? (
                      <div>
                        <p>Team A: {getPlayerName(players, day.captains.teamA)}</p>
                        <p>Team B: {getPlayerName(players, day.captains.teamB)}</p>
                      </div>
                    ) : (
                      <>
                        <button
                          className="button-primary button-small"
                          onClick={() => selectCaptainsForDay(day.date)}
                          disabled={!isSelectable || !currentTeams}
                        >
                          Select Captains
                        </button>
                        {!isSelectable && (
                          <p className="warning-text" style={{ marginTop: '10px' }}>
                            Captain can only be selected for today or tomorrow.
                          </p>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h2 className="card-title">Captain history</h2>
        {weekCaptains.dailyCaptains?.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Team A Captain</th>
                <th>Team B Captain</th>
              </tr>
            </thead>
            <tbody>
              {weekCaptains.dailyCaptains.map((entry) => (
                <tr key={entry.date}>
                  <td>{formatDate(entry.date)}</td>
                  <td>{getPlayerName(players, entry.teamA)}</td>
                  <td>{getPlayerName(players, entry.teamB)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="empty-state">No captain selections recorded yet this week.</p>
        )}
      </div>
    </section>
  );
}

export default CaptainsPage;
