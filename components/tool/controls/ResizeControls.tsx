import DimensionInput from "./DimensionInput";
import AspectRatioToggle from "./AspectRatioToggle";

interface Props {

    width: number;
    height: number;

    setWidth(value: number): void;
    setHeight(value: number): void;

    keepAspectRatio: boolean;
    setKeepAspectRatio(value: boolean): void;

}

export default function ResizeControls({
    width,
    height,
    setWidth,
    setHeight,
    keepAspectRatio,
    setKeepAspectRatio,
}: Props) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <DimensionInput
                label="Width"
                value={width}
                onChange={setWidth}
            />

            <DimensionInput
                label="Height"
                value={height}
                onChange={setHeight}
            />

            <div className="md:col-span-2">

                <AspectRatioToggle
                    checked={keepAspectRatio}
                    onChange={setKeepAspectRatio}
                />

            </div>
        </div>
        
    ); 
}