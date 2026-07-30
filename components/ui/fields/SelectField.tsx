"use client";

export interface SelectOption {

    label: string;

    value: string;

}

interface SelectFieldProps {

    label: string;

    value: string;

    options: SelectOption[];

    placeholder?: string;

    disabled?: boolean;

    onChange(value: string): void;

}

export default function SelectField({

    label,

    value,

    options,

    placeholder = "Select an option",

    disabled = false,

    onChange,

}: SelectFieldProps) {

    return (

        <div className="space-y-2">

            <label className="text-sm font-medium">

                {label}

            </label>

            <select

                value={value}

                disabled={disabled}

                onChange={(e) =>

                    onChange(e.target.value)

                }

                className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"

            >

                {!value && (

                    <option value="">

                        {placeholder}

                    </option>

                )}

                {options.map((option) => (

                    <option

                        key={option.value}

                        value={option.value}

                    >

                        {option.label}

                    </option>

                ))}

            </select>

        </div>

    );

}