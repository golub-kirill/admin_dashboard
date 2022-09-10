import React from "react";
import Divider from "../UI/Divider/Divider";
import SidebarButton from "../UI/SidebarButton/SidebarButton";
import css from "./Sidebar.module.css";
import dashboard from "../../assets/buttonIcons/dashboard.svg"
import messages from "../../assets/buttonIcons/messages.svg"
import transactions from "../../assets/buttonIcons/transactions.svg"
import myWallet from "../../assets/buttonIcons/myWallet.svg"
import payment from "../../assets/buttonIcons/payment.svg"
import reports from "../../assets/buttonIcons/reports.svg"
import settings from "../../assets/buttonIcons/settings.svg"
import support from "../../assets/buttonIcons/support.svg"
import logout from "../../assets/buttonIcons/logout.svg"


export default function Sidebar() {
	return (
		<div className={css.sidebar__wrapper}>
			<img src="/logo.svg" alt="logo" className={css.logo} />
			<Divider />
			<SidebarButton iconPath={dashboard} to="#">
				Dashboard
			</SidebarButton>
			<SidebarButton iconPath={messages} to="#">
				Messages
			</SidebarButton>
			<SidebarButton iconPath={transactions} to="#">
				Transactions
			</SidebarButton>
			<SidebarButton iconPath={myWallet} to="#">
				My wallet
			</SidebarButton>
			<SidebarButton iconPath={payment} to="#">
				Payment
			</SidebarButton>
			<SidebarButton iconPath={reports} to="#">
				Reports
			</SidebarButton>
			<Divider />
			<SidebarButton iconPath={settings} to="#">
				Settings
			</SidebarButton>
			<SidebarButton iconPath={support} to="#">
				Support
			</SidebarButton>
			<Divider />
			<SidebarButton iconPath={logout} to="#">
				Log out
			</SidebarButton>
		</div>
	);
}
