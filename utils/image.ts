export function getImageSize(

    width: number,

    height: number

) {

    return `${width} × ${height}`;

}

export function isLandscape(

    width: number,

    height: number

) {

    return width > height;

}