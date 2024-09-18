import TitleBackground from '../title-background';
import Title from "../components/title";
import JobOpenings from "../components/job-openings";
import OurTeam from "../components/our-team";
import Cta from "../components/cta";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Careers - ClimateForge",
    description: "Fix the planet and make an impact in the world!",
    keywords: [
        "Careers at ClimateForge", 
        "AI lead generation jobs", 
        "solar energy jobs", 
        "HVAC careers", 
        "green tech careers", 
        "AI and green technology jobs", 
        "work in renewable energy", 
        "jobs in sustainable tech"
    ],
    // Open Graph for the Careers page
    openGraph: {
        title: "Careers at ClimateForge | Join the Future of AI-Driven Lead Generation",
        description: "Discover exciting career opportunities at ClimateForge, where we innovate the way contractors find leads for solar, HVAC, and green industries.",
        url: "https://www.climateforge.ai/careers", // Page URL
        type: "website",
    }
};

export default function Careers() {
	
    return (
        <main className="flex min-h-screen flex-col gap-20 items-center py-12 overflow-hidden pt-32 sm:pt-40">
			{/* Background Image */}
			<TitleBackground gradient/>
            
            {/* title card and CTA */}
			<Title title={["Fix the planet and make an", "impact in the world!"]} 
                description={"We are here to solve the biggest climate challenges of our time"} 
                descriptionAnimated={["We are here to solve the biggest ", "climate", "energy", " challenges of our time"]}
                gradientIndex={1}
                buttonText={"Learn More"}
                route="about"/>

            <JobOpenings />
            
            <OurTeam/>

            <Cta title={["Apply To", "Get Started!"]} 
                gifSrc="/cta/career2.webp" gifRounded
                description="Didn't find a position that matches your qualifications? Drop us a line!"
                badges
            />
		</main>
    );
}