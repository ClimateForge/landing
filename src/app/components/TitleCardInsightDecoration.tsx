import React, { ReactNode } from "react";

type Props = {
	heading: string;
	value: string;
	icon: ReactNode;
	unit: ReactNode | string;
};

export default function TitleCardInsightDecoration(props: Props) {
	return (
		<div className="mx-auto flex flex-col justify-center px-3 py-2 text-left uppercase rounded-xl border-2 border-solid shadow-md shadow-lime-50 backdrop-blur-[10px] bg-white bg-opacity-60 border-zinc-100 w-fit">
			<div className="text-sm font-medium leading-6 text-zinc-800 uppercase">
				{props.heading}
			</div>
			<div className="flex items-center gap-1 text-3xl font-black leading-6 text-lime-500 whitespace-nowrap">
				{props.icon}
				{props.value}
				<span className="text-lime-500/60">{props.unit}</span>
			</div>
		</div>
	);
}
