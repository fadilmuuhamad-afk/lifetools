"use client";

import Link from "next/link";

export default function GlobalError({
    reset,
}: {
    error: Error;
    reset: () => void;
}) {

    return (
        <html>
            <body>

                <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">

                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                        Something went wrong
                    </span>

                    <h1 className="mt-6 text-5xl font-bold">

                        Unexpected Error

                    </h1>

                    <p className="mt-6 text-muted-foreground">

                        An unexpected error occurred while loading this page.

                    </p>

                    <div className="mt-10 flex gap-4">

                        <button
                            onClick={reset}
                            className="rounded-xl bg-blue-600 px-6 py-3 text-white"
                        >

                            Try Again

                        </button>

                        <Link
                            href="/"
                            className="rounded-xl border px-6 py-3"
                        >

                            Home

                        </Link>

                    </div>

                </main>

            </body>
        </html>
    );

}