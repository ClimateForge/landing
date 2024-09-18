"use client";
import { useRouter } from 'next/navigation'
import Image from "next/image";

import GradientText from "./ui/gradient-text";
import GradientButton from "./ui/gradient-button";
import EmailButton from './ui/email-button';

type GradientButtonProps = {
	text: string;
	route: string;
	newTab?: boolean;
};

// Conditional type: If secondaryButton is provided, primaryButton is required
type CTAProps = {
	gifSrc: string;
	gifRounded?: boolean;
	title: string[];
	description: string;
	badges?: boolean;
	primaryButton?: GradientButtonProps;
} & (SecondaryButtonPropsRequired | { contactButton?: never });

type SecondaryButtonPropsRequired = {
	primaryButton: GradientButtonProps;
	contactButton: boolean;
};

export default function Cta(props: CTAProps) {
	
	const { title, gifSrc, gifRounded, description, badges, primaryButton, contactButton } = {...props}

	const router = useRouter()
	
	return (
		<section className="relative flex justify-center items-center w-full bg-gradient-radial">
			
			{/* CTA Gif Container */}
			<div className="flex flex-0 justify-center items-center opacity-40 sm:opacity-100 absolute sm:relative 
				h-auto max-w-[400px] shadow-xl mx-4 md:mx-6 lg:mx-10"
				style={{borderRadius: gifRounded ? '50%' : '20px'}}>

				<Image title="CTA GIF"
					className="h-full w-full overflow-hidden object-cover aspect-square shadow-sm"
					style={{borderRadius: gifRounded ? '50%' : '20px'}}
					src={gifSrc}
					alt="GIF"
					sizes="100vh"
					width={400}
					height={400}
					loading="lazy"
				/>	
				
			</div>

			{/* CTA Title/Description/Buttons Container */}
			<div className="relative flex flex-1 flex-col justify-center items-center text-center sm:text-left sm:items-start 
				gap-y-8 md:gap-y-10 max-w-[380px] sm:max-w-[543px]  min-h-[531px] h-full mx-4 md:mx-6 lg:mx-10">
				
				{/* Title */}
				<div className="leading-none">
					
					{title.map((line, index) => 
						index === 0 ? 
						<h2 key={0} className="text-light font-bold ">
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
				<p className="text-light font-light min-h-8 text-shadow">
					{description}
				</p>

				{/* Buttons Container */}
				<div className="flex flex-wrap gap-4 justify-center sm:justify-start">
					{primaryButton ? 
						<GradientButton width={154} 
							onClick={primaryButton.newTab ? 
								() => window.open(primaryButton.route, '_blank', 'noopener,noreferrer') : 
								() => router.push(primaryButton.route ? primaryButton.route : '/')}>
							{primaryButton.text}
						</GradientButton>
					: 
						<EmailButton>
							Contact Us
						</EmailButton>
					}
					{contactButton ?
						<EmailButton variant='outline'>
							Contact Us
						</EmailButton>
					: null
					}
					
				</div>
				
			</div>
			
		</section>
	);
}
