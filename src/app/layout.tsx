import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import { dmSans } from "./fonts";
import "./globals.css";
import Template from "./template";

export const metadata: Metadata = {
	title: "ClimateForge",
	description: "Qualified leads that turn into customers faster",
	icons: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			url: '/favicons/favicon.ico',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon/favicon-32x32.png',
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${dmSans.className} text-body`}>
				<Header />
					<Template>{children}</Template>
				<Footer />
			</body>
		</html>
	);
}
