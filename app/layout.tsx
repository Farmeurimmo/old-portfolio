import "../global.css";
import {Inter} from "@next/font/google";
import LocalFont from "@next/font/local";
import {Metadata} from "next";
//import {Analytics} from "./components/analytics";
import {Analytics} from '@vercel/analytics/react';

export const metadata: Metadata = {
    title: {
        default: "Accueil - Farmeurimmo",
        template: "%s - Farmeurimmo",
    },
    description: "Développeur Développeur Java, API Minecraft : Spigot/Paper/Purpur/Bungee/Velocity, Web (HTML,CSS,JS/TS), C++, SQL, Python. Administrateur Système. Amateur de cybersécurité & d'IA",
    openGraph: {
        title: "Farmeurimmo",
        description:
            "Développeur et Administrateur système",
        url: "https://farmeurimmo.fr",
        siteName: "Farmeurimmo",
        images: [
            {
                url: "https://cdn.farmeurimmo.fr/img/logo.jpg",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "fr-FR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "Farmeurimmo",
        card: "summary_large_image",
    },
    icons: {
        shortcut: "/favicon.ico",
    },
};
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const calSans = LocalFont({
    src: "../public/fonts/CalSans-SemiBold.ttf",
    variable: "--font-calsans",
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className={[inter.variable, calSans.variable].join(" ")}>
        <head>
            <meta charSet="utf-8"/>
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta property="og:title" content=""/>
            <meta property="og:type" content=""/>
            <meta property="og:url" content=""/>
            <meta property="og:image" content=""/>
            <meta property="og:locale" content="fr_FR"/>
            <meta property="og:description" content=""/>
            <link rel="canonical" href="https://farmeurimmo.fr"/>
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.jpg"/>
        </head>
        <body
            className={`bg-black ${
                process.env.NODE_ENV === "development" ? "debug-screens" : undefined
            }`}
        >
        {children}
        <Analytics/>
        </body>
        </html>
    );
}
