const faqs = [
    {
        question: "Are these resources free to use?",
        answer:
            "Many recommended resources provide free plans, while some also offer premium features for advanced users.",
    },
    {
        question: "Why do you recommend these resources?",
        answer:
            "We carefully select online services that help developers, students, creators, and professionals improve productivity.",
    },
    {
        question: "How often are these recommendations updated?",
        answer:
            "We periodically review and update our recommended resources to ensure they remain useful and relevant.",
    },
    {
        question: "Does LifeTools own these resources?",
        answer:
            "No. LifeTools recommends third-party resources that may be useful for our users.",
    },
];

export default function ResourceFaq() {
    return (
        <section className="mt-24">

            <div className="mx-auto max-w-4xl">

                <h2 className="text-center text-4xl font-bold">
                    Frequently Asked Questions
                </h2>

                <div className="mt-12 space-y-6">

                    {faqs.map((faq) => (

                        <div
                            key={faq.question}
                            className="rounded-2xl border p-6"
                        >

                            <h3 className="text-lg font-semibold">
                                {faq.question}
                            </h3>

                            <p className="mt-3 text-muted-foreground">
                                {faq.answer}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}