import Calendar from "./components/Calendar";
import Cta from "./components/cta";
import Demo from "./components/demo";
import Industries from "./components/industries";
import Services from "./components/services";
import TitleCard from "./components/title-card";
import TitleBackground from "./title-background";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col gap-20 items-center py-12">
			{/* Background Image */}
			<TitleBackground />

			{/* title card and CTA */}
			<TitleCard />

			{/* demo */}
			<div className="-mt-10">
				<Demo />
			</div>

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
