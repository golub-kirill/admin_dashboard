import React from "react";
import css from "../styles/Dashboard.module.css";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import TotalIndicator from "../components/TotalIndicator/TotalIndicator";
import SalesChart from "../components/SalesChart/SalesChart";

export default function Dashboard() {
	return (
		<div className={css.dashboard}>
			<div className={css.dashboard__col}>
				<Sidebar />
			</div>
			<div className={css.dashboard__col}>
				<Navbar />
				<div className={css.dashboard__row}>
					<TotalIndicator
						title="Total Balance"
						value="$12,345"
						collation="12.94"
					/>
					<TotalIndicator
						title="Total Expence"
						value="$1,300"
						collation="-1.4"
						waves={"/img/totalIndicatorIcons/waves2.svg"}
					/>
					<TotalIndicator
						title="Total Savings"
						value="$8,450"
						collation="32.7"
						waves={"/img/totalIndicatorIcons/waves3.svg"}
					/>
				</div>
				<SalesChart />
			</div>
		</div>
	);
}
