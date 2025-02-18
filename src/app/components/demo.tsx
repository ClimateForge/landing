"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./ui/modal";


interface DemoProps {
    videoSrc: string;
}

export default function Demo({ videoSrc }: DemoProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Image with Play Button */}
            <div className="relative cursor-pointer group" onClick={() => setIsOpen(true)}>
                <Image
                    src="/demo-image.png"
                    alt="Product Image"
                    title="Product image"
                    width={1280}
                    height={520}
                    className="rounded-lg transition-opacity group-hover:opacity-90"
                    priority
                />
				<Image
                    src="/Background.png"
                    alt="Background Gradient"
                    title="Product image"
                    width={1280}
                    height={520}
                    className="absolute top-0 rounded-lg transition-opacity group-hover:opacity-90 -z-10 h-full"
                    priority
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                    <button className="p-4 bg-white/80 rounded-full shadow-lg transition-transform group-hover:scale-110">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-12 h-12"
							>
							<path d="M8 5v14l11-7z" />
						</svg>
                    </button>
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="relative w-full max-w-[1280px]">
                    <video controls autoPlay className="w-full max-w-[1280px] rounded-lg">
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Modal>
        </>
    );
}