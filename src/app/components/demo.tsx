import Image from "next/image";
import React from "react";

export default function Demo() {
	return (
		<div className="px-5 md:px-10 max-w-5xl w-full">
			<Image
				src="/hero-image.png"
				alt="Hero Image"
				className="w-full mx-auto"
				width={1120}
				height={646}
			/>
		</div>
	);
}
