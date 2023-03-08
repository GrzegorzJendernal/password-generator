import React from "react";
import "./PasswordField.scss";

export const PasswordField = () => {
	const password = "PTx1O234DSR%";

	return (
		<div className={"passwordField"}>
			<span className={"passwordField__text"}>{password}</span>
				<img className={"passwordField__refresh"} src={"/src/assets/images/vector.svg"} alt={"refresh"} />
		</div>
	)
};