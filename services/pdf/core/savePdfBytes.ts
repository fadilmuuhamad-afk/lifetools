export function savePdfBytes(
    bytes: Uint8Array,
    name: string,
) {
    const buffer = new ArrayBuffer(bytes.length);

    new Uint8Array(buffer).set(bytes);

    return new File(
        [buffer],
        name,
        {
            type: "application/pdf",
        },
    );
}