import React from "react";
import css from "./LastTransactionItem.module.css";
import Divider from "../../UI/Divider/Divider";

export default function LastTransactionItem({ title, amount }) {
	const [amountColor] = React.useState(amount >= 0 ? "#34e4b5" : "#E03A45");
	const [amountValue] = React.useState(
		amount >= 0 ? `+$${amount}` : `-$${amount*-1}`
	);

	return (
		<div className={css.lastTransactionsItem__wrapper}>
			<div className={css.lastTransactionsItem}>
				<span className={css.lastTransactionsItem__title}>{title}</span>
				<span
					className={css.lastTransactionsItem__amount}
					style={{ color: amountColor }}>
					{amountValue}
				</span>
			</div>
			<Divider />
		</div>
	);
}
