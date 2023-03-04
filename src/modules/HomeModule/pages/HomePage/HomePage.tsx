import React from "react";
import "./HomePage.scss";
import { Header } from "@/modules/HomeModule/components";
import { Slider } from "@/modules/HomeModule/components/Slider/Slider";
import { Checkbox } from "@/modules/HomeModule/components/Checkbox/Checkbox";

export const HomePage: React.FC = () => {

	return (
		<div className={"container"}>
			<Header/>
			<Slider/>
			<Checkbox
			text={"sialala"}/>
		</div>
	);
};
