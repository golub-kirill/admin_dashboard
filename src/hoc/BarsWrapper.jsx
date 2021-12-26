import React from "react";
import css from "./BarsWrapper.module.css";
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar/Navbar"

export default function BarsWrapper({wrappedComponent}) {
	return (
		<div className={css.bars__wrapper}>
			<div className={css.col}>
				<Sidebar />
			</div>
			<div className={css.col}>
				<Navbar />
				{wrappedComponent}
			</div>
		</div>
	);
}
