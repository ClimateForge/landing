"use client";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { Fragment, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { sans } from "../fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Dialog, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Demo() {
	const [isOpen, setIsOpen] = useState(false);

	const container = useRef<HTMLDivElement | null>(null);
	const playButtonContainer = useRef<HTMLDivElement | null>(null);

	const { contextSafe } = useGSAP({ scope: container });

	const imageMouseEnterAction = contextSafe(() => {
		gsap.to(".play-button", {
			duration: 0.3,
			opacity: 1,
			scale: 1,
			rotateY: 0,
			rotateZ: 0,
			autoAlpha: 1,
		});
	});

	const imageMouseLeaveAction = contextSafe(() => {
		gsap.to(".play-button", {
			duration: 0.3,
			opacity: 0,
			scale: 0.3,
			rotateY: 100,
			rotateZ: 360,
			autoAlpha: 0,
		});
	});

	const imageMouseMoveAction = contextSafe((e: any) => {
		let x = e.clientX;
		let y = e.clientY;
		// get the position of the element you applied the handler to
		let pos = playButtonContainer.current?.getBoundingClientRect?.() ?? {
			x: 0,
			y: 0,
		};
		// subtract the position of the element (rounded up to the next
		// integer) from the mouse position and return it.
		x = (x - pos.x) | 1;
		y = (y - pos.y) | 1;

		gsap.to(".play-button", {
			duration: 0.3,
			x: x - 50,
			y: y - 50,
		});
	});

	return (
		<div
			className={classNames(
				sans.className,
				"w-full 3xl:max-w-9/10 overflow-hidden relative"
			)}
			ref={container}
		>
			<div className="hidden touch:flex items-center justify-center">
				<div className="btn-outline">
					Watch Demo
					<PlayIcon className="h-8 w-8 text-primary text-opacity-80 ml-1" />
				</div>
			</div>
			<Image
				src="/hero-image-2.png"
				alt="Hero Image"
				className="w-full min-w-[800pt] ml-52 md:ml-0 overflow-hidden pointer-events-none"
				width={1120}
				height={1120}
			/>
			<div
				ref={playButtonContainer}
				className="visible touch:hidden absolute top-0 left-0 w-full h-full z-10"
				onMouseEnter={imageMouseEnterAction}
				onMouseLeave={imageMouseLeaveAction}
				onMouseMove={imageMouseMoveAction}
				onClick={() => setIsOpen(true)}
			>
				<div className="opacity-0 play-button absolute top-0 left-0 rounded-full aspect-square px-5 flex flex-col items-center justify-center bg-primary backdrop-blur-lg bg-opacity-60 drop-shadow-2xl">
					<PlayIcon className="h-14 w-14 text-light text-opacity-80 ml-1" />
				</div>
			</div>
			<Transition show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-4 z-10 overflow-y-auto flex items-center justify-center"
					onClose={() => setIsOpen(false)}
					onClick={() => setIsOpen(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/30" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-90"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-90"
					>
						<div className="bg-white backdrop-blur-lg bg-opacity-60 shadow-lg w-full max-w-5xl aspect-video rounded-30 overflow-hidden sm:p-8">
							<ReactPlayer
								url="https://youtu.be/vh2FQmT5Blg"
								width={"100%"}
								height={"100%"}
								style={{
									borderRadius: 30,
									overflow: "hidden",
								}}
								controls={true}
								playing={true}
							/>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</div>
	);
}
