function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="transaction-section">
      <h2>History</h2>

      {transactions.length === 0 ? (
        <p className="no-transactions">No transactions yet.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={
                transaction.type === "income"
                  ? "transaction income-border"
                  : "transaction expense-border"
              }
            >
              <div>
                <strong>{transaction.title}</strong>
                <span>{transaction.type}</span>
              </div>

              <div className="transaction-right">
                <span
                  className={
                    transaction.type === "income"
                      ? "amount income-text"
                      : "amount expense-text"
                  }
                >
                  {transaction.type === "income" ? "+" : "-"}₹
                  {transaction.amount.toFixed(2)}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  ×
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;