import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { z } from "zod";
import gsap, { Elastic } from "gsap";

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
			className="relative mx-auto space-y-4 flex flex-col items-center"
		>
			<form
				ref={formRef}
				className={classNames(
					"form-registration visible space-y-4 text-dark border-2 border-accent border-opacity-50 rounded-15 cursor-auto py-4 px-4 shadow-sm",
					props.lightBg ? "bg-light" : "bg-transparent"
				)}
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
							"flex-1 rounded-10 px-4 py-2 bg-accent bg-opacity-10 text-dark placeholder:text-dark-secondary placeholder:text-opacity-50 border-2 focus:border-accent w-full focus:outline-none focus:bg-opacity-30 transition-all duration-300 ease-in-out font-bold text-body font-mono tracking-wide",
							emailValid === null || emailValid
								? "border-accent border-opacity-30"
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
						className="submit-button btn-outline px-4"
						disabled={loading}
					>
						<div className="submit-button-child flex flex-row items-center tracking-wide text-small-button font-bold">
							<div>Register 🎉</div>
						</div>
					</button>
				</div>
			</form>
			<div
				ref={registeredTextRef}
				className={classNames(
					"confirm-registration invisible scale-50 opacity-0 text-center absolute top-0 px-8 py-4 rounded-15 shadow-sm",
					props.lightBg ? "bg-light bg-opacity-100" : "bg-primary bg-opacity-10"
				)}
			>
				<div className="text-heading font-extrabold">Congratulations! 🎉</div>
				<div className="text-small-heading font-semibold">
					You&rsquo;re on the waitlist
				</div>
			</div>
		</div>
	);
}
