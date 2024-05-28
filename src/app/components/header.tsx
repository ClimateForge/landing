"use client";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { sans } from "../fonts";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	const [isMenuExpanded, setIsMenuExpanded] = useState(false);

	const menuAction = () => {
		setIsMenuExpanded(!isMenuExpanded);
	};

	return (
		<header
			className={`${sans.className} text-dark fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 sm:pt-5`}
		>
			<div className="flex flex-0 sm:flex-1 mx-4 sm:max-w-4/5 bg-white/90 backdrop-blur-md rounded-20 px-4 sm:px-7 py-1 border-zinc-100 border-2 shadow-sm">
				<nav className="flex flex-wrap flex-1 flex-col sm:flex-row sm:gap-4 items-center justify-between">
					<div className="flex flex-row items-center gap-3 justify-between self-stretch z-10">
						<Menu as="div" className="relative">
							<Menu.Button
								className="flex flex-row items-center gap-7 pointer-events-auto sm:pointer-events-none px-4 py-2 rounded-15"
								onClick={menuAction}
							>
								<div className="flex flex-row items-center gap-3">
									<Image
										src="/logo.png"
										alt="Vercel Logo"
										width={40}
										height={40}
										priority
									/>
									<a
										href="/"
										className={classNames(
											`pointer-events-none sm:pointer-events-auto text-small-heading font-bold pt-1 ${sans.className} tracking-wide`
										)}
									>
										ClimateForge
									</a>
								</div>
								<ChevronDownIcon
									className={classNames(
										isMenuExpanded ? "rotate-180" : "rotate-0",
										"h-5 w-5 text-primary mt-1 sm:hidden transition-all"
									)}
									aria-hidden="true"
									strokeWidth={4}
								/>
							</Menu.Button>
						</Menu>
					</div>
					<div
						className={classNames(
							isMenuExpanded
								? "opacity-100 visible h-36"
								: "opacity-0 invisible h-0",
							"justify-end self-stretch sm:visible sm:opacity-100 sm:h-auto flex-col flex sm:flex-row gap-7 sm:gap-7 sm:items-center text-body transition-all"
						)}
					>
						<div className="flex flex-col gap-3 sm:flex-row sm:gap-7 bg-white sm:bg-transparent rounded-15 py-3 px-4 items-center">
							<Link href="#services" className="btn-text">
								Services
							</Link>
							<Link href="#calendar" className="btn-outline">
								Contact Us
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
