import { notFound } from "next/navigation";

import ToolHeader from "@/components/tool/ToolHeader";
import ToolLayout from "@/components/tool/ToolLayout";
import RelatedTools from "@/components/tool/RelatedTools";
import AdPlaceholder from "@/components/tool/AdPlaceholder";
import ToolWorkspace from "@/components/tool/ToolWorkspace";
import ToolContent from "@/components/tool/content/ToolContent";

import Breadcrumb from "@/components/seo/Breadcrumb";
import ToolSchema from "@/components/seo/ToolSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

import {
    getCategoryById,
    getTool,
    getRelatedTools,
} from "@/lib/tools";



type Props = {
    params: Promise<{
        category: string;
        slug: string;
    }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {

    const { category, slug } =
        await params;

    const tool =
        getTool(category, slug);

    if (!tool) {

        return {};

    }

    const url =
        `${siteConfig.url}/tool/${tool.category}/${tool.slug}`;

    return {

        title: tool.title,

        description:
            tool.description,

        keywords:
            tool.keywords,

        alternates: {

            canonical: url,

        },

        openGraph: {

            title:
                tool.title,

            description:
                tool.description,

            url,

            siteName:
                siteConfig.name,

            type:
                "website",

            images: [

                {
                    url:
                        siteConfig.ogImage,
                },

            ],

        },

        twitter: {

            card:
                "summary_large_image",

            title:
                tool.title,

            description:
                tool.description,

            images: [

                siteConfig.ogImage,

            ],

        },

        robots: {

            index: true,

            follow: true,

        },

    };

}

export default async function ToolPage({
    params,
}: Props) {
    const { category, slug } = await params;

    const tool = getTool(category, slug);

    if (!tool) {
        notFound();
    }

    const related = getRelatedTools(category, slug);
    const categoryInfo =
        getCategoryById(category);

    return (
        <>
            <ToolSchema tool={tool} />

            {categoryInfo && (
                <BreadcrumbSchema
                    categoryName={categoryInfo.title}
                    categorySlug={categoryInfo.slug}
                    toolName={tool.title}
                />
            )}

        <main className="mx-auto max-w-7xl px-6 py-16">
            {categoryInfo && (
                <Breadcrumb
                    categoryName={categoryInfo.title}
                    categorySlug={categoryInfo.slug}
                    toolName={tool.title}
                />
            )}

            <ToolHeader tool={tool} />

            <ToolLayout
                sidebar={
                    <>
                        <RelatedTools tools={related} />

                        <AdPlaceholder />
                    </>
                }
            >
    
                <div className="rounded-2xl border p-10">

                    <ToolWorkspace tool={tool} />

                </div>

            </ToolLayout>

            <ToolContent slug={tool.slug} />

        </main>
        </>
    );
}