import React, { useState } from "react";
import "./Slider.scss";

export const Slider: React.FC = () => {
	const [passwordLength, setPasswordLength] = useState(6);

	const handleSliderChange = (event: React.FormEvent<HTMLInputElement>) => {
		const newValue = event.currentTarget.valueAsNumber;
		setPasswordLength(newValue);
	};

	return (
		<label className={"slider"}>
			<span
				className={"slider__title"}
			>
				<span
					className={"slider__text"}
				>
				Character Length
				</span>
				<span
					className={"slider__value"}
				>
				{passwordLength}
				</span>
			</span>
			<input
				className={"slider__input"}
				type="range"
				min="4"
				max="16"
				value={passwordLength}
				onChange={handleSliderChange}
			/>
		</label>
	);
};