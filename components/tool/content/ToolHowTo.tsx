interface ToolHowToProps {
    steps: string[];
}

export default function ToolHowTo({
    steps,
}: ToolHowToProps) {
    return (
        <section className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-foreground">
                    How to Use This Tool
                </h2>

                <p className="mt-2 text-muted-foreground">
                    Follow these simple steps to get started.
                </p>
            </div>

            <div className="space-y-4">
                {steps.map((step, index) => (
                    <div
                        key={step}
                        className="flex gap-4 rounded-xl border border-border bg-card p-5"
                    >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                            {index + 1}
                        </div>

                        <p className="pt-1 text-sm leading-6 text-foreground">
                            {step}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}