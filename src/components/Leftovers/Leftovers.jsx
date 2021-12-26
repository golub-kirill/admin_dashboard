import React from "react";
import css from "./Leftovers.module.css";
const data = [
	{
		name: "Яблоки",
		left: 4000,
		unit: "кг",
	},
	{
		name: "Молоко",
		left: 35,
		unit: "л",
	},
	{
		name: "Манго",
		left: 30,
		unit: "шт",
	},
	{
		name: "Бананы",
		left: 3000,
		unit: "кг",
	},
	{
		name: "Апельсины",
		left: 2000,
		unit: "кг",
	},
	{
		name: "Груши",
		left: 1000,
		unit: "кг",
	},
	{
		name: "Персики",
		left: 500,
		unit: "кг",
	},
	{
		name: "Абрикосы",
		left: 300,
		unit: "кг",
	},
	{
		name: "Киви",
		left: 200,
		unit: "кг",
	},
	{
		name: "Мандарины",
		left: 100,
		unit: "кг",
	},
	{
		name: "Клубника",
		left: 50,
		unit: "кг",
	},
	{
		name: "Лимон",
		left: 20,
		unit: "шт",
	},
	{
		name: "Грейпфрут",
		left: 10,
		unit: "шт",
	},
	{
		name: "Лайм",
		left: 5,
		unit: "шт",
	},
	{
		name: "Малина",
		left: 5,
		unit: "кг",
	},
	{
		name: "Ежевика",
		left: 1,
		unit: "кг",
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
