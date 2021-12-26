import React from "react";
import css from "./SidebarButton.module.css";
import { NavLink } from "react-router-dom";


export default function SidebarButton({ iconPath, children, to = ""}) {
	
	return (
		<div className={css.sidebarButton}>
			<img className={css.sidebarButtonIcon} src={iconPath} />
			<NavLink to={"/"+ to}>{children}</NavLink>
		</div>
	);
}
