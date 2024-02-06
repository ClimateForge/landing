import React from "react";
import IndustryCard from "./industry-card";
import { display } from "../fonts";

export default function Industries() {
	return (
		<div className="flex flex-col w-full gap-12">
			<div className="px-5 md:px-10 max-w-5xl w-full gap-5 mx-auto">
				<h2
					className={`text-dark ${display.className} text-large-title leading-none max-w-full lg:max-w-3xl`}
				>
					Industries we serve
				</h2>
				<p className="text-dark-secondary text-body max-w-2xl">
					Lorem ipsum dolor sit amet consectetur. Nisl maecenas urna aliquam et
					et enim. Id pellentesque a scelerisque ut nunc.
				</p>
			</div>
			<div className="px-5 md:px-10 pb-3 flex space-x-4 overflow-x-auto">
				<IndustryCard
					title="Solar"
					icon="/solar-panel.jpg"
					iconAlt="Solar Panel"
				/>
				<IndustryCard
					title="Roofing"
					icon="/solar-panel.jpg"
					iconAlt="Solar Panel"
				/>
				<IndustryCard
					title="Landscaping"
					icon="/solar-panel.jpg"
					iconAlt="Solar Panel"
				/>
				<IndustryCard
					title="HVAC"
					icon="/solar-panel.jpg"
					iconAlt="Solar Panel"
				/>
			</div>
		</div>
	);
}
