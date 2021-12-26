import React from "react";
import css from "../style/FormStyle.module.css";
import StyledInput from "../../UI/StyledInput/StyledInput";
import { NavLink } from "react-router-dom";

export default function WelcomeForm() {
	return (
		<form className={css.form}>
			<h1 className={css.form__title}>Welcome</h1>
			<div className={css.input__container}>
			<StyledInput type="email" placeholder="Email" />
			</div>
			<NavLink to="/auth/login" className={css.form__button}>
				Get Started
			</NavLink>
		</form>
	);
}
