"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function UseCases() {
	const useCases = [
		{
			title: "Energy Benchmarking",
			svgSrc: "/landing/use-cases/energy-benchmarking.svg",
			description:
				"ClimateForge helps analyze building energy performance, identifying inefficiencies and comparing it to industry standards for improvement.",
		},
		{
			title: "Energy Retrofit Analysis",
			svgSrc: "/landing/use-cases/energy-retrofit-analysis.svg",
			description:
				"Our technology models the impact of retrofitting options, recommending cost-effective upgrades to improve energy efficiency.",
		},
		{
			title: "District Energy",
			svgSrc: "/landing/use-cases/district-energy.svg",
			description:
				"Simulates and optimizes shared energy systems, like heating and cooling networks, for communities or neighborhoods.",
		},
		{
			title: "Energy Upgrades Potential",
			svgSrc: "/landing/use-cases/energy-upgrades-potential.svg",
			description:
				"Assesses a property's suitability for solar, HVAC, or other energy-efficient upgrades, identifying the best opportunities.",
		},
		{
			title: "Heat Resilience Modeling",
			svgSrc: "/landing/use-cases/heat-resilience-modeling.svg",
			description:
				"Models building performance during extreme heat, suggesting improvements to maintain comfort and reduce energy consumption.",
		},
		{
			title: "Energy Control And VPP",
			svgSrc: "/landing/use-cases/energy-control-and-vpp.svg",
			description:
				"Enables smarter energy management by optimizing control systems and integrating Virtual Power Plants (VPP) for distributed energy resources.",
		},
	];

	const [flipped, setFlipped] = useState(Array(useCases.length).fill(false));

	const handleFlip = (index: number) => {
		setFlipped((prev) => {
			const newFlipped = [...prev];
			newFlipped[index] = !newFlipped[index];
			return newFlipped;
		});
	};

	return (
		<section className="flex flex-col justify-center items-center w-full bg-[#EEF2F6] py-20 px-4">
			<h2 className="text-5xl font-bold">
				Shaping the Future of AI-Driven Energy Solutions
			</h2>
			<p className="text-lg text-[#5C5C5C] py-10 text-center">
				Empowering the Next Generation of American Businesses with
				AI-Driven Insights and Innovation
			</p>

			<div className="flex flex-col lg:flex-row justify-center w-full gap-5 py-10 items-center lg:items-stretch">
				<video
					className="flex max-w-[630px] max-h-[592px] object-left z-10 w-full h-auto object-cover rounded-[20px]"
					src="/landing/use-cases/use-cases.mp4"
					autoPlay
					loop
					playsInline
					muted
					width={630}
					height={592}
				/>

				<div className="grid grid-cols-2 gap-3 sm:gap-5 z-20 max-h-[592px] cursor-pointer">
					{useCases.map((useCase, index) => (
						<motion.div
							key={index}
							className="group relative w-full max-w-[305px] perspective-1000"
							onClick={() => handleFlip(index)}
							whileHover={{ rotateX: 5, rotateY: 15 }}
							transition={{
								duration: 0.5,
								type: "spring",
								stiffness: 200,
								damping: 10,
							}}
							style={{ transformStyle: "preserve-3d" }}
						>
							<motion.div
								className="relative w-full h-full flex flex-col justify-center p-8 border border-[#E0DFE2]  text-xs sm:text-sm md:text-base bg-white rounded-[15px] shadow-md"
								initial={false}
								animate={{ rotateY: flipped[index] ? 180 : 0 }}
								transition={{ duration: 0.5 }}
								style={{ transformStyle: "preserve-3d" }}
							>
								<div
									className=" w-full h-full flex flex-col justify-center gap-4"
									style={{ backfaceVisibility: "hidden" }}
								>
									<Image
										className="w-9 h-9"
										src={useCase.svgSrc}
										alt=""
										width={36}
										height={36}
									/>
									<h4 className="text-lg md:text-xl lg:text-2xl font-bold text-[#858585]">
										{useCase.title}
									</h4>
								</div>
								<div
									className="absolute w-full h-full flex flex-col gap-4 left-[0] justify-center p-[1px] text-white bg-primary rounded-[15px]
                                    before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-[#744cebe6] before:to-[#39C77B] before:rounded-[15px] before:p-[2px]"
									style={{
										transform: "rotateY(180deg)",
										backfaceVisibility: "hidden",
									}}
								>
									<div className="w-full h-full bg-primary rounded-[13px] flex flex-col gap-2 sm:gap-4 justify-center p-4">
										<p className="text-sm">
											{useCase.title}
										</p>
										<p className="text-white tracking-tighter leading-tight text-xs sm:text-sm md:text-sm overflow-scroll  no-scrollbar">
											{useCase.description}
										</p>
									</div>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
