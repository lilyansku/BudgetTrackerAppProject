import { useState } from "react";

const TransactionForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || isNaN(amount) || amount === 0) return;
    onAdd({ text, amount: parseFloat(amount) });
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nimi</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Esim. Ruokakauppa"
      />
      <label>Summa (€)</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Esim. -50 tai 100"
      />
      <button type="submit">Lisää</button>
    </form>
  );
};

export default TransactionForm;