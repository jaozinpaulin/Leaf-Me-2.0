"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % specimens.length);
    };

    const handlePrev = () => {
        setActiveIndex((current) => (current - 1 + specimens.length) % specimens.length);
    };

    return (
        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-leaf-bg text-leaf-text flex items-center">
            <video
                key={specimen.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-1000 ease-in-out"
                src={specimen.video}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-12 lg:gap-8 lg:px-10">

                <div className="lg:col-span-6 lg:pr-6">
                    <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-leaf-text xl:text-6xl">
                        Explore the diversity of life.
                    </h1>

                    <div className="mt-7 h-px w-16 bg-leaf-accent/80" />

                    <p className="mt-6 max-w-md text-sm leading-7 text-leaf-muted/90">
                        A scientific journey through the biological lineages that shape life on Earth. Discover specimens cataloged with precision.
                    </p>

                    <div className="mt-10 flex items-center justify-between border-t border-leaf-border/60 pt-4 max-w-md">
                        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted">
                            Index: 0{activeIndex + 1} / 0{specimens.length}
                        </span>
                        <div className="flex items-center gap-2.5">
                            <button
                                onClick={handlePrev}
                                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-leaf-border/60 bg-leaf-surface/40 text-leaf-text/80 transition-all hover:bg-leaf-surface hover:text-leaf-text hover:scale-105"
                                aria-label="Previous specimen"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-leaf-border/60 bg-leaf-surface/40 text-leaf-text/80 transition-all hover:bg-leaf-surface hover:text-leaf-text hover:scale-105"
                                aria-label="Next specimen"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
                    <div className="flex items-center justify-center w-full p-6 rounded-2xl border border-leaf-border/30 bg-leaf-surface/10 backdrop-blur-sm">
                        <KingdomDonut kingActive={specimen.id} />
                    </div>
                </div>

            </div>
        </section>
    );
}