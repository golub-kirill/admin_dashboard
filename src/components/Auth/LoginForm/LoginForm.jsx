import React from "react";
import css from "../style/FormStyle.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

export default function LoginForm() {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			password: Yup.string()
				.min(8, "Password must be at least 8 characters")
				.required("Password must be at least 8 characters"),
		}),
		onSubmit: (values) => {
			navigate("/auth/register");
		},
	});
	return (
		<form className={css.form} onSubmit={formik.handleSubmit}>
			<h1 className={css.form__title}>Sign in</h1>
			<div className={css.input__container}>
				<input
					autoFocus
					className={css.input}
					placeholder="Email"
					type="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.email &&
						formik.touched.email && {
							borderLeft: "solid 10px #E03A45",
							borderBottomColor: "#E03A45",
						}
					}
				/>
				{formik.touched.email && formik.errors.email && (
					<ErrorMessage error={formik.errors.email} />
				)}

				<input
					className={css.input}
					placeholder="Password"
					type="password"
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.password &&
						formik.touched.password && {
							borderLeft: "solid 10px #E03A45",
							borderBottomColor: "#E03A45",
						}
					}
				/>
				{formik.touched.password && formik.errors.password && (
					<ErrorMessage error={formik.errors.password} />
				)}
			</div>

			<button
				type="submit"
				className={css.form__button}
				disabled={!formik.isValid}>
				Login
			</button>
			<span className={css.form__subtitle}>
				Don't have an account?{" "}
				<NavLink to="/auth/register">Sign Up</NavLink>
			</span>
		
			<NavLink to="/dash">Skip</NavLink>
		</form>
	);
}
