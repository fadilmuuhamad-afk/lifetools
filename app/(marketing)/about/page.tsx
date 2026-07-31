import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn more about LifeTools and our mission to build fast, free online tools.",
};

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-16">

            <h1 className="text-4xl font-bold">
                About LifeTools
            </h1>

            <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">

                <p>
                    LifeTools is a collection of free online tools designed to
                    help students, professionals, developers, designers, and
                    everyday users complete common tasks quickly and easily.
                </p>

                <h2>Our Mission</h2>

                <p>
                    We believe useful software should be fast, accessible,
                    privacy-friendly, and available directly in the browser
                    without unnecessary downloads.
                </p>

                <h2>What We Build</h2>

                <ul>
                    <li>Image tools</li>
                    <li>PDF tools</li>
                    <li>Developer tools</li>
                    <li>Text tools</li>
                    <li>Converters</li>
                    <li>More categories coming soon</li>
                </ul>

                <h2>Why LifeTools?</h2>

                <p>
                    Our goal is to create a growing platform of practical,
                    high-quality online utilities that are simple, reliable,
                    and free to use.
                </p>

            </div>

        </main>
    );
}