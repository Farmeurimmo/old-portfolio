"use client";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from "next/link";
import {faCss3, faHtml5, faJava, faJs, faPython, faReact} from '@fortawesome/free-brands-svg-icons'


const skills = [
    {
        name: "Java",
        href: "https://java.com",
        label: "Java",
        description: "Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy (cofondateur de Sun Microsystems en 1982), présenté officiellement le 23 mai 1995 au SunWorld.",
        niveau: 5,
        icon: <FontAwesomeIcon icon={faJava}/>,
        handle: "",
    },
    {
        name: "HTML",
        href: "https://fr.wikipedia.org/wiki/Hypertext_Markup_Language",
        label: "HTML",
        description: "L'HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour structurer et représenter les pages web.",
        icon: <FontAwesomeIcon icon={faHtml5}/>,
        niveau: 5,
    },
    {
        name: "CSS",
        href: "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade",
        label: "CSS",
        description: "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML.",
        niveau: 5,
        icon: <FontAwesomeIcon icon={faCss3}/>,
    },
    {
        name: "Python",
        href: "https://fr.wikipedia.org/wiki/Python_(langage)",
        label: "Python",
        description: "Python est un langage de programmation interprété, multi-paradigme et multiplateformes.",
        niveau: 4,
        icon: <FontAwesomeIcon icon={faPython}/>,
    },
    {
        name: "SQL",
        href: "https://fr.wikipedia.org/wiki/Structured_Query_Language",
        label: "SQL",
        description: "SQL est un langage informatique normalisé servant à exploiter des bases de données relationnelles.",
        niveau: 4,
        icon: <i className="fas fa-database">SQL</i>,
    },
    {
        name: "C++",
        href: "https://fr.wikipedia.org/wiki/C%2B%2B",
        label: "C++",
        description: "Le C++ est un langage de programmation compilé permettant la programmation sous de multiples paradigmes. Ses principales instructions sont proches de celles du langage C, dont il est une extension, mais le langage supporte le polymorphisme et les objets.",
        niveau: 3,
        icon: <i className="fab fa-cuttlefish">C++</i>,
    },
    {
        name: "JavaScript",
        href: "https://fr.wikipedia.org/wiki/JavaScript",
        label: "JavaScript",
        description: "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs avec l'utilisation (par exemple) de Node.js.",
        niveau: 3,
        icon: <FontAwesomeIcon icon={faJs}/>,
    },
    {
        name: "TypeScript",
        href: "https://fr.wikipedia.org/wiki/TypeScript",
        label: "TypeScript",
        description: "TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript.",
        niveau: 3,
        icon: <i className="fab fa-microsoft">TS</i>,
    },
];

const apis = [
    {
        name: "API Spigot/Paper/Purpur",
        href: "https://papermc.io",
        label: "API Spigot/Paper/Purpur",
        description: "L'API spigot est une API Java permettant de créer des plugins pour le serveur Minecraft Spigot.",
        niveau: 5,
        icon: <i className="fab fa-paper-plane">Paper</i>,
    },
    {
        name: "API Velocity",
        href: "https://velocitypowered.com",
        label: "API Velocity",
        description: "L'API Velocity est une API Java permettant de créer des plugins pour le proxy Velocity.",
        niveau: 5,
        icon: <i className="fab fa-rocket">Velocity</i>,
    },
    {
        name: "API BungeeCord",
        href: "https://www.spigotmc.org",
        label: "API BungeeCord",
        description: "L'API BungeeCord est une API Java permettant de créer des plugins pour le proxy BungeeCord.",
        niveau: 5,
        icon: <i className="fab fa-rocket">BungeeCord</i>,
    },
]

const frameworks = [
    {
        name: "Spring",
        href: "https://spring.io",
        label: "Spring",
        description: "Spring est un framework libre pour construire et définir l'infrastructure d'une application Java, dont il facilite le développement et les tests.",
        niveau: 4,
        icon: <i className="fab fa-spring">Spring</i>,
    },
    {
        name: "React",
        href: "https://reactjs.org",
        label: "React",
        description: "React est un framework JavaScript libre développé par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.",
        niveau: 3,
        icon: <FontAwesomeIcon icon={faReact}/>,
    },
]

const listOfLevels = [
    {
        name: "Débutant",
        num: 1,
    },
    {
        name: "Débutant-Moyen",
        num: 2,
    },
    {
        name: "Moyen",
        num: 3,
    },
    {
        name: "Avancé",
        num: 4,
    },
    {
        name: "Maîtrisé",
        num: 5,
    },
]

export default function Dev() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <title>Développeur - Farmeurimmo</title>
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-32">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Langages</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 sm:grid-cols-3 lg:gap-16">
                    {skills.map((s, index) => (
                        <Card>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-18 lg:pb-20 md:p-16"
                            >
								<span
                                    className="absolute w-px h-1/4 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span
                                    className="relative z-10 flex items-center justify-center w-20 h-20 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
                                <div className="z-10 flex flex-col items-center">
									<span
                                        className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
                                    <span
                                        className="text-sm font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                                        {s.name}
                                    </span>
                                    <span className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {s.description}
                                    </span>
                                    <div className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num <= s.niveau ? <span className="text-green-400">■</span> :
                                                    <span className="text-red-400">■</span>}
                                            </span>
                                        ))}
                                        <p>Niveau {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num === s.niveau ? <span>{l.name}</span> : null}
                                            </span>
                                        ))}</p>
                                    </div>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-32">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">APIs</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 sm:grid-cols-3 lg:gap-16">
                    {apis.map((s, index) => (
                        <Card>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-18 lg:pb-20 md:p-16"
                            >
                                <span
                                    className="absolute w-px h-1/4 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span
                                    className="relative z-10 flex items-center justify-center w-20 h-20 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {s.icon}
                                </span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span
                                        className="text-sm font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                                        {s.name}
                                    </span>
                                    <span className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {s.description}
                                    </span>
                                    <div className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num <= s.niveau ? <span className="text-green-400">■</span> :
                                                    <span className="text-red-400">■</span>}
                                            </span>
                                        ))}
                                        <p>Niveau {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num === s.niveau ? <span>{l.name}</span> : null}
                                            </span>
                                        ))}</p>
                                    </div>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-32">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Frameworks</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 sm:grid-cols-3 lg:gap-16">
                    {frameworks.map((s, index) => (
                        <Card>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-18 lg:pb-20 md:p-16"
                            >
                                <span
                                    className="absolute w-px h-1/4 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span
                                    className="relative z-10 flex items-center justify-center w-20 h-20 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {s.icon}
                                </span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span
                                        className="text-sm font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                                        {s.name}
                                    </span>
                                    <span className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {s.description}
                                    </span>
                                    <div className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                                        {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num <= s.niveau ? <span className="text-green-400">■</span> :
                                                    <span className="text-red-400">■</span>}
                                            </span>
                                        ))}
                                        <p>Niveau {listOfLevels.map((l) => (
                                            <span className="font-bold">
                                                {l.num === s.niveau ? <span>{l.name}</span> : null}
                                            </span>
                                        ))}</p>
                                    </div>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
                <div className="mt-32"/>
            </div>
        </div>
    );
}