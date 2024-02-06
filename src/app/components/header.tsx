import React from "react";
import Image from "next/image";

export default function header() {
	return (
		<header className="text-dark sticky top-0 left-0 right-0 z-50 flex justify-center pt-0 sm:pt-5">
			<div className="flex flex-1 sm:max-w-4/5 bg-white backdrop-blur-lg bg-opacity-70 rounded-none sm:rounded-3xl overflow-hidden px-7 py-2 border-gray-100 border-2">
				<nav className="flex flex-wrap flex-1 flex-col sm:flex-row gap-4 sm:gap-4 items-center justify-between">
					<div className="flex flex-row items-center gap-1">
						<Image
							src="/logo.svg"
							alt="Vercel Logo"
							className="dark:invert rounded-2xl"
							width={70}
							height={60}
							priority
						/>
						<a href="/" className="text-heading font-bold">
							Dog Leads
						</a>
					</div>
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center text-body">
						<a href="/about">Services</a>
						<a
							href="/about"
							className="text-primary border-2 px-6 py-2 rounded-xl border-solid border-primary"
						>
							Contact Us
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}
