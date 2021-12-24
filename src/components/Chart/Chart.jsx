import React from "react";
import css from "./Chart.module.css";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "12.03",
		"Last month": 4000,
		"Current month": 2400,
	},
	{
		name: "15.03",
		"Last month": 3000,
		"Current month": 1398,
	},
	{
		name: "18.03",
		"Last month": 2000,
		"Current month": 9800,
	},
	{
		name: "21.03",
		"Last month": 2780,
		"Current month": 3908,
	},
	{
		name: "24.03",
		"Last month": 1890,
		"Current month": 7800,
	},
	{
		name: " 27.03",
		"Last month": 2390,
		"Current month": 2500,
	},
	{
		name: "30.03",
		"Last month": 3490,
		"Current month": 4300,
	},
];

export default function App() {
	return (
		<div className={css.chart__wrapper}>
			<ResponsiveContainer width="100%" height={250}>
			<AreaChart data={data}>
				<defs>
					<linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="5%"
							stopColor="#E03A45"
							stopOpacity={0.7}
						/>
						<stop
							offset="95%"
							stopColor="#E03A45"
							stopOpacity={0.01}
						/>
					</linearGradient>
				</defs>
				<Tooltip/>
				<Legend verticalAlign="top" iconSize={10} iconType="circle" height={25} />
				<XAxis dataKey="name" axisLine={false}/>
				<YAxis axisLine={false}/>
				<Area
					type="monotone"
					dataKey="Last month"
					stackId="1"
					stroke="#894BA9"
					fill="transparent"
				/>
				<Area
					type="monotone"
					dataKey="Current month"
					stackId="0"
					stroke="#E03A45"
					strokeWidth={2}
					fillOpacity={1}
					fill="url(#chartGrad)"
				/>
			</AreaChart>
		</ResponsiveContainer>
		</div>
	);
}
