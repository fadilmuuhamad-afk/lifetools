"use client";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import ImageInfo from "@/components/image/ImageInfo";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import useImageFlip from "@/hooks/useImageFlip";

import FlipCanvas from "./FlipCanvas";
import FlipControls from "./FlipControls";
import FlipSummary from "./FlipSummary";

export default function FlipEngine() {

    const flip = useImageFlip();

    if (!flip.file) {
        return (
            <UploadStep
                onFile={flip.selectFile}
            />
        );
    }

    if (flip.result) {
        return (
            <ResultStep
                originalFile={flip.file}
                resultFile={flip.result}
                originalUrl={flip.imageUrl}
                resultUrl={flip.resultUrl}
                onDownload={flip.download}
                onReset={flip.reset}
            />
        );
    }

    return (
        <EditorLayout

            preview={
                <FlipCanvas
                    image={flip.imageUrl}
                    direction={flip.direction}
                />
            }

            controls={
                <FlipControls
                    direction={flip.direction}
                    setDirection={flip.setDirection}
                />
            }

            info={
                <ImageInfo
                    file={flip.file}
                    width={flip.imageWidth}
                    height={flip.imageHeight}
                />
            }

            summary={
                <FlipSummary
                    file={flip.file}
                    direction={flip.direction}
                />
            }

            actions={
                <EditorActions
                    processing={flip.processing}
                    disabled={flip.processing}
                    processingText="Flipping..."
                    actionText="Flip Image"
                    onAction={flip.flipCurrentImage}
                    onReset={flip.reset}
                />
            }

        />
    );

}