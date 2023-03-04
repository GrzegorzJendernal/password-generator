import React from "react";
import "./Checkbox.scss";

interface CheckboxProps {
	text: string;
}
export const Checkbox: React.FC<CheckboxProps> = ({text}) => {

	return (
		<label className={"checkbox"}>
		<input className={"checkbox__input"} type={"checkbox"}/>
			<span className={"checkbox__text"}>
				Include {text}
			</span>
		</label>
	);
};