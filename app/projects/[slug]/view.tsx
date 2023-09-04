"use client";

import {useEffect} from "react";

export const ReportView: React.FC<{ slug: string }> = ({slug}) => {
    useEffect(() => {
        fetch("https://api.farmeurimmo.fr/portfolio/article/" + slug, {
            method: "POST",
        });
    }, [slug]);

    return null;
};
