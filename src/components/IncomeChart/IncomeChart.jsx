import React from "react";
import css from "./IncomeChart.module.css";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

export default function IncomeChart() {
	const data = [
		{
			name: "jan",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "feb",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "mar",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "apr",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "may",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "jun",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: "jul",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "aug",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "sep",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "oct",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "nov",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "dec",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];
	const tooltipStyle = {
		backgroundColor: "#dbdfea80",
		border: "none",
		borderRadius: "5px",
		color: "#24263a",
		fontSize: "1rem",
	};
	return (
		<div className={css.incomeChart__wrapper}>
			<h2 className={css.incomeChart__title}>Income</h2>
			<ResponsiveContainer
				width="100%"
				height="100%"
				className={css.incomeChart}>
				<BarChart
					data={data}
					margin={{
						top: 5,
						right: 10,
						left: 20,
						bottom: 0,
					}}
					barSize={20}>
					<XAxis
						dataKey="name"
						axisLine={false}
						tickLine={false}
						interval={0}
					/>
					<YAxis axisLine={false} tickLine={false} unit={" $"} />
					<Tooltip
						cursor={{ fill: "#1D1E2C80" }}
						contentStyle={tooltipStyle}
					/>

					<Bar
						dataKey="pv"
						fill="url(#salesChartGrad)"
						background={false}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
