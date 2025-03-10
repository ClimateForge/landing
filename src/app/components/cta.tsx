"use client";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import GradientText from "./ui/gradient-text";
import EmailButton from './ui/email-button';
import ButtonCustom from './ui/button-custom';

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
		<section className="relative flex flex-col sm:flex-row justify-center items-center w-full bg-gradient-radial gap-6 p-8">
			

			{/* CTA Title/Description/Buttons Container */}
			<div className="relative flex flex-1 flex-col justify-center items-center text-center sm:text-left sm:items-start 
				gap-y-6 max-w-[380px] sm:max-w-[543px] sm:min-h-[531px] h-full mx-4 md:mx-6 lg:mx-10">
				
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
						<ButtonCustom width={154} 
							onClick={primaryButton.newTab ? 
								() => window.open(primaryButton.route, '_blank', 'noopener,noreferrer') : 
								() => router.push(primaryButton.route ? primaryButton.route : '/')}>
							{primaryButton.text}
						</ButtonCustom>
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
			<div
			className="relative flex justify-center items-center w-full max-w-[90%] 
						sm:max-w-[400px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] 
						overflow-hidden rounded-lg border"
			style={{ borderRadius: gifRounded ? '50%' : '20px' }}
			>
			<Image
				title="CTA GIF"
				className="w-full h-auto object-contain"
				src={gifSrc}
				alt="GIF"
				sizes="(max-width: 768px) 90vw, (max-width: 1024px) 400px, (max-width: 1280px) 460px, 500px"
				width={500}
				height={500}
				loading="lazy"
			/>
			</div>
		</section>
	);
}
