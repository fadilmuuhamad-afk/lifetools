"use client";

import { useImageResize } from "@/hooks/useImageResize";

import UploadStep from "../workflow/UploadStep";
import ResultStep from "../workflow/ResultStep";

import ImagePreview from "@/components/preview/ImagePreview";
import ResizeControls from "@/components/tool/controls/ResizeControls";
import ResizeSummary from "@/components/tool/preview/ResizeSummary";

import ImageInfo from "@/components/image/ImageInfo";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

export default function ResizeEngine() {
    const {
        file,
        selectFile,

        width,
        updateWidth,

        height,
        updateHeight,

        keepAspectRatio,
        setKeepAspectRatio,

        originalWidth,
        originalHeight,

        processing,

        result,

        originalUrl,
        resultUrl,

        resize,

        download,

        reset,
    } = useImageResize();

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
        <EditorLayout
            preview={
                <ImagePreview
                    file={file}
                />
            }

            controls={
                <ResizeControls
                    width={width}
                    height={height}
                    setWidth={updateWidth}
                    setHeight={updateHeight}
                    keepAspectRatio={keepAspectRatio}
                    setKeepAspectRatio={setKeepAspectRatio}
                />
            }

            info={
                <ImageInfo
                    file={file}
                    width={originalWidth}
                    height={originalHeight}
                />
            }

            summary={
                <ResizeSummary
                    originalWidth={originalWidth}
                    originalHeight={originalHeight}
                    width={width}
                    height={height}
                    keepAspectRatio={keepAspectRatio}
                />
            }

            actions={
                <EditorActions
                    processing={processing}
                    disabled={
                        processing ||
                        width < 1 ||
                        height < 1
                    }
                    processingText="Resizing..."
                    actionText="Resize Image"
                    onAction={resize}
                    onReset={reset}
                />
            }
        />
    );
}