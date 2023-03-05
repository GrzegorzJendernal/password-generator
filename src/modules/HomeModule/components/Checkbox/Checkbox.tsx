import React, { useState } from "react";
import "./Checkbox.scss";

interface CheckboxProps {
	text: string;
}
export const Checkbox: React.FC<CheckboxProps> = ({text}) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className={"checkbox"}>
		<button
			className={`checkbox__button ${isChecked ? "checkbox__button--checked" : ""}`}
			onClick={() => setIsChecked(!isChecked)}
		>
			{isChecked ? <img className={"checkbox__mark"} src={"/src/assets/images/checked.svg"} alt={"checked"}/> : ""}
		</button>
			<span className={"checkbox__text"}>
				Include {text}
			</span>
		</div>
	);
};