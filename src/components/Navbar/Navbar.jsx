import React from "react";
import Details from "../UI/NavbarButtons/Details/Details";
import NotificationsBtn from "../UI/NavbarButtons/NotificationsButton/NotificationsButton";
import Search from "../UI/NavbarButtons/Search/Search";
import css from "./Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={css.navbar__wrapper}>
			<ul className={css.navbar__list}>
				<li className={css.navbar__item}>
					<Search />
				</li>
				<li className={css.navbar__item}>
					<NotificationsBtn />
				</li>
				<li className={css.navbar__item}>
					<Details />
				</li>
			</ul>
		</nav>
	);
}
