"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";

interface Props {
    loading: boolean;
    text: string;
    loadingText: string;
    onClick(): void;
}

export default function ActionButton({
    loading,
    text,
    loadingText,
    onClick,
}: Props) {
    return (
        <PrimaryButton
            onClick={onClick}
            disabled={loading}
        >
            {loading ? loadingText : text}
        </PrimaryButton>
    );
}