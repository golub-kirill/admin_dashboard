import React from "react";
import css from "../style/FormStyle.module.css";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
	return (
		<form className={css.form}>
			<h1 className={css.form__title}>Sign in</h1>
			<div className={css.input__container}>
			<input className={css.input} placeholder="Email" type="email"></input>
			<input className={css.input} placeholder="Password" type="password"></input>
			</div>
			<NavLink
				type="submit"
				to="/auth/register"
				className={css.form__button}>
				Login
			</NavLink>
			<span className={css.form__subtitle}>
				Don't have an account?{" "}
				<NavLink to="/auth/register">Sign Up</NavLink>
			</span>
		</form>
	);
}
