"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { z } from "zod";
import gsap from "gsap";
import EarlyAccessSignup from "./early-access-signup";
import GradientText from "./ui/gradient-text";
import GradientButton from "./ui/gradient-button";
import { useRouter } from 'next/navigation'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

type CTAProps = {
	gifSrc: string;
	gifRounded?: boolean;
	title: string[];
	description: string;
	primaryButton: GradientButtonProps
	secondaryButton?: GradientButtonProps
}
type GradientButtonProps = { text: string, route: string, newTab?: boolean }

export default function Cta({
	title, gifSrc, gifRounded, description, primaryButton, secondaryButton
}: CTAProps) {
	
	const router = useRouter()

	return (
		<div className="flex justify-evenly flex-wrap items-center gap-y-8 w-full py-16 bg-gradient-radial">
			
			{/* CTA Gif Container */}
			<div className="hidden md:flex justify-center items-center 
				h-[300px] lg:h-[400px] max-w-[300px] lg:max-w-[400px]"
				style={{borderRadius: gifRounded ? '50%' : '20px'}}>

				<Image className="h-full overflow-hidden object-cover "
					style={{borderRadius: gifRounded ? '50%' : '20px'}}
					src={gifSrc}
					alt="GIF"
					width={300}
					height={0}
					loading="lazy"
				/>	
				
			</div>

			{/* CTA Title/Description/Buttons Container */}
			<div className="flex flex-col justify-start items-center text-center sm:text-left sm:items-start gap-y-12 max-w-[300px] sm:max-w-[400px] lg:max-w-[543px]">
				
				{/* Title */}
				<div className="leading-none">
					
					{title.map((line, index) => 
						index === 0 ? 
						<h2 key={0} className={"text-light font-bold"}>
							{line}
						</h2>
						:
						<h2 key={index} className="font-bold">
							<GradientText>
								{line}
							</GradientText>
						</h2>
					)}
					
				</div>
				
				{/* Description */}
				<p className="mx-auto text-light font-light">
					{description}
				</p>

				{/* Buttons Container */}
				<div className="flex gap-x-4">
					<GradientButton width={154} onClick={primaryButton.newTab ? 
						() => window.open(primaryButton.route, '_blank', 'noopener,noreferrer') : 
						() => router.push(primaryButton.route ? primaryButton.route : '/')}>
						{primaryButton.text}
					</GradientButton>
					
					{secondaryButton ? 
						<GradientButton variant="outline" width={154} 
							onClick={secondaryButton.newTab ? 
								() => window.open(secondaryButton.route, '_blank', 'noopener,noreferrer') : 
								() => router.push(secondaryButton.route ? secondaryButton.route : '/')}>
							{secondaryButton.text}
						</GradientButton>
					: null
					}
				</div>
			</div>
			
		</div>
	);
}
