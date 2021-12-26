import React from "react";
import css from "./StyledInput.module.css";

export default function StyledInput(props) {
	return <input className={css.styledInput} {...props}></input>;
}
