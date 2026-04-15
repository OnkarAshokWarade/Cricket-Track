import { useEffect, useRef, useState } from 'react';
import PlayerForm from '../components/PlayerForm';
import { useAppData } from '../context/AppDataContext';
import useAutoClearMessage from '../hooks/useAutoClearMessage';

function PlayersPage({ accessMode }) {
  const { players, updateAppState } = useAppData();
  const [editing, setEditing] = useState(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [isSaving, setIsSaving] = useState(false);
  const editFormRef = useRef(null);
  const isAdmin = accessMode === 'admin';

  useAutoClearMessage(message, setMessage);

  useEffect(() => {
    if (!editing || !editFormRef.current) return;
    editFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [editing]);

  const handleSave = async (player) => {
    if (!isAdmin || isSaving) {
      return false;
    }

    const updatedPlayers = editing
      ? players.map((existing) => (existing.id === player.id ? player : existing))
      : [...players, player];

    setIsSaving(true);
    try {
      await updateAppState({ players: updatedPlayers });
      setEditing(null);
      setMessageType('success');
      setMessage(editing ? 'Player updated in Firebase.' : 'Player saved in Firebase.');
      return true;
    } catch (error) {
      console.error('Error saving player:', error);
      setMessageType('warning');
      setMessage('Player could not be saved. Please verify Firebase configuration and try again.');
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (playerId) => {
    if (!isAdmin || isSaving) {
      return;
    }

    const confirmed = window.confirm('Delete this player from the roster?');
    if (!confirmed) return;
    const updatedPlayers = players.filter((player) => player.id !== playerId);

    setIsSaving(true);
    try {
      await updateAppState({ players: updatedPlayers });
      if (editing?.id === playerId) {
        setEditing(null);
      }
      setMessageType('success');
      setMessage('Player deleted from Firebase.');
    } catch (error) {
      console.error('Error deleting player:', error);
      setMessageType('warning');
      setMessage('Player could not be deleted. Please verify Firebase configuration and try again.');
    } finally {
      setIsSaving(false);
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
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">Players</h1>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Add new members or edit the Firebase player roster.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-700">
            Total: {players.length}
          </span>
        </div>
        {!isAdmin ? (
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
          </p>
        ) : null}
        {message ? (
          <p className={`mt-4 rounded-lg border px-3 py-2 text-sm font-semibold ${messageType === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-amber-200 bg-amber-50 text-amber-700'}`}>
            {message}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {isAdmin ? (
          <div ref={editFormRef} className="scroll-mt-24 lg:col-span-1">
            <PlayerForm
              existingPlayer={editing}
              onSave={handleSave}
              onCancel={() => setEditing(null)}
              players={players}
              isSubmitting={isSaving}
            />
          </div>
        ) : null}

        <div className={`rounded-2xl border border-slate-300 bg-white p-4 shadow-md sm:p-5 ${isAdmin ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
          <h2 className="mb-4 text-lg font-extrabold text-slate-900">Player Roster</h2>

          {players.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm leading-relaxed text-slate-600">
              No players found. Add the first member to start managing your team.
            </div>
          )}

          {players.length > 0 && (
            <>
              <div className="player-roster-scroll space-y-3 pr-1 md:hidden">
                {players.map((player, index) => (
                  <article key={player.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Number</p>
                    <p className="mt-1 text-base font-bold leading-relaxed text-slate-900">{index + 1}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Player Name</p>
                    <p className="mt-1 break-words text-base font-bold leading-relaxed text-slate-900">{player.name}</p>
                    {isAdmin ? (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setEditing(player)}
                          disabled={isSaving}
                          className="inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(player.id)}
                          disabled={isSaving}
                          className="inline-flex items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-100"
                        >
                          Delete
                        </button>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>

              <div className="hidden md:block">
                <div className="player-roster-scroll overflow-x-auto rounded-xl border border-slate-200">
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
                            {isAdmin ? (
                              <div className="flex flex-wrap items-center justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => setEditing(player)}
                                  disabled={isSaving}
                                  className="inline-flex min-w-20 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100"
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(player.id)}
                                  disabled={isSaving}
                                  className="inline-flex min-w-20 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-100"
                                >
                                  Delete
                                </button>
                              </div>
                            ) : null}
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
      </div>
    </section>
  );
}

export default PlayersPage;
