"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import GradientButton from "./ui/gradient-button";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {

	const [isMenuExpanded, setIsMenuExpanded] = useState(false);

	const menuAction = () => {
		setIsMenuExpanded(!isMenuExpanded);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex gradient-border">
			<div className="flex flex-0 sm:flex-1 w-full sm:px-4 md:px-6 
				bg-[#ffffffc8] backdrop-blur-sm shadow-md">
				<nav className="flex flex-wrap flex-1 flex-col items-center justify-between sm:flex-row sm:gap-4">
					
					<Menu as="div" className="relative">
						<Menu.Button
							className={classNames( 
								"flex flex-row items-center gap-7 pointer-events-auto sm:pointer-events-none sm:bg-transparent rounded-b-lg px-8 py-3 sm:py-0 sm:px-0"
							)}
							onClick={menuAction}
						>
							
							<Link href="/" className="flex flex-row items-center ">
								<Image className="w-[40px] sm:w-[45px] md:w-[50px] lg:w-[55px] h-auto pointer-events-none sm:pointer-events-auto"
									src="/logo.png"
									alt="ClimateForge Logo"
									width={55}
									height={55}
									priority
								/>
								<p className="pointer-events-none sm:pointer-events-auto 
									text-lg sm:text-lg md:text-xl lg:text-2xl self-end">
									ClimateForge
								</p>
							</Link>
							
							<ChevronDownIcon
								className={classNames(
									isMenuExpanded ? "rotate-180" : "rotate-0",
									"h-5 w-5 text-[#028F79] mt-1 sm:hidden transition-all"
								)}
								aria-hidden="true"
								strokeWidth={4}
							/>
						</Menu.Button>
					</Menu>
					
					<div
						className={classNames(
							isMenuExpanded
								? "opacity-100 visible h-40"
								: "opacity-0 invisible h-0",
								"justify-end self-stretch sm:visible sm:opacity-100 sm:h-auto flex-col flex sm:flex-row gap-7 sm:gap-7 sm:items-center text-body"
						)}
					>
						<div className="flex flex-col gap-8 sm:gap-4 md:gap-6 sm:flex-row 
							shadow-md sm:shadow-none 
							sm:bg-transparent rounded-lg pt-24 pb-8 sm:py-3 md:py-3 lg:py-5 items-center">
							
							<div className="flex gap-6 sm:gap-4 md:gap-6">
								<Link href="/about" className="" onClick={menuAction}>
									<p className="font-semibold text-sm md:text-base text-nowrap">About Us</p>
								</Link>
								<Link href="/careers" onClick={menuAction}>
									<p className="font-semibold text-sm md:text-base">Careers</p>
								</Link>
							</div>

							<div className="flex gap-6 sm:gap-4 md:gap-6">
								<GradientButton onClick={() => window.open('https://calendly.com/giovanni-climateforge-qttf', '_blank', 'noopener,noreferrer')} width={154}>
									Book a Demo
								</GradientButton>

								<GradientButton onClick={() => console.log("logging in")} variant="outline" width={90}>
									Log In
								</GradientButton>
							</div>
							
						</div>
						
					</div>
				</nav>
			</div>
		</header>
	);
}
