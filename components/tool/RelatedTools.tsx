import Link from "next/link";
import { Tool } from "@/types/tool";




interface Props {
    tools: Tool[];
}

export default function RelatedTools({
    tools,
}: Props) {

    

    if (tools.length === 0) {
        return null;
    }

    return (

        <section className="mt-20">

            <h2 className="mb-8 text-3xl font-bold">

                Related Tools

            </h2>

            <div className="grid
                grid-cols-1
                gap-6
                md:grid-cols-2">

                {tools.map((tool) => (

                    <Link
                        key={tool.id}
                        href={`/tool/${tool.category}/${tool.slug}`}
                        className="
                        rounded-2xl
                        border
                        bg-background
                        shadow-sm
                        p-6
                        transition-all  
                        duration-300
                        hover:-translate-y-1
                        hover:border-blue-500
                        hover:shadow-xl
                        "
                    >

                        <h3 className="font-semibold text-lg">

                            {tool.title}

                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">

                            {tool.description}

                        </p>

                    </Link>

                ))}

            </div>

        </section>

    );

}