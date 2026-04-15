import { useMemo } from 'react';
import { useAppData } from '../context/AppDataContext';

const formatINR = (value) => `\u20B9${value.toLocaleString('en-IN')}`;

function GroundFundSummaryPage() {
  const { matches, fundTransactions } = useAppData();

  const matchFeeTotals = useMemo(
    () =>
      matches.reduce(
        (accumulator, match) => {
          if (match.status === 'no-match' || !match.loserCaptain || (match.penalty || 0) <= 0) {
            return accumulator;
          }

          accumulator.totalPenalty += match.penalty;

          if (match.penaltyPaid === true) {
            accumulator.totalCollected += match.penalty;
          } else {
            accumulator.totalOutstanding += match.penalty;
          }

          return accumulator;
        },
        { totalPenalty: 0, totalCollected: 0, totalOutstanding: 0 }
      ),
    [matches]
  );

  const groundExpenseTotals = useMemo(
    () =>
      fundTransactions.reduce(
        (accumulator, transaction) => {
          if (transaction.type === 'credit') {
            accumulator.totalCredit += transaction.amount;
          } else {
            accumulator.totalDebit += transaction.amount;
          }

          return accumulator;
        },
        { totalCredit: 0, totalDebit: 0 }
      ),
    [fundTransactions]
  );

  const combinedTotals = useMemo(() => {
    const totalCredit = groundExpenseTotals.totalCredit + matchFeeTotals.totalCollected;
    const totalDebit = groundExpenseTotals.totalDebit;

    return {
      totalCredit,
      totalDebit,
      balance: totalCredit - totalDebit,
    };
  }, [groundExpenseTotals.totalCredit, groundExpenseTotals.totalDebit, matchFeeTotals.totalCollected]);

  return (
    <section className="ground-expense-page">
      <div className="card">
        <h1 className="page-title">Ground Fund Summary</h1>
        <p className="page-intro" style={{ marginBottom: '14px' }}>
          Match fee collections from losing captains are added here with the current Ground Expense calculation, without changing the existing Ground Expense page.
        </p>
      </div>

      <div className="fund-summary-grid fund-summary-top-grid">
        <article className="fund-summary-card credit">
          <span>{'Total \u091c\u092e\u093e'}</span>
          <strong>{formatINR(combinedTotals.totalCredit)}</strong>
        </article>
        <article className="fund-summary-card debit">
          <span>{'Total \u0916\u0930\u094d\u091a'}</span>
          <strong>{formatINR(combinedTotals.totalDebit)}</strong>
        </article>
        <article className="fund-summary-card balance">
          <span>{'\u0936\u093f\u0932\u094d\u0932\u0915'}</span>
          <strong>{formatINR(combinedTotals.balance)}</strong>
        </article>
      </div>

      <div className="ground-fund-summary-grid">
        <section className="card ground-fund-breakdown">
          <div className="top-nav" style={{ marginBottom: '10px' }}>
            <div>
              <h2 className="card-title" style={{ marginBottom: '4px' }}>Collection Breakdown</h2>
              <p className="page-intro" style={{ margin: 0 }}>
                Match fee tracker totals are included here separately from the main Ground Expense page.
              </p>
            </div>
          </div>

          <article className="fund-summary-card credit">
            <span>Match Fee Collected</span>
            <strong>{formatINR(matchFeeTotals.totalCollected)}</strong>
          </article>
          <article className="fund-summary-card debit">
            <span>Match Fee Outstanding</span>
            <strong>{formatINR(matchFeeTotals.totalOutstanding)}</strong>
          </article>
          <article className="fund-summary-card credit">
            <span>Ground Contribution Collected</span>
            <strong>{formatINR(groundExpenseTotals.totalCredit)}</strong>
          </article>
          <article className="fund-summary-card debit">
            <span>Ground Expense Spent</span>
            <strong>{formatINR(groundExpenseTotals.totalDebit)}</strong>
          </article>
        </section>

        <section className="card">
          <div className="top-nav" style={{ marginBottom: '10px' }}>
            <div>
              <h2 className="card-title" style={{ marginBottom: '4px' }}>Calculation</h2>
              <p className="page-intro" style={{ margin: 0 }}>
                Combined total = Ground contribution + paid match fee - Ground expense.
              </p>
            </div>
          </div>

          <div className="fund-table-wrap">
            <table className="table fund-calculation-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ground Contribution</td>
                  <td>{formatINR(groundExpenseTotals.totalCredit)}</td>
                </tr>
                <tr>
                  <td>Match Fee Collected</td>
                  <td>{formatINR(matchFeeTotals.totalCollected)}</td>
                </tr>
                <tr>
                  <td>{'Total \u091c\u092e\u093e'}</td>
                  <td>{formatINR(combinedTotals.totalCredit)}</td>
                </tr>
                <tr>
                  <td>{'Total \u0916\u0930\u094d\u091a'}</td>
                  <td>{formatINR(combinedTotals.totalDebit)}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>{'\u0936\u093f\u0932\u094d\u0932\u0915'}</td>
                  <td>{formatINR(combinedTotals.balance)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </div>
    </section>
  );
}

export default GroundFundSummaryPage;
