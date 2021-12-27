import React from "react";
import css from "./StyledInput.module.css";

export default function StyledInput(props) {
	return (
		<div className={css.styledInput__wrapper}>
			<input className={css.styledInput} {...props}></input>
			<img
				className={css.styledInput__icon}
				src="/img/error.svg"
				alt="icon"
			/>
		</div>
	);
}
