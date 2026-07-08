import { notFound } from "next/navigation";

import ToolHeader from "@/components/tool/ToolHeader";
import ToolLayout from "@/components/tool/ToolLayout";
import RelatedTools from "@/components/tool/RelatedTools";
import AdPlaceholder from "@/components/tool/AdPlaceholder";
import ToolWorkspace from "@/components/tool/ToolWorkspace";

import {
    getRelatedTools,
    getTool,
} from "@/lib/tools";

type Props = {
    params: Promise<{
        category: string;
        slug: string;
    }>;
};

export default async function ToolPage({
    params,
}: Props) {
    const { category, slug } = await params;

    const tool = getTool(category, slug);

    if (!tool) {
        notFound();
    }

    const related = getRelatedTools(category, slug);

    return (
        <main className="mx-auto max-w-7xl px-6 py-16">

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

                    <ToolWorkspace />

                </div>

            </ToolLayout>

        </main>
    );
}