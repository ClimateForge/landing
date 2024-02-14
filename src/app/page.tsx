import Cta from "./components/cta";
import Demo from "./components/demo";
import Industries from "./components/industries";
import Services from "./components/services";
import TitleCard from "./components/title-card";
import TitleBackground from "./title-background";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center py-12 gap-20">
			{/* Background Image */}
			<TitleBackground />

			{/* 1st section - title card and CTA */}
			<TitleCard />

			{/* 2nd section - demo */}
			<Demo />

			{/* 3rd section - services */}
			<Services />

			{/* 4th section - industries we serve */}
			<Industries />

			{/* 5th section - CTA */}
			<Cta />
		</main>
	);
}
