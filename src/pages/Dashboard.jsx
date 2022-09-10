import React from "react";
import css from "../styles/Dashboard.module.css";
import TotalIndicator from "../components/Dashboard/TotalIndicator/TotalIndicator";
import SalesChart from "../components/Dashboard/SalesChart/SalesChart";
import IncomeChart from "../components/Dashboard/IncomeChart/IncomeChart";
import LastTransactions from "../components/Dashboard/LastTransactions/LastTransactions";
import Card from "../components/Dashboard/Card/Card";
import Leftovers from "../components/Dashboard/Leftovers/Leftovers";
import waves2Svg from "../assets/totalIndicatorIcons/waves2.svg"
import waves3Svg from "../assets/totalIndicatorIcons/waves3.svg"

export default function Dashboard() {
	return (
		<div className={css.dashboard}>
			
				<div className={css.dashboard__row}>
					<div className={css.dashboard__col}>
						<div className={css.dashboard__row}>
							<TotalIndicator
								title="Total Balance"
								value="12,345"
								collation="12.94"
							/>
							<TotalIndicator
								title="Total Expence"
								value="1,300"
								collation="-1.4"
								waves={waves2Svg}
							/>
							<TotalIndicator
								title="Total Savings"
								value="8,450"
								collation="32.7"
								waves={waves3Svg}
							/>
						</div>
						<SalesChart />
						<div className={css.dashboard__row}>
							<IncomeChart />
							<LastTransactions />
						</div>
					</div>

					<div className={css.dashboard__col}>
						<Card />
						<Leftovers />
					</div>
				</div>
		
		</div>
	);
}
