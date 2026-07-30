"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface Props {

    label: string;

    value: ReactNode;

    description?: string;

    icon?: ReactNode;

    className?: string;

}

export default function StatCard({

    label,

    value,

    description,

    icon,

    className,

}: Props) {

    return (

        <div
            className={clsx(
                "rounded-xl border bg-background p-4",
                className
            )}
        >

            {(icon || label) && (

                <div className="mb-2 flex items-center gap-2">

                    {icon}

                    <span className="text-sm text-muted-foreground">

                        {label}

                    </span>

                </div>

            )}

            <div className="text-xl font-bold">

                {value}

            </div>

            {description && (

                <p className="mt-2 text-xs text-muted-foreground">

                    {description}

                </p>

            )}

        </div>

    );

}