export default function Loading() {

    return (

        <main className="mx-auto flex min-h-[60vh] items-center justify-center">

            <div className="flex flex-col items-center">

                <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

                <p className="mt-6 text-muted-foreground">

                    Loading...

                </p>

            </div>

        </main>

    );

}