interface ToolUseCasesProps {
    useCases: string[];
}

export default function ToolUseCases({
    useCases,
}: ToolUseCasesProps) {
    return (
        <section className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-foreground">
                    Common Use Cases
                </h2>

                <p className="mt-2 text-muted-foreground">
                    Here are some common situations where this tool can be useful.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {useCases.map((useCase) => (
                    <div
                        key={useCase}
                        className="rounded-xl border border-border bg-card p-5"
                    >
                        <h3 className="font-semibold text-foreground">
                            {useCase}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}