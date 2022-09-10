import React from "react";
import css from "./Search.module.css";
import classNames from "classnames";

import searchSvg from '../../../../assets/navbarIcons/search.svg'

export default function Search() {
	const [isSearchVisible, setIsSearchVisible] = React.useState(false);
	const searchInputClasses = classNames(css.searchInput, {
		[css.visible]: isSearchVisible,
	});

	return (
		<div className={css.search}>
			<input
				className={searchInputClasses}
				type="search"
				placeholder="Search"
			/>
			<button className={css.searchButton} onClick={() => setIsSearchVisible(!isSearchVisible)}>
				<img
					className={css.searchButton__icon}
					src={searchSvg}
					alt="search"
				/>
			</button>
		</div>
	);
}
