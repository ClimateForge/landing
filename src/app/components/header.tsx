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
			className={`${sans.className} text-dark sticky top-0 left-0 right-0 z-50 flex justify-center pt-2 sm:pt-5`}
		>
			<div className="flex flex-0 sm:flex-1 mx-4 sm:max-w-4/5 bg-white backdrop-blur-lg bg-opacity-60 rounded-20 px-4 sm:px-7 py-1 border-white-50 border-4">
				<nav className="flex flex-wrap flex-1 flex-col sm:flex-row sm:gap-4 items-center justify-between">
					<div className="flex flex-row items-center gap-3 justify-between self-stretch">
						<Menu as="div" className="relative">
							<Menu.Button
								className="flex flex-row items-center gap-7 pointer-events-auto sm:pointer-events-none"
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
							{/* <Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<a
													href="#services"
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"tracking-wide text-button text-primary font-semibold block px-4 py-2 text-sm"
													)}
												>
													Services
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#calendar"
													className="tracking-wide text-button font-semibold text-primary px-6 py-2 rounded-15 bg-primary-10 border-4 border-solid border-primary"
												>
													Contact Us
												</a>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition> */}
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
