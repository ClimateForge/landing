"use client";
import { useRouter } from 'next/navigation'
import GradientButton from "./ui/gradient-button";
import GradientText from './ui/gradient-text';
import { ReactNode } from 'react';
export interface titleProps {
	title?: string[];
	description?: string;
	gradientIndex: number;
	buttonText?: string;
	route?: string;
	children?: ReactNode;
}

export default function Title({title, description, gradientIndex, buttonText, route, children}: titleProps) {

	const router = useRouter()
	
	return (
		<section className="flex flex-col 
			justify-center items-center 
			text-center relative
			max-w-[720px] h-80"
		>
		
		{title ? 
			<h1 className="mb-4">
				{title.length === 1 ? <GradientText> {title[0]} </GradientText> : title[0]}
				{title[gradientIndex] ? <GradientText> {title[gradientIndex]} </GradientText> : null}
				{title[2] ? title[2] : null}
			</h1>
		: null}

		<p className="text-gray-500 mb-6 text-md font-semibold">
			{description}
		</p>
		<GradientButton onClick={() => router.push(route ? route : '/')} width={154}>
			{buttonText}
		</GradientButton>
		{children ? children : null}
	</section>
	);
}