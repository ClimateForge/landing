import Image from "next/image";
import { display, sans } from "./fonts";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center py-12 px-5 md:px-10 gap-20">
			<div className="absolute top-0 left-0 right-0 min-h-1/2 -z-10 flex justify-center">
				<Image
					src="/bg.jpeg"
					layout="fill"
					objectFit="cover"
					alt="Background Image"
					className="h-1/2"
				/>
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-white" />
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-60" />
			</div>
			<div className="flex flex-col items-center max-w-5xl gap-5">
				<h1
					className={`text-extra-large-title leading-none text-center ${display.className} text-dark uppercase`}
				>
					<span className="text-primary">Lead Generation</span>
					<br />
					Services to help your business grow!
				</h1>
				<p className="text-dark-secondary text-body text-center max-w-md">
					Lorem ipsum dolor sit amet consectetur. Lectus odio et montes
					condimentum. Sit nulla pharetra odio diam etiam enim aliquam.
					Ultricies urna diam porttitor mattis orci tortor ac in orci. Vitae
					ipsum convallis pulvinar rhoncus urna.
				</p>
				<a className="mx-auto px-12 py-3 bg-primary text-light rounded-full">
					Get Started
					<Image
						className="inline-block ml-2"
						src="/hero-enter-icon.svg"
						alt="Enter Symbol"
						width={15}
						height={15}
					/>
				</a>
			</div>
			<div>
				<Image
					src="/hero-image.png"
					alt="Hero Image"
					className="md:max-w-4/5 w-full mx-auto"
					layout="responsive"
					width={1120}
					height={646}
				/>
			</div>
		</main>
	);
}
