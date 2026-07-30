import { siteConfig } from "@/config/site";

export default function WebsiteSchema() {

    const schema = {
        "@context": "https://schema.org",

        "@type": "WebSite",

        name: siteConfig.name,

        url: siteConfig.url,

        description: siteConfig.description,

        inLanguage: "en",

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