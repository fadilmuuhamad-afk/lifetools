interface Props {
    text: string;
}

export default function LoadingOverlay({
    text,
}: Props) {

    return (

        <div
            className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            rounded-2xl
            bg-white/70
            backdrop-blur-sm
            "
        >

            <div className="text-center">

                <div
                    className="
                    mx-auto
                    mb-4
                    h-10
                    w-10
                    animate-spin
                    rounded-full
                    border-4
                    border-blue-600
                    border-t-transparent
                    "
                />

                <p>

                    {text}

                </p>

            </div>

        </div>

    );

}