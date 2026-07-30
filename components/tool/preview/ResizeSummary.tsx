import CardSection from "@/components/ui/CardSection";

interface Props {
    originalWidth: number;
    originalHeight: number;

    width: number;
    height: number;

    keepAspectRatio: boolean;
}

export default function ResizeSummary({
    originalWidth,
    originalHeight,
    width,
    height,
    keepAspectRatio,
}: Props) {

    const scale =
        originalWidth > 0
            ? Math.round(
                (width / originalWidth) * 100
            )
            : 100;
            
    const scaleX =
        originalWidth > 0
            ? Math.round(
                (width / originalWidth) * 100
            )
            : 100;

    const scaleY =
        originalHeight > 0
            ? Math.round(
                (height / originalHeight) * 100
            )
            : 100;

    return (

        <CardSection title="Resize Summary">

            <div className="mt-4 grid gap-4 md:grid-cols-2">

                <div>

                    <p className="text-sm text-muted-foreground">
                        Original
                    </p>

                    <p className="font-medium">

                        {originalWidth} × {originalHeight}

                    </p>

                </div>

                <div>

                    <p className="text-sm text-muted-foreground">
                        Output
                    </p>

                    <p className="font-medium">

                        {width} × {height}

                    </p>

                </div>

                <div>

                    <p className="text-sm text-muted-foreground">
                        Scale
                    </p>

                    <p className="font-medium">

                        {scale}%

                    </p>

                </div>

                <div>

                    <p className="text-sm text-muted-foreground">
                        Aspect Ratio
                    </p>

                    <p className="font-medium">

                        {keepAspectRatio
                            ? "Locked"
                            : "Unlocked"}

                    </p>

                </div>
                <div>

                    <p className="text-sm text-muted-foreground">
                        Width Scale
                    </p>

                    <p className="font-medium">

                        {scaleX}%

                    </p>

                </div>

                <div>

                    <p className="text-sm text-muted-foreground">
                        Height Scale
                    </p>

                    <p className="font-medium">

                        {scaleY}%

                    </p>

                </div>

            </div>

        </CardSection>

    );
    

}