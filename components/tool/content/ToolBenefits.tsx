interface ToolBenefitsProps {
    benefits: string[];
}

export default function ToolBenefits({
    benefits,
}: ToolBenefitsProps) {
    return (
        <section className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-foreground">
                    Benefits
                </h2>

                <p className="mt-2 text-muted-foreground">
                    Designed to make your workflow faster and easier.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                    <div
                        key={benefit}
                        className="rounded-xl border border-border bg-card p-5"
                    >
                        <h3 className="font-semibold text-foreground">
                            {benefit}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}