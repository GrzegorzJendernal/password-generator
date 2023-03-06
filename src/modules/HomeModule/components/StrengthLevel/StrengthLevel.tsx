import React from "react";
import "./StrengthLevel.scss";

export const StrengthLevel: React.FC = () => {
	const passwordStrength = "Low password strength";

	return (
		<div className={"strengthLevel"}>
			<div className={"strengthLevel__text"}>
				<span className={"strengthLevel__title"}>
				Strength
			</span>
			<span className={"strengthLevel__value"}>
				{passwordStrength}
			</span>
			</div>
			<div className={"strengthLevel__bars"}>
				<div className={"strengthLevel__bar"}></div>
				<div className={"strengthLevel__bar"}></div>
				<div className={"strengthLevel__bar"}></div>
				<div className={"strengthLevel__bar"}></div>
			</div>
		</div>
	);
};