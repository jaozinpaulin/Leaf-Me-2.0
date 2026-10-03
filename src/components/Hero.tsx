"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import KingdomDonut from "./KingdomDonut";

export type KingdomType = "0" | "1" | "2";

interface Specimen {
    id: KingdomType;
    kingdom: string;
    image: string;
}

const specimens: Specimen[] = [
    {
        id: "0",
        kingdom: "Animalia",
        image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1920&auto=format&fit=crop",
    },
    {
        id: "1",
        kingdom: "Plantae",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1920&auto=format&fit=crop",
    },
    {
        id: "2",
        kingdom: "Fungi",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1920&auto=format&fit=crop",
    },
    {
        id: "0",
        kingdom: "Animalia",
        image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1920&auto=format&fit=crop",
    },
    {
        id: "1",
        kingdom: "Plantae",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&auto=format&fit=crop",
    },
    {
        id: "2",
        kingdom: "Fungi",
        image: "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=1920&auto=format&fit=crop",
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
        setActiveIndex(
            (current) => (current - 1 + specimens.length) % specimens.length
        );
    };

    return (
        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-leaf-bg text-leaf-text flex items-center">
            <div
                className="absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-105 filter brightness-75"
                style={{ backgroundImage: `url(${specimen.image})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />

            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-between px-6 py-10 lg:px-10">
                <div className="relative flex flex-1 items-center justify-between my-auto">
                    <div className="relative w-full max-w-2xl py-12">
                        <h1 className="
                                absolute
                                -top-8
                                left-0
                                select-none
                                font-display
                                text-[clamp(4.5rem,13vw,12rem)]
                                font-bold
                                uppercase
                                leading-none
                                tracking-tighter
                                text-transparent
                                opacity-30
                                [-webkit-text-stroke:1.5px_rgba(255,255,255,0.7)]
                                pointer-events-none
                                z-0
                                transition-all
                                duration-500
                            "
                        >
                            {specimen.kingdom}
                        </h1>

                        <div className="relative z-10">
                            <h2 className="font-display text-5xl font-bold uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
                                {specimen.kingdom}
                            </h2>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-center relative z-10 pl-8">
                        <KingdomDonut kingActive={specimen.id} />
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/15 pt-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                        0{activeIndex + 1} / 0{specimens.length}
                    </span>

                    <div className="flex items-center gap-2">
                        <button onClick={handlePrev} aria-label="Previous specimen"
                            className="
                                flex h-9 w-9 cursor-pointer
                                items-center justify-center
                                rounded-none
                                border border-white/25
                                bg-black/40
                                text-white/80
                                transition
                                hover:border-white/60
                                hover:bg-black/60
                                hover:text-white
                            "
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>

                        <button onClick={handleNext} aria-label="Next specimen"
                            className="
                                flex h-9 w-9 cursor-pointer
                                items-center justify-center
                                rounded-none
                                border border-white/25
                                bg-black/40
                                text-white/80
                                transition
                                hover:border-white/60
                                hover:bg-black/60
                                hover:text-white
                            "
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}