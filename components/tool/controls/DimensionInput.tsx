interface Props {
    label: string;
    value: number;
    onChange(value: number): void;
}

export default function DimensionInput({
    label,
    value,
    onChange,
}: Props) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">
                {label}
            </label>

            <input
                type="number"
                min={1}
                value={value}
                onChange={(e) =>
                    onChange(Number(e.target.value))
                }
                className="
                    w-full
                    rounded-xl
                    border
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                "
            />
        </div>
    );
}