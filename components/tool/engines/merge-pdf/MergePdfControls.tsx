"use client";

export default function MergePdfControls() {

    return (

        <div className="rounded-xl border p-5">

            <h3 className="font-medium">

                Merge Options

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

                Your PDF files will be merged in the same order
                as they appear in the preview list.

            </p>

            <p className="mt-4 text-sm text-muted-foreground">

                Tip: If you need a different order,
                upload the files in the desired sequence.

            </p>

        </div>

    );

}