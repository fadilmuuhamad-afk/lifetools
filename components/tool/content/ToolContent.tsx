import ToolOverview from "./ToolOverview";
import ToolFeatures from "./ToolFeatures";
import ToolHowTo from "./ToolHowTo";
import ToolBenefits from "./ToolBenefits";
import ToolUseCases from "./ToolUseCases";
import ToolFAQ from "./ToolFAQ";

interface ToolContentProps {
    slug: string;
}

export default function ToolContent({
    slug,
}: ToolContentProps) {

    if (slug === "compress-pdf") {
        return (
            <div className="mt-16 space-y-16">

                <ToolOverview
                    title="Compress PDF"
                    description="Compress PDF files online directly in your browser. Reduce PDF file size while keeping your documents readable and easier to share."
                />

                <ToolFeatures
                    features={[
                        "100% browser based",
                        "Free to use",
                        "Fast PDF processing",
                        "No installation required",
                        "Privacy-friendly workflow",
                        "Works on desktop, tablet, and mobile",
                    ]}
                />

                <ToolHowTo
                    steps={[
                        "Upload the PDF file you want to compress.",
                        "Choose the compression level that fits your needs.",
                        "Start the PDF compression process.",
                        "Wait while LifeTools processes your document.",
                        "Download the compressed PDF when processing is complete.",
                    ]}
                />

                <ToolBenefits
                    benefits={[
                        "Reduce PDF file size",
                        "Make documents easier to share",
                        "Prepare files for email attachments",
                        "Save storage space",
                        "Process documents directly in your browser",
                        "Avoid installing additional software",
                    ]}
                />

                <ToolUseCases
                    useCases={[
                        "Email Attachments",
                        "Student Assignments",
                        "Business Documents",
                        "Resumes and CVs",
                        "Invoices",
                        "Online Applications",
                    ]}
                />

                <ToolFAQ
                    items={[
                        {
                            question:
                                "Can I compress a PDF without losing quality?",
                            answer:
                                "The compression result depends on the selected compression level and the contents of the PDF. Lower compression generally preserves more of the original quality, while higher compression aims for a smaller file size.",
                        },
                        {
                            question:
                                "Is the PDF compressor free?",
                            answer:
                                "Yes. LifeTools provides this PDF compression tool for free directly through your web browser.",
                        },
                        {
                            question:
                                "Do I need to install software?",
                            answer:
                                "No. The tool is designed to work directly in your browser, so you do not need to install a separate PDF compression application.",
                        },
                        {
                            question:
                                "What compression level should I choose?",
                            answer:
                                "Choose Low when preserving quality is the priority, Medium for a balance between quality and file size, or High when reducing the file size is the main priority.",
                        },
                        {
                            question:
                                "Can I use the tool on a mobile device?",
                            answer:
                                "Yes. LifeTools is designed to work across desktop, tablet, and mobile devices with a compatible modern web browser.",
                        },
                    ]}
                />

            </div>
        );
    }

    return null;
}