import BeforeAfterPreview from "@/components/preview/BeforeAfterPreview";
import ResultCard from "@/components/workspace/ResultCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface Props {
    originalFile: File;
    compressedFile: File;

    originalUrl: string;
    resultUrl: string;

    onDownload(): void;
    onReset(): void;
}

export default function ResultStep({
    originalFile,
    compressedFile,
    originalUrl,
    resultUrl,
    onDownload,
    onReset,
}: Props) {
    return (
        <div className="space-y-8">

            <BeforeAfterPreview
                before={originalUrl}
                after={resultUrl}
            />

            <ResultCard
                originalFile={originalFile}
                compressedFile={compressedFile}
                onDownload={onDownload}
            />

            <PrimaryButton
                onClick={onReset}
                className="bg-gray-700 hover:bg-gray-800"
            >
                Compress Another Image
            </PrimaryButton>

        </div>
    );
}