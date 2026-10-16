function Balance({ income, expense }) {
  const balance = income - expense;

  return (
    <div className="balance-section">
      <h2>Your Balance</h2>

      <h1>₹{balance.toFixed(2)}</h1>

      <div className="summary">
        <div className="summary-box income">
          <h3>INCOME</h3>
          <p>₹{income.toFixed(2)}</p>
        </div>

        <div className="summary-box expense">
          <h3>EXPENSE</h3>
          <p>₹{expense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Balance;