import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import { dmSans } from "./fonts";
import "./globals.css";


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
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/favicon/favicon-16x16.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: '/favicon/apple-touch-icon.png',
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
					{children}
				<Footer />
			</body>
		</html>
	);
}
