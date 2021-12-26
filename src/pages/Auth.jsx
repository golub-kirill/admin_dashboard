import React, { useMemo } from "react";
import css from "../styles/Auth.module.css";
import AuthForm from "../components/AuthForm/AuthForm";
import SvgBackground from "../components/UI/SvgBackground/SvgBackground";

export default function Auth() {
	const [stage, setStage] = React.useState("");

	const color = useMemo(() => {
		switch (stage) {
			case "Get Started":
				return "#DB2379";
			case "Login":
				return "#DC2430";
			case "Register":
				return "#F4B400";
		}
	}, [stage]);
	return (
		<div className={css.auth__wrapper}>
			<div className={css.auth__content}>
				<div className={css.auth__leftSide}>
					<span className={css.auth__title}>
						Ну полный блять пиздец...
					</span>
					<img
						src="/logo.svg"
						alt="logo"
						className={css.auth__logo}
					/>
				</div>
				<AuthForm changeStageBackground={setStage} />
			</div>
			<SvgBackground color={color} />
		</div>
	);
}
