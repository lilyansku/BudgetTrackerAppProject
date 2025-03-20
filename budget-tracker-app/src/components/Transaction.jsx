//Transaction
const Transaction = ({ transaction }) => {
    return (
      <li className={transaction.amount >= 0 ? "income" : "expense"}>
        {transaction.text} <span>{transaction.amount} €</span>
      </li>
    );
  };
  
  export default Transaction;
