import { useState, useEffect } from 'react';
import useAutoClearMessage from '../hooks/useAutoClearMessage';

function PlayerForm({ existingPlayer, onSave, onCancel, players, isSubmitting = false }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useAutoClearMessage(error, setError);

  useEffect(() => {
    setName(existingPlayer?.name || '');
    setError('');
  }, [existingPlayer]);

  const normalizedName = name.trim().toLowerCase();
  const isDuplicate = players.some(
    (player) => player.name.trim().toLowerCase() === normalizedName && player.id !== existingPlayer?.id
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!normalizedName) {
      setError('Player name is required.');
      return;
    }
    if (isDuplicate) {
      setError('This player already exists.');
      return;
    }
    const didSave = await onSave({ id: existingPlayer?.id || `player-${Date.now()}`, name: name.trim() });
    if (didSave !== false) {
      setName('');
    }
  };

  return (
    <form className="rounded-2xl border border-slate-300 bg-white p-4 shadow-md sm:p-5" onSubmit={handleSubmit}>
      <h2 className="text-lg font-extrabold text-slate-900">{existingPlayer ? 'Edit Player' : 'Add Player'}</h2>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">
        Use clear names for better search and Marathi readability.
      </p>

      <div className="mt-4 space-y-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="player-name">
          Player name
        </label>
        <input
          id="player-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="उदा. अजिंक्य रहाणे / Enter player name"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm leading-relaxed text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      {error && (
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700">{error}</p>
      )}

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 sm:w-auto"
        >
          {isSubmitting ? 'Saving...' : existingPlayer ? 'Update player' : 'Save player'}
        </button>
        {existingPlayer && (
          <button
            type="button"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 sm:w-auto"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default PlayerForm;
