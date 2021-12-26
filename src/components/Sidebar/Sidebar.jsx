import React from "react";
import Divider from "../UI/Divider/Divider";
import SidebarButton from "../UI/SidebarButton/SidebarButton";
import css from "./Sidebar.module.css";

export default function Sidebar() {
	return (
		<div className={css.sidebar__wrapper}>
			<img src="/logo.svg" alt="logo" className={css.logo} />
			<Divider />

			<SidebarButton iconPath={"/img/buttonIcons/dashboard.svg"} to="dash">
				Dashboard
			</SidebarButton>

			<SidebarButton iconPath={"/img/buttonIcons/userProfile.svg"}>
				User profile
			</SidebarButton>
			<SidebarButton iconPath={"/img/buttonIcons/messages.svg"}>
				Messages
			</SidebarButton>
			<SidebarButton iconPath={"/img/buttonIcons/transactions.svg"}>
				Transactions
			</SidebarButton>
			<SidebarButton iconPath={"/img/buttonIcons/myWallet.svg"}>
				My wallet
			</SidebarButton>
			<SidebarButton iconPath={"/img/buttonIcons/payment.svg"}>
				Payment
			</SidebarButton>
			<SidebarButton iconPath={"/img/buttonIcons/reports.svg"}>
				Reports
			</SidebarButton>
			<Divider />
			<SidebarButton iconPath={"/img/buttonIcons/settings.svg"}>
				Settings
			</SidebarButton>
			<SidebarButton iconPath={"/img/buttonIcons/support.svg"}>
				Support
			</SidebarButton>
			<Divider />
			<SidebarButton iconPath={"/img/buttonIcons/logout.svg"}>
				Log out
			</SidebarButton>
		</div>
	);
}
