import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
    getCategoryBySlug,
    getToolsByCategory,
} from "@/lib/tools";

type Props = {
    params: Promise<{
        category: string;
    }>;
};
export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {

    const { category } = await params;

    const info =
        getCategoryBySlug(category);

    if (!info) {
        return {};
    }

    return {
        title: `${info.title} | LifeTools`,
        description: info.description,
    };
}
export default async function CategoryPage({
    params,
}: Props) {

    const { category } = await params;

    const categoryInfo =
        getCategoryBySlug(category);

    if (!categoryInfo) {
        notFound();
    }

    const tools =
        getToolsByCategory(categoryInfo.id);

    return (
        <main className="mx-auto max-w-7xl px-6 py-16">

            <h1 className="text-5xl font-bold">
                {categoryInfo.title}
            </h1>

            <p className="mt-4 text-muted-foreground">
                {categoryInfo.description}
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {tools.map((tool) => (

                    <Link
                        key={tool.id}
                        href={`/tool/${tool.category}/${tool.slug}`}
                        className="rounded-2xl border p-6 transition hover:border-blue-500 hover:shadow-md"
                    >

                        <h2 className="font-semibold text-lg">
                            {tool.title}
                        </h2>

                        <p className="mt-2 text-sm text-muted-foreground">
                            {tool.description}
                        </p>

                    </Link>

                ))}

            </div>

        </main>
    );
}