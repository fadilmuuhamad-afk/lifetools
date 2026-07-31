import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read the LifeTools Privacy Policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-4xl font-bold">
                Privacy Policy
            </h1>

            <p className="mt-4 text-muted-foreground">
                Last updated: July 2026
            </p>

            <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">

                <h2>Overview</h2>

                <p>
                    LifeTools provides free browser-based online tools.
                    We are committed to protecting your privacy and keeping
                    your personal information secure.
                </p>

                <h2>Information We Collect</h2>

                <p>
                    Most LifeTools features work entirely inside your browser.
                    We generally do not collect or store the content you process
                    using our tools unless explicitly stated.
                </p>

                <ul>
                    <li>Basic analytics information</li>
                    <li>Browser and device information</li>
                    <li>Anonymous usage statistics</li>
                </ul>

                <h2>Cookies</h2>

                <p>
                    We may use cookies and similar technologies to improve
                    website performance and user experience.
                </p>

                <h2>Third-Party Services</h2>

                <p>
                    LifeTools may use third-party services such as analytics,
                    advertising, or CDN providers. These services may collect
                    information according to their own privacy policies.
                </p>

                <h2>Data Security</h2>

                <p>
                    We take reasonable measures to protect your information.
                    However, no method of transmission over the Internet is
                    completely secure.
                </p>

                <h2>Changes</h2>

                <p>
                    We may update this Privacy Policy from time to time.
                    Changes become effective immediately after publication.
                </p>

                <h2>Contact</h2>

                <p>
                    If you have questions regarding this Privacy Policy,
                    please contact us through the Contact page.
                </p>

            </div>
        </main>
    );
}