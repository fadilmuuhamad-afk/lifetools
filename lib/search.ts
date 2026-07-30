import { getAllTools } from "./tools";
import { Tool } from "@/types/tool";

export function searchTools(query: string): Tool[] {
    const keyword = query.toLowerCase().trim();

    if (!keyword) {
        return [];
    }

    return getAllTools()
        .map((tool) => {
            let score = 0;

            if (tool.title.toLowerCase().includes(keyword)) {
                score += 10;
            }

            if (tool.description.toLowerCase().includes(keyword)) {
                score += 5;
            }

            if (
                tool.keywords.some((item) =>
                    item.toLowerCase().includes(keyword)
                )
            ) {
                score += 8;
            }

            return {
                tool,
                score,
            };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map((item) => item.tool);
}