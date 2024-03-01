import Image from "next/image";
import React from "react";
import { sans } from "../fonts";

export default function Footer() {
	return (
		<div
			className={`text-dark-secondary px-5 md:px-10 py-20 max-w-5xl w-full mx-auto ${sans.className}`}
		>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				<div className="space-y-4 flex flex-col justify-between">
					<div className="flex flex-row items-center space-x-2">
						<Image
							src="/logo.png"
							alt="DogLeads Logo"
							width={60}
							height={60}
							priority
						/>
						<p className="text-dark font-bold text-small-heading leading-none">
							DogLeads
						</p>
					</div>
					<p className="text-body">
						Don&lsquo;t wait - contact us now to learn more about our services.
					</p>
				</div>
				<div className="space-y-4 flex flex-col justify-between">
					<div className="space-y-1">
						<p className="text-grey-600 font-bold text-body leading-none">
							Address
						</p>
						<p className="text-body">
							582 Market St
							<br />
							San Francisco, CA 94104
						</p>
					</div>
					<div className="space-y-1">
						<p className="font-bold text-body leading-none">Contact</p>
						{/* <p className="text-body">(555) 123-4567</p> */}
						<p className="text-body">contact@dogleads.pro</p>
					</div>
				</div>
				<div className="space-y-4 flex flex-col justify-between">
					<p className="text-grey-600 font-bold text-body leading-none"></p>
					<p className="text-gray-600 text-body self-end">
						©2024. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}
