/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/landing",
	assetPrefix: "/landing/",
	trailingSlash: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "climateforge.ai", // Custom domain
				pathname: "/landing/**", // Explicit basePath
				port: "",
			},
			{
				protocol: "https",
				hostname: "climateforge-landing.vercel.app", // Vercel domain
				pathname: "/landing/**",
				port: "",
			},
		],
		path: "/landing/_next/image", // Force basePath in image URLs
	},
};

export default nextConfig;
