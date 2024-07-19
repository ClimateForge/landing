import Image from "next/image";
import React from "react";

export default function TitleBackground() {
	return (
		<div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
			<Image className="absolute top-80 left-4"
                width={0}
                height={0} 
                style={{ width: '200px', height: 'auto' }}
                src={"/title-background/triangle-dots.svg"}
                alt="triangle-dots-svg-decoration"
            />
			<Image className="absolute top-24 right-4"
                width={0}
                height={0} 
                style={{ width: '150px', height: 'auto' }}
                src={"/title-background/circles.svg"}
                alt="circles-svg-decoration"
            />
		</div>
	);
}
