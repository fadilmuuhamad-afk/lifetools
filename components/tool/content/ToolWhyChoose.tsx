interface ToolWhyChooseProps {
    items?: string[];
}

const defaultItems = [
    "Free to use",
    "Browser-based",
    "No installation required",
    "Simple and easy to use",
    "Works across modern devices",
    "Designed for everyday tasks",
];

export default function ToolWhyChoose({
    items = defaultItems,
}: ToolWhyChooseProps) {
    return (
        <section>
            <h2 className="text-2xl font-bold tracking-tight">
                Why Choose LifeTools?
            </h2>

            <p className="mt-3 max-w-3xl text-muted-foreground">
                LifeTools provides simple online tools designed to help you
                complete common tasks directly from your browser.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <div
                        key={item}
                        className="rounded-xl border p-5"
                    >
                        <p className="font-medium">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}