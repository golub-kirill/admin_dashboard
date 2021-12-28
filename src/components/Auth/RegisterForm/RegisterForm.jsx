import React from "react";
import css from "../style/FormStyle.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

export default function RegisterForm() {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
			phone: "",
			password: "",
			passwordConfirm: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			phone: Yup.string()
				.matches(/^\d{10}$/, "Phone number must be 10 digits")
				.required("Phone number is required"),
			password: Yup.string()
				.min(8, "Password must be at least 8 characters")
				.required("Password is required"),
			passwordConfirm: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.required("Please confirm your password"),
		}),
		onSubmit: (values) => {
			navigate("/auth/login");
		},
	});

	return (
		<form className={css.form} onSubmit={formik.handleSubmit}>
			<h1 className={css.form__title}>Sign Up</h1>
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
					placeholder="Phone"
					type="tel"
					name="phone"
					value={formik.values.phone}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.phone &&
						formik.touched.phone && {
							borderLeft: "solid 10px #E03A45",
							borderBottomColor: "#E03A45",
						}
					}
				/>
				{formik.touched.phone && formik.errors.phone && (
					<ErrorMessage error={formik.errors.phone} />
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
				<input
					className={css.input}
					placeholder="Confirm Password"
					type="password"
					name="passwordConfirm"
					value={formik.values.passwordConfirm}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.passwordConfirm &&
						formik.touched.passwordConfirm && {
							borderLeft: "solid 10px #E03A45",
							borderBottomColor: "#E03A45",
						}
					}
				/>
				{formik.touched.passwordConfirm &&
					formik.errors.passwordConfirm && (
						<ErrorMessage error={formik.errors.passwordConfirm} />
					)}
			</div>

			<button
				type="submit"
				className={css.form__button}
				disabled={!formik.isValid}>
				Register
			</button>

			<span className={css.form__subtitle}>
				Already have an account?{" "}
				<NavLink to="/auth/login">Sign In</NavLink>
			</span>
			<NavLink to="/dash">Skip</NavLink>
		</form>
	);
}
