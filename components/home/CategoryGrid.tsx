import { categories } from "@/data/categories";
import CategoryCard from "../cards/CategoryCard";

export default function CategoryGrid() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">

            <div className="mb-12 text-center">

                <h2 className="text-4xl font-bold">
                    Browse Categories
                </h2>

                <p className="mt-3 text-gray-500">
                    Everything you need in one place.
                </p>

            </div>

            <div className="grid
                    grid-cols-1
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-4">
                        
                {categories.map((category) => (
                    <CategoryCard
                        key={category.title}
                        {...category}
                    />
                ))}

            </div>

        </section>
    );
}