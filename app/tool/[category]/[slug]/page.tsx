import { notFound } from "next/navigation";
import { getTool } from "@/lib/tools";

type Props = {
    params: Promise<{
        category: string;
        slug: string;
    }>;
};

export default async function ToolPage({ params }: Props) {
    const { category, slug } = await params;

    const tool = getTool(category, slug);

    if (!tool) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-5xl px-6 py-16">
            <h1 className="text-4xl font-bold">
                {tool.title}
            </h1>

            <p className="mt-4 text-muted-foreground">
                {tool.description}
            </p>

            <div className="mt-10 rounded-2xl border p-10">
                Tool UI akan kita bangun di Sprint berikutnya.
            </div>
        </main>
    );
}