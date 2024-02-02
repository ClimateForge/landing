import Image from "next/image";
import React from "react";

export default function IndustryCard({
	title,
	icon,
	iconAlt,
}: {
	title: string;
	icon: string;
	iconAlt: string;
}) {
	return (
		<div className="relative rounded-3xl overflow-hidden h-56 w-80 flex-shrink-0 flex flex-col items-start p-6">
			<div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-blue-200">
				<Image src={icon} alt={iconAlt} layout="fill" objectFit="cover" />
			</div>
			<div className="rounded-lg bg-white bg-opacity-80 backdrop-blur-sm">
				<p className="text-dark text-small-heading leading-none py-2 px-7">
					{title}
				</p>
			</div>
		</div>
	);
}
