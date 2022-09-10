import React from "react";
import css from "./LastTransactions.module.css";
import LastTransactionItem from "./LastTransactionItem/LastTransactionItem";

export default function LastTransactions() {
	const [transactions] = React.useState([
		{
			title: "Balance income",
			amount: 10.45,
		},
		{
			title: "Sales income",
			amount: 300,
		},
		{
			title: "Purchase expense",
			amount: -310.45,
		},
	]);

	return (
		<div className={css.lastTransactions__wrapper}>
			<div className={css.title__wrapper}>
				<h2 className={css.lastTransactions__title}>
					Latest Transactions
				</h2>
				<select defaultValue={"All"} className={css.lastTransactions__select}>
					<option>All</option>
					<option>Income</option>
					<option>Expenses</option>
				</select>
			</div>
			<div className={css.lastTransactions__list}>
				{transactions.map((transaction, index) => (
					<LastTransactionItem
						key={index}
						title={transaction.title}
						amount={transaction.amount}
					/>
				))}
			</div>
		</div>
	);
}
