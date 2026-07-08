import ImagePreview from "@/components/preview/ImagePreview";
import SettingsCard from "@/components/workspace/SettingsCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface Props {
    file: File;
    quality: number;
    setQuality(value: number): void;
    processing: boolean;
    onCompress(): void;
}

export default function PreviewStep({
    file,
    quality,
    setQuality,
    processing,
    onCompress,
}: Props) {
    return (
        <div className="space-y-6">

            <ImagePreview file={file} />

            <SettingsCard
                quality={quality}
                setQuality={setQuality}
            />

            <PrimaryButton
                onClick={onCompress}
                disabled={processing}
            >
                {processing
                    ? "Compressing..."
                    : "Compress Image"}
            </PrimaryButton>

        </div>
    );
}