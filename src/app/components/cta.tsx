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
		<section className="relative flex justify-evenly items-center w-full bg-gradient-radial">
			
			{/* CTA Gif Container */}
			<div className="flex justify-center items-center opacity-40 sm:opacity-100 absolute sm:relative 
				h-auto max-w-[400px] sm:max-w-[400px] mx-8"
				style={{borderRadius: gifRounded ? '50%' : '20px'}}>

				<Image className="h-auto overflow-hidden object-cover aspect-square"
					style={{borderRadius: gifRounded ? '50%' : '20px'}}
					src={gifSrc}
					alt="GIF"
					width={400}
					height={400}
					loading="lazy"
				/>	
				
			</div>

			{/* CTA Title/Description/Buttons Container */}
			<div className="relative flex flex-col justify-center items-center text-center sm:text-left sm:items-start 
				gap-y-12 max-w-[400px] sm:max-w-[543px]  min-h-[531px] h-full mx-8">
				
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
				<p className="mx-auto text-light font-light min-h-8 text-shadow">
					{description}
				</p>

				{/* Buttons Container */}
				<div className="flex justify-center flex-wrap sm:flex-nowrap gap-4">
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
				{badges ? 
					<Image className='absolute bottom-9 h-auto ' 
						src={"/cta/badges.webp"} 
						alt="badges" 
						width={448} height={61}/> 
					: null
				}
			</div>
			
		</section>
	);
}
