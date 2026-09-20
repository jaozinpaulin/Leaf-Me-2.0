"use client";

import { useEffect, useState } from "react";
import KingdomDonut from "./KingdomDonut";

export type KingdomType = "0" | "1" | "2";

interface Speci {
    id: KingdomType;
    kingdom: string;
    video: string;
}

const specimens: Speci[] = [
    {
        id: "0",
        kingdom: "Animalia",
        video: "/videos/animalia1.mp4",
    },
    {
        id: "1",
        kingdom: "Plantae",
        video: "/videos/flora1.mp4",
    },
    {
        id: "2",
        kingdom: "Fungi",
        video: "/videos/fungi1.mp4",
    },
    {
        id: "0",
        kingdom: "Animalia",
        video: "/videos/animalia2.mp4",
    },
    {
        id: "1",
        kingdom: "Plantae",
        video: "/videos/flora2.mp4",
    },
    {
        id: "2",
        kingdom: "Fungi",
        video: "/videos/fungi2.mp4",
    },
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const specimen = specimens[activeIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % specimens.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-leaf-bg text-leaf-text">
            <video
                key={specimen.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-700 ease-in-out"
                src={specimen.video}
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-12 lg:gap-8 lg:px-10">

                <div className="lg:col-span-6 lg:pr-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-leaf-accent">
                        Kingdom {specimen.kingdom}
                    </span>

                    <h1 className="mt-5 font-display text-5xl leading-[0.94] tracking-tight text-leaf-text xl:text-6xl">
                        Explore the
                        <br />
                        diversity
                        <br />
                        of life.
                    </h1>

                    <div className="mt-7 h-px w-12 bg-leaf-accent" />

                    <p className="mt-6 max-w-sm text-sm leading-7 text-leaf-muted">
                        A scientific journey through the biological lineages
                        that shape life on Earth.
                    </p>

                    <div className="mt-12 border-t border-leaf-border pt-4 max-w-md">
                        <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.12em] text-leaf-muted">
                            <span>Live Index: 0{activeIndex + 1} / 06</span>
                            <span>Synchronized</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
                    <div className="flex items-center justify-center w-full">
                        <KingdomDonut kingActive={specimen.id} />
                    </div>
                </div>

            </div>
        </section>
    );
}