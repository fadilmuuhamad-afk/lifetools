interface Props {
    children: React.ReactNode;
}

export default function WorkspacePreview({
    children,
}: Props) {
    return (
        <div className="rounded-2xl border bg-card p-6">
            {children}
        </div>
    );
}