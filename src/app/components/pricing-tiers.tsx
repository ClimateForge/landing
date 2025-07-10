"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ButtonCustom from './ui/button-custom';
import { ReactElement } from "react";
import { FaTools } from 'react-icons/fa';
import { FaCog } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
interface PricingCardProps {
	tier: string;
	price?: number;
	description: string;
	perks?: string[];
	buttonVariant?: string;
	disabled?: boolean;
	icon?: ReactElement;
}

function PricingCard(props: PricingCardProps) {
	const { tier, price, description, perks, buttonVariant, disabled, icon } = props;
	const router = useRouter();

	return (
		<div
			className={`relative rounded-15 bg-[#EEF2F6] shadow-md py-8 px-[43px]
            transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-xl
            max-w-[410px] w-full h-[885px] flex flex-col justify-between
			${tier === 'Scale' ? 'border-2 border-orange-500' : ''}`}
		>
			{tier === "Scale" && (
				<div className="absolute -top-3 right-0.5 bg-orange-500 text-white text-sm font-semibold px-5 py-1.5 rounded-md shadow-md z-10">
					Most Popular
				</div>
			)}

			<div>
			    <div className="flex items-center justify-center gap-2 pb-5">
				<h4 className="text-primary text-xl font-semibold">{tier}</h4>
				{icon && <span className="text-2xl">{icon}</span>}
				</div>
				<p className="text-sm font-medium pt-6 pb-10">{description}</p>
				{price ? (
					<div className="text-center pb-10">
						<h3 className="font-bold text-4xl">{`$${price}`}</h3>
						<p className="text-gray-500">Per month</p>
						<p className="text-sm text-gray-600 mt-1">
							or
							<span className="font-semibold text-black">
								${price * 10}/year
							</span>
							<span className="text-green-600 font-semibold">
								(2 months free!)
							</span>
						</p>
					</div>
				) : (
					<div className="text-center pb-10">
						<h3 className="font-bold text-4xl">Custom</h3>
						<p className="text-gray-500">
							Tailored pricing and terms
						</p>
					</div>
				)}
				{perks && perks.length > 1 ? (
					<ul className="gap-4 flex flex-col">
						{perks.map((perk, i) => (
							<li key={i}>
								<span className="font-bold text-primary">
									&#x2713;
								</span>{" "}
								{perk}
							</li>
						))}
					</ul>
				) : perks ? (
					<ul>{perks[0]}</ul>
				) : null}
			</div>
			{tier === "Enterprise" && (
				<p className="text-center text-sm text-gray-600 mt-6">
					Contact
					<span className="text-blue-600 font-medium mx-1">
						team@climateforge.ai
					</span>
					to learn more
				</p>
			)}
			<ButtonCustom
				variant={buttonVariant}
				disabled={disabled}
				onClick={() =>
					window.open(
						"https://calendly.com/giovanni-climateforge-qttf",
						"_blank",
						"noopener,noreferrer"
					)
				}
			>
				Get Started
			</ButtonCustom>
		</div>
	);
}
export default function PricingTiers() {
	// Pricing data for both monthly and yearly plans
	const pricingData = {
		Launch: { monthly: 359 },
		Scale: { monthly: 559 },
		Enterprise: { monthly: 0 }, // Pricing TBD
	};

	return (
		<section
			id="pricing"
			className="relative flex flex-col justify-center items-center w-full gap-y-4 mb-0 sm:mb-10 px-4"
		>
			<h2 className="font-bold leading-none z-10">Plans</h2>
			<p className="text-lg font-medium pb-[40px] text-center">
				Start your free week with ClimateForge.
			</p>

			<div className="flex flex-wrap justify-center items-center z-10 gap-x-8 gap-y-14">
				<PricingCard
					tier="Launch"
					icon={<FaTools size={32} className="mx-auto text-primary"/>}
					price={pricingData.Launch.monthly}
					description="Perfect for individual contractors starting with home energy upgrade outreach using AI and CRM tools."
					perks={[
						"1 Week free limited plan",
						"Includes 500 leads",
						"Free CRM",
						"1 Location included",
						"Advanced House Information",
						"Email & CRM integration",
						"AI Email Assistance",
						"5 Advanced Analysis Reports",
						"Supports 1 energy upgrade type (e.g.,Solar)",
					]}
				/>

				<PricingCard
					tier="Scale"
					icon={<FaCog size={32} className="mx-auto text-primary"/>}
					price={pricingData.Scale.monthly}
					description="Built for growing contractor teams scaling leads generation with automation and deeper insights."
					perks={[
						"1 Week free limited plan",
						"Includes 1000 leads",
						"Free CRM",
						"Unlimited Location",
						"Pro Housing Information",
						"Email & CRM integration",
						"SMS & Phone integration",
						"AI Email Assistance",
						"15 Advanced Analysis Reports",
						"Supports 2 energy upgrade type (e.g.,Solar, HVAC)",
					]}
					buttonVariant="outline"
				/>

				<PricingCard
					tier="Enterprise"
					icon={<FaBuilding size={32} className="mx-auto text-primary"/>}
					description="For large contractor operations with advanced energy upgrade needs and custom integrations."
					perks={[
						"Tailored for large teams",
						"License-based with customized pricing",
						"Pro Housing Information",
						"Email & CRM integration",
						"SMS & Phone integration",
						"AI Email Assistance",
						"Advanced analysis, AI tools, and dedicated support",
						"Custom integrations and scalable solutions",
						"Supports multiple energy upgrade types (e.g.,Solar, HVAC, Batteries, EV, etc.)",
					]}
					disabled={true}
				/>
			</div>
		</section>
	);
}