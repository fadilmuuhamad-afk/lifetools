export function validateJson(

    input: string,

): boolean {

    try {

        JSON.parse(input);

        return true;

    } catch {

        return false;

    }

}