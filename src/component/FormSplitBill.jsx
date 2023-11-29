import { Button } from "./Button";

export function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with a friend</h2>

      <label>Bill Value 💸</label>
      <input type="text" />

      <label>Your expense</label>
      <input type="text" />

      <label>Friend's expense 💸</label>
      <input type="text" disabled />

      <label>Who's paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
