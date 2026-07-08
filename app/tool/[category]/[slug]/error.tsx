"use client";

export default function Error({
    reset,
}: {
    reset: () => void;
}) {
    return (
        <main className="mx-auto max-w-xl py-20 text-center">
            <h1 className="text-3xl font-bold">
                Something went wrong
            </h1>

            <button
                onClick={reset}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
                Try Again
            </button>
        </main>
    );
}