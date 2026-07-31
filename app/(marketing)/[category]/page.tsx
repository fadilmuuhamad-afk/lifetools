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

    if (categoryInfo.comingSoon) {

        return (

            <main className="mx-auto max-w-3xl px-6 py-24">

                <div className="rounded-3xl border bg-card p-12 text-center shadow-sm">

                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-4xl">

                        🚀

                    </div>

                    <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">

                        Coming Soon

                    </span>

                    <h1 className="mt-6 text-4xl font-bold">

                        {categoryInfo.title}

                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-muted-foreground">

                        We&apos;re currently building this category.
                        High-quality tools will be available soon.

                    </p>

                    <div className="mt-10 rounded-2xl border bg-muted/40 p-6 text-left">

                        <h2 className="font-semibold">

                            Planned tools

                        </h2>

                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">

                            <li>✓ Professional online tools</li>

                            <li>✓ Fast browser-based processing</li>

                            <li>✓ Free to use</li>

                            <li>✓ No installation required</li>

                        </ul>

                    </div>

                    <Link
                        href="/"
                        className="mt-8 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                    >

                        ← Back to Home

                    </Link>

                </div>

            </main>

        );

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

                        <h2 className="text-lg font-semibold">

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