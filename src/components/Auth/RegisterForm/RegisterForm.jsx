import React from "react";
import css from "../style/FormStyle.module.css";
import StyledInput from "../../UI/StyledInput/StyledInput";
import { NavLink } from "react-router-dom";

export default function RegisterForm() {
	return (
		<form className={css.form}>
			<h1 className={css.form__title}>Sign Up</h1>
			<div className={css.input__container}>
				<StyledInput type="email" placeholder="Email" />
				<StyledInput type="tel" placeholder="Phone" />
				<StyledInput type="password" placeholder="Password" />
				<StyledInput type="password" placeholder="Confirm Password" />
			</div>
			<NavLink type="submit" to="/dash" className={css.form__button}>
				Register
			</NavLink>
			<span className={css.form__subtitle}>
				Already have an account?{" "}
				<NavLink to="/auth/login">Sign In</NavLink>
			</span>
		</form>
	);
}
