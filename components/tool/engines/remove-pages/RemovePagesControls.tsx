"use client";

interface Props {

    pages: string;

    error: string;

    setPages(
        value: string
    ): void;

}

export default function RemovePagesControls({

    pages,

    error,

    setPages,

}: Props) {

    return (

        <div className="rounded-xl border p-5">

            <h3 className="font-medium">

                Pages to Remove

            </h3>

            <input

                type="text"

                value={pages}

                onChange={(event) =>

                    setPages(event.target.value)

                }

                placeholder="Example: 1-3,7,9-12"

                className="mt-4 w-full rounded-md border px-3 py-2"
                

            />

            {error && (

                <p className="mt-2 text-sm text-red-500">

                    {error}

                </p>

            )}

            <p className="mt-3 text-sm text-muted-foreground">

                Enter page numbers separated by commas.

            </p>

            <p className="mt-3 text-sm text-muted-foreground">

                Examples:

                <br />

                2,4,6

                <br />

                1-5

                <br />

                1-3,7,9-12

            </p>
        </div>

    );

}