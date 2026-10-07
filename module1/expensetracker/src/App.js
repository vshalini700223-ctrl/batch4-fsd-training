import { useState } from "react";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  };

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div className="app">
      <div className="expense-container">
        <h1 className="main-title">Expense Tracker</h1>

        <Balance income={income} expense={expense} />

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />

        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default App;
