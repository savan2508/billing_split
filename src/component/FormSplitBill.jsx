import { Button } from "./Button";
import { useState } from "react";

export function FormSplitBill({ friend, onSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend =
    billValue && yourExpense ? Number(billValue) - Number(yourExpense) : "";

  function handleSplitBillFormSubmit(e) {
    e.preventDefault();

    if (!billValue || !yourExpense) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -yourExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBillFormSubmit}>
      <h2>Split a bill with a {friend.name}</h2>

      <label>💵 Bill Value 💸</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />

      <label>💲Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) < Number(billValue)
              ? Number(e.target.value)
              : billValue,
          )
        }
      />

      <label>🎎 Friend's expense 💸</label>
      <input type="text" disabled value={paidByFriend} />

      <label>👩‍✈️Who's paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
