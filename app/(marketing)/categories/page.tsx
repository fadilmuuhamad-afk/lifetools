import type { Metadata } from "next";
import CategoryCard from "@/components/cards/CategoryCard";
import { getCategories } from "@/lib/tools";

export const metadata: Metadata = {
    title: "Categories",
    description:
        "Browse all tool categories available on LifeTools.",
};

export default function CategoriesPage() {
    const categories = getCategories();

    return (
        <main className="mx-auto max-w-7xl px-6 py-16">

            <div className="mx-auto max-w-3xl text-center">

                <h1 className="text-5xl font-bold">
                    Tool Categories
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    Browse all categories and discover free online tools
                    designed to help you complete everyday tasks faster.
                </p>

            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {categories.map((category) => (

                    <CategoryCard
                        key={category.id}
                        {...category}
                    />

                ))}

            </div>

        </main>
    );
}