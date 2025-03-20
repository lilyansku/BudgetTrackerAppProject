import { useState } from "react";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import "./components/styles.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);


  const saldo = transactions.reduce((acc, trans) => acc + trans.amount, 0);


  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="container">
      <h1>Budget Tracker</h1>
      <div className="balance-box">
        <h3>Saldo:</h3>
        <p id="balance">{saldo} €</p>
      </div>
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;