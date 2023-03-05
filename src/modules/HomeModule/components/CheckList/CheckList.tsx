import React, { ReactNode } from "react";
import "./CheckList.scss";

interface CheckListProps {
	children: ReactNode;
	text?: string;
}
export const CheckList: React.FC<CheckListProps> = ({children}) => (
	<div className={"checkList"}>
		{children}
	</div>
)