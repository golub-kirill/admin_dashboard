import React from "react";
import css from "../styles/Messages.module.css";
import Message from "../components/Message/Message";

export default function Messages() {
	const messages = [
		{
			id: 1,
			from: "Иван",
			message: "Привет, как дела?",
			date: "01.01.2020",
			iserror: false,
		},
		{
			id: 2,
			from: "Иван",
			message: "Привет, как дела?",
			date: "01.01.2020",
			iserror: true,
		},
		{
			id: 3,
			from: "Иван",
			message: "Привет, как дела?",
			date: "01.01.2020",
			iserror: false,
		},
	];

	return (
		<div className={css.messages}>
			{messages.map((message) => (
				<Message key={message.id} {...message} />
			))}
		</div>
	);
}
