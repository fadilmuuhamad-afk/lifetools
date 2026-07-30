import { searchTools } from "@/lib/search";

export default function TestSearchPage() {

    const results = searchTools("compress");

    return (
        <main className="p-10">

            <h1 className="text-3xl font-bold">
                Search Test
            </h1>

            <div className="mt-8 space-y-4">

                {results.map((tool) => (

                    <div
                        key={tool.id}
                        className="rounded-xl border p-4"
                    >
                        <h2 className="font-semibold">
                            {tool.title}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {tool.description}
                        </p>
                    </div>

                ))}

            </div>

        </main>
    );
}