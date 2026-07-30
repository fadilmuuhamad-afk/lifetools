interface Props {
    preview: React.ReactNode;
    sidebar: React.ReactNode;
}

export default function Workspace({
    preview,
    sidebar,
}: Props) {
    return (
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            {preview}

            {sidebar}
        </div>
    );
}