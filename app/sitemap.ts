import { MetadataRoute } from "next";

import { tools } from "@/data";
import { categories } from "@/data/categories";

const BASE_URL = "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {

    const toolPages = tools.map((tool) => ({
        url: `${BASE_URL}/tool/${tool.category}/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    const categoryPages = categories.map((category) => ({
        url: `${BASE_URL}/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...categoryPages,
        ...toolPages,
    ];
}