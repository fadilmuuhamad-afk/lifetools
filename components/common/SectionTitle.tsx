interface Props {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({
    title,
    subtitle,
}: Props) {
    return (
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 text-muted-foreground">
                    {subtitle}
                </p>
            )}
        </div>
    );
}