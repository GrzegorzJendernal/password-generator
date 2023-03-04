import React, { useState, useEffect } from "react";
import "./Slider.scss";

export const Slider: React.FC = () => {
	const [passwordLength, setPasswordLength] = useState<number>(6);

	const handleSliderChange = (event: React.FormEvent<HTMLInputElement>) => {
		const newValue = event.currentTarget.valueAsNumber;
		setPasswordLength(newValue);

		const input = event.currentTarget;
		input.style.setProperty("--value", input.value);
	};

	useEffect(() => {
		const input = document.querySelector<HTMLInputElement>(
			".slider__input"
		);
		if (!input) return;

		input.style.setProperty(
			"--value",
			input.getAttribute("value") || passwordLength.toString()
		);
		input.style.setProperty("--min", input.getAttribute("min") || "4");
		input.style.setProperty("--max", input.getAttribute("max") || "16");

		input.addEventListener("input", () => {
			input.style.setProperty("--value", input.value);
		});

		return () => {
			input.removeEventListener("input", () => {
				input.style.setProperty("--value", input.value);
			});
		};
	}, [passwordLength]);

	return (
		<label className={"slider"}>
      <span className={"slider__title"}>
        <span className={"slider__text"}>Character Length</span>
        <span className={"slider__value"}>{passwordLength}</span>
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