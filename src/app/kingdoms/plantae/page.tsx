
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function PlantaeHeroTest() {
    return (
        <main className="min-h-screen bg-[#090D0B] text-[#E3E7E1]">
            <section className="relative h-screen overflow-hidden">
                <Image
                    src="/Plantae.webp"
                    alt="Plantae"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-[#090D0B]/55" />

                <header className="absolute inset-x-0 top-0 z-10">
                    <div className="flex items-center justify-between px-6 py-5 lg:px-10">
                        <Link href="/">
                            <Image
                                src="/lifme.webp"
                                alt="Lifme"
                                width={92}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </Link>

                        <Link
                            href="/"
                            className="flex items-center gap-2 text-xs text-white/60 transition hover:text-white"
                        >
                            <ArrowLeft size={14} />
                            Back
                        </Link>
                    </div>
                </header>

                <div className="relative z-10 flex h-full items-center justify-center px-6">
                    <div className="w-full max-w-2xl text-center">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">
                            Kingdom I
                        </p>

                        <h1 className="mt-3 text-6xl font-medium tracking-tight md:text-7xl">
                            Plantae
                        </h1>

                        <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
                            Explore the diversity of the plant kingdom.
                        </p>

                        <div className="mx-auto mt-6 flex h-12 max-w-xl items-center border border-white/20 bg-[#090D0B]/40 px-4 backdrop-blur-sm transition focus-within:border-white/40">
                            <Search
                                size={17}
                                className="mr-3 shrink-0 text-white/45"
                            />

                            <input
                                type="text"
                                placeholder="Search species, genus or family..."
                                className="h-full min-w-0 flex-1 cursor-text bg-transparent px-0 text-sm text-white outline-none placeholder:text-white/35"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
