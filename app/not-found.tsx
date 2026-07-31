import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">

            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                Error 404
            </span>

            <h1 className="mt-6 text-6xl font-bold">
                Page Not Found
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Sorry, the page you&apos;re looking for doesn&apos;t exist
                or may have been moved.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

                <Link
                    href="/"
                    className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                    Go Home
                </Link>

                <Link
                    href="/tools"
                    className="rounded-xl border px-6 py-3 font-medium transition hover:bg-muted"
                >
                    Browse Tools
                </Link>

            </div>

        </main>
    );
}