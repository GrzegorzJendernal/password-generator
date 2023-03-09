import React from "react";
import "./CopyButton.scss";

export const CopyButton: React.FC = () => {

	return (
		<button
		className={"copyButton"}
		>
			<img
				className={"copyButton__image"}
				src={"/src/assets/images/copy.svg"}
				alt={"copy"}
				/>
			<span className={"copyButton__text"}>
				Copy Password
			</span>
		</button>
	);
};