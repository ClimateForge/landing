import Image from "next/image";
import React from "react";
import { display } from "../fonts";

export default function Cta() {
	return (
		<div className="px-5 md:px-10 max-w-5xl w-full">
			<div className="px-12 py-20 rounded-3xl flex flex-col items-center gap-5 bg-gradient-to-b from-[#86C5D1] to-[#7355E0]">
				<h2
					className={`text-light ${display.className} text-title leading-none text-center`}
				>
					Grow your business with DogLeads&rsquo; Comprehensive Services!
				</h2>
				<p className="text-white text-body font-medium text-center max-w-lg">
					Empowering contractors to connect with qualified homeowners,
					delivering tailored upgrades and cutting costs and carbon footprints
					through smart lead generation.
				</p>
				<a className="mx-auto px-12 py-3 bg-white text-primary rounded-full">
					Get Started
					<Image
						className="inline-block ml-2 text-primary"
						src="/enter-icon-primary.svg"
						alt="Enter Symbol"
						width={15}
						height={15}
					/>
				</a>
			</div>
		</div>
	);
}
