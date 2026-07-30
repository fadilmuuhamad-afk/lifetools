import type { Accept } from "react-dropzone";
import UploadCard from "@/components/file/UploadCard";

interface Props {

    onFile?(file: File): void;

    onFiles?(files: File[]): void;

    multiple?: boolean;

    accept?: Accept;

    maxFiles?: number;

    buttonText?: string;

    helperText?: string;

}

export default function UploadStep(props: Props) {

    return <UploadCard {...props} />;

}