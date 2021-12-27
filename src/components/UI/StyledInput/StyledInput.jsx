import React from "react";
import css from "./StyledInput.module.css";

export default function StyledInput(props, onChange, onBlur) {
	
	return (
		<div className={css.styledInput__wrapper}>
			<input
				onChange={onChange}
				onBlur={onBlur}
				className={css.styledInput}
				{...props}></input>
			<img
				className={css.styledInput__icon}
				src="/img/error.svg"
				alt="icon"
			/>
		</div>
	);
}
