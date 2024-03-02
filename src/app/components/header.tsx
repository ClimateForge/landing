"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { sans } from "../fonts";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

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
			<div className="flex flex-0 sm:flex-1 mx-4 sm:max-w-4/5 bg-white backdrop-blur-lg bg-opacity-60 rounded-20 px-4 sm:px-7 py-1 border-white-50 border-4">
				<nav className="flex flex-wrap flex-1 flex-col sm:flex-row sm:gap-4 items-center justify-between">
					<div className="flex flex-row items-center gap-3 justify-between self-stretch z-10">
						<Menu as="div" className="relative">
							<Menu.Button
								className="flex flex-row items-center gap-7 pointer-events-auto sm:pointer-events-none bg-white bg-opacity-90 px-4 py-2 rounded-15"
								onClick={menuAction}
							>
								<div className="flex flex-row items-center gap-3">
									<Image
										src="/logo.png"
										alt="Vercel Logo"
										width={50}
										height={50}
										priority
									/>
									<a
										href="/"
										className={classNames(
											`pointer-events-none sm:pointer-events-auto text-heading font-black ${sans.className}`
										)}
									>
										DogLeads
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
							<Link
								href="#services"
								className="tracking-wide w-full sm:w-auto text-center text-button px-6 py-2 text-primary font-semibold"
							>
								Services
							</Link>
							<Link
								href="#calendar"
								className="tracking-wide w-full sm:w-auto text-center text-button font-semibold text-primary px-6 py-2 rounded-15 bg-primary-10 border-4 border-solid border-primary"
							>
								Contact Us
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
