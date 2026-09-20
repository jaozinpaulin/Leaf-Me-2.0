"use client";

import { useEffect, useState } from "react";
import KingdomDonut from "./KingdomDonut";
export type KingdomType = "0" | "1" | "2";

interface Speci {
    id: KingdomType;
    video: string;
    kingdom: string;
    division: string;
    species: string;
    scale: string;
    catalog: string;
}

const specimens: Speci[] = [
    {
        id: "0",
        video: "/videos/animalia1.mp4",
        kingdom: "Animalia",
        division: "Chordata",
        species: "Specimen Archive",
        scale: "—",
        catalog: "2026.09 — AN",
    },
    {
        id: "1",
        video: "/videos/flora1.mp4",
        kingdom: "Plantae",
        division: "Tracheophyta",
        species: "Adiantum pedatum",
        scale: "100 μm",
        catalog: "2026.09 — TR",
    },
    {
        id: "2",
        video: "/videos/fungi1.mp4",
        kingdom: "Fungi",
        division: "Basidiomycota",
        species: "Specimen Archive",
        scale: "—",
        catalog: "2026.09 — FU",
    },
    {
        id: "0",
        video: "/videos/animalia2.mp4",
        kingdom: "Animalia",
        division: "Chordata",
        species: "Specimen Archive",
        scale: "—",
        catalog: "2026.09 — AN",
    },
    {
        id: "1",
        video: "/videos/flora2.mp4",
        kingdom: "Plantae",
        division: "Tracheophyta",
        species: "Adiantum pedatum",
        scale: "100 μm",
        catalog: "2026.09 — TR",
    },
    {
        id: "2",
        video: "/videos/fungi2.mp4",
        kingdom: "Fungi",
        division: "Basidiomycota",
        species: "Specimen Archive",
        scale: "—",
        catalog: "2026.09 — FU",
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
                className="absolute inset-0 h-full w-full object-cover"
                src={specimen.video}
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-12 lg:gap-8 lg:px-10">

                <div className="order-2 lg:order-1 lg:col-span-3">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-leaf-accent">
                            Vol. I
                        </span>

                        <span className="h-px w-8 bg-leaf-border" />

                        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted">
                            Kingdom Survey
                        </span>
                    </div>

                    <div className="mt-10 space-y-8">
                        <div className="border-l border-leaf-accent pl-4">
                            <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted">
                                Primary Domain
                            </span>

                            <span className="mt-1 block font-mono text-xs text-leaf-text">
                                Eukaryota / {specimen.kingdom}
                            </span>
                        </div>

                        <div className="border-l border-leaf-border pl-4">
                            <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted">
                                Division
                            </span>

                            <span className="mt-1 block font-mono text-xs text-leaf-text">
                                {specimen.division}
                            </span>
                        </div>

                        <div className="border-l border-leaf-border pl-4">
                            <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted">
                                Catalog Reference
                            </span>

                            <span className="mt-1 block font-mono text-xs text-leaf-text">
                                {specimen.catalog}
                            </span>
                        </div>
                    </div>

                    <div className="mt-12 hidden font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted lg:block">
                        Scientific Archive
                    </div>
                </div>

                <div className="order-1 lg:order-2 lg:col-span-6">
                    {/* <div className="relative flex aspect-[4/5] w-full items-end overflow-hidden border border-leaf-border bg-black/20">

                        <div className="absolute left-5 top-5 font-mono text-[9px] uppercase leading-5 tracking-[0.12em] text-leaf-text">
                            <p>Kingdom: {specimen.kingdom}</p>
                            <p>Division: {specimen.division}</p>
                            <p>Species: {specimen.species}</p>
                        </div>

                        <div className="absolute right-5 top-5 font-mono text-[9px] uppercase tracking-[0.12em] text-leaf-muted">
                            TAXA.0{activeIndex + 1}
                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                            <div>
                                <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-text">
                                    0{activeIndex + 1} / Specimen Focus
                                </span>

                                <span className="mt-2 block h-px w-16 bg-leaf-accent" />
                            </div>

                            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted">
                                {specimen.scale}
                            </span>
                        </div>
                    </div> */}

                    <div className="mt-4 flex items-center justify-between">
                        <KingdomDonut kingActive={specimen.id} />

                        {/* <div className="flex items-center gap-3">
                            {specimens.map((item, index) => (
                                <button
                                    key={item.kingdom}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`View ${item.kingdom} specimen`}
                                    className="flex items-center gap-2"
                                >
                                    <span
                                        className={`h - px transition - all duration - 300 ${index === activeIndex
                                            ? "w-10 bg-leaf-accent"
                                            : "w-4 bg-leaf-border"
                                            } `}
                                    />

                                    <span
                                        className={`font - mono text - [8px] transition - colors duration - 300 ${index === activeIndex
                                            ? "text-leaf-text"
                                            : "text-leaf-muted"
                                            } `}
                                    >
                                        0{index + 1}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-muted">
                            Archive / 03
                        </span> */}


                    </div>
                </div>

                <div className="order-3 lg:col-span-3 lg:pl-6">
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

                    <div className="mt-12 border-t border-leaf-border pt-4">
                        <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.12em] text-leaf-muted">
                            <span>Live Index</span>
                            <span>Synchronized</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

