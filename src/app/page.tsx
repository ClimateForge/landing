import Image from "next/image";
import IndustryCard from "./components/industry-card";
import ServiceItem from "./components/service-item";
import { display } from "./fonts";
import Cta from "./components/cta";
import Industries from "./components/industries";
import Services from "./components/services";
import TitleCard from "./components/title-card";
import TitleBackground from "./title-background";
import Demo from "./components/demo";

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
