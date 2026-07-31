import { siteConfig } from "@/config/site";

export default function WebsiteSchema() {

    const schema = {
        "@context": "https://schema.org",

        "@type": "WebSite",

        name: siteConfig.name,

        url: siteConfig.url,

        description: siteConfig.description,

        inLanguage: siteConfig.locale,

        publisher: {
            "@type": "Organization",
            name: siteConfig.publisher,
            url: siteConfig.url,
        },

        potentialAction: {
            "@type": "SearchAction",
            target:
                `${siteConfig.url}/search?q={search_term_string}`,
            "query-input":
                "required name=search_term_string",
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