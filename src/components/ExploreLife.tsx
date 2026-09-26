// Teste inicial com dados reais da API do GBIF.
// Por enquanto, carregando apenas registros de Fungi.
// any pra os types por hora 

"use client";

import { useEffect, useState } from "react";
import { useGbif } from "@/hooks/useBbif";
import { ArrowUpRight } from "lucide-react";

export default function ExploreLife() {
    const { getFungiSpecimens } = useGbif();
    const [specimens, setSpecimens] = useState<any[]>([]);

    useEffect(() => {
        async function loadSpecimens() {
            try {
                const data = await getFungiSpecimens();
                setSpecimens(data);
            } catch (error) {
                console.error("Failed to load specimens:", error);
            }
        }

        loadSpecimens();
    }, []);

    return (
        <section className="border-t border-leaf-border/40 bg-leaf-bg px-6 py-28 md:px-10 overflow-hidden">
            <div className="mx-auto max-w-7xl">

                <h2 className="font-display mb-16 text-center text-3xl tracking-tight text-leaf-text md:text-4xl">
                    A closer look at life.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pt-6 pb-12">
                    {specimens.map((specimen, index) => {
                        const image = specimen.media?.find(
                            (media: any) => media.type === "StillImage"
                        )?.identifier;

                        const offsetStyle =
                            index % 3 === 1
                                ? "lg:translate-y-6"
                                : index % 3 === 2
                                    ? "lg:-translate-y-3"
                                    : "lg:translate-y-0";

                        return (
                            <article key={specimen.key}
                                className={`group relative flex flex-col justify-between overflow-hidden border rounded-xl border-leaf-border/30 bg-leaf-surface/20 p-5 transition-all duration-300 hover:border-leaf-border hover:bg-leaf-surface/40 ${offsetStyle}`}
                            >
                                <div className="aspect-[4/3] overflow-hidden bg-black/40 border border-leaf-border/30 relative rounded-xl mb-5">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={specimen.scientificName}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                            onError={(event) => {
                                                event.currentTarget.style.display = "none";
                                            }}
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-leaf-muted">
                                            No image
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30" />
                                </div>

                                <div className="flex items-end justify-between pt-2">
                                    <div>
                                        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-leaf-muted/80">
                                            {specimen.kingdom || "Specimen"}
                                        </p>

                                        <h3 className="font-display text-lg italic text-leaf-text transition-colors group-hover:text-leaf-accent">
                                            {specimen.scientificName}
                                        </h3>
                                    </div>

                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-leaf-border/40 bg-leaf-surface/30 text-leaf-muted transition-colors group-hover:border-leaf-border group-hover:text-leaf-text">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}