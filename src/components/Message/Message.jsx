import classNames from "classnames";
import React from "react";
import css from "./Message.module.css";

export default function Message({from, message, date, iserror=false}) {
    const iconClasses = classNames (css.message__icon, {
        [css.message__icon_error]: iserror,
    })
	return (
		<div className={css.message}>
			<img className={iconClasses}
				src="/img/messageIcon.svg"
				alt="icon"
			/>
			<span className={css.message__date}>{date}</span>
			<span className={css.message__from}>{from}</span>
			<span className={css.message__text}>{message}</span>
		</div>
	);
}
