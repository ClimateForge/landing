import Image from "next/image";
import React from "react";

export default function TitleBackground({gradient = false}) {
	return (
		<div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
			<Image className="absolute 
                top-96 left-0
                "
                width={0}
                height={0} 
                style={{ width: '200px', height: 'auto' }}
                src={gradient ? "/decorations/dots-triangle-gradient.svg" : "/decorations/dots-triangle.svg"}
                alt="triangle-dots-svg-decoration"
            />
			<Image className="absolute 
                top-[75px] right-4
                md:top-[100px] md:right-4 lg:top-[150px]"
                
                width={0}
                height={0} 
                style={{ width: '150px', height: 'auto' }}
                src={"/decorations/circles.svg"}
                alt="circles-svg-decoration"
            />
		</div>
	);
}
