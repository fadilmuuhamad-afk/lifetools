import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="mx-auto max-w-7xl px-6 py-10">

                <h2 className="text-2xl font-bold text-blue-600">
                    LifeTools
                </h2>

                <p className="mt-2 text-gray-500">
                    Free Online Tools for Everyday Tasks.
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-sm">

                    <Link href="/about">About</Link>

                    <Link href="/contact">Contact</Link>

                    <Link href="/privacy">Privacy</Link>

                    <Link href="/blog">Blog</Link>

                </div>

                <p className="mt-8 text-sm text-gray-400">
                    © 2026 LifeTools. All rights reserved.
                </p>

            </div>
        </footer>
    );
}