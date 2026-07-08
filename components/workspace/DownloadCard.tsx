interface Props {
    onDownload(): void;
}

export default function DownloadCard({
    onDownload,
}: Props) {
    return (
        <button
            onClick={onDownload}
            className="mt-8 w-full rounded-2xl bg-blue-600 py-4 text-white hover:bg-blue-700"
        >
            Download
        </button>
    );
}