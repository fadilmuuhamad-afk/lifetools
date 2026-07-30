"use client";
import CardSection from "@/components/ui/CardSection";

interface Props {
    file: File;
    width: number;
    height: number;
}

function formatFileSize(size: number) {

    if (size < 1024) {
        return `${size} B`;
    }

    if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(1)} KB`;
    }

    return `${(size / 1024 / 1024).toFixed(2)} MB`;

}

function getOrientation(
    width: number,
    height: number
) {

    if (width === height) {
        return "Square";
    }

    return width > height
        ? "Landscape"
        : "Portrait";

}

function getFormat(file: File) {

    if (file.type) {
        return file.type
            .replace("image/", "")
            .toUpperCase();
    }

    return (
        file.name
            .split(".")
            .pop()
            ?.toUpperCase() ?? "-"
    );

}

function InfoRow({
    label,
    value,
}: {
    label: string;
    value: string;
}) {

    return (

        <div className="flex items-center justify-between">

            <span className="text-muted-foreground">
                {label}
            </span>

            <span className="font-medium text-right">
                {value}
            </span>

        </div>

    );

}

export default function ImageInfo({
    file,
    width,
    height,
}: Props) {

    return (

        <CardSection title="Image Information">

            <div className="space-y-4">

                <InfoRow
                    label="File Name"
                    value={file.name}
                />

                <InfoRow
                    label="Format"
                    value={getFormat(file)}
                />

                <InfoRow
                    label="Resolution"
                    value={`${width} × ${height}`}
                />

                <InfoRow
                    label="Orientation"
                    value={getOrientation(
                        width,
                        height
                    )}
                />

                <InfoRow
                    label="File Size"
                    value={formatFileSize(
                        file.size
                    )}
                />

            </div>

        </CardSection>

    );

}