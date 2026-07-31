import Link from "next/link";

export default function ResourceCTA() {
    return (
        <section className="mt-24 rounded-3xl border bg-muted/30 p-10 text-center">

            <h2 className="text-3xl font-bold">
                Discover More Free Tools
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Explore our growing collection of image, PDF,
                developer, text, and productivity tools —
                completely free and privacy-friendly.
            </p>

            <div className="mt-8">

                <Link
                    href="/tools"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-600
                        px-8
                        py-3
                        font-medium
                        text-white
                        transition-all
                        duration-200
                        hover:bg-blue-700
                    "
                >
                    Explore All Tools
                </Link>

            </div>

        </section>
    );
}