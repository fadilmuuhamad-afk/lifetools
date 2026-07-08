import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

export default function PrimaryButton({
    className,
    children,
    ...props
}: Props) {
    return (
        <button
            {...props}
            className={cn(
                "w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
        >
            {children}
        </button>
    );
}