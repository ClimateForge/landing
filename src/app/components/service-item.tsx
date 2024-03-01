import Image from "next/image";
import React from "react";
import { sans } from "../fonts";

export default function ServiceItem({
	title,
	description,
	icon,
	iconAlt,
}: {
	title: string;
	description: string;
	icon: string;
	iconAlt: string;
}) {
	return (
		<div className={`${sans.className} flex flex-row items-start gap-5`}>
			<Image src={icon} alt={iconAlt} height={40} width={40} />
			<div className="flex flex-col gap-2">
				<p className="text-small-heading leading-none font-semibold text-dark">
					{title}
				</p>
				<p className="text-body text-dark-secondary">{description}</p>
			</div>
		</div>
	);
}
