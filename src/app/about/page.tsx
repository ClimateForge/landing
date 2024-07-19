import Title from "../components/title";

export default function About() {

    return (
        <main className="flex min-h-screen flex-col gap-20 items-center py-12 overflow-hidden pt-32 sm:pt-40">

			{/* title card and CTA */}
			<Title title={["Empower", "Sustainable", "Transformation"]} 
            description="We help contractors make tons of money and slashing CO2 emissions in seconds (seriously)."
            gradientIndex={1}
            buttonText="Join Us"/>

		</main>
    );
}