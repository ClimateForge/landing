import Image from "next/image";
import React from "react";

export default function footer() {
	return (
		<div className="text-dark-secondary px-5 md:px-10 py-20 max-w-5xl w-full mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				<div>
					<div className="flex flex-row items-center">
						<Image
							src="/logo.svg"
							alt="Dog Leads Logo"
							className="rounded-2xl"
							width={70}
							height={60}
							priority
						/>
						<p className="text-dark font-bold text-small-heading leading-none">
							Dog Leads
						</p>
					</div>
					<p className="text-body">
						Don&lsquo;t wait - contact us now to learn more about our services.
					</p>
				</div>
				<div className="space-y-4">
					<div className="space-y-1">
						<p className="text-grey-600 font-bold text-body leading-none">
							Address
						</p>
						<p className="text-body">
							123 Oak Street, Cityville, CA 90210, USA
						</p>
					</div>
					<div className="space-y-1">
						<p className="font-bold text-body leading-none">Contact</p>
						<p className="text-body">(555) 123-4567</p>
						<p className="text-body">contact@dogleads.com</p>
					</div>
				</div>
				<div>
					<div className="space-y-1">
						<p className="text-grey-600 font-bold text-body leading-none">
							Socials
						</p>
						<p className="text-gray-600 text-body">
							©2023. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
