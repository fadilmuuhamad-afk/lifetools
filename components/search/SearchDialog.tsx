"use client";

import { useState } from "react";

import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

import SearchCommand from "./SearchCommand";

interface Props {
    open: boolean;
    onOpenChange(open: boolean): void;
}

export default function SearchDialog({
    open,
    onOpenChange,
}: Props) {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent className="max-w-2xl p-0 overflow-hidden">

                <SearchCommand />

            </DialogContent>
        </Dialog>
    );
}