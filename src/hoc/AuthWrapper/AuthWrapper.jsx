import React, { useMemo } from "react";
import css from "./AuthWrapper.module.css";
import SvgBackground from "../../components/UI/SvgBackground/SvgBackground";
import WelcomeForm from "../../components/Auth/WelcomeForm/WelcomeForm";
import LoginForm from "../../components/Auth/LoginForm/LoginForm";
import RegisterForm from "../../components/Auth/RegisterForm/RegisterForm";

export default function AuthWrapper({ wrappedComponent }) {
	const color = useMemo(() => {
		switch (wrappedComponent.type.name) {
			case "WelcomeForm":
				return "#DB2379";
			case "LoginForm":
				return "#DC2430";
			case "RegisterForm":
				return "#F4B400";
			default:
				return "#DB2379";
		}
	}, [wrappedComponent.type.name]);

	return (
		<div className={css.auth__wrapper}>
			<div className={css.auth__content}>
				<div className={css.auth__leftSide}>
					<span className={css.auth__title}>
						Очень воодушевляющий слоган...
					</span>
					<img
						src="/logo.svg"
						alt="logo"
						className={css.auth__logo}
					/>
				</div>

				{wrappedComponent}
			</div>
			<SvgBackground color={color} />
		</div>
	);
}
