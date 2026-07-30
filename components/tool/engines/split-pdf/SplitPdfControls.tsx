"use client";

export default function SplitPdfControls() {

    return (

        <div className="rounded-xl border p-5">

            <h3 className="font-medium">

                Split Options

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

                Every page will be exported as an individual PDF.

            </p>

            <p className="mt-4 text-sm text-muted-foreground">

                All pages will be packaged into a ZIP archive for download.

            </p>

        </div>

    );

}