import BeforeAfterPreview from "@/components/preview/BeforeAfterPreview";
import ResultCard from "@/components/workspace/ResultCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RecommendedResources from "@/components/monetization/RecommendedResources";

interface Props {
    originalFile: File;
    resultFile: File;

    originalUrl: string;
    resultUrl: string;

    onDownload(): void;
    onReset(): void;

    resetText?: string;
}

export default function ResultStep({
    originalFile,
    resultFile,
    originalUrl,
    resultUrl,
    onDownload,
    onReset,

    // Tambahkan ini
    resetText = "Choose Another File",

}: Props)  {
    return (
        <div className="space-y-8">

            <BeforeAfterPreview
                before={originalUrl}
                after={resultUrl}
            />

            <ResultCard
                originalFile={originalFile}
                resultFile={resultFile}
                onDownload={onDownload}
            />

            <PrimaryButton
                onClick={onReset}
                className="bg-gray-700 hover:bg-gray-800"
            >
                {resetText}
            </PrimaryButton>

            <RecommendedResources />
        </div>
    );
}