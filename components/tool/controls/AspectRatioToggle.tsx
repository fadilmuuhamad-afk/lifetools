interface Props {
    checked: boolean;
    onChange(value: boolean): void;
}

export default function AspectRatioToggle({
    checked,
    onChange,
}: Props) {

    return (

        <label className="flex items-center gap-3">

            <input
                type="checkbox"
                checked={checked}
                onChange={(e) =>
                    onChange(e.target.checked)
                }
            />

            <span className="text-sm">
                Lock Aspect Ratio
            </span>

        </label>

    );

}