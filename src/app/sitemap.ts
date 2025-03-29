import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const defaultPages = [
		{
			url: "https://climateforge.ai",
		},
		{
			url: "https://climateforge.ai/about",
		},
		{
			url: "https://climateforge.ai/careers",
		},
	];

	const sitemap = [...defaultPages];

	return sitemap;
}
