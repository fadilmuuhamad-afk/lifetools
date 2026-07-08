import { Tool } from "@/types/tool";

interface Props {
    tool: Tool;
}

export default function ToolHeader({
    tool,
}: Props) {
    return (
        <div className="mb-10">

            <p className="text-sm text-blue-600 uppercase">

                {tool.category}

            </p>

            <h1 className="mt-2 text-5xl font-bold">

                {tool.title}

            </h1>

            <p className="mt-4 max-w-2xl text-muted-foreground">

                {tool.description}

            </p>

        </div>
    );
}