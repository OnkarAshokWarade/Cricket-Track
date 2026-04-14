import { useEffect, useMemo, useRef, useState } from 'react';
import PaymentQrCard from '../components/PaymentQrCard';
import { useAppData } from '../context/AppDataContext';
import useAutoClearMessage from '../hooks/useAutoClearMessage';
import { formatDate, getWeekId, todayKey } from '../utils/dateUtils';

const FIXED_CONTRIBUTION = 100;
const PAYMENT_RECEIVER_EN = 'Ubed Shaikh';
const PAYMENT_RECEIVER_MR = '\u0909\u092c\u0947\u0926 \u0936\u0947\u0916';
const PAYMENT_RECEIVER_LABEL = `${PAYMENT_RECEIVER_EN} (${PAYMENT_RECEIVER_MR})`;
const normalizeName = (value) => String(value || '').trim().toLowerCase();

const createId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const formatINR = (value) => `\u20B9${value.toLocaleString('en-IN')}`;

function GroundExpensePage({ accessMode }) {
  const { fundTransactions, fundArchives, contributionPlayers, updateAppState } = useAppData();
  const transactions = fundTransactions;
  const [form, setForm] = useState({
    name: '',
    amount: '',
    type: 'debit',
  });
  const [newContributionPlayer, setNewContributionPlayer] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [fundMessage, setFundMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [isMobileEditorOpen, setIsMobileEditorOpen] = useState(false);
  const isAdmin = accessMode === 'admin';
  const currentDateKey = todayKey();
  const currentWeekId = getWeekId(currentDateKey);
  const formPanelRef = useRef(null);
  const nameInputRef = useRef(null);

  useAutoClearMessage(fundMessage, setFundMessage);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia('(max-width: 1100px)');
    const onViewportChange = (event) => {
      setIsMobileViewport(event.matches);
      if (!event.matches) {
        setIsMobileEditorOpen(false);
      }
    };

    setIsMobileViewport(media.matches);

    if (media.addEventListener) {
      media.addEventListener('change', onViewportChange);
    } else {
      media.addListener(onViewportChange);
    }

    return () => {
      if (media.addEventListener) {
        media.removeEventListener('change', onViewportChange);
      } else {
        media.removeListener(onViewportChange);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const shouldFocusEditor = isMobileEditorOpen || editingId !== null;
    if (!shouldFocusEditor) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      if (!isMobileViewport && editingId && formPanelRef.current) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        formPanelRef.current.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }

      if (nameInputRef.current) {
        nameInputRef.current.focus({ preventScroll: true });
      }
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [editingId, isMobileEditorOpen, isMobileViewport]);

  const playerNames = useMemo(() => {
    const sourceNames = [
      ...contributionPlayers,
      ...transactions.filter((item) => item.type === 'credit').map((item) => item.name),
    ];

    const uniqueNames = [];
    const seen = new Set();

    sourceNames.forEach((name) => {
      const trimmed = String(name || '').trim();
      if (!trimmed) {
        return;
      }

      const key = normalizeName(trimmed);
      if (!seen.has(key)) {
        seen.add(key);
        uniqueNames.push(trimmed);
      }
    });

    return uniqueNames;
  }, [contributionPlayers, transactions]);

  const paidPlayerNameSet = useMemo(() => {
    const paid = new Set();
    transactions.forEach((transaction) => {
      if (transaction.type === 'credit') {
        paid.add(normalizeName(transaction.name));
      }
    });
    return paid;
  }, [transactions]);

  const unpaidPlayers = useMemo(
    () => playerNames.filter((playerName) => !paidPlayerNameSet.has(normalizeName(playerName))),
    [playerNames, paidPlayerNameSet]
  );
  const playerContributionCounts = useMemo(
    () =>
      playerNames.reduce(
        (accumulator, playerName) => {
          if (paidPlayerNameSet.has(normalizeName(playerName))) {
            accumulator.paid += 1;
          } else {
            accumulator.unpaid += 1;
          }
          return accumulator;
        },
        { paid: 0, unpaid: 0 }
      ),
    [playerNames, paidPlayerNameSet]
  );

  const totals = useMemo(() => {
    return transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'credit') {
          accumulator.totalCredit += transaction.amount;
        } else {
          accumulator.totalDebit += transaction.amount;
        }
        return accumulator;
      },
      { totalCredit: 0, totalDebit: 0 }
    );
  }, [transactions]);
  const transactionTypeCounts = useMemo(
    () =>
      transactions.reduce(
        (accumulator, transaction) => {
          if (transaction.type === 'credit') {
            accumulator.credit += 1;
          } else {
            accumulator.debit += 1;
          }
          return accumulator;
        },
        { credit: 0, debit: 0 }
      ),
    [transactions]
  );

  const balance = totals.totalCredit - totals.totalDebit;

  const persistFundState = async (patch, successMessage = '') => {
    if (!isAdmin || isSaving) {
      return false;
    }

    setIsSaving(true);
    try {
      await updateAppState(patch);
      if (successMessage) {
        setFundMessage(successMessage);
      }
      return true;
    } catch (error) {
      console.error('Error saving ground expense data:', error);
      setFundMessage('Ground expense data could not be saved. Please verify Firebase configuration and try again.');
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const handleTypeChange = (type) => {
    setForm((previous) => ({
      ...previous,
      type,
      amount: type === 'credit' ? String(FIXED_CONTRIBUTION) : previous.amount === String(FIXED_CONTRIBUTION) ? '' : previous.amount,
    }));
  };

  const resetForm = () => {
    setForm({
      name: '',
      amount: '',
      type: 'debit',
    });
    setEditingId(null);
    if (isMobileViewport) {
      setIsMobileEditorOpen(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFundMessage('');

    if (!isAdmin || isSaving) {
      return;
    }

    const trimmedName = form.name.trim();
    if (!trimmedName) {
      return;
    }

    const amount = form.type === 'credit' ? FIXED_CONTRIBUTION : Number(form.amount);
    if (!Number.isFinite(amount) || amount <= 0) {
      return;
    }

    const existingTransaction = editingId
      ? transactions.find((transaction) => transaction.id === editingId) || null
      : null;

    const payload = {
      id: editingId || createId(),
      name: trimmedName,
      date: existingTransaction?.date || currentDateKey,
      weekId: existingTransaction?.weekId || currentWeekId,
      createdAt: existingTransaction?.createdAt || Date.now(),
      updatedAt: Date.now(),
      amount,
      type: form.type,
    };

    const nextTransactions = editingId
      ? transactions.map((transaction) => (transaction.id === editingId ? payload : transaction))
      : [payload, ...transactions];

    const didSave = await persistFundState(
      { fundTransactions: nextTransactions },
      editingId ? 'Transaction updated in Firebase.' : 'Transaction added to Firebase.'
    );

    if (didSave) {
      resetForm();
    }
  };

  const handleEdit = (transaction) => {
    setEditingId(transaction.id);
    setForm({
      name: transaction.name,
      amount: transaction.type === 'credit' ? String(FIXED_CONTRIBUTION) : String(transaction.amount),
      type: transaction.type,
    });
    if (isMobileViewport) {
      setIsMobileEditorOpen(true);
    }
  };

  const handleDelete = async (id) => {
    setFundMessage('');
    if (!isAdmin || isSaving) {
      return;
    }

    const nextTransactions = transactions.filter((transaction) => transaction.id !== id);
    const didSave = await persistFundState({ fundTransactions: nextTransactions }, 'Transaction deleted from Firebase.');
    if (didSave && editingId === id) {
      resetForm();
    }
  };

  const markPlayerPaid = async (playerName) => {
    setFundMessage('');
    if (!isAdmin || isSaving) {
      return;
    }

    const key = normalizeName(playerName);
    if (!key || paidPlayerNameSet.has(key)) {
      return;
    }

    const contribution = {
      id: createId(),
      name: playerName,
      date: currentDateKey,
      weekId: currentWeekId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      amount: FIXED_CONTRIBUTION,
      type: 'credit',
    };

    await persistFundState(
      { fundTransactions: [contribution, ...transactions] },
      `${playerName} marked as paid in Firebase.`
    );
  };

  const markPlayerUnpaid = async (playerName) => {
    setFundMessage('');
    if (!isAdmin || isSaving) {
      return;
    }

    const key = normalizeName(playerName);
    if (!key) {
      return;
    }

    const editingWillBeRemoved = transactions.some(
      (transaction) =>
        transaction.id === editingId &&
        transaction.type === 'credit' &&
        normalizeName(transaction.name) === key
    );

    const didSave = await persistFundState({
      fundTransactions: transactions.filter(
        (transaction) => !(transaction.type === 'credit' && normalizeName(transaction.name) === key)
      ),
    }, `${playerName} marked as unpaid in Firebase.`);

    if (didSave && editingWillBeRemoved) {
      resetForm();
    }
  };

  const handleEditContributionPlayer = async (playerName) => {
    if (!isAdmin || isSaving) {
      return;
    }

    const key = normalizeName(playerName);
    if (!key) {
      return;
    }

    const nextNameRaw = window.prompt('Enter updated player name:', playerName);
    if (nextNameRaw === null) {
      return;
    }

    const nextName = nextNameRaw.trim();
    if (!nextName) {
      setFundMessage('Player name cannot be empty.');
      return;
    }

    const nextKey = normalizeName(nextName);
    const duplicateExists = playerNames.some(
      (existingName) => normalizeName(existingName) === nextKey && normalizeName(existingName) !== key
    );
    if (duplicateExists) {
      setFundMessage('This player already exists in contribution status.');
      return;
    }

    const updatedTransactions = transactions.map((transaction) =>
      normalizeName(transaction.name) === key ? { ...transaction, name: nextName } : transaction
    );

    const updatedContributionPlayers = contributionPlayers.map((name) =>
      normalizeName(name) === key ? nextName : name
    );

    await persistFundState({
      fundTransactions: updatedTransactions,
      contributionPlayers: updatedContributionPlayers,
    }, `Player name updated to "${nextName}".`);
  };

  const handleRemoveContributionPlayer = async (playerName) => {
    if (!isAdmin || isSaving) {
      return;
    }

    const key = normalizeName(playerName);
    if (!key) {
      return;
    }

    const confirmed = window.confirm(`Remove "${playerName}" from Player Contribution Status?`);
    if (!confirmed) {
      return;
    }

    const editingWillBeRemoved = transactions.some(
      (transaction) => transaction.id === editingId && normalizeName(transaction.name) === key
    );

    const updatedTransactions = transactions.filter(
      (transaction) => normalizeName(transaction.name) !== key
    );

    const updatedContributionPlayers = contributionPlayers.filter(
      (existingName) => normalizeName(existingName) !== key
    );

    const didSave = await persistFundState({
      fundTransactions: updatedTransactions,
      contributionPlayers: updatedContributionPlayers,
    }, `"${playerName}" removed from contribution status.`);

    if (didSave && editingWillBeRemoved) {
      resetForm();
    }
  };

  const openMobileEditorForNew = () => {
    setFundMessage('');
    setEditingId(null);
    setForm({
      name: '',
      amount: '',
      type: 'debit',
    });
    setIsMobileEditorOpen(true);
  };

  const handleAddContributionPlayer = async (event) => {
    event.preventDefault();
    setFundMessage('');

    if (!isAdmin || isSaving) {
      return;
    }

    const trimmedName = newContributionPlayer.trim();
    if (!trimmedName) {
      setFundMessage('Enter a player name to add in contribution status.');
      return;
    }

    const nextKey = normalizeName(trimmedName);
    const duplicateExists = playerNames.some((existingName) => normalizeName(existingName) === nextKey);
    if (duplicateExists) {
      setFundMessage('This player already exists in contribution status.');
      return;
    }

    const didSave = await persistFundState(
      { contributionPlayers: [trimmedName, ...contributionPlayers] },
      `"${trimmedName}" added to contribution status.`
    );

    if (didSave) {
      setNewContributionPlayer('');
    }
  };

  const renderEditorContent = (showMobileCloseButton = false) => (
    <>
      <div className="ground-expense-editor-header">
        <div>
          <h2 className="card-title" style={{ marginBottom: '8px' }}>Add / Edit Transaction</h2>
          <p className="page-intro" style={{ marginBottom: '12px' }}>
            Use this for extra expenses or manual entries.
          </p>
        </div>
        {showMobileCloseButton ? (
          <button
            type="button"
            className="button-secondary button-small fund-editor-close-btn"
            onClick={resetForm}
            disabled={isSaving}
          >
            Close
          </button>
        ) : null}
      </div>

      <form className="fund-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label" htmlFor="transaction-name">
            Name (Player / Item)
          </label>
          <input
            ref={nameInputRef}
            id="transaction-name"
            value={form.name}
            onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))}
            placeholder="Example: Rahul / Ball / Ground Rent"
            disabled={isSaving}
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="transaction-type">
            {'\u092a\u094d\u0930\u0915\u093e\u0930 (Type)'}
          </label>
          <select
            id="transaction-type"
            value={form.type}
            onChange={(event) => handleTypeChange(event.target.value)}
            disabled={isSaving}
          >
            <option value="credit">{'\u091c\u092e\u093e (Fixed \u20B9100)'}</option>
            <option value="debit">{'\u0916\u0930\u094d\u091a'}</option>
          </select>
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="transaction-amount">
            {'\u0930\u0915\u094d\u0915\u092e (Amount)'}
          </label>
          <input
            id="transaction-amount"
            type="number"
            min="1"
            value={form.type === 'credit' ? FIXED_CONTRIBUTION : form.amount}
            onChange={(event) => setForm((previous) => ({ ...previous, amount: event.target.value }))}
            disabled={isSaving || form.type === 'credit'}
            required
          />
        </div>

        <div className="button-row">
          <button type="submit" className="button-primary" disabled={isSaving}>
            {isSaving ? 'Saving...' : editingId ? 'Update Transaction' : 'Add Transaction'}
          </button>
          {editingId ? (
            <button type="button" className="button-secondary" onClick={resetForm} disabled={isSaving}>
              Cancel Edit
            </button>
          ) : null}
        </div>
      </form>

    </>
  );

  return (
    <section className="ground-expense-page">
      <div className="card">
        <h1 className="page-title">Ground Expense</h1>
        <p className="page-intro" style={{ marginBottom: '14px' }}>
          {'This page is separate from the Players page. Add contribution players manually here and mark them Paid/Unpaid. Paid automatically adds a \u091c\u092e\u093e transaction of \u20B9100.'}
        </p>
        <p className="pill" style={{ margin: '0 0 12px', fontWeight: 800 }}>
          Firebase history stays saved with date-wise and week-wise records.
        </p>

        <div className="fund-summary-grid fund-summary-top-grid">
          <article className="fund-summary-card credit">
            <span>{'Total \u091c\u092e\u093e'}</span>
            <strong>{formatINR(totals.totalCredit)}</strong>
          </article>
          <article className="fund-summary-card debit">
            <span>{'Total \u0916\u0930\u094d\u091a'}</span>
            <strong>{formatINR(totals.totalDebit)}</strong>
          </article>
          <article className="fund-summary-card balance">
            <span>{'\u0936\u093f\u0932\u094d\u0932\u0915'}</span>
            <strong>{formatINR(balance)}</strong>
          </article>
        </div>

        {fundMessage ? (
          <p className="success-text" style={{ margin: '12px 0 0' }}>
            {fundMessage}
          </p>
        ) : null}
      </div>

      <div className="card">
        <div className="top-nav" style={{ marginBottom: '10px' }}>
          <div>
            <h2 className="card-title" style={{ marginBottom: '4px' }}>Player Contribution Status</h2>
            <p className="page-intro" style={{ margin: 0 }}>
              Add players manually here and mark them as Paid or Unpaid.
            </p>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '14px', fontWeight: 800 }}>
            <span style={{ color: '#15803d' }}>Paid: {playerContributionCounts.paid}</span>
            <span style={{ color: '#dc2626' }}>Unpaid: {playerContributionCounts.unpaid}</span>
          </div>
        </div>

        {isAdmin ? (
          <form className="ground-player-form" onSubmit={handleAddContributionPlayer}>
            <input
              value={newContributionPlayer}
              onChange={(event) => setNewContributionPlayer(event.target.value)}
              placeholder="Add player name for ground contribution"
              disabled={isSaving}
            />
            <button type="submit" className="button-primary button-small" disabled={isSaving}>
              Add Player
            </button>
          </form>
        ) : null}

        {playerNames.length === 0 ? (
          <p className="empty-state">No contribution players yet. Admin can add them manually here.</p>
        ) : (
          <div className="player-status-grid">
            {playerNames.map((playerName) => {
              const isPaid = paidPlayerNameSet.has(normalizeName(playerName));

              return (
                <article key={playerName} className="player-status-row">
                  <div className="player-status-meta">
                    <p className="player-status-name">{playerName}</p>
                    <span className={`player-status-pill ${isPaid ? 'paid' : 'unpaid'}`}>
                      {isPaid ? 'Paid' : 'Unpaid'}
                    </span>
                  </div>

                  <div className="player-status-actions">
                    <button
                      type="button"
                      className="button-primary button-small fund-paid-btn"
                      onClick={() => markPlayerPaid(playerName)}
                      disabled={!isAdmin || isSaving || isPaid}
                    >
                      Paid
                    </button>
                    <button
                      type="button"
                      className="button-secondary button-small fund-unpaid-btn"
                      onClick={() => markPlayerUnpaid(playerName)}
                      disabled={!isAdmin || isSaving || !isPaid}
                    >
                      Unpaid
                    </button>
                  </div>

                  {isAdmin ? (
                    <div className="player-status-actions">
                      <button
                        type="button"
                        className="button-secondary button-small"
                        onClick={() => handleEditContributionPlayer(playerName)}
                        disabled={isSaving}
                      >
                        Edit Player
                      </button>
                      <button
                        type="button"
                        className="button-primary button-small fund-delete-btn"
                        onClick={() => handleRemoveContributionPlayer(playerName)}
                        disabled={isSaving}
                      >
                        Remove Player
                      </button>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        )}
      </div>

      <div className="card unpaid-notice-card">
        <h2 className="card-title" style={{ marginBottom: '8px' }}>Unpaid Notices</h2>
        {unpaidPlayers.length === 0 ? (
          <p className="success-text" style={{ margin: 0 }}>All players are marked as paid.</p>
        ) : (
          <div className="unpaid-notice-list">
            {unpaidPlayers.map((playerName) => (
              <p key={playerName} className="unpaid-notice-item">
                <strong>{playerName}</strong>: {formatINR(FIXED_CONTRIBUTION)} pending. Pay it to{' '}
                <strong>{PAYMENT_RECEIVER_LABEL}</strong>.
              </p>
            ))}
          </div>
        )}
      </div>

      {!isAdmin ? <PaymentQrCard title="Ground Contribution QR" /> : null}

      <div className={`ground-expense-content ${isAdmin && !isMobileViewport ? '' : 'single-column'}`}>
        <section className="card fund-main-panel">
          <div className="top-nav" style={{ marginBottom: '10px' }}>
            <div>
              <h2 className="card-title" style={{ marginBottom: '4px' }}>Transactions</h2>
              <p className="page-intro" style={{ margin: 0 }}>{'All \u091c\u092e\u093e / \u0916\u0930\u094d\u091a records'}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
              <p className="pill" style={{ margin: 0, fontWeight: 800 }}>
                <span className="fund-count-credit">
                  {'\u091c\u092e\u093e: '}
                  {transactionTypeCounts.credit}
                </span>
                {' | '}
                <span className="fund-count-debit">
                  {'\u0916\u0930\u094d\u091a: '}
                  {transactionTypeCounts.debit}
                </span>
              </p>
              {isAdmin && isMobileViewport ? (
                <button
                  type="button"
                  className="button-primary button-small"
                  onClick={openMobileEditorForNew}
                  disabled={isSaving}
                >
                  Add Transaction
                </button>
              ) : null}
            </div>
          </div>

          {transactions.length === 0 ? (
            <p className="empty-state">No transactions yet. Add the first entry.</p>
          ) : (
            <div className="fund-table-wrap">
              <table className="table fund-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Week</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td data-label="Date">{transaction.date ? formatDate(transaction.date) : '--'}</td>
                      <td data-label="Week">{transaction.weekId || '--'}</td>
                      <td data-label="Name">{transaction.name}</td>
                      <td data-label="Amount">{formatINR(transaction.amount)}</td>
                      <td data-label="Type">
                        <span className={`fund-type-pill ${transaction.type}`}>
                          {transaction.type === 'credit' ? '\u091c\u092e\u093e' : '\u0916\u0930\u094d\u091a'}
                        </span>
                      </td>
                      <td data-label="Actions">
                        {isAdmin ? (
                          <div className="button-row" style={{ marginTop: 0 }}>
                            <button
                              type="button"
                              className="button-secondary button-small"
                              onClick={() => handleEdit(transaction)}
                              disabled={isSaving}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="button-primary button-small fund-delete-btn"
                              onClick={() => handleDelete(transaction.id)}
                              disabled={isSaving}
                            >
                              Delete
                            </button>
                          </div>
                        ) : (
                          <span className="empty-state">View only</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {isAdmin && !isMobileViewport ? (
          <aside ref={formPanelRef} className="card ground-expense-side-panel">
            {renderEditorContent(false)}
          </aside>
        ) : null}
      </div>

      <section className="card">
        <div className="top-nav" style={{ marginBottom: '10px' }}>
          <div>
            <h2 className="card-title" style={{ marginBottom: '4px' }}>Archived Ground Expense History</h2>
            <p className="page-intro" style={{ margin: 0 }}>
              Every reset keeps the older transaction batch saved in Firebase.
            </p>
          </div>
          <p className="pill" style={{ margin: 0, fontWeight: 800 }}>
            Archives: {fundArchives.length}
          </p>
        </div>

        {fundArchives.length === 0 ? (
          <p className="empty-state">No archived ground expense history yet.</p>
        ) : (
          <div className="fund-archive-list">
            {fundArchives.map((archive) => {
              const archiveTotals = archive.transactions.reduce(
                (accumulator, transaction) => {
                  if (transaction.type === 'credit') {
                    accumulator.credit += transaction.amount;
                  } else {
                    accumulator.debit += transaction.amount;
                  }
                  return accumulator;
                },
                { credit: 0, debit: 0 }
              );

              return (
                <article key={archive.id} className="fund-archive-card">
                  <div className="fund-archive-card-top">
                    <strong>{archive.date ? formatDate(archive.date) : '--'}</strong>
                    <span className="pill">{archive.weekId || '--'}</span>
                  </div>
                  <div className="fund-archive-summary">
                    <span>Entries: {archive.transactions.length}</span>
                    <span>Credit: {formatINR(archiveTotals.credit)}</span>
                    <span>Debit: {formatINR(archiveTotals.debit)}</span>
                    <span>Balance: {formatINR(archiveTotals.credit - archiveTotals.debit)}</span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {isMobileViewport && isMobileEditorOpen ? (
        <div className="fund-mobile-editor-overlay" role="dialog" aria-modal="true" aria-label="Add or edit transaction">
          <aside ref={formPanelRef} className="card fund-mobile-editor-panel">
            {renderEditorContent(true)}
          </aside>
        </div>
      ) : null}
    </section>
  );
}

export default GroundExpensePage;
