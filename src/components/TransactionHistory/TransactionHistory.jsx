import React from 'react';
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({transactions}) => {
  return (
        <table className={styles.table}>
            <thead className={styles.head}>
                <tr >
                    <th className={styles.title}>Type</th>
                    <th className={styles.title}>Amount</th>
                    <th className={styles.title}>Currency</th>
                </tr>
            </thead>
            <tbody>
                    {transactions.map(transaction => (    
                    <tr key={transaction.id}> 
                    <td className={styles.body}>{transaction.type}</td>
                    <td className={styles.body}>{transaction.amount}</td>
                    <td className={styles.body}>{transaction.currency}</td>
                    </tr>
                ))}    
            </tbody>
        </table>
  )
}

export default TransactionHistory