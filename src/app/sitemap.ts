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
    }
      // other pages
    ];

    const sitemap = [
        ...defaultPages,
    ];
    
    return sitemap;
}