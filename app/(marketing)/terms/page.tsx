import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Read the Terms of Service for using LifeTools and its online tools.",
};

export default function TermsPage() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-16">

            <h1 className="text-4xl font-bold">
                Terms of Service
            </h1>

            <p className="mt-4 text-muted-foreground">
                Last updated: July 2026
            </p>

            <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">

                <h2>Acceptance of Terms</h2>

                <p>
                    By accessing and using LifeTools, you agree to these
                    Terms of Service. If you do not agree, please discontinue
                    using the website.
                </p>

                <h2>Use of Our Services</h2>

                <p>
                    LifeTools provides free browser-based utilities intended
                    for personal and professional use. You agree not to misuse
                    the services or attempt to interfere with their operation.
                </p>

                <h2>Intellectual Property</h2>

                <p>
                    All content, branding, logos, and original materials on
                    LifeTools are protected by applicable intellectual property
                    laws unless otherwise stated.
                </p>

                <h2>Disclaimer</h2>

                <p>
                    Our tools are provided &quot;as is&quot; without warranties of any
                    kind. While we strive for accuracy, we cannot guarantee
                    that every result will be error-free.
                </p>

                <h2>Limitation of Liability</h2>

                <p>
                    LifeTools shall not be liable for any damages resulting
                    from the use or inability to use our services.
                </p>

                <h2>Changes to These Terms</h2>

                <p>
                    We may revise these Terms of Service at any time. Updated
                    versions become effective immediately after publication.
                </p>

                <h2>Contact</h2>

                <p>
                    If you have questions regarding these Terms of Service,
                    please contact us through our Contact page.
                </p>

            </div>

        </main>
    );
}