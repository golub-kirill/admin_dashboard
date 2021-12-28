import React from "react";
import css from "../style/FormStyle.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";


export default function RegisterForm() {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
			phone: "",
			password: "",
			passwordConfirm: "",
		},
		onSubmit: (values) => {
			console.log(values);
			navigate("/auth/login");
		},
	});

	return (
		<form className={css.form} onSubmit={formik.handleSubmit}>
			<h1 className={css.form__title}>Sign Up</h1>
			<div className={css.input__container}>
				<input
					className={css.input}
					placeholder="Email"
					type="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}></input>
				<input
					className={css.input}
					placeholder="Phone"
					type="tel"
					name="phone"
					value={formik.values.phone}
					onChange={formik.handleChange}></input>
				<input
					className={css.input}
					placeholder="Password"
					type="password"
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}></input>
				<input
					className={css.input}
					placeholder="Confirm Password"
					type="password"
					name="passwordConfirm"
					value={formik.values.passwordConfirm}
					onChange={formik.handleChange}></input>
			</div>

			<button type="submit" className={css.form__button}>
				Register
			</button>

			<span className={css.form__subtitle}>
				Already have an account?{" "}
				<NavLink to="/auth/login">Sign In</NavLink>
			</span>
		</form>
	);
}
