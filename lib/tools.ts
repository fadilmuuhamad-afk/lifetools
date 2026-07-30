import { tools } from "@/data";
import { categories } from "@/data/categories";
import { Tool } from "@/types/tool";

export function getAllTools(): Tool[] {
    return tools;
}

export function getPopularTools(): Tool[] {
    return tools.filter((tool) => tool.popular);
}

export function getFeaturedTools(): Tool[] {
    return tools.filter((tool) => tool.featured);
}

export function getTool(
    category: string,
    slug: string
): Tool | undefined {
    return tools.find(
        (tool) =>
            tool.category === category &&
            tool.slug === slug
    );
}

export function getToolsByCategory(
    category: string
): Tool[] {
    return tools.filter(
        (tool) => tool.category === category
    );
}

export function getRelatedTools(
    category: string,
    currentSlug: string
): Tool[] {
    return tools.filter(
        (tool) =>
            tool.category === category &&
            tool.slug !== currentSlug
    );
}

export function getCategories() {
    return categories;
}

export function getCategoryBySlug(slug: string) {
    return categories.find(
        (category) => category.slug === slug
    );
}
export function getCategoryById(
    id: string
) {
    return categories.find(
        (category) => category.id === id
    );
}