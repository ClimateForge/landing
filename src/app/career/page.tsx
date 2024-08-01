import Cta from "../components/cta";
import Title from "../components/title";
import TitleBackground from '../title-background';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Career - ClimateForge",
    description: "Fix the planet and make an impact in the world!",
};

export default function Career() {
	
    return (
        <main className="flex min-h-screen flex-col gap-20 items-center py-12 overflow-hidden pt-32 sm:pt-40">
			{/* Background Image */}
			<TitleBackground gradient/>
            
            {/* title card and CTA */}
			<Title title={["Fix the planet and make an", "impact in the world!"]} 
                description={"We are here to solve the biggest climate challenges of our time"} 
                gradientIndex={1}
                buttonText={"Learn More"}
                route="about"/>

            <Cta title={["Apply To", "Get Started?"]} 
                gifSrc="/career.gif" gifRounded
                description="Didn't find a position that matches your qualifications? Drop us a line!"
                primaryButton={{text: "Contact Us!", route: "/"}}
            />
		</main>
    );
}