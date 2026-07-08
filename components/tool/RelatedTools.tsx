import Link from "next/link";

import { Tool } from "@/types/tool";

interface Props {
    tools: Tool[];
}

export default function RelatedTools({
    tools,
}: Props) {
    return (
        <div className="rounded-2xl border p-6">

            <h2 className="mb-6 text-xl font-bold">

                Related Tools

            </h2>

            <div className="space-y-3">

                {tools.map((tool) => (
                    <Link
                        key={tool.id}
                        href={`/tool/${tool.category}/${tool.slug}`}
                        className="block rounded-xl p-3 hover:bg-muted"
                    >
                        {tool.title}
                    </Link>
                ))}

            </div>

        </div>
    );
}