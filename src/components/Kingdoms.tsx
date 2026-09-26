import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const kingdoms = [
    {
        number: "01",
        name: "Animalia",
        slug: "animalia",
        phrase: "Life in motion.",
        description:
            "Explore animals through taxonomy, behavior and biological diversity.",
        image: "/animalia.webp",
    },
    {
        number: "02",
        name: "Plantae",
        slug: "plantae",
        phrase: "Life rooted in place.",
        description:
            "Explore plants through taxonomy, morphology and biological diversity.",
        image: "/plantae.webp",
    },
    {
        number: "03",
        name: "Fungi",
        slug: "fungi",
        phrase: "Life beneath the surface.",
        description:
            "Explore fungi through taxonomy, ecology and biological diversity.",
        image: "/fungi.webp",
    },
];

export default function Kingdoms() {
    return (
        <section className="border-b border-leaf-border bg-leaf-bg text-leaf-text">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <h2 className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-6xl">
                            The living archive.
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pl-10">
                        <p className="max-w-md text-sm leading-6 text-leaf-muted">
                            A growing catalogue of life, organized through
                            biological kingdoms and scientific classification.
                        </p>
                    </div>
                </div>

                <div className="mt-14 border-t border-leaf-border">
                    {kingdoms.map((kingdom, index) => (
                        <article key={kingdom.name}
                            className={`grid grid-cols-1 gap-8 border-b border-leaf-border py-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-10 ${index === 0 ? "lg:py-12" : ""
                                }`}>
                            <div
                                className={`lg:col-span-4 ${index === 1 ? "lg:order-2" : ""
                                    }`}>
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-[9px] text-leaf-accent">
                                        {kingdom.number}
                                    </span>

                                    <span className="h-px w-6 bg-leaf-border" />

                                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-muted">
                                        Kingdom
                                    </span>
                                </div>

                                <h3 className="mt-5 font-display text-4xl tracking-tight">
                                    {kingdom.name}
                                </h3>

                                <p className="mt-2 font-display text-base italic text-leaf-muted">
                                    {kingdom.phrase}
                                </p>

                                <p className="mt-5 max-w-sm text-xs leading-6 text-leaf-muted">
                                    {kingdom.description}
                                </p>

                                <div className="mt-7">
                                    <Link
                                        href={`/kingdoms/${kingdom.slug}`}
                                        className="group inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-text transition-colors hover:text-leaf-accent"
                                    >
                                        <span>Explore collection</span>
                                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            <div className={`lg:col-span-8 ${index === 1 ? "lg:order-1" : ""}`}>
                                <Link
                                    href={`/kingdoms/${kingdom.slug}`}
                                    className="group relative block aspect-[16/7] overflow-hidden border border-leaf-border">
                                    <Image
                                        src={kingdom.image}
                                        alt={kingdom.name}
                                        fill
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                    />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-7 flex items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-muted">
                        Biological Archive
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-muted">
                        {kingdoms.length.toString().padStart(2, "0")} Collections
                    </span>
                </div>
            </div>
        </section>
    );
}