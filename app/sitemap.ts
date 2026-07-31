import { MetadataRoute } from "next";

import { tools } from "@/data";
import { categories } from "@/data/categories";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {

    const now = new Date();

    const toolPages = tools.map((tool) => ({
        url: `${siteConfig.url}/tool/${tool.category}/${tool.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    const categoryPages = categories.map((category) => ({
        url: `${siteConfig.url}/${category.slug}`,
        lastModified: now,
        changeFrequency: category.comingSoon
            ? ("monthly" as const)
            : ("weekly" as const),
        priority: category.comingSoon ? 0.5 : 0.7,
    }));

    return [
        {
            url: siteConfig.url,
            lastModified: now,
            changeFrequency: "daily",
            priority: 1,
        },
        ...categoryPages,
        ...toolPages,
    ];
}