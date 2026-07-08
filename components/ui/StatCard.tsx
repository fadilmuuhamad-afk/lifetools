interface Props {
    label: string;
    value: string;
}

export default function StatCard({
    label,
    value,
}: Props) {
    return (
        <div className="rounded-xl border bg-card p-4 text-center">
            <div className="text-2xl font-bold">
                {value}
            </div>

            <div className="mt-1 text-sm text-muted-foreground">
                {label}
            </div>
        </div>
    );
}