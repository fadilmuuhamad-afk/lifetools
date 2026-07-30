"use client";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import ImageInfo from "@/components/image/ImageInfo";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import useImageRotate from "@/hooks/useImageRotate";

import RotateCanvas from "./RotateCanvas";
import RotateControls from "./RotateControls";
import RotateSummary from "./RotateSummary";

export default function RotateEngine() {

    const rotate = useImageRotate();

    if (!rotate.file) {
        return (
            <UploadStep
                onFile={rotate.selectFile}
            />
        );
    }

    if (rotate.result) {
        return (
            <ResultStep
                originalFile={rotate.file}
                resultFile={rotate.result}
                originalUrl={rotate.imageUrl}
                resultUrl={rotate.resultUrl}
                onDownload={rotate.download}
                onReset={rotate.reset}
            />
        );
    }

    return (
        <EditorLayout

            preview={
                <RotateCanvas
                    image={rotate.imageUrl}
                    angle={rotate.angle}
                />
            }

            controls={
                <RotateControls
                    angle={rotate.angle}
                    setAngle={rotate.setAngle}
                />
            }

            info={
                <ImageInfo
                    file={rotate.file}
                    width={rotate.imageWidth}
                    height={rotate.imageHeight}
                />
            }

            summary={
                <RotateSummary
                    file={rotate.file}
                    angle={rotate.angle}
                />
            }

            actions={
                <EditorActions
                    processing={rotate.processing}
                    disabled={rotate.processing}
                    processingText="Rotating..."
                    actionText="Rotate Image"
                    onAction={rotate.rotateCurrentImage}
                    onReset={rotate.reset}
                />
            }

        />
    );

}