"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Search } from "lucide-react";
import { useGbif } from "@/hooks/useBbif";

export default function PlantaePage() {
    const { getPlantaeSpecimens } = useGbif();
    const [specimens, setSpecimens] = useState<any[]>([]);

    useEffect(() => {
        async function loadSpecimens() {
            try {
                const data = await getPlantaeSpecimens();
                setSpecimens(data || []);
            } catch (error) {
                console.error("Failed to load Plantae specimens:", error);
            }
        }
        loadSpecimens();
    }, [getPlantaeSpecimens]);

    return (
        <main className="min-h-screen bg-leaf-bg text-leaf-text">
            <section className="relative min-h-[520px] overflow-hidden border-b border-leaf-border">
                <Image
                    src="/Plantae.webp"
                    alt="Plantae"
                    fill
                    priority
                    className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-leaf-bg/60" />

                <header className="absolute inset-x-0 top-0 z-10">
                    <div className="flex items-center justify-between px-6 py-4 lg:px-12">
                        <Link href="/">
                            <Image
                                src="/lifme.webp"
                                alt="Lifme"
                                width={92}
                                height={32}
                                className="h-7 w-auto"
                            />
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center gap-1.5 text-xs text-leaf-muted transition hover:text-leaf-text"
                        >
                            <ArrowLeft size={14} />
                            Back
                        </Link>
                    </div>
                </header>

                <div className="relative z-10 flex min-h-[520px] items-center justify-center px-6 pt-10">
                    <div className="w-full max-w-xl text-center">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-leaf-muted">
                            Kingdom I
                        </p>
                        <h1 className="mt-2 text-5xl font-medium tracking-tight md:text-7xl">
                            Plantae
                        </h1>
                        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-leaf-muted">
                            Explore plant species, taxonomy and biodiversity observations from around the world.
                        </p>

                        <div className="mx-auto mt-6 flex h-11 max-w-md items-center rounded-xl border border-leaf-border bg-leaf-bg/50 px-4 backdrop-blur-sm">
                            <Search size={16} className="mr-3 shrink-0 text-leaf-muted" />
                            <input
                                type="text"
                                placeholder="Search species, genus or family..."
                                className="h-full min-w-0 flex-1 bg-transparent text-xs text-leaf-text outline-none placeholder:text-leaf-muted"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 lg:px-12 border-b border-leaf-border">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                        Life rooted in place.
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-leaf-muted">
                        From forests and flowering plants to ancient lineages, Plantae represents one of the major branches of life on Earth.
                    </p>
                </div>
            </section>

            <section className="px-6 py-16 lg:px-12 border-b border-leaf-border">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                                Plant specimens
                            </h2>
                        </div>
                        <Link
                            href="/explore"
                            className="hidden items-center gap-1.5 text-xs text-leaf-muted transition hover:text-leaf-text md:flex"
                        >
                            Explore all <ArrowUpRight size={14} />
                        </Link>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {specimens.slice(0, 3).map((specimen, index) => {
                            const image = specimen.media?.find((m: any) => m.type === "StillImage")?.identifier;
                            const scientificName = specimen.species || specimen.scientificName || "Unknown species";

                            return (
                                <article
                                    key={specimen.key ?? index}
                                    className="overflow-hidden rounded-xl border border-leaf-border bg-leaf-surface flex flex-col justify-between"
                                >
                                    <div className="relative aspect-[16/10] bg-leaf-bg">
                                        {image ? (
                                            <Image
                                                src={image}
                                                alt={scientificName}
                                                fill
                                                unoptimized
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-leaf-muted">
                                                    No image
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5 flex-1 flex flex-col justify-between">
                                        <div>
                                            <p className="text-base italic tracking-tight font-medium">
                                                {scientificName}
                                            </p>
                                            {specimen.scientificNameAuthorship && (
                                                <p className="mt-0.5 text-xs text-leaf-muted line-clamp-1">
                                                    {specimen.scientificNameAuthorship}
                                                </p>
                                            )}

                                            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-leaf-border pt-3">
                                                <div>
                                                    <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-muted">
                                                        Family
                                                    </p>
                                                    <p className="mt-0.5 truncate text-xs text-leaf-text">
                                                        {specimen.family || "—"}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-muted">
                                                        Genus
                                                    </p>
                                                    <p className="mt-0.5 truncate text-xs text-leaf-text">
                                                        {specimen.genus || "—"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between border-t border-leaf-border pt-3 text-leaf-muted text-[11px]">
                                            <span>{specimen.country || "—"}</span>
                                            <span>{specimen.eventDate || "—"}</span>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {!specimens.length && (
                        <div className="mt-8 border border-leaf-border bg-leaf-surface p-8 text-center rounded-xl">
                            <p className="text-xs text-leaf-muted">
                                Loading plant observations...
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <section className="px-6 py-16 lg:px-12 border-b border-leaf-border">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                        A kingdom of branches.
                    </h2>

                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                        {["Angiosperms", "Gymnosperms", "Ferns & allies", "Bryophytes"].map((group, index) => (
                            <Link
                                key={group}
                                href="#"
                                className="flex items-center justify-between rounded-xl border border-leaf-border bg-leaf-surface px-5 py-4 transition hover:border-leaf-accent"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="font-mono text-[9px] text-leaf-muted">
                                        0{index + 1}
                                    </span>
                                    <span className="text-xs font-medium">
                                        {group}
                                    </span>
                                </div>
                                <ArrowUpRight size={14} className="text-leaf-muted" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 lg:px-12">
                <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                            Continue exploring Plantae.
                        </h2>
                    </div>
                    <Link
                        href="/explore"
                        className="inline-flex items-center gap-2 text-xs text-leaf-muted transition hover:text-leaf-text"
                    >
                        Explore biodiversity <ArrowUpRight size={14} />
                    </Link>
                </div>
            </section>
        </main>
    );
}