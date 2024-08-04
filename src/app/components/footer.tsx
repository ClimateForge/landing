"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import GradientText from "./ui/gradient-text";
import EmailForm from "./ui/email-form";
import Modal from "./ui/modal";

import { urbanist } from "../fonts";

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
						<Link href="/" className="flex">
						
							<Image className="max-w-[49px] h-auto"
								src="/logo.png"
								alt="DogLeads Logo"
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
						<Link href={""}>
							Features
						</Link>

						<Link href={""}>
							Testimonials
						</Link>

						<Link href={"/about"}>
							About Us
						</Link>

						<Link href={"/about/#faq"}>
							FAQ
						</Link>

						<Link href={"/career"}>
							Career
						</Link>

						<button className="font-semibold" onClick={openModal}>
							<GradientText>
								Contact Us
							</GradientText>
						</button>
					</div>

					{/* Socials */}
					<div className="flex flex-wrap gap-4 justify-center items-center">
						{/* Facebook */}
						<Link className="hidden" href={""} rel="noopener noreferrer" target="_blank">
							<svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.4954 12.695C25.4954 5.88819 19.9774 0.370117 13.1706 0.370117C6.36378 0.370117 0.845703 5.88809 0.845703 12.695C0.845703 18.8466 5.35275 23.9456 11.2448 24.8701V16.2576H8.11545V12.695H11.2448V9.97966C11.2448 6.89074 13.0849 5.18452 15.9 5.18452C17.2486 5.18452 18.659 5.42524 18.659 5.42524V8.45831H17.1049C15.5737 8.45831 15.0963 9.40838 15.0963 10.3831V12.695H18.5146L17.9681 16.2576H15.0963V24.8701C20.9884 23.9456 25.4954 18.8467 25.4954 12.695Z" fill="#374151"/>
							</svg>
						</Link>

						{/* LinkedIn */}
						<Link href={"https://www.linkedin.com/company/climateforge/?viewAsMember=true"} rel="noopener noreferrer" target="_blank">
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21.8735 0.370117C22.5955 0.370117 23.2879 0.656922 23.7984 1.16744C24.3089 1.67795 24.5957 2.37036 24.5957 3.09234V22.1479C24.5957 22.8699 24.3089 23.5623 23.7984 24.0728C23.2879 24.5833 22.5955 24.8701 21.8735 24.8701H2.81793C2.09595 24.8701 1.40354 24.5833 0.893023 24.0728C0.382508 23.5623 0.0957031 22.8699 0.0957031 22.1479V3.09234C0.0957031 2.37036 0.382508 1.67795 0.893023 1.16744C1.40354 0.656922 2.09595 0.370117 2.81793 0.370117H21.8735ZM21.1929 21.4673V14.2534C21.1929 13.0766 20.7254 11.948 19.8933 11.1159C19.0612 10.2837 17.9325 9.81623 16.7557 9.81623C15.5988 9.81623 14.2513 10.524 13.5979 11.5857V10.0748H9.80043V21.4673H13.5979V14.7571C13.5979 13.709 14.4418 12.8515 15.4899 12.8515C15.9953 12.8515 16.4799 13.0523 16.8373 13.4096C17.1947 13.767 17.3954 14.2517 17.3954 14.7571V21.4673H21.1929ZM5.37681 7.9379C5.98328 7.9379 6.5649 7.69698 6.99373 7.26815C7.42257 6.83931 7.66348 6.25769 7.66348 5.65123C7.66348 4.38539 6.64265 3.35095 5.37681 3.35095C4.76674 3.35095 4.18166 3.5933 3.75027 4.02469C3.31889 4.45607 3.07654 5.04116 3.07654 5.65123C3.07654 6.91706 4.11098 7.9379 5.37681 7.9379ZM7.26876 21.4673V10.0748H3.49848V21.4673H7.26876Z" fill="#374151"/>
							</svg>
						</Link>

						{/* X */}
						<Link href={""} rel="noopener noreferrer" target="_blank">
							<svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21.5417 0.370117H25.6979L16.6178 10.7481L27.2998 24.8701H18.9347L12.3837 16.3052L4.888 24.8701H0.729287L10.4413 13.7697L0.195312 0.370117H8.77031L14.6918 8.19881L21.5417 0.370117ZM20.083 22.3824H22.386L7.52018 2.72714H5.04882L20.083 22.3824Z" fill="#374151"/>
							</svg>
						</Link>

						{/* Instagram */}
						<Link href={""} rel="noopener noreferrer" target="_blank">
							<svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.00539 0.370117H18.2954C22.2154 0.370117 25.4004 3.55512 25.4004 7.47512V17.7651C25.4004 19.6495 24.6518 21.4567 23.3194 22.7891C21.9869 24.1216 20.1798 24.8701 18.2954 24.8701H8.00539C4.08539 24.8701 0.900391 21.6851 0.900391 17.7651V7.47512C0.900391 5.59075 1.64895 3.78357 2.9814 2.45112C4.31384 1.11868 6.12103 0.370117 8.00539 0.370117ZM7.76039 2.82012C6.59079 2.82012 5.46908 3.28474 4.64205 4.11178C3.81501 4.93881 3.35039 6.06051 3.35039 7.23012V18.0101C3.35039 20.4479 5.32264 22.4201 7.76039 22.4201H18.5404C19.71 22.4201 20.8317 21.9555 21.6587 21.1285C22.4858 20.3014 22.9504 19.1797 22.9504 18.0101V7.23012C22.9504 4.79237 20.9781 2.82012 18.5404 2.82012H7.76039ZM19.5816 4.65762C19.9878 4.65762 20.3772 4.81894 20.6644 5.10611C20.9516 5.39327 21.1129 5.78275 21.1129 6.18887C21.1129 6.59498 20.9516 6.98446 20.6644 7.27162C20.3772 7.55879 19.9878 7.72012 19.5816 7.72012C19.1755 7.72012 18.786 7.55879 18.4989 7.27162C18.2117 6.98446 18.0504 6.59498 18.0504 6.18887C18.0504 5.78275 18.2117 5.39327 18.4989 5.10611C18.786 4.81894 19.1755 4.65762 19.5816 4.65762ZM13.1504 6.49512C14.7748 6.49512 16.3328 7.14043 17.4814 8.28909C18.6301 9.43775 19.2754 10.9957 19.2754 12.6201C19.2754 14.2446 18.6301 15.8025 17.4814 16.9511C16.3328 18.0998 14.7748 18.7451 13.1504 18.7451C11.5259 18.7451 9.96802 18.0998 8.81936 16.9511C7.6707 15.8025 7.02539 14.2446 7.02539 12.6201C7.02539 10.9957 7.6707 9.43775 8.81936 8.28909C9.96802 7.14043 11.5259 6.49512 13.1504 6.49512ZM13.1504 8.94512C12.1757 8.94512 11.241 9.3323 10.5518 10.0215C9.86258 10.7107 9.47539 11.6454 9.47539 12.6201C9.47539 13.5948 9.86258 14.5295 10.5518 15.2187C11.241 15.9079 12.1757 16.2951 13.1504 16.2951C14.1251 16.2951 15.0598 15.9079 15.749 15.2187C16.4382 14.5295 16.8254 13.5948 16.8254 12.6201C16.8254 11.6454 16.4382 10.7107 15.749 10.0215C15.0598 9.3323 14.1251 8.94512 13.1504 8.94512Z" fill="#374151"/>
							</svg>
						</Link>

						{/* YouTube */}
						<Link className="hidden" href={""} rel="noopener noreferrer" target="_blank">
							<svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14 17.8701L23.0825 12.6201L14 7.37012V17.8701ZM34.23 4.16762C34.4575 4.99012 34.615 6.09262 34.72 7.49262C34.8425 8.89262 34.895 10.1001 34.895 11.1501L35 12.6201C35 16.4526 34.72 19.2701 34.23 21.0726C33.7925 22.6476 32.7775 23.6626 31.2025 24.1001C30.38 24.3276 28.875 24.4851 26.565 24.5901C24.29 24.7126 22.2075 24.7651 20.2825 24.7651L17.5 24.8701C10.1675 24.8701 5.6 24.5901 3.7975 24.1001C2.2225 23.6626 1.2075 22.6476 0.77 21.0726C0.5425 20.2501 0.385 19.1476 0.28 17.7476C0.1575 16.3476 0.105 15.1401 0.105 14.0901L0 12.6201C0 8.78762 0.28 5.97012 0.77 4.16762C1.2075 2.59262 2.2225 1.57762 3.7975 1.14012C4.62 0.912617 6.125 0.755117 8.435 0.650117C10.71 0.527617 12.7925 0.475117 14.7175 0.475117L17.5 0.370117C24.8325 0.370117 29.4 0.650117 31.2025 1.14012C32.7775 1.57762 33.7925 2.59262 34.23 4.16762Z" fill="#374151"/>
							</svg>
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
					<Link href={""}>
						Privacy Policy
					</Link>
					<Link href={""}>
						Terms of Service
					</Link>
					<Link href={""}>
						Cookies Settings
					</Link>
					</div>
				</div>
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<EmailForm />
			</Modal>
		</footer>
	);
}
