interface Props {
    text: string;
}

export default function ProcessingCard({
    text,
}: Props) {
    return (
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">

            <p className="text-center font-medium text-blue-600">

                {text}

            </p>

        </div>
    );
}