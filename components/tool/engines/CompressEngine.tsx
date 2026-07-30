"use client";

import { useImageCompression } from "@/hooks/useImageCompression";

import UploadStep from "../workflow/UploadStep";
import PreviewStep from "../workflow/PreviewStep";
import ResultStep from "../workflow/ResultStep";

export default function CompressEngine() {
    const {
        file,
        selectFile,
        quality,
        setQuality,
        processing,
        result,
        originalUrl,
        resultUrl,
        compress,
        download,
        reset,
    } = useImageCompression();

    if (!file) {
        return <UploadStep onFile={selectFile} />;
    }

    if (result) {
        return (
            <ResultStep
                originalFile={file}
                resultFile={result}
                originalUrl={originalUrl}
                resultUrl={resultUrl}
                onDownload={download}
                onReset={reset}
            />
        );
    }

    return (
        <PreviewStep
            file={file}
            quality={quality}
            setQuality={setQuality}
            processing={processing}
            onCompress={compress}
        />
    );
}