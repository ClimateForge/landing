"use client";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import GradientButton from "./ui/gradient-button";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {

	const router = useRouter()

	const [isMenuExpanded, setIsMenuExpanded] = useState(false);

	const menuAction = () => {
		setIsMenuExpanded(!isMenuExpanded);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex">
			<div className="flex flex-0 sm:flex-1 sm:max-w-full sm:px-4 md:px-6 sm:bg-[#f9f9ffe8]">
				<nav className="flex flex-wrap flex-1 flex-col items-center justify-between sm:flex-row sm:gap-4">
					
					<Menu as="div" className="relative">
						<Menu.Button
							className={classNames(isMenuExpanded ? "shadow-none" : "shadow-sm sm:shadow-none", 
								"flex flex-row items-center gap-7 pointer-events-auto sm:pointer-events-none bg-[#F9F9FF] sm:bg-transparent rounded-b-lg px-8 py-3 sm:py-0 sm:px-0"
							)}
							onClick={menuAction}
						>
							
							<Link href="/" className="flex flex-row items-center">
								<Image className="w-[40px] sm:w-[48px] md:w-[64px] h-auto"
									src="/logo.png"
									alt="ClimateForge Logo"
									width={55}
									height={55}
									priority
								/>
								<p className="pointer-events-none sm:pointer-events-auto text-lg sm:text-xl md:text-2xl self-end">
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
							bg-[--background] shadow-md sm:shadow-none 
							sm:bg-transparent rounded-lg pt-20 pb-8 sm:py-4 md:py-5 items-center">
							
							<div className="flex gap-6 sm:gap-4 md:gap-6">
								<Link href="/about" className="">
									<p className="font-semibold text-nowrap">About Us</p>
								</Link>
								<Link href="/career">
									<p className="font-semibold">Career</p>
								</Link>
							</div>

							<div className="flex gap-6 sm:gap-4 md:gap-6">
								<GradientButton onClick={() => router.push('#calendar')}>
									Book a Demo
								</GradientButton>

								<GradientButton onClick={() => console.log("logging in")} variant="outline" additionalStyles={""}>
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
