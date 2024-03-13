"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { display, sans } from "../fonts";
import { useGSAP } from "@gsap/react";
import { z } from "zod";
import gsap from "gsap";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Cta() {
	const [emailValid, setEmailValid] = useState<boolean | null>(null);
	const [loading, setLoading] = useState(false);

	const formRef = useRef<HTMLFormElement>(null);
	const registeredTextRef = useRef<HTMLDivElement>(null);

	const emailInputRef = useRef<HTMLInputElement>(null);

	const handleRegisterClick = (e: any) => {
		e.preventDefault();
		console.log("register clicked");

		try {
			z.string().email().parse(emailInputRef.current?.value);
			setEmailValid(null);
		} catch (error) {
			console.info("Invalid email address", error);
			emailInputRef.current?.setCustomValidity("Invalid email address");
			emailInputRef.current?.reportValidity();
			setEmailValid(false);
			registrationFailedAction();

			return;
		}

		setLoading(true);

		fetch("/api/register-interest", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: emailInputRef.current?.value }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
				if (data.success === true) {
					registrationSuccessfulAction();
				} else {
					throw new Error("Registration failed");
				}
			})
			.catch((error) => {
				registrationFailedAction();
				setEmailValid(false);
				emailInputRef.current!.value = "";
				emailInputRef.current?.setCustomValidity(
					"Something went wrong. Please try again."
				);
				emailInputRef.current?.reportValidity();
				console.error("Error:", error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const container = useRef<HTMLDivElement | null>(null);
	const { contextSafe } = useGSAP({ scope: container });

	const registrationSuccessfulAction = contextSafe(() => {
		gsap.to(".form-registration", {
			duration: 0.3,
			opacity: 0,
			scale: 0.5,
			autoAlpha: 0,
		});

		gsap.to(".confirm-registration", {
			duration: 3,
			opacity: 1,
			ease: "elastic.out(1,0.3)",
			scale: 1,
			autoAlpha: 1,
		});
	});

	const registrationFailedAction = contextSafe(() => {
		let tl = gsap.timeline();
		tl.to(".form-registration", { duration: 0.1, translateX: -30 });
		tl.to(".form-registration", {
			duration: 2,
			translateX: 0,
			ease: Elastic.easeOut.config(0.9, 0.1),
		});
	});

	useGSAP(() => {
		gsap.to(".submit-button", {
			duration: 0.9,
			backgroundColor: "#5850EC",
			borderColor: "#5850EC",
			repeat: -1,
			yoyo: true,
			ease: "none",
			paused: !loading,
		});
	}, [loading]);

	return (
		<div className={`px-5 md:px-10 max-w-5xl w-full ${sans.className}`}>
			<div className="px-12 py-20 rounded-30 flex flex-col items-center space-y-20 bg-gradient-to-b from-[#86C5D1] to-[#7355E0]">
				<div className="space-y-2">
					<h2
						className={`text-light ${display.className} text-title leading-none text-center`}
					>
						Grow your business with DogLeads&rsquo; Comprehensive Services!
					</h2>
					<p className="mx-auto text-white text-body font-medium text-center max-w-lg">
						Empowering contractors to connect with qualified homeowners,
						delivering tailored upgrades and cutting costs and carbon footprints
						through smart lead generation.
					</p>
				</div>
				<div className="relative" ref={container}>
					<form
						ref={formRef}
						className={
							"form-registration visible space-y-4 text-dark border-2 border-dark rounded-15 cursor-auto py-4 px-4 bg-white"
						}
						onSubmit={handleRegisterClick}
						noValidate
					>
						<div className="pl-1 font-bold text-body">
							Sign up to get early access!
						</div>
						<div className="flex flex-wrap gap-2">
							<input
								disabled={loading}
								autoComplete="email"
								ref={emailInputRef}
								type="email"
								className={classNames(
									"flex-1 rounded-10 px-4 py-2 bg-white bg-opacity-10 text-dark placeholder:text-dark-secondary placeholder:text-opacity-50 border-2 focus:border-primary w-full focus:outline-none focus:bg-opacity-30 transition-all duration-300 ease-in-out font-bold text-body font-mono tracking-wide",
									emailValid === null || emailValid
										? "border-light"
										: "border-red-400"
								)}
								onError={() => setEmailValid(false)}
								placeholder="Enter your Email ID"
								onChange={(_) => {
									emailInputRef.current?.setCustomValidity("");
									if (emailValid !== null) {
										setEmailValid(null);
									}
								}}
								required
							/>
							<button
								type="submit"
								className="submit-button flex-0 cursor-pointer border-2 border-primary disabled:border-primary-30 hover:bg-opacity-80 disabled:bg-opacity-50 px-4 py-2 rounded-10 bg-primary text-white"
								disabled={loading}
							>
								<div className="submit-button-child flex flex-row items-center tracking-wide text-small-button font-bold ">
									<div>Register</div>
									<Image
										className="inline-block ml-2 min-w-4 mt-1"
										src="/hero-enter-icon.svg"
										alt="Enter Symbol"
										width={15}
										height={15}
									/>
								</div>
							</button>
						</div>
					</form>
					<div
						ref={registeredTextRef}
						className="confirm-registration invisible scale-50 opacity-0 text-center absolute top-0 left-0 right-0 border-2 border-primary px-8 py-4 rounded-15 bg-white bg-opacity-80 shadow-md"
					>
						<div className="text-heading font-extrabold">
							Congratulations! 🎉
						</div>
						<div className="text-small-heading font-semibold">
							You&rsquo;re on the waitlist
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
