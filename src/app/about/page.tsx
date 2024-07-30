import Cta from "../components/cta";
import MarketInsights from "../components/market-insights";
import Title from "../components/title";
import TitleBackground from "../title-background";

export default function About() {

    return (
        <main className="flex min-h-screen flex-col gap-20 items-center py-12 overflow-hidden pt-32 sm:pt-40">
            {/* Background Image */}
			<TitleBackground />

			{/* title card and CTA */}
			<Title title={["Empower", "Sustainable", "Transformation"]} 
            description="We help contractors make tons of money and slashing CO2 emissions in seconds (seriously)."
            gradientIndex={1}
            buttonText="Join Us"
            route="career"/>

            <MarketInsights/>

            <Cta title={["Ready To", "Do Something", "That Matters?"]} gifSrc="/about.gif"
                description="At ClimateForge we're building the best tools to help American contractors and installers to decarbonize the country and expand globally!"
                primaryButton={{text: "Join Us", route: "/career"}}
            />
		</main>
    );
}