import Calendar from "./components/Calendar";
import CardInfoGrid from "./components/card-info-grid";
import Cta from "./components/cta";
import Demo from "./components/demo";
import Industries from "./components/industries";
import Services from "./components/services";
import Title from "./components/title";
import TitleBackground from "./title-background";
//import TitleBackground from "./title-background";

export default function Home() {

	const cardsData = [
        {
            title: "Discover Infinite Deals",
            description: "Choose your area and uncover untapped opportunities with our lead qualification tool. Target serious buyers and boost your sales efficiency.",
            icon: "icon1",
        },
        {
            title: "Qualify to  Maximize Returns",
            description: "Our energy modelling technology identifies the best energy upgrade opportunities in your area. Qualifies properties and owners, ensuring you focus on high-potential leads for maximum efficiency and impact.",
            icon: "icon2",
        },
        {
            title: "Fast Expert Inspections",
            description: "Our digital inspection tool empowers your team to perform expert-level inspections. Complete thorough, customizable checks in under 30 minutes, preventing costly callbacks and rework.",
            icon: "icon3",
        },
        {
            title: "AI CRM Assistant",
            description: "Determines the next steps for each lead. Easily track statuses and enhance team collaboration, ensuring nothing falls through the cracks.",
            icon: "icon4",
        },
        {
            title: "Complete Energy Solutions",
            description: "Instantly create precise designs for all your energy upgrade needs. Enjoy a seamless and comprehensive experience with easy brand and model switching.",
            icon: "icon5",
        },
        {
            title: "Massively Close More Deals ",
            description: "Impress customers with comprehensive quotes that include system designs, pricing, and calculations, all customized with your branding. Present all details upfront to minimize confusion and questions.",
            icon: "icon6",
        },
    ]

	return (
		<main className="flex min-h-screen flex-col gap-20 items-center py-12 overflow-hidden pt-32 sm:pt-40">
			{/* Background Image */}
			<TitleBackground />

			{/* title card and CTA */}
			<Title title={["Energy", "Efficiency", "in a wink!"]} 
				description="Discover, Qualify and Deploy Energy Upgrades faster than ever before!" 
				gradientIndex={1}
				buttonText="Book a Demo"
			/>

			{/* demo */}
			<Demo />
			
			<CardInfoGrid cardsData={cardsData}/>

			{/* services */}
			<div className="-mt-20">
				<Services />
			</div>

			{/* industries we serve */}
			<Industries />

			{/* CTA */}
			<Cta />

			{/* Meet with founder */}
			<Calendar />
		</main>
	);
}
