import ToolCard from "@/components/cards/ToolCard";
import { popularTools } from "@/data/tools";

export default function PopularTools() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold">
                    Popular Tools
                </h2>

                <p className="mt-3 text-gray-500">
                    Most frequently used tools by our users.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {popularTools.map((tool) => (
                    <ToolCard key={tool.title} {...tool} />
                ))}
            </div>
        </section>
    );
}