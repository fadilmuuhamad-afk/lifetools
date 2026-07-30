"use client";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import { useSplitPdf } from "@/hooks/useSplitPdf";

import FilePreview
    from "@/components/tool/shared/FilePreview";

import SplitPdfControls from "./SplitPdfControls";
import SplitPdfSummary from "./SplitPdfSummary";

export default function SplitPdfEngine() {

    const {

        file,

        result,

        resultUrl,

        processing,

        selectFile,

        process,

        download,

        reset,

    } = useSplitPdf();

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

                helperText="Upload a PDF document to split"

            />

        );

    }

    return (

        <EditorLayout

            preview={

                <FilePreview

                    file={file}

                    title="Selected PDF"

                />

            }

            controls={

                <SplitPdfControls />

            }

            summary={

                <SplitPdfSummary

                    file={file}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Splitting PDF..."

                    actionText="Split PDF"

                    onAction={process}

                    onReset={reset}

                />

            }

        />

    );

}