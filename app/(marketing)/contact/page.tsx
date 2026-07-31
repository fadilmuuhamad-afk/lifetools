import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact the LifeTools team for questions, suggestions, or feedback.",
};

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-16">

            <h1 className="text-4xl font-bold">
                Contact
            </h1>

            <p className="mt-4 text-muted-foreground">
                We&apos;d love to hear your feedback and suggestions.
            </p>

            <div className="mt-10 rounded-2xl border p-8">

                <h2 className="text-xl font-semibold">
                    Get in Touch
                </h2>

                <p className="mt-4 text-muted-foreground">
                    For general inquiries, feature requests, bug reports,
                    or partnership opportunities, please contact us at:
                </p>

                <p className="mt-6 text-lg font-medium">
                    hello@lifetools.com
                </p>

                <p className="mt-6 text-sm text-muted-foreground">
                    We aim to respond to all inquiries as quickly as possible.
                </p>

            </div>

        </main>
    );
}