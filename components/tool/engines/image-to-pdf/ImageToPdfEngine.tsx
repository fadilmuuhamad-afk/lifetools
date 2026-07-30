"use client";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";
import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import { useImageToPdf } from "@/hooks/useImageToPdf";

import ImageToPdfControls from "./ImageToPdfControls";
import ImageToPdfSummary from "./ImageToPdfSummary";

export default function ImageToPdfEngine() {

    const {

        files,

        result,

        resultUrl,

        processing,

        pageSize,

        orientation,

        margin,

        fit,

        selectFiles,

        process,

        download,

        reset,

        setPageSize,

        setOrientation,

        setMargin,

        setFit,

    } = useImageToPdf();

    if (result) {

        return (

            <ResultStep

                originalFile={files[0]}

                resultFile={result}

                originalUrl=""

                resultUrl={resultUrl}

                onDownload={download}

                onReset={reset}

            />

        );

    }

    if (files.length === 0) {

        return (

            <UploadStep

                multiple

                maxFiles={100}

                onFiles={selectFiles}

                buttonText="Select Images"

                helperText="Supports JPG, PNG and WEBP • Max 20 MB each"

            />

        );

    }

    return (

        <EditorLayout

            preview={

                <div className="rounded-lg border p-6 text-center">

                    <h3 className="font-semibold">

                        {files.length} image{files.length > 1 ? "s" : ""} selected

                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">

                        Each image will become one PDF page.

                    </p>

                </div>

            }

            controls={

                <ImageToPdfControls

                    pageSize={pageSize}

                    orientation={orientation}

                    margin={margin}

                    fit={fit}

                    onPageSizeChange={setPageSize}

                    onOrientationChange={setOrientation}

                    onMarginChange={setMargin}

                    onFitChange={setFit}

                />

            }

            summary={

                <ImageToPdfSummary

                    imageCount={files.length}

                    pageSize={pageSize}

                    orientation={orientation}

                    margin={margin}

                    fit={fit}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Generating PDF..."

                    actionText="Generate PDF"

                    onAction={process}

                    onReset={reset}

                />

            }

        />

    );

}