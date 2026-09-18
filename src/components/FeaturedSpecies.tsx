"use client"

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const specimens = [
    {
        number: "01",
        kingdom: "Plantae",
        species: "Adiantum pedatum",
        classification: "Tracheophyta",
        image: "/plantae.webp",
    },
    {
        number: "02",
        kingdom: "Animalia",
        species: "Specimen Archive",
        classification: "Chordata",
        image: "/animalia.webp",
    },
    {
        number: "03",
        kingdom: "Fungi",
        species: "Specimen Archive",
        classification: "Basidiomycota",
        image: "/fungi.webp",
    },
    {
        number: "03",
        kingdom: "Fungi",
        species: "Specimen Archive",
        classification: "Basidiomycota",
        image: "/fungi.webp",
    },
    {
        number: "03",
        kingdom: "Fungi",
        species: "Specimen Archive",
        classification: "Basidiomycota",
        image: "/fungi.webp",
    },
    {
        number: "03",
        kingdom: "Fungi",
        species: "Specimen Archive",
        classification: "Basidiomycota",
        image: "/fungi.webp",
    },
    {
        number: "03",
        kingdom: "Fungi",
        species: "Specimen Archive",
        classification: "Basidiomycota",
        image: "/fungi.webp",
    },
    {
        number: "03",
        kingdom: "Fungi",
        species: "Specimen Archive",
        classification: "Basidiomycota",
        image: "/fungi.webp",
    },
    {
        number: "03",
        kingdom: "Fungi",
        species: "Specimen Archive",
        classification: "Basidiomycota",
        image: "/fungi.webp",
    },
    {
        number: "03",
        kingdom: "Fungi",
        species: "Specimen Archive",
        classification: "Basidiomycota",
        image: "/fungi.webp",
    },
];

export default function FeaturedSpecies() {
    const scrollRef = useRef<HTMLDivElement>(null);

    function scroll(direction: "left" | "right") {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: direction === "right" ? 300 : -300,
            behavior: "smooth",
        });
    };


    return (
        <section className="border-b border-leaf-border bg-leaf-bg text-leaf-text">
            <div className="px-4 py-16 lg:px-6 lg:py-20">
                <div className="text-center">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-leaf-accent">
                        Archive / Specimens
                    </span>

                    <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                        Featured species.
                    </h2>

                    <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-leaf-muted">
                        Selected specimens from the living archive.
                    </p>
                </div>

                <div className="relative mt-14">
                    <button
                        onClick={() => scroll("left")}
                        aria-label="Previous specimens"
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 border border-leaf-border bg-leaf-surface p-3 text-leaf-text transition-colors hover:text-leaf-accent"
                    >
                        <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>

                    <div ref={scrollRef}
                        className="flex items-center gap-8 overflow-x-auto scrollbar-none">
                        {specimens.map((specimen) => (
                            <article
                                key={specimen.number}
                                className="shrink-0 text-center p-2 border border-leaf-border">
                                <div className="mx-auto w-full max-w-[220px]">
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={specimen.image}
                                            alt={specimen.species}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>

                                <span className="mt-5 block font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-accent">
                                    {specimen.number} / {specimen.kingdom}
                                </span>

                                <h3 className="mt-2 font-display text-xl italic">
                                    {specimen.species}
                                </h3>

                                <span className="mt-2 block font-mono text-[8px] uppercase tracking-[0.12em] text-leaf-muted">
                                    {specimen.classification}
                                </span>
                            </article>
                        ))}
                    </div>
                    <button
                        onClick={() => scroll("right")}
                        aria-label="Next specimens"
                        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 border border-leaf-border bg-leaf-surface p-3 text-leaf-text transition-colors hover:text-leaf-accent"
                    >
                        <ChevronRight size={24} strokeWidth={1.5} />
                    </button>
                </div>

            </div>
        </section>
    );
}