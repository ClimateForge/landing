import React from "react";
import Calendly from "./Calendly";
import CalItem from "./Cal";
import { display } from "../fonts";

export default function Calendar() {
	return (
		<div id="calendar" className="px-5 md:px-10 max-w-5xl w-full space-y-5">
			<h2
				className={`text-dark ${display.className} text-large-title leading-none max-w-full lg:max-w-3xl`}
			>
				Meet with founder
			</h2>
			<CalItem />
		</div>
	);
}
