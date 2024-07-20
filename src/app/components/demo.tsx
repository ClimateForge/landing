"use client";
export default function Demo() {
    
    return (
		<section className="w-full min-w-[360px] max-w-[1200px]">
			<div className="bg-neutral-900 rounded-3xl 
				mx-[10px] sm:mx-[40px] md:mx-[60px] lg:mx-[120px]"
			>
				<div className="relative overflow-hidden pt-[56.25%] ">
					
					<iframe
						className="absolute top-0 left-0 w-full h-full 
							border-neutral-900 rounded-3xl border-solid border-[8px] sm:border-[10px]"
						src="https://www.youtube.com/embed/vh2FQmT5Blg?si=OLMYRnYGOPyvklry" 
						title="YouTube video player" 
						frameBorder="0"
						allow="accelerometer;
							autoplay;
							clipboard-write;
							encrypted-media;
							gyroscope;
							picture-in-picture;
							web-share;"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
			</div>
		</section>
    );
}