import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
    title: string;
    description: string;
    category: string;
    href: string;
}

export default function ToolCard({
    title,
    description,
    category,
    href,
}: ToolCardProps) {
    return (
        <Link
            href={href}
            className="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                {category}
            </span>

            <h3 className="mt-4 text-xl font-bold">
                {title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
                {description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-blue-600 font-medium">
                Open Tool
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    );
}