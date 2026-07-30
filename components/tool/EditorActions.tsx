import PrimaryButton from "@/components/ui/PrimaryButton";

interface EditorActionsProps {

    processing: boolean;

    disabled?: boolean;

    processingText: string;

    actionText: string;

    resetText?: string;

    onAction(): void;

    onReset(): void;

}

export default function EditorActions({

    processing,

    disabled = false,

    processingText,

    actionText,

    resetText = "Choose Another File",

    onAction,

    onReset,

}: EditorActionsProps) {
    return (
        <div className="space-y-3">

            <PrimaryButton
                onClick={onAction}
                disabled={disabled}
            >
                {processing
                    ? processingText
                    : actionText}
            </PrimaryButton>

            <button
                onClick={onReset}
                className="
                    w-full
                    rounded-xl
                    border
                    py-3
                    transition
                    hover:bg-muted
                "
            >
                {resetText}
            </button>

        </div>
    );
}