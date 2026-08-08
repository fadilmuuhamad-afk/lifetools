interface FAQItem {
    question: string;
    answer: string;
}

interface ToolFAQProps {
    items: FAQItem[];
}

export default function ToolFAQ({
    items,
}: ToolFAQProps) {
    return (
        <section className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-foreground">
                    Frequently Asked Questions
                </h2>

                <p className="mt-2 text-muted-foreground">
                    Find answers to common questions about this tool.
                </p>
            </div>

            <div className="space-y-4">
                {items.map((item) => (
                    <details
                        key={item.question}
                        className="group rounded-xl border border-border bg-card p-5"
                    >
                        <summary className="cursor-pointer list-none font-semibold text-foreground">
                            <div className="flex items-center justify-between gap-4">
                                <span>
                                    {item.question}
                                </span>

                                <span className="text-muted-foreground transition-transform group-open:rotate-45">
                                    +
                                </span>
                            </div>
                        </summary>

                        <p className="mt-4 leading-7 text-muted-foreground">
                            {item.answer}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
}