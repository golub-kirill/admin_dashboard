import React from "react";
import css from "./Leftovers.module.css";
const data = [
	{
		name: "Apples",
		left: 4000,
		unit: "kg",
	},
	{
		name: "Milk",
		left: 35,
		unit: "l",
	},
	{
		name: "Mango",
		left: 30,
		unit: "pcs",
	},
	{
		name: "Bananas",
		left: 3000,
		unit: "kg",
	},
	{
		name: "Oranges",
		left: 40,
		unit: "kg",
	},
	{
		name: "Lemons",
		left: 50,
		unit: "kg",
	},
	{
		name: 'placeholder',
		left: 0,
		unit: "l",
	},
	{
		name: 'placeholder',
		left: 0,
		unit: "lb",
	},
	{
		name: 'placeholder',
		left: 0,
		unit: "kg",
	},
	{
		name: 'placeholder',
		left: 0,
		unit: "pcs",
	},
	{
		name: 'placeholder',
		left: 0,
		unit: "kg",
	},
	{
		name: 'placeholder',
		left: 0,
		unit: "l",
	},
];

export default function Leftovers() {
	return (
		<div className={css.leftovers__wrapper}>
			<div className={css.title__wrapper}>
				<h2 className={css.leftovers__title}>Leftovers</h2>
				<select defaultValue={"All"} className={css.leftovers__select}>
					<option>All</option>
					<option>&lt; 10pc</option>
					<option>&lt; 1pc</option>
				</select>
			</div>

			<div className={css.leftovers__list}>
				{data.map((item, index) => (
					<div className={css.leftovers__item} key={index}>
						<div className={css.leftovers__item__name}>
							{item.name}
						</div>
						<div className={css.leftovers__item__left}>
							{item.left} {item.unit}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
