import TransactionsItem from "./TransactionsItem"
import css from "./TransactionsHistory.module.css"
import clsx from "clsx";

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={clsx(css.table)}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map((transaction) => {
                    return <tr key={transaction.id}>
                        <TransactionsItem
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency}
                        />
                    </tr>;
                })}
            </tbody>
        </table>

    )
}

export default TransactionHistory