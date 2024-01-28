import Image from "next/image";
import { serif } from "./fonts";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="max-w-3xl gap-3">
				<h1
					className={`text-large-title font-bold text-center ${serif.className} text-primary`}
				>
					AI powered
					<br />
					leads generated for your
				</h1>
				<h1
					className={`text-extra-large-title font-bold text-center ${serif.className} text-accent`}
				>
					Solar Business
				</h1>
				<p className="text-body text-center ">
					Lorem ipsum dolor sit amet consectetur. Lectus odio et montes
					condimentum. Sit nulla pharetra odio diam etiam enim aliquam.
					Ultricies urna diam porttitor mattis orci tortor ac in orci. Vitae
					ipsum convallis pulvinar rhoncus urna.
				</p>
			</div>
		</main>
	);
}
