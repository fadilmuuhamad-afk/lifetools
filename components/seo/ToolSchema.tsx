import { siteConfig } from "@/config/site";
import { Tool } from "@/types/tool";

interface Props {
    tool: Tool;
}

export default function ToolSchema({
    tool,
}: Props) {

    const url =
        `${siteConfig.url}/tool/${tool.category}/${tool.slug}`;

    const schema = {
        "@context": "https://schema.org",

        "@type": "WebApplication",

        name: tool.title,

        url,

        description: tool.description,

        applicationCategory:
            "UtilitiesApplication",

        operatingSystem:
            "Any",

        browserRequirements:
            "Requires JavaScript",

        inLanguage:
            siteConfig.locale,

        isAccessibleForFree:
            true,

        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },

        creator: {
            "@type": "Organization",
            name: siteConfig.creator,
            url: siteConfig.url,
        },

        publisher: {
            "@type": "Organization",
            name: siteConfig.publisher,
            url: siteConfig.url,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}