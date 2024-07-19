"use client";
import { useRouter } from 'next/navigation'
import GradientButton from "./ui/gradient-button";
import GradientText from './ui/gradient-text';
export interface titleProps {
	title?: string[]
	description?: string
	gradientIndex: number
	buttonText?: string
}

export default function Title({title, description, gradientIndex, buttonText}: titleProps) {

	const router = useRouter()
	
	return (
		<section className="flex flex-col 
			justify-center items-center 
			text-center relative
			max-w-full"
		>
		
		{title ? 
			<h1 className="font-bold text-5xl sm:text-6xl mb-4">
				{title.length === 1 ? <GradientText> {title[0]} </GradientText> : title[0]}
				{title[gradientIndex] ? <GradientText> {title[gradientIndex]} </GradientText> : null}
				{title[2] ? title[2] : null}
			</h1>
		: null}

		<p className="text-gray-500 mb-6 text-md font-semibold">
			{description}
		</p>

		<GradientButton onClick={() => router.push('#calendar')}>
			{buttonText}
		</GradientButton>
	</section>
	);
}