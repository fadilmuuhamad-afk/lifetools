import { siteConfig } from "@/config/site";


interface Props {
    categoryName: string;
    categorySlug: string;
    toolName: string;
}

export default function BreadcrumbSchema({
    categoryName,
    categorySlug,
    toolName,
}: Props) {

    const schema = {
        "@context": "https://schema.org",

        "@type": "BreadcrumbList",

        itemListElement: [

            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteConfig.url,
            },

            {
                "@type": "ListItem",
                position: 2,
                name: categoryName,
                item:
                    `${siteConfig.url}/${categorySlug}`,
            },

            {
                "@type": "ListItem",
                position: 3,
                name: toolName,
                item:
                    `${siteConfig.url}/${categorySlug}`
            },

        ],
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