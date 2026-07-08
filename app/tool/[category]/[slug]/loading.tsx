export default function Loading() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-16">
            <div className="animate-pulse space-y-4">
                <div className="h-10 w-64 rounded bg-muted" />
                <div className="h-5 w-full rounded bg-muted" />
                <div className="h-64 rounded bg-muted" />
            </div>
        </main>
    );
}