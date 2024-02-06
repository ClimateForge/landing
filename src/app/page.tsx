import Image from "next/image";
import IndustryCard from "./components/industry-card";
import ServiceItem from "./components/service-item";
import { display } from "./fonts";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center py-12 gap-20">
			{/* Background Image */}
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
			{/* 1st section - title card and CTA */}
			<div className="px-5 md:px-10 flex flex-col items-center max-w-5xl gap-5">
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
			{/* 2nd section - image */}
			<div className="px-5 md:px-10 max-w-5xl w-full">
				<Image
					src="/hero-image.png"
					alt="Hero Image"
					className="w-full mx-auto"
					width={1120}
					height={646}
				/>
			</div>
			{/* 3rd section - services */}
			<div className="px-5 md:px-10 flex flex-col max-w-5xl w-full gap-12">
				<div className="gap-5">
					<p className="text-primary uppercase">Services</p>
					<h2
						className={`text-dark ${display.className} text-large-title leading-none max-w-full lg:max-w-4/5`}
					>
						Grow your business with Dog Leads’ Comprehensive Services!
					</h2>
					<p className="text-dark-secondary text-body max-w-4/5">
						Lorem ipsum dolor sit amet consectetur. Nisl maecenas urna aliquam
						et et enim. Id pellentesque a scelerisque ut nunc.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					<ServiceItem
						title="Customized Targeted Outreach"
						description="Unlock your business potential with Dog Leads' tailored outreach services."
						icon="/people.svg"
						iconAlt="icon of 3 people with stars over them"
					/>
					<ServiceItem
						title="Data-Driven Lead Scoring"
						description="Experience precision in lead generation with Dog Leads' advanced data analytics."
						icon="/magnifying-glass.svg"
						iconAlt="icon of a magnifying glass with a bar graph"
					/>
					<ServiceItem
						title="Multi-Channel Engagement Campaigns"
						description="Amplify your brand presence across platforms with Dog Leads' multi-channel engagement strategies."
						icon="/loud-speaker.svg"
						iconAlt="icon of a loud speaker"
					/>
					<ServiceItem
						title="Conversion-Optimized Landing Pages"
						description="Maximize lead conversion rates with Dog Leads' expertly designed landing pages."
						icon="/browser-window.svg"
						iconAlt="icon of a browser window"
					/>
					<ServiceItem
						title="Real-Time Lead Tracking and Reporting"
						description="Stay in control and make informed decisions with Dog Leads' real-time lead tracking and reporting services."
						icon="/papers.svg"
						iconAlt="icon of 2 overlapping papers"
					/>
					<ServiceItem
						title="AI-Powered Predictive Analytics"
						description="Harness the power of artificial intelligence with Dog Leads' predictive analytics."
						icon="/ai-bot.svg"
						iconAlt="icon of robot with an antenna and a speech bubble"
					/>
				</div>
			</div>
			{/* 4th section - industries we serve */}
			<div className="flex flex-col w-full gap-12">
				<div className="px-5 md:px-10 max-w-5xl w-full gap-5 mx-auto">
					<h2
						className={`text-dark ${display.className} text-large-title leading-none max-w-full lg:max-w-3xl`}
					>
						Industries we serve
					</h2>
					<p className="text-dark-secondary text-body max-w-2xl">
						Lorem ipsum dolor sit amet consectetur. Nisl maecenas urna aliquam
						et et enim. Id pellentesque a scelerisque ut nunc.
					</p>
				</div>
				<div className="px-5 md:px-10 pb-3 flex space-x-4 overflow-x-auto">
					<IndustryCard
						title="Solar"
						icon="/solar-panel.jpg"
						iconAlt="Solar Panel"
					/>
					<IndustryCard
						title="Roofing"
						icon="/solar-panel.jpg"
						iconAlt="Solar Panel"
					/>
					<IndustryCard
						title="Landscaping"
						icon="/solar-panel.jpg"
						iconAlt="Solar Panel"
					/>
					<IndustryCard
						title="HVAC"
						icon="/solar-panel.jpg"
						iconAlt="Solar Panel"
					/>
				</div>
			</div>
			{/* 5th section - CTA */}
			<div className="px-5 md:px-10 max-w-5xl w-full">
				<div className="px-12 py-20 rounded-3xl flex flex-col items-center gap-5 bg-gradient-to-b from-[#86C5D1] to-[#7355E0]">
					<h2
						className={`text-light ${display.className} text-title leading-none text-center`}
					>
						Grow your business with Dog Leads’ Comprehensive Services!
					</h2>
					<p className="text-white text-body font-medium text-center max-w-lg">
						Lorem ipsum dolor sit amet consectetur. Lectus odio et montes
						condimentum. Sit nulla pharetra odio diam etiam enim aliquam.
					</p>
					<a className="mx-auto px-12 py-3 bg-white text-primary rounded-full">
						Get Started
						<Image
							className="inline-block ml-2 text-primary"
							src="/enter-icon-primary.svg"
							alt="Enter Symbol"
							width={15}
							height={15}
						/>
					</a>
				</div>
			</div>
		</main>
	);
}
