import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
    {name: "Développeur", href: "/dev"},
    {name: "Administrateur système", href: "/as"},
    {name: "Statistiques", href: "/stats"},
    {name: "Blog & Projets", href: "/projets"},
    {name: "Contact", href: "/contact"},
];

export default function Home() {
    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <title>Accueil - Farmeurimmo</title>
            <nav className="my-16 animate-fade-in" id="home">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
                id="name">
                Farmeurimmo
            </h1>

            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <div className="my-16 text-left animate-fade-in" id="home">
                <p className="text-sm text-zinc-400 ">
                    Développeur Java, API Minecraft : Spigot/Paper/Purpur/Bungee/Velocity, Web (HTML,CSS,JS/TS), C++,
                    SQL, Python
                    <br/>
                    <br/>
                    Administrateur Système
                    <br/>
                    <br/>
                    Amateur de cybersécurité & d'IA
                    <br/>
                    <br/>
                    <br/>
                    Développeur chez{" "}
                    <Link
                        target="_blank"
                        href="https://noctis.rip"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        Noctis
                    </Link>
                    <br/>
                    <br/>
                    Administrateur & Développeur chez{" "}
                    <Link
                        target="_blank"
                        href="https://opaleuhc.fr"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        Opale
                    </Link>{" "}
                    <br/>
                    <br/>
                </p>
                <p className="text-zinc-600">
                    Ce site est en cours de développement, l'<Link
                    target="_blank"
                    href="https://v2.farmeurimmo.fr"
                    className="underline duration-500 hover:text-zinc-300"
                >ancien</Link> existe toujours temporairement mais sera down quand celui ci sera 100% opérationnel.
                </p>
            </div>
        </div>
    );
}
