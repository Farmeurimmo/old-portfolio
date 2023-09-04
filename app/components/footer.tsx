"use client";
import Link from 'next/link';
import React from "react";
import {useTranslation} from "react-i18next";

export default function Footer() {
    const {t} = useTranslation();

    return (
        <div className="flex items-center justify-center gap-4 animate-fade-in p-20">
            <Link
                target="_blank"
                href="https://farmeurimmo.fr"
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
                Copyright © 2023 Farmeurimmo
            </Link>
            <Link href="https://github.com/Farmeurimmo/portfolio"
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                {t('footer_open_source')}
            </Link>
            <Link
                target="_blank"
                href="https://status.farmeurimmo.fr"
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
                {t('footer_services_status')}
            </Link>
        </div>
    );
}