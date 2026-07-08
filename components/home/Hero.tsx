export default function Hero() {
    return (
        <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

            <span className="mb-6 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
                🚀 Welcome to LifeTools
            </span>

            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl">
                Free Online Tools
                <br />
                for Everyday Tasks
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-gray-500">
                Compress images, merge PDFs, convert files, format JSON,
                generate QR codes and much more —
                all for free.
            </p>

            <div className="mt-10 w-full max-w-xl">

                <input
                    placeholder="Search for a tool..."
                    className="h-14 w-full rounded-2xl border px-6 text-lg outline-none transition focus:border-blue-500"
                />

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">

                <span className="rounded-full bg-gray-100 px-4 py-2">
                    Image Tools
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2">
                    PDF
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2">
                    Text
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2">
                    Developer
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2">
                    Calculator
                </span>

            </div>

        </section>
    );
}