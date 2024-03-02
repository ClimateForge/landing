import Image from "next/image";
import React from "react";
import { display, sans } from "../fonts";

export default function TitleCard() {
	return (
		<div
			className={`px-5 md:px-10 max-w-5xl flex flex-col items-center gap-20 ${sans.className}`}
		>
			<div className="min-w-full space-y-2">
				<h1
					className={`mx-auto text-extra-large-title leading-none text-center ${display.className} text-dark uppercase`}
				>
					<span className="text-primary">Lead Generation</span>
					<br />
					Services to help your business grow!
				</h1>
				<p className="mx-auto text-dark-secondary text-body text-center max-w-md">
					Conversion-Optimized Prospecting. Maximize lead conversion rates with
					AI DogLeads&rsquo; designed prospecting tools.
				</p>
			</div>
			<div className="mx-auto flex">
				<a
					className={`px-12 py-3 z-10 bg-primary tracking-wide text-large-button font-bold text-light rounded-15`}
				>
					Get Started
					<Image
						className="inline-block ml-2"
						src="/hero-enter-icon.svg"
						alt="Enter Symbol"
						width={15}
						height={15}
					/>
				</a>
			</div>
		</div>
	);
}
