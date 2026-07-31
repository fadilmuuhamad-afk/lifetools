import type { Metadata } from "next";
import Link from "next/link";

import { getCategories, getToolsByCategory } from "@/lib/tools";

export const metadata: Metadata = {
    title: "All Tools",
    description:
        "Browse every free online tool available on LifeTools.",
};

export default function AllToolsPage() {
    const categories = getCategories();

    return (
        <main className="mx-auto max-w-7xl px-6 py-16">

            <div className="mx-auto max-w-3xl text-center">

                <h1 className="text-5xl font-bold">
                    All Tools
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    Explore every free online tool available on LifeTools.
                    Find exactly what you need, organized by category.
                </p>

            </div>

            <div className="mt-16 space-y-14">

                {categories.map((category) => {

                    const tools =
                        getToolsByCategory(category.id);

                    return (

                        <section
                            key={category.id}
                            className="rounded-2xl border p-8"
                        >

                            <div className="flex items-center justify-between">

                                <div>

                                    <h2 className="text-2xl font-bold">

                                        {category.title}

                                    </h2>

                                    <p className="mt-2 text-muted-foreground">

                                        {category.description}

                                    </p>

                                </div>

                                {!category.comingSoon && (

                                    <Link
                                        href={`/${category.slug}`}
                                        className="text-sm font-medium text-blue-600 hover:underline"
                                    >

                                        View Category →

                                    </Link>

                                )}

                            </div>

                            {category.comingSoon ? (

                                <div className="mt-8 rounded-xl bg-amber-50 p-5 text-amber-700">

                                    This category is currently under development.

                                </div>

                            ) : (

                                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                                    {tools.map((tool) => (

                                        <Link
                                            key={tool.id}
                                            href={`/tool/${tool.category}/${tool.slug}`}
                                            className="rounded-xl border p-5 transition hover:border-blue-500 hover:shadow-md"
                                        >

                                            <h3 className="font-semibold">

                                                {tool.title}

                                            </h3>

                                            <p className="mt-2 text-sm text-muted-foreground">

                                                {tool.description}

                                            </p>

                                        </Link>

                                    ))}

                                </div>

                            )}

                        </section>

                    );

                })}

            </div>

        </main>
    );
}