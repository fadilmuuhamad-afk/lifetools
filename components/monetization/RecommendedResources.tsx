"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { monetization } from "@/config/monetization";
import { trackOutboundClick } from "@/lib/analytics";

export default function RecommendedResources() {
    return (
        <section className="mt-10 rounded-2xl border bg-muted/30 p-6">

            <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Sponsored
                </p>

                <h2 className="text-xl font-semibold">

                    🚀 Recommended Resources

                </h2>

                <p className="text-sm text-muted-foreground">

                    Discover useful online resources selected for our users.

                </p>

            </div>

            <Link
                href={monetization.adsterra.smartLink}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                onClick={() =>
                    trackOutboundClick(
                        "adsterra",
                        "result_step",
                        "recommended_resources"
                    )
                }
                className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    text-white
                    transition
                    hover:bg-blue-700
                "
            >
                Explore Resources

                <ExternalLink className="h-4 w-4" />

            </Link>

        </section>
    );
}