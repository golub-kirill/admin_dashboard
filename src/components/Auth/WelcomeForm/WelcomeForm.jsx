import React from "react";
import css from "../style/FormStyle.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

export default function WelcomeForm() {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
		}),
		onSubmit: (values) => {
			navigate("/auth/login");
		},
	});
	return (
		<form className={css.form} onSubmit={formik.handleSubmit}>
			<h1 className={css.form__title}>Welcome</h1>
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
			</div>
			<button
				type="submit"
				className={css.form__button}
				disabled={!formik.isValid}>
				Get Started
			</button>
			<NavLink to="/dash">Skip</NavLink>
		</form>
	);
}
