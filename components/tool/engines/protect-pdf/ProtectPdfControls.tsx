"use client";

interface Props {

    password: string;

    setPassword(value: string): void;

    error?: string | null;

}

export default function ProtectPdfControls({

    password,

    setPassword,

    error,

}: Props) {

    return (

        <div className="space-y-6">

            <div className="space-y-2">

                <label className="text-sm font-medium">

                    PDF Password

                </label>

                <input

                    type="password"

                    value={password}

                    onChange={(event) =>

                        setPassword(event.target.value)

                    }

                    placeholder="Enter password"

                    className="
                        w-full
                        rounded-xl
                        border
                        bg-background
                        px-4
                        py-3
                        outline-none
                        focus:ring-2
                        focus:ring-primary
                    "

                />

                <p className="text-sm text-muted-foreground">

                    This password will be required whenever the PDF is opened.

                </p>

            </div>

            {error && (

                <div
                    className="
                        rounded-xl
                        border
                        border-red-300
                        bg-red-50
                        px-4
                        py-3
                        text-sm
                        text-red-600
                    "
                >

                    {error}

                </div>

            )}

        </div>

    );

}