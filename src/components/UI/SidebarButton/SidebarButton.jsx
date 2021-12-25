import React from "react";
import css from "./SidebarButton.module.css";

export default function SidebarButton({
	iconPath,
	children,
	onClick,
	...props
}) {
	return (
		<button
			className={css.sidebarButton}
			onClick={() => onClick}
			{...props}>
			<img className={css.sidebarButtonIcon} src={iconPath} />
			{children}
		</button>
	);
}
