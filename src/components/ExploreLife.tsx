// Teste inicial com dados reais da API do GBIF.
// Por enquanto, carregando apenas registros de Plantae.

"use client";

import { useEffect, useState } from "react";

import { useGbif } from "@/hooks/useBbif";

export default function ExploreLife() {
    const { getFungiSpecimens } = useGbif();

    const [specimens, setSpecimens] = useState<any[]>([]);

    useEffect(() => {
        async function loadSpecimens() {
            try {
                const data = await getFungiSpecimens();

                setSpecimens(data);
            } catch (error) {
                console.error("Failed to load Plantae specimens:", error);
            }
        }

        loadSpecimens();
    }, []);

    return (
        <section className="border-t border-leaf-border px-6 py-24 md:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-xl">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-leaf-accent">
                        Explore Life
                    </p>

                    <h2 className="font-display text-3xl tracking-tight text-leaf-text md:text-4xl">
                        A closer look at life.
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-leaf-muted">
                        Discover organisms across the living world, from plants and
                        animals to fungi.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {specimens.map((specimen) => {
                        const image = specimen.media?.find(
                            (media: any) => media.type === "StillImage"
                        )?.identifier;

                        return (
                            <article
                                key={specimen.key}
                                className="group overflow-hidden border border-leaf-border bg-leaf-surface"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={specimen.scientificName}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            onError={(event) => {
                                                event.currentTarget.style.display =
                                                    "none";
                                            }}
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-xs text-leaf-muted">
                                            No image
                                        </div>
                                    )}
                                </div>

                                <div className="p-5">
                                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-leaf-muted">
                                        {specimen.kingdom}
                                    </p>

                                    <h3 className="font-display text-lg italic text-leaf-text">
                                        {specimen.scientificName}
                                    </h3>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
