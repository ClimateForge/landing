"use client";
import React, { useState, ReactNode } from "react";
import GradientText from "./ui/gradient-text";
import Link from "next/link";
import { motion } from "framer-motion";

import Image from "next/image";

type LinkProps = {
	href: string;
	children: ReactNode;
};
const LinkCustom = ({ href, children }: LinkProps) => {
	return (
		<div className="overflow-auto group">
			<Link href={href} className="group-hover:text-primary">
				{children}
			</Link>
			<svg
				className="invisible group-hover:visible"
				viewBox="0 0 110 2"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0.5 1H110" stroke="#21606A" />
			</svg>
		</div>
	);
};

export default function WhyChooseUs() {
	const [currentSection, setCurrentSection] = useState(0);

	// Info blocks with image paths
	const infoBlocks = [
		{
			caption: "Find Leads",
			title: "AI Leads Finder",
			text: "Use Map search or enter custom criteria such as roof size and geographic location to find deals. ClimateForge is a digital spot knocker with precise energy and owner information.",
			image: "/landing/info-scroll/discover-quality-leads-1-resize.gif",
			svg: "/landing/info-scroll/find-leads.svg",
		},
		{
			caption: "System Design",
			title: "Power Modern Living",
			text: "Impress customers with comprehensive designs and spend less time soliciting buyers and executing contracts.",
			image: "/landing/info-scroll/system-design-1.gif",
			svg: "/landing/info-scroll/system-design.svg",
		},
		{
			caption: "Product Feature",
			title: "Custom Enrichments",
			text: "Add custom enrichments like power consumption and solar potential for deeper lead insights. Our energy modeling suggests optimal upgrades, helping you improve efficiency and save money.",
			image: "/landing/info-scroll/energy-assessment-1.gif",
			svg: "/landing/info-scroll/product-feature.svg",
		},
		{
			caption: "CRM Assistance",
			title: "AI CRM Assistance",
			text: "CRM designed specifically for energy sales roles. ClimateForge's AI technology help you easily track statuses and enhance team collaboration.",
			image: "/landing/info-scroll/crm-assistance-1.gif",
			svg: "/landing/info-scroll/crm-assistance.svg",
		},
	];

	const handleSection = (index: number) => {
		setCurrentSection(index);
	};

	return (
		<section className="flex flex-col items-center w-full px-4 md:px-8">
			{/** TITLE AND LINKS */}
			<div className="flex flex-col justify-center items-center text-center max-w-[850px] pb-20">
				<h2 className=" font-bold leading-[110%]">
					Why <GradientText>Renewable Energy</GradientText>{" "}
					Contractors Choose Our Product
				</h2>
				<div className="flex gap-8 pt-8 text-[#858585] text-sm">
					<LinkCustom href={"/#Find Leads"}>Find Leads</LinkCustom>
					<LinkCustom href={"/#CRM Assistance"}>
						CRM Assistance
					</LinkCustom>
					<LinkCustom href={"/#Product Feature"}>
						Product Feature
					</LinkCustom>
					<LinkCustom href={"/#System Design"}>
						System Design
					</LinkCustom>
				</div>
			</div>

			<div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
				{infoBlocks.map((block, index) => (
					<motion.div
						id={block.caption}
						key={index}
						className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6 text-left flex flex-col scroll-mt-32"
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.3 },
						}}
						initial={{ opacity: 0, y: 40 }}
						onViewportEnter={() => handleSection(index)}
					>
						{/* GIF/Image */}
						<Image
							src={block.image}
							alt={block.title}
							width={360}
							height={240}
							className="mb-6 rounded-md object-contain"
							style={{ maxWidth: "100%", height: "auto" }}
						/>

						{/* Title */}
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							{block.title}
						</h3>

						{/* Description */}
						<p className="text-sm text-gray-600">{block.text}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
