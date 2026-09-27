"use client";
import Image from "next/image";

export default function PlantaeKingdomPage() {

    return (
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                <div>
                    <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.2em] text-leaf-muted">
                        Kingdom / 01
                    </p>

                    <h1 className="font-display text-[clamp(5rem,12vw,10rem)] leading-[0.8] tracking-[-0.06em]">
                        Plantae
                    </h1>

                    <p className="mt-8 max-w-md font-display text-lg italic text-leaf-muted md:text-xl">
                        Life rooted in place.
                    </p>

                    <p className="mt-4 max-w-md text-xs leading-6 text-leaf-muted">
                        Explore plant life through taxonomy, biodiversity and
                        scientific records.
                    </p>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden bg-leaf-surface">
                    <Image
                        src="/plantae.webp"
                        alt="Plantae"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

            </div>
        </section>

    );
}