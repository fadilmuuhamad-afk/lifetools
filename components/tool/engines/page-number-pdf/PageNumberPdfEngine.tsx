"use client";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import PdfPreview from "@/components/tool/shared/PdfPreview";
import WatermarkOverlay from "@/components/tool/shared/WatermarkOverlay";

import { usePageNumberPdf } from "@/hooks/usePageNumberPdf";

import PageNumberPdfControls from "./PageNumberPdfControls";
import PageNumberPdfSummary from "./PageNumberPdfSummary";

export default function PageNumberPdfEngine() {

    const {

        file,

        startNumber,
        setStartNumber,

        fontSize,
        setFontSize,

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

    } = usePageNumberPdf();

    if (result && file) {

        return (

            <ResultStep

                originalFile={file}

                resultFile={result}

                originalUrl=""

                resultUrl={resultUrl}

                onDownload={download}

                onReset={reset}

            />

        );

    }

    if (!file) {

        return (

            <UploadStep

                accept={{
                    "application/pdf": [".pdf"],
                }}

                onFile={selectFile}

                buttonText="Select PDF"

                helperText="Upload a PDF document"

            />

        );

    }

    return (

        <EditorLayout

            preview={

                <PdfPreview

                    file={file}

                    overlay={

                        <WatermarkOverlay

                            text={String(startNumber)}

                            fontSize={fontSize}

                            opacity={opacity}

                            rotation={rotation}

                            position={position}

                        />

                    }

                />

            }

            controls={

                <PageNumberPdfControls

                    startNumber={startNumber}
                    setStartNumber={setStartNumber}

                    fontSize={fontSize}
                    setFontSize={setFontSize}

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

                <PageNumberPdfSummary

                    fileName={file.name}

                    startNumber={startNumber}

                    fontSize={fontSize}

                    opacity={opacity}

                    rotation={rotation}

                    position={position}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Adding Page Numbers..."

                    actionText="Add Page Numbers"

                    disabled={processing}

                    onAction={process}

                    onReset={reset}

                />

            }

        />

    );

}