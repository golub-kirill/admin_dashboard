import React from "react";
import css from "./TotalIndicator.module.css";
import wavesSvg from "../../../assets/totalIndicatorIcons/waves.svg"
import arrow_up from "../../../assets/totalIndicatorIcons/arrow_up.svg"
import arrow_down from "../../../assets/totalIndicatorIcons/arrow_down.svg"


export default function TotalIndicator({ title, value, collation, waves }) {
	const [header] = React.useState(title || "Total Balance");
	const [store] = React.useState(value || 0);
	const [collationValue] = React.useState(collation || 0);
	const [collationColor] = React.useState(
		collationValue >= 0 ? "#34e4b5" : "#E03A45"
	);
	const [collationIcon] = React.useState(
		collationValue > 0
			? arrow_up
			: arrow_down
	);
	const [wavesSrc] = React.useState(
		waves || wavesSvg
	);

	return (
		<div className={css.ti__wrapper}>
			<div className={css.ti__textRows}>
				<p className={css.ti__title}>{header}</p>
				<p className={css.ti__value}>$ {store}</p>
				<p
					className={css.ti__collation}
					style={{ color: collationColor }}>
					<img src={collationIcon} alt="collation" />
					{collationValue}%
				</p>
			</div>
			<div className={css.waves}>
				<img src={wavesSrc} alt="waves" />
			</div>
		</div>
	);
}
