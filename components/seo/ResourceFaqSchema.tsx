import Script from "next/script";

export default function ResourceFaqSchema() {

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Are these resources free to use?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Many recommended resources provide free plans, while some also offer premium features.",
                },
            },
            {
                "@type": "Question",
                name: "Why do you recommend these resources?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We recommend useful online resources that help users become more productive.",
                },
            },
            {
                "@type": "Question",
                name: "How often are these recommendations updated?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Recommendations are reviewed and updated periodically.",
                },
            },
        ],
    };

    return (
        <Script
            id="resource-faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}