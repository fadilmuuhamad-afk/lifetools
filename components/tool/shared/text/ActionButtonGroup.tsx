"use client";

import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export interface ActionButton {

    label: string;

    onClick: () => void;

    icon?: LucideIcon;

    disabled?: boolean;

    variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "link";

}

interface Props {

    actions: ActionButton[];

    className?: string;

}

export default function ActionButtonGroup({

    actions,

    className,

}: Props) {

    return (

        <div

            className={

                `flex flex-wrap gap-3 ${className ?? ""}`

            }

        >

            {

                actions.map(

                    (

                        {

                            label,

                            icon: Icon,

                            onClick,

                            disabled,

                            variant = "outline",

                        },

                    ) => (

                        <Button

                            key={label}

                            variant={variant}

                            onClick={onClick}

                            disabled={disabled}

                        >

                            {

                                Icon && (

                                    <Icon

                                        className="mr-2 h-4 w-4"

                                    />

                                )

                            }

                            {label}

                        </Button>

                    ),

                )

            }

        </div>

    );

}