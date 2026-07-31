import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function ResourceHero() {
    return (
        <section className="rounded-3xl border bg-gradient-to-br from-slate-50 to-slate-100 p-12 dark:from-slate-900 dark:to-slate-950">

            <div className="mx-auto max-w-3xl text-center">

                <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
                    <Sparkles className="h-4 w-4" />
                    Curated Recommendations
                </div>

                <h1 className="mt-8 text-5xl font-bold tracking-tight">
                    Recommended Resources
                </h1>

                <p className="mt-6 text-lg text-muted-foreground">
                    Explore trusted websites, AI services, developer
                    resources, and productivity tools carefully selected
                    to help you work smarter.
                </p>

                <Link
                    href="#resources"
                    className="
                        mt-8
                        inline-flex
                        rounded-xl
                        bg-blue-600
                        px-6
                        py-3
                        font-semibold
                        text-white
                        hover:bg-blue-700
                    "
                >
                    Explore Resources
                </Link>

            </div>

        </section>
    );
}