import React from "react";
import "./HomePage.scss";
import { Header } from "@/modules/HomeModule/components";
import { Slider } from "@/modules/HomeModule/components/Slider/Slider";

export const HomePage: React.FC = () => {

	return (
		<div className={"container"}>
			<Header/>
			<Slider/>
		</div>
	);
};
