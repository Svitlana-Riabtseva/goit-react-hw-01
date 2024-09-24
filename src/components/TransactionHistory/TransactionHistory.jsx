import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.stringColor}>
        {items.map(function fn(item) {
          return (
            <tr key={item.id} className={css.stringColor}>
              <td className={css.firstLatter}>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}