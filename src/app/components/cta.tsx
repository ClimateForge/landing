"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { display, sans } from "../fonts";
import { useGSAP } from "@gsap/react";
import { z } from "zod";
import gsap from "gsap";
import EarlyAccessSignup from "./early-access-signup";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Cta() {
	return (
		<div className={`px-5 md:px-10 max-w-5xl w-full ${sans.className}`}>
			<div className="px-12 py-20 rounded-30 flex flex-col items-center space-y-20 bg-gradient-to-b from-[#00ADB4] to-[#00CC77]">
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
				<EarlyAccessSignup lightBg />
			</div>
		</div>
	);
}
