import Image from "next/image";
import React from "react";

export default function Demo() {
	return (
		<div className="w-full 3xl:max-w-9/10 -z-10 -mt-20 overflow-hidden">
			<Image
				src="/hero-image-2.png"
				alt="Hero Image"
				className="w-full min-w-[800pt] -ml-36 md:ml-0"
				width={1120}
				height={1120}
			/>
		</div>
	);
}
