"use client";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import Footer from "@/app/components/footer";
import React from "react";

const competences = [
    {
        name: "Configurer un nom de domaine",
    },
    {
        name: "Installer linux sur des serveurs (avec ou sans raid)",
    },
    {
        name: "Installer docker, docker-compose, portainer, pterodactyl, etc...",
    },
    {
        name: "Installer et configurer un serveur web (apache, nginx, etc...)",
    },
    {
        name: "Installer et configurer un serveur de base de données (mysql, mariadb, etc...)",
    },
    {
        name: "Mettre en place des services : apis, serveur de jeu, etc...",
    },
    {
        name: "Mettre en place des tunnels cloudflare pour sécuriser/restraindre l'accès à un service",
    },
]

export default function As() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <title>Administrateur Système - Farmeurimmo</title>
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-32">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Compétences</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 sm:grid-cols-3 lg:gap-16">
                    {competences.map((competence, index) => (
                        <Card>
                            <div className="flex flex-col items-center justify-center w-full h-full p-8">
                                <h3 className="text-2xl text-white">{competence.name}</h3>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mt-32"/>
            </div>
            <Footer/>
        </div>
    )
}