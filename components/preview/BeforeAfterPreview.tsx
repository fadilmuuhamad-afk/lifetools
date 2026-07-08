interface Props {
    before: string;
    after: string;
}

export default function BeforeAfterPreview({
    before,
    after,
}: Props) {
    return (
        <div className="grid gap-6 md:grid-cols-2">

            <div>

                <h3 className="mb-3 font-semibold">

                    Original

                </h3>

                <img
                    src={before}
                    alt="Original"
                    className="rounded-xl border"
                />

            </div>

            <div>

                <h3 className="mb-3 font-semibold">

                    Compressed

                </h3>

                <img
                    src={after}
                    alt="Compressed"
                    className="rounded-xl border"
                />

            </div>

        </div>
    );
}