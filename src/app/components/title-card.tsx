"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { display, sans } from "../fonts";
import { z } from "zod";
import { useGSAP } from "@gsap/react";
import gsap, { Elastic } from "gsap";
import Link from "next/link";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import EarlyAccessSignup from "./early-access-signup";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function TitleCard() {
	return (
		<div
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
				<EarlyAccessSignup />
				<Link href="#calendar" className="btn-primary">
					<div className="tracking-wide text-large-button font-bold">
						Schedule a Demo
					</div>
					<CalendarDaysIcon className="h-6" />
				</Link>
			</div>
		</div>
	);
}
