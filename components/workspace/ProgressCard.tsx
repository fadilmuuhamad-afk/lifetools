interface Props {
    progress: number;
}

export default function ProgressCard({
    progress,
}: Props) {
    return (
        <div className="rounded-2xl border p-6">

            <h2 className="text-xl font-semibold">

                Processing...

            </h2>

            <div className="mt-6 h-4 rounded-full bg-muted">

                <div
                    style={{
                        width: `${progress}%`,
                    }}
                    className="h-full rounded-full bg-blue-600 transition-all"
                />

            </div>

            <p className="mt-4">

                {progress}%

            </p>

        </div>
    );
}