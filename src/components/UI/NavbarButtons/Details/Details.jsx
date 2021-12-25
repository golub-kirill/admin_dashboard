import React from "react";
import css from "./Details.module.css";

export default function Details() {
	const [avatarSrc, setAvatarSrc] = React.useState(
		"/img/navbarIcons/user.svg"
	);
	const [name, setName] = React.useState("Иван Иванов");

	return (
		<div className={css.details__wrapper}>
			<img className={css.details__avatar} src={avatarSrc} />
			<span className={css.details__name}>{name}</span>
			<img
				className={css.details__arrow}
				src="/img/navbarIcons/chevron.svg"
			/>
		</div>
	);
}
