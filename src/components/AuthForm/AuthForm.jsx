import React from "react";
import css from "./AuthForm.module.css";
import classNames from "classnames";
import StyledInput from "../UI/StyledInput/StyledInput";

export default function AuthForm({changeStageBackground}) {
	const [rotate, setRotate] = React.useState(false);
	const [stage, setStage] = React.useState("Get Started");
	const [title, setTitle] = React.useState("Welcome");

	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");

	const formClasses = classNames(css.form, {
		[css.rotate]: rotate,
	});

	const changeStage = (stage, title) => {
		setStage(stage);
		setTitle(title);
		setRotate(!rotate);
		changeStageBackground(stage);
	};


	switch (stage) {
		case "Login": {
			return (
				<div className={formClasses}>
					<h1 className={css.form__title}>{title}</h1>
					<div className={css.input__container}>
						<StyledInput
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<StyledInput
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						className={css.form__button}
						onClick={() => changeStage("Register", "Sign Up")}>
						{stage}
					</button>
					<span
						className={css.form__subtitle}
						onClick={() => changeStage("Register", "Sign Up")}>
						Don't have an account? <b>Sign Up</b>
					</span>
				</div>
			);
		}

		case "Register": {
			return (
				<div className={formClasses}>
					<h1 className={css.form__title}>{title}</h1>
					<div className={css.input__container}>
						<StyledInput
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<StyledInput
							placeholder="Phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
						<StyledInput
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<StyledInput
							placeholder="Confirm password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					<button
						className={css.form__button}
						onClick={() => changeStage("Get Started", "Welcome")}>
						{stage}
					</button>
					<span
						className={css.form__subtitle}
						onClick={() => changeStage("Login", "Sign In")}>
						Already have an account? <b>Sign In</b>
					</span>
				</div>
			);
		}

		default: {
			return (
				<div className={formClasses}>
					<h1 className={css.form__title}>{title}</h1>
					<div className={css.input__container}>
						<StyledInput
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button
						className={css.form__button}
						onClick={() => changeStage("Login", "Sign In")}>
						{stage}
					</button>
				</div>
			);
		}
	}
}
