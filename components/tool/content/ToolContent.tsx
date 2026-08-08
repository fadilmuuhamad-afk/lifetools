import ToolOverview from "./ToolOverview";
import ToolFeatures from "./ToolFeatures";
import ToolHowTo from "./ToolHowTo";
import ToolBenefits from "./ToolBenefits";
import ToolUseCases from "./ToolUseCases";
import ToolFAQ from "./ToolFAQ";
import ToolWhyChoose from "./ToolWhyChoose";
import ToolDisclosure from "./ToolDisclosure";

import { toolContentData } from "./toolContentData";

interface ToolContentProps {
    slug: string;
}

export default function ToolContent({
    slug,
}: ToolContentProps) {
    const content = toolContentData[slug];

    if (!content) {
        return null;
    }

    return (
        <div className="mt-16 space-y-16">

            <ToolOverview
                title={content.title}
                description={content.overview}
            />

            <ToolFeatures
                features={content.features}
            />

            <ToolWhyChoose />

            <ToolHowTo
                steps={content.howTo}
            />

            <ToolBenefits
                benefits={content.benefits}
            />

            <ToolUseCases
                useCases={content.useCases}
            />

            <ToolFAQ
                items={content.faq}
            />

            <ToolDisclosure />

        </div>
    );
}