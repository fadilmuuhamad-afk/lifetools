"use client";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import ImagePreview from "@/components/preview/ImagePreview";
import ImageInfo from "@/components/image/ImageInfo";

import ConverterControls from "./ConverterControls";
import ConverterSummary from "./ConverterSummary";

import useImageConverter from "@/hooks/useImageConverter";

export default function ConverterEngine() {

    const converter = useImageConverter();

    if (!converter.file) {

        return (
            <UploadStep
                onFile={converter.selectFile}
            />
        );

    }

    if (converter.result) {

        return (

            <ResultStep
                originalFile={converter.file}
                resultFile={converter.result}
                originalUrl={converter.originalUrl}
                resultUrl={converter.resultUrl}
                onDownload={converter.download}
                onReset={converter.reset}
            />

        );

    }

    return (

        <EditorLayout

            preview={
                <ImagePreview
                    file={converter.file}
                />
            }

            controls={
                <ConverterControls
                    inputFormat={converter.inputFormat}
                    outputFormat={converter.outputFormat}
                    quality={converter.quality}
                    setQuality={converter.setQuality}
                    onChange={converter.setOutputFormat}
                />
            }

            info={
                <ImageInfo
                    file={converter.file}
                    width={converter.imageWidth}
                    height={converter.imageHeight}
                />
            }

            summary={
                <ConverterSummary
                    file={converter.file}
                    inputFormat={converter.inputFormat}
                    outputFormat={converter.outputFormat}
                    imageWidth={converter.imageWidth}
                    imageHeight={converter.imageHeight}
                    imageSize={converter.imageSize}
                    quality={converter.quality}
                />
            }

            actions={
                <EditorActions
                    processing={converter.processing}
                    disabled={converter.processing}
                    processingText="Converting..."
                    actionText="Convert Image"
                    onAction={converter.convert}
                    onReset={converter.reset}
                />
            }

        />

    );

}