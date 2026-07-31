"use client";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import { useWatermarkPdf } from "@/hooks/useWatermarkPdf";

import WatermarkPdfControls from "./WatermarkPdfControls";
import WatermarkPdfSummary from "./WatermarkPdfSummary";

import PdfPreview from "@/components/tool/shared/PdfPreview";
import WatermarkOverlay from "@/components/tool/shared/WatermarkOverlay";

import ToolWorkflow
    from "@/components/tool/base/ToolWorkflow";

export default function WatermarkPdfEngine() {

    const {

        file,

        type,
        setType,

        text,
        setText,

        image,
        selectImage,

        fontSize,
        setFontSize,

        width,
        setWidth,

        height,
        setHeight,

        opacity,
        setOpacity,

        rotation,
        setRotation,

        position,
        setPosition,

        result,

        error,

        resultUrl,

        processing,

        selectFile,

        process,

        download,

        reset,

    } = useWatermarkPdf();

    return (
        <ToolWorkflow
            hasFile={!!file}
            hasResult={!!result}
            upload={
                <UploadStep
                    accept={{
                        "application/pdf": [".pdf"],
                    }}
                    onFile={selectFile}
                    buttonText="Select PDF"
                    helperText="Upload a PDF document"
                />
            }
            result={
                file && result ? (
                    <ResultStep
                        originalFile={file}
                        resultFile={result}
                        originalUrl=""
                        resultUrl={resultUrl}
                        onDownload={download}
                        onReset={reset}
                    />
                ) : null
            }
            editor={
                <EditorLayout
                    preview={
                        <PdfPreview
                            file={file!}
                            overlay={
                                type === "text" ? (
                                    <WatermarkOverlay
                                        text={text}
                                        fontSize={fontSize}
                                        opacity={opacity}
                                        rotation={rotation}
                                        position={position}
                                    />
                                ) : null
                            }
                        />
                    }
                    controls={
                        <WatermarkPdfControls
                            type={type}
                            setType={setType}
                            text={text}
                            setText={setText}
                            image={image}
                            selectImage={selectImage}
                            fontSize={fontSize}
                            setFontSize={setFontSize}
                            width={width}
                            setWidth={setWidth}
                            height={height}
                            setHeight={setHeight}
                            opacity={opacity}
                            setOpacity={setOpacity}
                            rotation={rotation}
                            setRotation={setRotation}
                            position={position}
                            setPosition={setPosition}
                            error={error}
                        />
                    }
                    summary={
                        <WatermarkPdfSummary
                            fileName={file!.name}
                            type={type}
                            text={text}
                            image={image}
                            fontSize={fontSize}
                            width={width}
                            height={height}
                            opacity={opacity}
                            rotation={rotation}
                            position={position}
                        />
                    }
                    actions={
                        <EditorActions
                            processing={processing}
                            processingText="Adding Watermark..."
                            actionText="Add Watermark"
                            disabled={processing}
                            onAction={process}
                            onReset={reset}
                        />
                    }
                />
            }
        />
    );

}