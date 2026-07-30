interface Props {
    title: string;
    description?: string;
    center?: boolean;
}

export default function SectionTitle({
    title,
    description,
    center = false,
}: Props) {

    return (

        <div
            className={
                center
                    ? "mb-12 text-center"
                    : "mb-8"
            }
        >

            <h2
                className="
                    text-3xl
                    font-bold
                    md:text-4xl
                "
            >
                {title}
            </h2>

            {description && (

                <p
                    className="
                        mt-3
                        text-muted-foreground
                    "
                >
                    {description}
                </p>

            )}

        </div>

    );

}