import { useEffect, useRef, useState } from 'react';
import PlayerForm from '../components/PlayerForm';
import { useAppData } from '../context/AppDataContext';

function PlayersPage() {
  const { players, updateAppState } = useAppData();
  const [editing, setEditing] = useState(null);
  const editFormRef = useRef(null);

  useEffect(() => {
    if (!editing || !editFormRef.current) return;
    editFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [editing]);

  const handleSave = (player) => {
    const updatedPlayers = editing
      ? players.map((existing) => (existing.id === player.id ? player : existing))
      : [...players, player];

    updateAppState({ players: updatedPlayers });
    setEditing(null);
  };

  const handleDelete = (playerId) => {
    const confirmed = window.confirm('Delete this player from the roster?');
    if (!confirmed) return;
    const updatedPlayers = players.filter((player) => player.id !== playerId);
    updateAppState({ players: updatedPlayers });
    if (editing?.id === playerId) {
      setEditing(null);
    }
  };

  return (
    <section
      className="mx-auto w-full max-w-7xl space-y-4 text-slate-800 md:space-y-6"
      style={{ fontFamily: "Inter, 'Noto Sans Devanagari', 'Nirmala UI', sans-serif" }}
    >
      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Players</h1>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Add new members or edit the existing Patoda XI roster.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
            Total: {players.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Player Roster</h2>

          {players.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm leading-relaxed text-slate-600">
              No players found. Add the first member to start managing your team.
            </div>
          )}

          {players.length > 0 && (
            <>
              <div className="space-y-3 md:hidden">
                {players.map((player, index) => (
                  <article key={player.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Number</p>
                    <p className="mt-1 text-base font-bold leading-relaxed text-slate-900">{index + 1}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Player Name</p>
                    <p className="mt-1 break-words text-base font-bold leading-relaxed text-slate-900">{player.name}</p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setEditing(player)}
                        className="inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(player.id)}
                        className="inline-flex items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-100"
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="hidden md:block">
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="min-w-full border-separate border-spacing-0">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="w-24 px-4 py-3 text-left text-sm font-semibold text-slate-700">Number</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
                        <th className="w-52 px-4 py-3 text-right text-sm font-semibold text-slate-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {players.map((player, index) => (
                        <tr key={player.id} className="bg-white">
                          <td
                            className={`px-4 py-3 text-sm font-bold text-slate-900 ${index !== players.length - 1 ? 'border-b border-slate-200' : ''}`}
                          >
                            {index + 1}
                          </td>
                          <td
                            className={`px-4 py-3 text-sm font-bold leading-relaxed text-slate-900 ${index !== players.length - 1 ? 'border-b border-slate-200' : ''}`}
                          >
                            {player.name}
                          </td>
                          <td
                            className={`px-4 py-3 ${index !== players.length - 1 ? 'border-b border-slate-200' : ''}`}
                          >
                            <div className="flex flex-wrap items-center justify-end gap-2">
                              <button
                                type="button"
                                onClick={() => setEditing(player)}
                                className="inline-flex min-w-20 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDelete(player.id)}
                                className="inline-flex min-w-20 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-100"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>

        <div ref={editFormRef} className="scroll-mt-24 lg:col-span-1">
          <PlayerForm existingPlayer={editing} onSave={handleSave} onCancel={() => setEditing(null)} players={players} />
        </div>
      </div>
    </section>
  );
}

export default PlayersPage;
