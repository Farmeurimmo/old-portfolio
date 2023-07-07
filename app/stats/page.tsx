"use client";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";

export default function Stats() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <title>Statistiques</title>
            <div id="space" className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <div id="space2" className="flex flex-col items-center justify-center w-full mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Quelques
                        statistiques</h1>
                </div>
                <div className="mt-20"/>
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center my-auto gap-8">
                    <Card>
                        <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-20">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Readme
                                stats</h1>
                            <img className="m-10 mt-20"
                                 src="https://github-readme-stats.farmeurimmo.fr/api?username=Farmeurimmo&count_private=true&show_icons=true&theme=radical"
                                 alt="Stats github readme"/>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-20">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Wakatime</h1>
                            <img className="m-10 mt-20"
                                 src="https://raw.githubusercontent.com/Farmeurimmo/Farmeurimmo/main/images/stat.svg"
                                 alt="Stats wakatime"/>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-20">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Timeline</h1>
                            <img className="m-10 mt-20"
                                 src="https://raw.githubusercontent.com/Farmeurimmo/Farmeurimmo/main/assets/bar_graph.png"
                                 alt="Stats wakatime"/>
                        </div>
                    </Card>
                </div>
                <div className="mt-20"/>
            </div>
        </div>
    );
}