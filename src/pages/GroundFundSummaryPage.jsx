import { useMemo, useState } from 'react';
import { useAppData } from '../context/AppDataContext';
import useAutoClearMessage from '../hooks/useAutoClearMessage';
import { openGroundFundSummaryPdf } from '../utils/pdfUtils';

const formatINR = (value) => `\u20B9${value.toLocaleString('en-IN')}`;
const isCreditType = (type) => type === 'credit-fixed' || type === 'credit-manual' || type === 'credit';

function GroundFundSummaryPage({ accessMode }) {
  const { matches, players, fundTransactions } = useAppData();
  const [pdfMessage, setPdfMessage] = useState('');
  const [pdfMessageType, setPdfMessageType] = useState('success');
  const isAdmin = accessMode === 'admin';

  useAutoClearMessage(pdfMessage, setPdfMessage);

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
          if (isCreditType(transaction.type)) {
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

  const handleExportPdf = () => {
    if (!isAdmin) {
      return;
    }

    const didOpen = openGroundFundSummaryPdf({
      matches,
      players,
      transactions: fundTransactions,
    });

    setPdfMessageType(didOpen ? 'success' : 'warning');
    setPdfMessage(
      didOpen
        ? 'Ground fund summary PDF opened. Choose "Save as PDF" to download it.'
        : 'Ground fund summary PDF could not be prepared. Please try again.'
    );
  };

  return (
    <section className="ground-expense-page">
      <div className="card">
        <div className="top-nav" style={{ marginBottom: pdfMessage ? '10px' : 0 }}>
          <div>
            <h1 className="page-title">Ground Fund Summary</h1>
          </div>
          {isAdmin ? (
            <button
              type="button"
              className="button-secondary button-small"
              onClick={handleExportPdf}
            >
              Generate PDF
            </button>
          ) : null}
        </div>

        {pdfMessage ? (
          <p className={pdfMessageType === 'success' ? 'success-text' : 'warning-text'} style={{ margin: 0 }}>
            {pdfMessage}
          </p>
        ) : null}
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
              <h2 className="card-title" style={{ marginBottom: '4px' }}>संकलन तपशील</h2>
            </div>
          </div>

          <article className="fund-summary-card credit">
            <span>हरलेल्या जमा मॅच फी</span>
            <strong>{formatINR(matchFeeTotals.totalCollected)}</strong>
          </article>
          <article className="fund-summary-card debit">
            <span>हरलेल्या बाकी मॅच फी</span>
            <strong>{formatINR(matchFeeTotals.totalOutstanding)}</strong>
          </article>
          <article className="fund-summary-card credit">
            <span>ग्राऊंड साठी दिलेले पैसे</span>
            <strong>{formatINR(groundExpenseTotals.totalCredit)}</strong>
          </article>
          <article className="fund-summary-card debit">
            <span>क्रिकेट + ग्राऊंड साठी झालेला खर्च</span>
            <strong>{formatINR(groundExpenseTotals.totalDebit)}</strong>
          </article>
        </section>

        <section className="card">
          <div className="top-nav" style={{ marginBottom: '10px' }}>
            <div>
              <h2 className="card-title" style={{ marginBottom: '4px' }}>गणना</h2>
            </div>
          </div>

          <div className="fund-table-wrap">
            <table className="table fund-calculation-table">
              <thead>
                <tr>
                  <th>घटक</th>
                  <th>रक्कम</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ग्राऊंड साठी दिलेले पैसे</td>
                  <td>{formatINR(groundExpenseTotals.totalCredit)}</td>
                </tr>
                <tr>
                  <td>हरलेल्या जमा मॅच फी</td>
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
