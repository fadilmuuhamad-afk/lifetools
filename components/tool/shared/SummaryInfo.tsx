"use client";

import {
    SummaryCard,
    SummaryGrid,
    SummaryRow,
} from "@/components/tool/summary";

interface Item {

    label: string;

    value: string | number;

}

interface Props {

    title: string;

    items: Item[];

}

export default function SummaryInfo({

    title,

    items,

}: Props) {

    return (

        <SummaryCard title={title}>

            <SummaryGrid>

                {items.map((item) => (

                    <SummaryRow

                        key={item.label}

                        label={item.label}

                        value={item.value}

                    />

                ))}

            </SummaryGrid>

        </SummaryCard>

    );

}