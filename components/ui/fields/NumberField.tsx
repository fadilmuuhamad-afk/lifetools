"use client";

interface NumberFieldProps {

    label: string;

    value: number;

    onChange(value: number): void;

    min?: number;

    max?: number;

    step?: number;

    placeholder?: string;

    disabled?: boolean;

    suffix?: string;

}

export default function NumberField({

    label,

    value,

    onChange,

    min,

    max,

    step = 1,

    placeholder,

    disabled,

    suffix,

}: NumberFieldProps) {

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {

        const next = Number(event.target.value);

        if (Number.isNaN(next)) {

            onChange(0);

            return;

        }

        onChange(next);

    }

    return (

        <div className="space-y-2">

            <label className="text-sm font-medium">

                {label}

            </label>

            <div className="relative">

                <input
                    type="number"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                />

                {suffix && (

                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">

                        {suffix}

                    </span>

                )}

            </div>

        </div>

    );

}