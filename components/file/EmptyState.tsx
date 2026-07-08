import { UploadCloud } from "lucide-react";

export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">

            <UploadCloud
                className="
                    h-20
                    w-20
                    text-blue-600
                    transition-transform
                    duration-300
                    group-hover:scale-110
                "
            />

            <h2 className="mt-8 text-3xl font-bold">
                Drag & Drop your image
            </h2>

            <p className="mt-4 max-w-md text-center text-muted-foreground">
                Drop your image here or click the button below to upload.
            </p>

        </div>
    );
}