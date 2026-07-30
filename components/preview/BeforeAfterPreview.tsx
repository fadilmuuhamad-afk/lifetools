interface Props {
    before?: string;
    after?: string;

    beforeLabel?: string;
    afterLabel?: string;
}

export default function BeforeAfterPreview({
    before,
    after,
    beforeLabel = "Original",
    afterLabel = "Result",
}: Props) {

    return (

        <div className="grid gap-6 md:grid-cols-2">

            <div>

                <h3 className="mb-3 font-semibold">
                    {beforeLabel}
                </h3>

                {before ? (

                    <img
                        src={before}
                        alt={beforeLabel}
                        className="rounded-xl border w-full"
                    />

                ) : (

                    <div className="flex h-64 items-center justify-center rounded-xl border text-sm text-muted-foreground">
                        No preview
                    </div>

                )}

            </div>

            <div>

                <h3 className="mb-3 font-semibold">
                    {afterLabel}
                </h3>

                {after ? (

                    <img
                        src={after}
                        alt={afterLabel}
                        className="rounded-xl border w-full"
                    />

                ) : (

                    <div className="flex h-64 items-center justify-center rounded-xl border text-sm text-muted-foreground">
                        No preview
                    </div>

                )}

            </div>

        </div>

    );

}