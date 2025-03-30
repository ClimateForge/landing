import Image from "next/image";
import React from "react";

export default function TitleBackground({ gradient = false }) {
	return (
		<div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
			<Image
				title="Triangle Dots SVG"
				className="absolute top-64 md:top-[320px] lg:top-[350px] left-10"
				width={0}
				height={0}
				style={{ width: "200px", height: "auto" }}
				src={
					gradient
						? "/landing/decorations/dots-triangle-gradient.svg"
						: "/landing/decorations/dots-triangle.svg"
				}
				alt="triangle-dots-svg-decoration"
			/>
			<Image
				title="Circles SVG"
				className="absolute right-[5%]
                top-[75px] md:top-[100px] lg:top-[150px]"
				width={0}
				height={0}
				style={{ width: "150px", height: "auto" }}
				src={"/landing/decorations/circles.svg"}
				alt="circles-svg-decoration"
			/>
		</div>
	);
}
