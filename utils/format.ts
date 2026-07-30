export function formatPercent(
    value: number
) {

    return `${value.toFixed(1)}%`;

}

export function formatDimension(

    width: number,

    height: number

) {

    return `${width} × ${height}`;

}

export function formatNumber(
    value: number
) {

    return new Intl.NumberFormat().format(value);

}