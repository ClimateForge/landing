import React from "react";
import CalItem from "./Cal";

export default function Calendar() {
	return (
		<div id="calendar" className="px-5 md:px-10 max-w-5xl w-full space-y-5">
			<h2 className="max-w-full lg:max-w-3xl">
				Schedule a Demo
			</h2>
			<CalItem />
		</div>
	);
}
