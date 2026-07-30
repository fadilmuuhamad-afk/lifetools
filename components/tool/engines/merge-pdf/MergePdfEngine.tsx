"use client";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import { useMergePdf } from "@/hooks/useMergePdf";

import FilesPreview from "@/components/tool/shared/FilesPreview";

import MergePdfControls from "./MergePdfControls";
import MergePdfSummary from "./MergePdfSummary";


export default function MergePdfEngine() {

    const {

        files,

        result,

        resultUrl,

        processing,

        selectFiles,

        process,

        download,

        reset,

    } = useMergePdf();

    if (result && files.length > 0) {

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

                maxFiles={50}

                accept={{
                    "application/pdf": [".pdf"],
                }}

                onFiles={selectFiles}

                buttonText="Select PDF Files"

                helperText="Select two or more PDF files"

            />

        );

    }

    return (

        <EditorLayout

            preview={

                <FilesPreview

                    files={files}

                    title="Selected PDF Files"

                />

            }

            controls={

                <MergePdfControls />

            }

            summary={

                <MergePdfSummary

                    files={files}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Merging PDFs..."

                    actionText="Merge PDF"

                    disabled={files.length < 2}

                    onAction={process}

                    onReset={reset}

                />

            }

        />

    );

}