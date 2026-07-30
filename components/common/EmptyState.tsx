import { SearchX } from "lucide-react";

interface Props {
    title: string;
    description?: string;
}

export default function EmptyState({
    title,
    description,
}: Props) {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-center">
            <SearchX className="mb-4 h-10 w-10 text-muted-foreground" />

            <h3 className="text-lg font-semibold">
                {title}
            </h3>

            {description && (
                <p className="mt-2 text-sm text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}