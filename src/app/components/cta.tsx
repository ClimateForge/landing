"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { z } from "zod";
import gsap from "gsap";
import EarlyAccessSignup from "./early-access-signup";
import GradientText from "./ui/gradient-text";
import GradientButton from "./ui/gradient-button";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Cta() {
	
	return (
		<div className="flex justify-evenly flex-wrap items-center gap-y-8 w-full py-16 bg-gradient-radial">
			
			{/* Gif Container */}
			<div className="hidden md:flex justify-center items-center 
				h-[300px] lg:h-[400px] max-w-[300px] lg:max-w-[400px]  bg-[#D9D9D9] rounded-20">
				
				
				
				<Image className="h-full overflow-hidden w-[400px] object-cover rounded-15"
					src={"/ready.gif"}
					alt="Gif Here"
					width={300}
					height={0}
				/>

				
					
			</div>

			{/* CTA Container */}
			<div className="flex flex-col justify-start items-center text-center sm:text-left sm:items-start gap-y-12 max-w-[300px] sm:max-w-[400px] lg:max-w-[543px]">
				
				<div className="leading-none">
					<h2 className={"text-light font-bold"}>
						Ready To
					</h2>
					<h2 className="font-bold">
						<GradientText>
							Get Started?
						</GradientText>
					</h2>
				</div>

				<p className="mx-auto text-light font-light">
					Your Mom is going to be proud of you making more money and saving the planet!
				</p>

				<div className="flex gap-x-4">
					<GradientButton width={154}>
						Start For Free
					</GradientButton>
					
					<GradientButton variant="outline" width={154}>Contact Us</GradientButton>
				</div>
			</div>
			
		</div>
	);
}
