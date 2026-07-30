"use client";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import { usePdfToImage } from "@/hooks/usePdfToImage";

import PdfToImageControls from "./PdfToImageControls";
import PdfToImageSummary from "./PdfToImageSummary";

export default function PdfToImageEngine() {

    const {

        file,

        result,

        resultUrl,

        processing,

        scale,

        format,

        quality,

        selectFile,

        process,

        download,

        reset,

        setScale,

        setFormat,

        setQuality,

    } = usePdfToImage();

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

                helperText="Supports PDF documents"

            />

        );

    }

    return (

        <EditorLayout

            preview={

                <div className="rounded-xl border p-6">

                    <h3 className="font-semibold">

                        {file.name}

                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">

                        PDF is ready to convert into images.

                    </p>

                </div>

            }

            controls={

                <PdfToImageControls

                    scale={scale}

                    format={format}

                    quality={quality}

                    onScaleChange={setScale}

                    onFormatChange={setFormat}

                    onQualityChange={setQuality}

                />

            }

            summary={

                <PdfToImageSummary

                    file={file}

                    scale={scale}

                    format={format}

                    quality={quality}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Converting PDF..."

                    actionText="Convert to Images"

                    onAction={process}

                    onReset={reset}

                />

            }

        />

    );

}