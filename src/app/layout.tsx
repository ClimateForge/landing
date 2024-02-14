import type { Metadata } from "next";
import footer from "./components/footer";
import header from "./components/header";
import "./globals.css";
import { useEffect } from "react";

export const metadata: Metadata = {
	title: "Dog Leads",
	description: "AI generated leads for your business",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-white text-dark text-body">
				{header()}
				{children}
				{footer()}
			</body>
		</html>
	);
}
