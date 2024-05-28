"use client";

import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { display, sans } from "../fonts";
import TitleCardInsightDecoration from "./TitleCardInsightDecoration";
import EarlyAccessSignup from "./early-access-signup";
import { ReactNode } from "react";

const decorationInsights: {
	heading: string;
	value: string;
	icon: ReactNode;
	unit: ReactNode | string;
}[] = [
	{
		heading: "Probability of closing",
		value: "87",
		icon: (
			<Image
				src={"/insight-decorators/perc.svg"}
				width={30}
				height={30}
				alt="Percentage Icon"
			/>
		),
		unit: "%",
	},
	{
		heading: "Estimated Earnings",
		value: "$1,200",
		icon: (
			<Image
				src={"/insight-decorators/card.svg"}
				width={30}
				height={30}
				alt="Silhouette of Credit Card"
			/>
		),
		unit: "",
	},
	{
		heading: "Credit Check",
		value: "Approved",
		icon: (
			<Image
				src={"/insight-decorators/verified-check.svg"}
				width={30}
				height={30}
				alt="check mark"
			/>
		),
		unit: "",
	},
	{
		heading: "Roof Size",
		value: "2,400",
		icon: (
			<Image
				src={"/insight-decorators/measure.svg"}
				width={30}
				height={30}
				alt="Roof Icon"
			/>
		),
		unit: (
			<div className="text-small leading-[10px] whitespace-pre-line">
				{`sq.
				ft.`}
			</div>
		),
	},
	{
		heading: "Ownership",
		value: "Home Owner",
		icon: (
			<Image
				src={"/insight-decorators/house.svg"}
				width={30}
				height={30}
				alt="House Icon"
			/>
		),
		unit: "",
	},
	{
		heading: "Year Built",
		value: "1997",
		icon: (
			<Image
				src={"/insight-decorators/cal.svg"}
				width={30}
				height={30}
				alt="Calendar Icon"
			/>
		),
		unit: "",
	},
	{
		heading: "Sunshine Hours",
		value: "1,420",
		icon: (
			<Image
				src={"/insight-decorators/sun.svg"}
				width={30}
				height={30}
				alt="Sun Icon"
			/>
		),
		unit: (
			<div className="text-small leading-[10px] whitespace-pre-line">
				hours{"\n"}
				<span>per</span> year
			</div>
		),
	},
	{
		heading: "System Size",
		value: "6.09",
		icon: (
			<Image
				src={"/insight-decorators/inset-box.svg"}
				width={30}
				height={30}
				alt="Solar Panel Icon"
			/>
		),
		unit: (
			<div className="text-small leading-[10px] whitespace-pre-line">
				{`Kilo
				Watts`}
			</div>
		),
	},
];

export default function TitleCard() {
	return (
		<div className="w-full flex justify-center flex-wrap-reverse lg:flex-nowrap py-6">
			<div
				className={`px-5 md:px-10 max-w-5xl flex flex-col items-end gap-6 ${sans.className}`}
			>
				<div className="min-w-full space-y-2 flex flex-col items-end">
					<h1
						className={`text-extra-large-title leading-none text-right ${display.className} text-dark uppercase`}
					>
						<span className="text-primary">Solar Leads</span>
					</h1>
					<div className="gap-0 text-right">
						<h1
							className={`text-large-title leading-none ${display.className}`}
						>
							with critical insights
						</h1>
						<h1
							className={`text-large-title leading-none ${display.className}`}
						>
							& highest conversion
						</h1>
					</div>
					<p className="text-dark-secondary text-body text-right max-w-md">
						Conversion-Optimized Prospecting. Maximize conversion rates with
						ClimateForge&rsquo;s designed prospecting tools.
					</p>
				</div>
				<div className="relative space-y-4 flex flex-col items-end">
					{/* <EarlyAccessSignup /> */}
					<Link href="#calendar" className="btn-primary">
						<div className="tracking-wide text-large-button font-bold">
							Schedule a Demo
						</div>
						<CalendarDaysIcon className="h-6" />
					</Link>
				</div>
			</div>
			<div className="h-full grid grid-cols-2 grid-rows-4 gap-4">
				{decorationInsights.map((insight) => (
					<TitleCardInsightDecoration key={insight.heading} {...insight} />
				))}
			</div>
		</div>
	);
}
