import React from "react";
import css from "./SalesChart.module.css";
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
const tooltipStyle = {
	backgroundColor: "#dbdfea80",
	border: "none",
	borderRadius: "5px",
	color: "#24263a",
	fontSize: "1rem",
};
export default function SalesChart() {
	return (
		<div className={css.salesChart__wrapper}>
			<h2 className={css.salesChart__title}>Sales</h2>
			<ResponsiveContainer
				width="100%"
				height={250}
				className={css.salesChart}>
				<AreaChart
					data={data}
					margin={{
						top: 5,
						right: 0,
						left: 20,
						bottom: 5,
					}}>
					<defs>
						<linearGradient
							id="salesChartGrad"
							x1="0"
							y1="0"
							x2="0"
							y2="1">
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
					<Tooltip contentStyle={tooltipStyle}/>
					<Legend iconSize={10} iconType="circle" height={20} />
					<XAxis dataKey="name" axisLine={false} tickLine={false} />
					<YAxis axisLine={false} tickLine={false} unit={" $"} />
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
						fill="url(#salesChartGrad)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
