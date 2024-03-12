"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { display, sans } from "../fonts";
import { z } from "zod";
import { useGSAP } from "@gsap/react";
import gsap, { Elastic } from "gsap";
import Link from "next/link";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function TitleCard() {
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
		console.log("useGSAP called");
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
		<div
			ref={container}
			className={`px-5 md:px-10 max-w-5xl flex flex-col items-center gap-20 ${sans.className}`}
		>
			<div className="min-w-full space-y-2">
				<h1
					className={`mx-auto text-extra-large-title leading-none text-center ${display.className} text-dark uppercase`}
				>
					<span className="text-primary">Lead Generation</span>
					<br />
					Services to help your business grow!
				</h1>
				<p className="mx-auto text-dark-secondary text-body text-center max-w-md">
					Conversion-Optimized Prospecting. Maximize lead conversion rates with
					AI DogLeads&rsquo; designed prospecting tools.
				</p>
			</div>
			<div className="relative mx-auto space-y-4 flex flex-col items-center">
				{/* <div className="mx-auto flex relative">
					<div
						className={`px-12 py-3 bg-primary text-light rounded-15 cursor-default`}
						aria-disabled="true"
						onClick={handleRegisterClick}
					>
						<div className="tracking-wide text-large-button font-bold">
							Get Started
							<Image
								className="inline-block ml-2"
								src="/hero-enter-icon.svg"
								alt="Enter Symbol"
								width={15}
								height={15}
							/>
						</div>
					</div>
					<div className="absolute shadow-lg -left-7 top-2 h-auto w-auto -rotate-45 bg-yellow-200 text-black font-mono font-medium text-extra-small rounded-md px-2 tracking-wide">
						COMING SOON
					</div>
				</div> */}
				<form
					ref={formRef}
					className={
						"form-registration visible space-y-4 text-dark border-2 border-dark rounded-15 cursor-auto py-4 px-4 bg-primary bg-opacity-5"
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
					className="invisible scale-50 opacity-0 confirm-registration text-center absolute top-0 border-2 border-primary px-8 py-4 rounded-15 bg-primary-10 shadow-md"
				>
					<div className="text-heading font-extrabold">Congratulations! 🎉</div>
					<div className="text-small-heading font-semibold">
						You&rsquo;re on the waitlist
					</div>
				</div>
				<Link
					href="#calendar"
					className={`px-12 py-3 bg-primary text-light rounded-15 cursor-default`}
				>
					<div className="tracking-wide text-large-button font-bold">
						Schedule a Demo
					</div>
				</Link>
			</div>
		</div>
	);
}
