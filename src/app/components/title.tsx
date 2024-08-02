"use client";
import { useRouter } from 'next/navigation'

import GradientButton from "./ui/gradient-button";
import GradientText from './ui/gradient-text';

import { ReactNode } from 'react';
interface BaseProps {
	title?: string[];
	description?: string;
	gradientIndex: number;
	buttonText?: string;
	children?: ReactNode;
}

// When newTab is true, route is required
type TitlePropsWithNewTab = BaseProps & {
	newTab: true;
	route: string;
};

// When newTab is false or undefined, route is optional
type TitlePropsWithoutNewTab = BaseProps & {
	newTab?: false;
	route?: string;
};

// Combine the two types using a union
export type TitleProps = TitlePropsWithNewTab | TitlePropsWithoutNewTab;

export default function Title({title, description, gradientIndex, buttonText, route, newTab = false, children}: TitleProps) {

	const router = useRouter()
	
	return (
		<section className="flex flex-col 
			justify-center items-center 
			text-center relative
			max-w-[720px] h-64 sm:h-72"
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
		<GradientButton width={154} onClick={newTab ? 
			() => window.open(route, '_blank', 'noopener,noreferrer') : 
			() => router.push(route ? route : '/')}>
			{buttonText}
		</GradientButton>
		{children ? children : null}
	</section>
	);
}