"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { monetization } from "@/config/monetization";
import { trackOutboundClick } from "@/lib/analytics";

interface Props {

    title: string;

    description: string;

    icon: string;

    placement: string;

    featured: boolean;

}

export default function ResourceCard({

    title,

    description,

    icon,

    placement,

    featured,

}: Props) {
    return (
        <div className="
            group
            rounded-2xl
            border
            bg-card
            p-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
        "> {icon}

            <div className="text-4xl">
                {icon}
            </div>

            {featured && (

                <span
                    className="
            mt-4
            inline-flex
            rounded-full
            bg-blue-100
            px-3
            py-1
            text-xs
            font-semibold
            text-blue-700
        "
                >
                    ⭐ Featured
                </span>

            )}

            <h2 className="
                mt-5
                text-2xl
                font-bold
            ">
                {title}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
                {description}
            </p>

            <Link
                href={monetization.adsterra.smartLink}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                onClick={() =>
                    trackOutboundClick(
                        "adsterra",
                        "resources_page",
                        placement
                    )
                }
                className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-5
                py-3
                font-semibold
                text-white
                transition-all
                group-hover:gap-3
                "
            >
                Explore

                <ArrowRight className="h-4 w-4" />
            </Link>

            

        </div>
    );
}