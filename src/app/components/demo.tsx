
export default function Demo() {
    // TODO: optimize iframe
    return (
		<section id="demo" className="w-full min-w-[250px] max-w-[1200px] ">
			<div className="bg-neutral-900 rounded-3xl shadow-2xl
				mx-0 sm:mx-[20px]"
			>
				<div className="relative overflow-hidden pt-[56.25%] ">
					
					<iframe loading="lazy"
						className="absolute top-0 left-0 w-full h-full 
							border-neutral-900 rounded-3xl border-solid border-[8px] sm:border-[10px]"
						src="https://www.youtube-nocookie.com/embed/vh2FQmT5Blg?si=OLMYRnYGOPyvklry" 
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
			</div>
		</section>
    );
}