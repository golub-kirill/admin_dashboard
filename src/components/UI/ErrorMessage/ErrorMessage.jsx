import React from "react";
import css from "./ErrorMessage.module.css";

export default function ErrorMessages({error}) {

	if(!error) return null;

	return (
		<div className={css.error__message}>
		<img
			src="/img/error.svg"
			alt="error"
			className={css.error__img}
		/>
		{error}
	</div>
	);
}
