export default function LoadingCard() {
    return (
        <div className="animate-pulse rounded-2xl border p-6">
            <div className="h-4 w-20 rounded bg-muted" />
            <div className="mt-4 h-6 w-2/3 rounded bg-muted" />
            <div className="mt-3 h-4 w-full rounded bg-muted" />
            <div className="mt-2 h-4 w-4/5 rounded bg-muted" />
        </div>
    );
}