"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ButtonCustom from "./ui/button-custom";
import { cn } from "@/lib/utils";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen((prev) => !prev);
	const closeMenu = () => setMenuOpen(false);

	const menuLinks = [
		{ title: "Product", href: "/" },
		{ title: "About us", href: "/about" },
		{ title: "Pricing", href: "/#pricing" },
		{ title: "Join", href: "/careers" },
	];

	return (
		<header className="flex items-center justify-center h-16 md:h-24 bg-white">
			<nav
				className={cn(
					"fixed z-50 flex items-center justify-between",
					"w-full max-w-[1160px] h-16 md:h-[69px] px-4",
					// "bg-white md:bg-white/80 backdrop-blur-md rounded-none md:rounded-[16pt] border-2 border-white"
					"border-2 backdrop-blur-2xl bg-white md:bg-white/60 shadow-md border-[#21606A]/5 rounded-[16pt]"
				)}
			>
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 ml-2">
					<Image
						src="/logo.png"
						alt="ClimateForge Logo"
						width={30}
						height={30}
						className="-mt-1"
						priority
					/>
					<p className="text-lg md:text-xl lg:text-2xl mt-0">
						ClimateForge
					</p>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex md:gap-4 lg:gap-6 mt-0">
					{menuLinks.map(({ title, href }) => (
						<Link
							key={title}
							href={href}
							className="font-semibold text-sm lg:text-base text-nowrap"
						>
							{title}
						</Link>
					))}
				</div>

				{/* Buttons */}
				<div className="hidden md:flex gap-4">
					<ButtonCustom
						variant="outline"
						onClick={() =>
							window.open(
								"https://climateforge.vercel.app/",
								"_blank"
							)
						}
					>
						Sign In
					</ButtonCustom>
					<ButtonCustom
						onClick={() =>
							window.open(
								"https://calendly.com/giovanni-climateforge-qttf",
								"_blank"
							)
						}
					>
						Book a Demo
					</ButtonCustom>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="block md:hidden p-2"
					onClick={toggleMenu}
					aria-label="Toggle Menu"
				>
					<svg
						className="w-6 h-6"
						viewBox="0 0 24 24"
						stroke="currentColor"
						fill="none"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
			</nav>

			{/* Mobile Menu */}
			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={{
					height: menuOpen ? "auto" : 0,
					opacity: menuOpen ? 1 : 0,
				}}
				exit={{ height: 0, opacity: 0 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				className={`fixed top-16 left-0 w-full bg-white pb-8 z-50 md:hidden rounded-b-15 shadow-lg overflow-hidden ${menuOpen ? "block" : "hidden"}`}
			>
				<div className="flex flex-col justify-center items-center gap-6">
					{menuLinks.map(({ title, href }) => (
						<Link
							key={title}
							href={href}
							onClick={closeMenu}
							className="font-semibold text-sm"
						>
							{title}
						</Link>
					))}
					<ButtonCustom
						className="w-full max-w-[300px]"
						variant="outline"
						onClick={() => {
							closeMenu();
							window.open(
								"https://climateforge.vercel.app/",
								"_blank"
							);
						}}
					>
						Sign In
					</ButtonCustom>
					<ButtonCustom
						className="w-full max-w-[300px]"
						onClick={() => {
							closeMenu();
							window.open(
								"https://calendly.com/giovanni-climateforge-qttf",
								"_blank"
							);
						}}
					>
						Book a Demo
					</ButtonCustom>
				</div>
			</motion.div>
		</header>
	);
};

export default Header;
