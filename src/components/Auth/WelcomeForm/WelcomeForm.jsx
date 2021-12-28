import React, { useMemo } from "react";
import css from "../style/FormStyle.module.css";
import { NavLink } from "react-router-dom";

export default function WelcomeForm() {
	return (
		<form className={css.form}>
			<h1 className={css.form__title}>Welcome</h1>
			<div className={css.input__container}>
			<input className={css.input} placeholder="Email" type="email"></input>
			</div>
			<NavLink to="/auth/login" className={css.form__button}>
				Get Started
			</NavLink>
		</form>
	);
}
