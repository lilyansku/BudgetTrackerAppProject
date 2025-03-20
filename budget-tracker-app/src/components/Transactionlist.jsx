//TransactionList.jsx

import Transaction from "./Transaction";

const TransactionList = ({ transactions }) => {
  return (
    <ul id="transaction-list">
      {transactions.map((transaction, index) => (
        <Transaction key={index} transaction={transaction} />
      ))}
    </ul>
  );
};

export default TransactionList;