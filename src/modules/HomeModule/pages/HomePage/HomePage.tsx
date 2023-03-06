import React from "react";
import "./HomePage.scss";
import { Header } from "@/modules/HomeModule/components";
import { Slider } from "@/modules/HomeModule/components/Slider/Slider";
import { Checkbox } from "@/modules/HomeModule/components/Checkbox/Checkbox";
import { CheckList } from "@/modules/HomeModule/components/CheckList/CheckList";
import { StrengthLevel } from "@/modules/HomeModule/components/StrengthLevel/StrengthLevel";

export const HomePage: React.FC = () => {

	return (
		<div className={"container"}>
			<Header/>
			<Slider/>
			<CheckList>
				<Checkbox
					text={"Uppercase Letters"}
				/>
				<Checkbox
					text={"Lowercase Letters"}
				/>
				<Checkbox
					text={"Numbers"}
				/>
				<Checkbox
					text={"Symbols"}
				/>
			</CheckList>
			<StrengthLevel />
		</div>
	);
};
