import { AlertTriangle } from "lucide-react";

interface Props {
    title: string;
    description?: string;
    onRetry?: () => void;
}

export default function ErrorState({
    title,
    description,
    onRetry,
}: Props) {
    return (
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 text-center">
            <AlertTriangle className="mx-auto h-10 w-10 text-destructive" />

            <h3 className="mt-4 text-lg font-semibold">
                {title}
            </h3>

            {description && (
                <p className="mt-2 text-sm text-muted-foreground">
                    {description}
                </p>
            )}

            {onRetry && (
                <button
                    onClick={onRetry}
                    className="mt-6 rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
                >
                    Try Again
                </button>
            )}
        </div>
    );
}