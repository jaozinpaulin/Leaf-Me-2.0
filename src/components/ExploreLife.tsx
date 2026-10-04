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
        <section className="border-t border-white/10 bg-black px-6 py-28 md:px-10 overflow-hidden text-white">
            <div className="mx-auto max-w-7xl">
                <h2 className="font-display mb-16 text-center text-3xl tracking-tight text-white md:text-4xl">
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
                            <article
                                key={specimen.key}
                                className={`group relative flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-white/30 hover:bg-white/10 ${offsetStyle}`}
                            >
                                <div className="aspect-[4/3] overflow-hidden bg-black/50 border border-white/10 relative rounded-md mb-5">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={specimen.scientificName}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90"
                                            onError={(event) => {
                                                event.currentTarget.style.display = "none";
                                            }}
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-white/40">
                                            No image
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
                                </div>

                                <div className="flex items-end justify-between pt-2">
                                    <div>
                                        <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                                            {specimen.kingdom || "Specimen"}
                                        </p>

                                        <h3 className="font-display text-lg italic text-white transition-colors group-hover:text-white/80">
                                            {specimen.scientificName}
                                        </h3>
                                    </div>

                                    <div className="flex h-8 w-8 items-center justify-center rounded-none border border-white/20 bg-black/40 text-white/70 transition-colors group-hover:border-white/40 group-hover:text-white">
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