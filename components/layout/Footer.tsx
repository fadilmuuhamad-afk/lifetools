import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="
            border-t
            border-border
            bg-background
            "
        >
            <div className="mx-auto max-w-7xl px-6 py-10">

                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                    <div>

                        <h2 className="text-2xl font-bold text-blue-600">
                            LifeTools
                        </h2>

                        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                            Free online tools that help you work faster,
                            smarter, and entirely in your browser.
                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">

                        <Link
                            href="/about"
                            className="
                        text-muted-foreground
                        transition-colors
                        hover:text-blue-600
                        "
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="transition hover:text-blue-600"
                        >
                            Contact
                        </Link>

                        <Link
                            href="/privacy-policy"
                            className="transition hover:text-blue-600"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="transition hover:text-blue-600"
                        >
                            Terms of Service
                        </Link>

                    </div>

                </div>

                <div className="
                mt-10
                border-t
                border-border
                pt-6
                text-sm
                text-muted-foreground
                ">

                    © {year} LifeTools. All rights reserved.

                </div>

            </div>
        </footer>
    );
}