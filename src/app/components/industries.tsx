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
				{/* <p className="text-dark-secondary text-body max-w-2xl">
					Lorem ipsum dolor sit amet consectetur. Nisl maecenas urna aliquam et
					et enim. Id pellentesque a scelerisque ut nunc.
				</p> */}
			</div>
			<div className="max-w-5xl mx-auto w-full">
				<div className="pl-5 md:pl-10 pb-3 flex space-x-4 overflow-x-auto">
					<IndustryCard
						title="Solar"
						icon="/solar-panel.jpg"
						iconAlt="Image of a field of solar panels"
					/>
					<IndustryCard
						title="Energy Storage"
						icon="/energy-storage.jpeg"
						iconAlt="Image of an energy storage device mounted on a garage wall"
					/>
					<IndustryCard
						title="EV Charging"
						icon="/ev-charging.jpeg"
						iconAlt="Image of an electric vehicle plugged into a home charging station"
					/>
					{/* <IndustryCard
						title="Roofing"
						icon="/roofing.jpeg"
						iconAlt="Image of a person working on a roof"
					/>
					<IndustryCard
						title="Landscaping"
						icon="/landscaping.jpeg"
						iconAlt="Image of two people digging on a lawn"
					/> */}
					<IndustryCard
						title="HVAC"
						icon="/hvac.jpeg"
						iconAlt="Image of a person working on an outdoor AC unit"
					/>
				</div>
			</div>
		</div>
	);
}
