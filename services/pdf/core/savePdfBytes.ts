export function savePdfBytes(
    bytes: Uint8Array,
    name: string,
) {
    return new File(
        [bytes],
        name,
        {
            type: "application/pdf",
        },
    );
}