interface ToolFeaturesProps {
    features?: string[];
}

const defaultFeatures = [
    "100% browser based",
    "Free to use",
    "Fast processing",
    "No installation required",
    "Privacy-friendly",
    "Works on desktop, tablet, and mobile",
];

export default function ToolFeatures({
    features = defaultFeatures,
}: ToolFeaturesProps) {
    return (
        <section className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-foreground">
                    Why Use This Tool?
                </h2>

                <p className="mt-2 text-muted-foreground">
                    LifeTools provides simple browser-based tools designed
                    to help you complete everyday tasks quickly.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <div
                        key={feature}
                        className="rounded-xl border border-border bg-card p-5"
                    >
                        <div className="flex items-start gap-3">
                            <span className="mt-0.5 text-blue-600">
                                ✓
                            </span>

                            <span className="text-sm font-medium text-foreground">
                                {feature}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}