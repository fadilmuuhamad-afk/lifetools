"use client";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import FilePreview from "@/components/tool/shared/FilePreview";

import { useRotatePdf } from "@/hooks/useRotatePdf";

import RotatePdfControls from "./RotatePdfControls";
import RotatePdfSummary from "./RotatePdfSummary";

export default function RotatePdfEngine() {

    const {

        file,

        rotation,

        result,

        resultUrl,

        processing,

        selectFile,

        process,

        download,

        reset,

        setRotation,

    } = useRotatePdf();

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

                <FilePreview

                    file={file}

                    title="Selected PDF"

                />

            }

            controls={

                <RotatePdfControls

                    rotation={rotation}

                    setRotation={setRotation}

                />

            }

            summary={

                <RotatePdfSummary

                    file={file}

                    rotation={rotation}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Rotating PDF..."

                    actionText="Rotate PDF"

                    onAction={process}

                    onReset={reset}

                />

            }

        />

    );

}