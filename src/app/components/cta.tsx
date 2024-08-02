"use client";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import Image from "next/image";

import GradientText from "./ui/gradient-text";
import GradientButton from "./ui/gradient-button";
import EmailForm from "./ui/email-form";
import Modal from "./ui/modal";

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
	primaryButton?: GradientButtonProps;
} & (SecondaryButtonPropsRequired | { contactButton?: never });

type SecondaryButtonPropsRequired = {
	primaryButton: GradientButtonProps;
	contactButton: boolean;
};

export default function Cta(props: CTAProps) {
	
	const { title, gifSrc, gifRounded, description, primaryButton, contactButton } = {...props}

	const router = useRouter()

	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	
	return (
		<section className="flex justify-evenly flex-wrap items-center gap-y-8 w-full py-16 bg-gradient-radial">
			
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
					{primaryButton ? 
						<GradientButton width={154} 
							onClick={primaryButton.newTab ? 
								() => window.open(primaryButton.route, '_blank', 'noopener,noreferrer') : 
								() => router.push(primaryButton.route ? primaryButton.route : '/')}>
							{primaryButton.text}
						</GradientButton>
					: 
					<GradientButton width={154} onClick={openModal}>
						Contact Us
					</GradientButton>
					}
					{contactButton ?
						<GradientButton variant="outline" width={154} onClick={openModal}>
							Contact Us
						</GradientButton>
					: null
					}
					
				</div>
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<EmailForm />
			</Modal>
		</section>
	);
}
