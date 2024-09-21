import css from "./TransactionsHistory.module.css"
import clsx from "clsx";

const TransactionsItem = ({ type, amount, currency }) => {
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    )
}

export default TransactionsItem