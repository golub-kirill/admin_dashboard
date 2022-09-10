import React from "react";
import css from "./Details.module.css";
import { NavLink } from "react-router-dom";
import avatarSvg from "../../../../assets/navbarIcons/user.svg" 
import arrowSvg from "../../../../assets/navbarIcons/chevron.svg" 
export default function Details() {
	const [avatarSrc, setAvatarSrc] = React.useState(
		avatarSvg
	);
	const [name, setName] = React.useState("John Smith");

	return (
		<div className={css.details__wrapper}>
			<img className={css.details__avatar} src={avatarSrc} alt="avatar"/>
			<NavLink to="/" replace className={css.details__name}>{name}</NavLink>
			<img
				className={css.details__arrow}
				src={arrowSvg}
				alt="arrow"
			/>
		</div>
	);
}
