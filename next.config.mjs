/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/landing",
	assetPrefix: "/landing/",
	trailingSlash: true,
	images: {
		path: "/landing/_next/image", // Ensure this matches your basePath
		unoptimized: false, // REQUIRED (default)
		domains: ["climateforge.ai", "climateforge-landing.vercel.app"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "climateforge-landing.vercel.app",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "climateforge.ai",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
