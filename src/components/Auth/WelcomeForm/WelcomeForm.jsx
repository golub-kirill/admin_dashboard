import React, { useMemo } from "react";
import css from "../style/FormStyle.module.css";
import StyledInput from "../../UI/StyledInput/StyledInput";
import { NavLink } from "react-router-dom";
import {useInput } from "../../../hooks/useInput";

export default function WelcomeForm() {
	const email = useInput("", { required: true, email: true });

	let errArray = [];
	for (const error in email.errors) {
		email.errors[error].value && errArray.push(email.errors[error].message);
	}
	console.log(errArray);

	return (
		<form className={css.form}>
			<h1 className={css.form__title}>Welcome</h1>
			<div className={css.input__container}>
				{/* {(email.isDirty && !email.isExist) && <span className={css.error}>{email.error.isExist}</span>}
				{(email.isDirty && !email.isEmailValid) && <span className={css.error}>{email.error.isEmailValid}</span>} */}
				<StyledInput
					errors={email}
					value={email.value}
					onChange={(e) => email.handleChange(e)}
					onBlur={(e) => email.handleBlur(e)}
					type="email"
					placeholder="Email"
				/>
			</div>
			<NavLink to="/auth/login" className={css.form__button}>
				Get Started
			</NavLink>
		</form>
	);
}
