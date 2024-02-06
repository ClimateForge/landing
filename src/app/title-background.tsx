import Image from "next/image";
import React from "react";

export default function TitleBackground() {
	return (
		<div className="absolute top-0 left-0 right-0 min-h-1/2 -z-10 flex justify-center">
			<Image
				src="/bg.jpeg"
				fill
				style={{ objectFit: "cover" }}
				alt="Background Image"
				className="h-1/2"
			/>
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-white" />
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-60" />
		</div>
	);
}
