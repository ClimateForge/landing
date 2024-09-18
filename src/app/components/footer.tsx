"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import GradientText from "./ui/gradient-text";
import EarlyAccessSignup from "./early-access-signup";
import Modal from "./ui/modal";

import { urbanist } from "../fonts";
import EmailButton from "./ui/email-button";
import FacebookIcon from "./ui/icons/facebook-icon";
import LinkedInIcon from "./ui/icons/linkedin-icon";
import XIcon from "./ui/icons/x-icon";
import InstagramIcon from "./ui/icons/instagram-icon";
import YoutubeIcon from "./ui/icons/youtube-icon";

export default function Footer() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	return (
		<footer className="text-dark-secondary py-20">
			<div className="flex flex-col justify-center items-center  mx-4">

				{/* Top Row */}
				<div className="flex w-full max-w-[1180px] justify-between">
					
					{/* Logo */}
					<div>
						<Link title="Home" href="/" className="flex">
						
							<Image title="ClimateForge Logo"
								className="max-w-[49px] h-auto"
								src="/logo.png"
								alt="ClimateForge Logo"
								width={49}
								height={49}
								priority
							/>
							<p className="hidden md:block pointer-events-none sm:pointer-events-auto text-lg sm:text-xl md:text-2xl self-end">
								ClimateForge
							</p>
						</Link>
					</div>

					{/* Links */}
					<div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 
						font-medium text-sm gap-y-4 mx-6 text-gray-700">
						<Link title="Features" 
							href={"/about/#deploy"} className="hover:text-gray-500">
							Features
						</Link>

						<Link title="Testimonials" 
							href={"/about/#testimonials"} className="hover:text-gray-500">
							Testimonials
						</Link>

						<Link title="About" 
							href={"/about"}  className="hover:text-gray-500">
							About Us
						</Link>

						<Link title="Frequently Asked Questions" 
							href={"/about/#faq"} className="hover:text-gray-500">
							FAQ
						</Link>

						<Link title="Careers" 
							href={"/careers"} className="hover:text-gray-500">
							Careers
						</Link>

						<EmailButton link>
							Contact Us
						</EmailButton>
					</div>

					{/* Socials */}
					<div className="flex flex-wrap gap-4 justify-center items-center text-[#374151]">

						{/* LinkedIn */}
						<Link title="LinkedIn"
							href={"https://www.linkedin.com/company/climateforge/?viewAsMember=true"} 
							rel="noopener noreferrer" target="_blank">
							<LinkedInIcon className="hover:text-[#242b36]"/>
						</Link>

						{/* X */}
						<Link title="X"
							href="https://x.com/" 
							rel="noopener noreferrer" target="_blank">
							<XIcon className="hover:text-[#242b36]"/>
						</Link>

						{/* Instagram */}
						<Link title="Instagram"
							href="https://www.instagram.com/" 
							rel="noopener noreferrer" target="_blank">
							<InstagramIcon className="hover:text-[#242b36]"/>
						</Link>

					</div>
					
				</div>
				
				{/* Divider */}
				<hr className="flex h-[1px] border-black border-solid w-full max-w-[1180px] mb-8 mt-10" />
				
				{/* Bottom Row */}
				<div className={`flex justify-between gap-y-4 items-center 
					w-full max-w-[1180px] flex-wrap-reverse 
					text-gray-700 font-medium text-body ${urbanist.className}`}>	
					
					<p className=" ">
						© 2024. All rights reserved.
					</p>

					<div className="flex gap-x-6 gap-y-2 flex-wrap">
					<Link title="Privacy Policy"
						href="/" className="hover:text-gray-500">
						Privacy Policy
					</Link>
					<Link title="Terms of Service"
						href="/" className="hover:text-gray-500">
						Terms of Service
					</Link>
					<Link title="Cookies Settings"
						href="/" className="hover:text-gray-500">
						Cookies Settings
					</Link>
					</div>
				</div>
			</div>
			
		</footer>
	);
}
