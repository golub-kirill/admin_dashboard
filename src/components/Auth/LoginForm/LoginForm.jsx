import React from "react";
import css from "../style/FormStyle.module.css";
import StyledInput from "../../UI/StyledInput/StyledInput";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
	return (
		<form className={css.form}>
			<h1 className={css.form__title}>Sign in</h1>
			<div className={css.input__container}>
				<StyledInput type="email" placeholder="Email" />
				<StyledInput type="password" placeholder="Password" />
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
