import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
	title: "DogLeads",
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
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
