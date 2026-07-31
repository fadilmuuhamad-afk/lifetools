import type {

    LoremOptions,

} from "./types";

const WORDS = [

    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "enim",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "aliquip",
    "commodo",

];

function randomWord() {

    return WORDS[
        Math.floor(
            Math.random() * WORDS.length,
        )
    ];

}

function createSentence() {

    const length =
        Math.floor(
            Math.random() * 10,
        ) + 8;

    const words = Array.from(

        {

            length,

        },

        randomWord,

    );

    const sentence = words.join(" ");

    return (

        sentence.charAt(0).toUpperCase() +

        sentence.slice(1) +

        "."

    );

}

function createParagraph() {

    const count =
        Math.floor(
            Math.random() * 3,
        ) + 4;

    return Array.from(

        {

            length: count,

        },

        createSentence,

    ).join(" ");

}

export function generateLorem({

    type,

    amount,

}: LoremOptions) {

    switch (type) {

        case "words":

            return Array.from(

                {

                    length: amount,

                },

                randomWord,

            ).join(" ");

        case "sentences":

            return Array.from(

                {

                    length: amount,

                },

                createSentence,

            ).join(" ");

        case "paragraphs":

            return Array.from(

                {

                    length: amount,

                },

                createParagraph,

            ).join("\n\n");

    }

}