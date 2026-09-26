"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useGbif } from "@/hooks/useBbif";

export default function FeaturedSpecies() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const { getPlantaeSpecimens } = useGbif();

    const [specimens, setSpecimens] = useState<any[]>([]);

    useEffect(() => {
        async function loadSpecimens() {
            try {
                const data = await getPlantaeSpecimens();

                setSpecimens(data);
            } catch (error) {
                console.error("Failed to load Plantae specimens:", error);
            }
        }

        loadSpecimens();
    }, []);

    function scroll(direction: "left" | "right") {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: direction === "right" ? 340 : -340,
            behavior: "smooth",
        });
    }

    return (
        <section className="border-b border-leaf-border/40 bg-leaf-bg text-leaf-text overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="text-center">

                    <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">
                        Featured species.
                    </h2>

                    <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-leaf-muted">
                        Selected specimens from the living archive, cataloged with botanical precision.
                    </p>
                </div>

                <div className="relative mt-14 group/carousel">
                    <button
                        onClick={() => scroll("left")}
                        aria-label="Previous specimens"
                        className="absolute -left-5 top-1/2 z-10 hidden sm:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-leaf-border/40 bg-leaf-surface/80 backdrop-blur-md text-leaf-text transition-all hover:border-leaf-border hover:scale-105"
                    >
                        <ChevronLeft size={18} strokeWidth={1.5} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 px-2"
                    >
                        {specimens.map((specimen, index) => {
                            const image = specimen.media?.find(
                                (media: any) =>
                                    media.type === "StillImage"
                            )?.identifier;

                            return (
                                <article
                                    key={specimen.key}
                                    className="shrink-0 w-[260px] flex flex-col justify-between p-4 border border-leaf-border/30 bg-leaf-surface/20 transition-all duration-300 hover:border-leaf-border/70 hover:bg-leaf-surface/40 rounded-xl"
                                >
                                    <div>
                                        <div className="aspect-square overflow-hidden bg-black/40 border rounded-xl border-leaf-border/30 mb-4 relative">
                                            {image ? (
                                                <img
                                                    src={image}
                                                    alt={
                                                        specimen.scientificName
                                                    }
                                                    className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-leaf-muted">
                                                    No image
                                                </div>
                                            )}
                                        </div>

                                        <span className="block font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-accent">
                                            {specimen.kingdom || "Plantae"}
                                        </span>

                                        <h3 className="mt-2 font-display text-lg italic text-leaf-text">
                                            {specimen.scientificName}
                                        </h3>
                                    </div>

                                    <span className="mt-4 block font-mono text-[8px] uppercase tracking-[0.12em] text-leaf-muted/80 border-t border-leaf-border/30 pt-3 truncate">
                                        Family: {specimen.family ?? "N/A"}
                                    </span>
                                </article>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        aria-label="Next specimens"
                        className="absolute -right-5 top-1/2 z-10 hidden sm:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-leaf-border/40 bg-leaf-surface/80 backdrop-blur-md text-leaf-text transition-all hover:border-leaf-border hover:scale-105"
                    >
                        <ChevronRight size={18} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </section>
    );
}