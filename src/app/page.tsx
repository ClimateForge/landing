import Calendar from "./components/Calendar";
import Cta from "./components/cta";
import Demo from "./components/demo";
import Industries from "./components/industries";
import Services from "./components/services";
import Title from "./components/title";
import TitleBackground from "./title-background";
//import TitleBackground from "./title-background";

export default function Home() {
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
