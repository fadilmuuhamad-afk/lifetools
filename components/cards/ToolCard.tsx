import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getCategoryById } from "@/lib/tools";

import type { Tool } from "@/types/tool";

interface ToolCardProps {
    tool: Tool;
}

export default function ToolCard({
    tool,
}: ToolCardProps) {
    const categoryInfo = getCategoryById(tool.category);

    const Icon = categoryInfo?.icon;
    return (
        <Link
            href={`/tool/${tool.category}/${tool.slug}`}
            className="
        group
        rounded-2xl
        border
        bg-card
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        "
        >
            <span
                className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-primary/10
        px-3
        py-1
        text-xs
        font-medium
        text-primary
    "
            >
                {Icon && (
                    <Icon className="h-3.5 w-3.5" />
                )}

                {categoryInfo?.title ?? tool.category}
            </span>

            <h3
                className="
                mt-4
                line-clamp-2
                text-xl
                font-bold
            "
            >
                {tool.title}
            </h3>

            <p
                className="
                mt-2
                line-clamp-2
                text-sm
                text-muted-foreground
            "
            >
                {tool.description}
            </p>

            <div
                className="
                mt-6
                flex
                items-center
                gap-2
                font-medium
                text-primary
            "
            >
                Open Tool
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    );
}