interface ToolOverviewProps {
    title: string;
    description: string;
}

export default function ToolOverview({
    title,
    description,
}: ToolOverviewProps) {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
                About {title}
            </h2>

            <p className="max-w-3xl leading-7 text-muted-foreground">
                {description}
            </p>
        </section>
    );
}