import Title from "../components/title";

export default function Career() {
	
    return (
        <main className="flex min-h-screen flex-col gap-20 items-center py-12 overflow-hidden pt-32 sm:pt-40">
			{/* title card and CTA */}
			<Title title={["Fix the planet and make an", "impact in the world!"]} 
                description={"We are here to solve the biggest climate challenges of our time"} 
                gradientIndex={1}
                buttonText={"Learn more about Us"}/>

		</main>
    );
}