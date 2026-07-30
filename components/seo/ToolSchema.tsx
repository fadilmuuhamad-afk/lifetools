import { siteConfig } from "@/config/site";
import { Tool } from "@/types/tool";

interface Props {
    tool: Tool;
}

export default function ToolSchema({
    tool,
}: Props) {
    const schema = {
        "@context": "https://schema.org",

        "@type": "WebApplication",

        name: tool.title,

        description: tool.description,

        applicationCategory:
            "UtilitiesApplication",

        operatingSystem: "Any",

        browserRequirements:
            "Requires JavaScript",

        url: `${siteConfig.url}/tool/${tool.category}/${tool.slug}`,

        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },

        publisher: {
            "@type": "Organization",
            name: siteConfig.publisher,
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