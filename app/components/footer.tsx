import Link from 'next/link';
import React from "react";

export default function Footer() {
    //Place | if we are in a row and nothing if we are in a column
    return (
        <div className="flex items-center justify-center gap-4 animate-fade-in p-20">
            <Link
                target="_blank"
                href="https://farmeurimmo.fr"
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
                Copyright © 2023 Farmeurimmo
            </Link>
            <Link href="https://github.com/Farmeurimmo/portfolio" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                Open source
            </Link>
            <Link
                target="_blank"
                href="https://status.farmeurimmo.fr"
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
                Services status
            </Link>
        </div>
    );
}