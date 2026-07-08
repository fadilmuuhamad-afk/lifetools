import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto max-w-xl py-20 text-center">
            <h1 className="text-4xl font-bold">
                Tool Not Found
            </h1>

            <p className="mt-4 text-muted-foreground">
                The requested tool does not exist.
            </p>

            <Link
                href="/"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
                Back to Home
            </Link>
        </main>
    );
}