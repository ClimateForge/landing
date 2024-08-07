import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { z } from "zod";
import gsap, { Elastic } from "gsap";
import GradientButton from "./ui/gradient-button";
import GradientText from "./ui/gradient-text";

function classNames(...classes: (string | boolean | undefined)[]) {
	return classes.filter(Boolean).join(" ");
}

type Props = {
	lightBg?: boolean;
};

export default function EarlyAccessSignup(props: Props) {
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
				setLoading(false);
				if (data.success === true) {
					registrationSuccessfulAction();
				} else {
					throw new Error("Registration failed");
				}
			})
			.catch((error) => {
				setLoading(false);
				registrationFailedAction();
				setEmailValid(false);
				emailInputRef.current!.value = "";
				emailInputRef.current?.setCustomValidity(
					"Something went wrong. Please try again."
				);
				emailInputRef.current?.reportValidity();
				console.error("Error:", error);
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
			backgroundColor: "#00ADB490",
			borderColor: "#00ADB4",
			repeat: -1,
			yoyo: true,
			ease: "none",
			paused: !loading,
		});
	}, [loading]);

	return (
		<div
			ref={container}
			className="relative mx-auto space-y-8 flex flex-col items-center"
		>
			<form
				ref={formRef}
				className={classNames(
					"form-registration visible space-y-8 cursor-auto p-4",
					props.lightBg ? "bg-light" : "bg-transparent"
				)}
				onSubmit={handleRegisterClick}
				noValidate
			>
				<h4 className="pl-1 text-center text-xl">
					<GradientText>
					Sign up{' '}
					</GradientText>
					to get early access!
				</h4>
				
				<div className="flex flex-wrap justify-center items-center gap-2">
					<input
						disabled={loading}
						autoComplete="email"
						ref={emailInputRef}
						type="email"
						className={classNames(
							"flex-1 rounded-10 px-4 py-2 min-w-[154px] h-[49px] bg-opacity-10 text-dark placeholder:text-dark-secondary placeholder:text-opacity-50 border-2 focus:border-black w-full focus:outline-none focus:bg-opacity-30 transition-all duration-300 ease-in-out ",
							emailValid === null || emailValid
								? "border-gray-400 border-opacity-30"
								: "border-red-400"
						)}
						onError={() => setEmailValid(false)}
						placeholder="Enter your E-mail"
						onChange={(_) => {
							emailInputRef.current?.setCustomValidity("");
							if (emailValid !== null) {
								setEmailValid(null);
							}
						}}
						required
					/>
					<div className="flex justify-center items-center submit-button">

					
						<GradientButton width={154}
							type="submit"
							disabled={loading}
							
						>
							Register
						</GradientButton>
					</div>
				</div>
			</form>
			<div
				ref={registeredTextRef}
				className={classNames(
					"confirm-registration invisible scale-50 text-center absolute top-0 px-8",
					props.lightBg ? "bg-light bg-opacity-100" : " bg-opacity-10"
				)}
			>
				<GradientText className="text-heading font-extrabold">Congratulations!</GradientText>
				<div className="text-small-heading font-semibold">
					You&rsquo;re on the waitlist
				</div>
			</div>
		</div>
	);
}
