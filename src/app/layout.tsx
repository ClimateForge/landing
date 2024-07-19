import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";

import "./globals.css";

export const metadata: Metadata = {
	title: "ClimateForge",
	description: "Qualified leads that turn into customers faster",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="text-body">
				<Header />
					{children}
				<Footer />
			</body>
		</html>
	);
}
