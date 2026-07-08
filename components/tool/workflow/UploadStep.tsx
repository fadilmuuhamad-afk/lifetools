import UploadCard from "@/components/file/UploadCard";

interface Props {
    onFile(file: File): void;
}

export default function UploadStep({
    onFile,
}: Props) {
    return <UploadCard onFile={onFile} />;
}