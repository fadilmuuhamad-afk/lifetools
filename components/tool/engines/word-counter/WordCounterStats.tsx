"use client";

import type {

    WordCounterResult,

} from "@/services/utility/word-counter";

interface Props {

    stats: WordCounterResult;

}

const items = (

    stats: WordCounterResult,

) => [

        {

            label: "Words",

            value: stats.words,

        },

        {

            label: "Characters",

            value: stats.characters,

        },

        {

            label: "Characters (No Spaces)",

            value: stats.charactersNoSpaces,

        },

        {

            label: "Sentences",

            value: stats.sentences,

        },

        {

            label: "Paragraphs",

            value: stats.paragraphs,

        },

        {

            label: "Reading Time",

            value: `${stats.readingTime} min`,

        },

    ];

export default function WordCounterStats({

    stats,

}: Props) {

    return (

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {

                items(stats).map(

                    (item) => (

                        <div

                            key={item.label}

                            className="
                                rounded-xl
                                border
                                bg-card
                                p-4
                            "

                        >

                            <p className="text-sm text-muted-foreground">

                                {item.label}

                            </p>

                            <p className="mt-2 text-3xl font-bold">

                                {item.value}

                            </p>

                        </div>

                    ),

                )

            }

        </div>

    );

}