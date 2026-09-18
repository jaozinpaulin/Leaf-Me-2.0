const kingdoms = [
    {
        number: "01",
        name: "Plantae",
        phrase: "Life rooted in place.",
        description:
            "Explore plants through taxonomy, morphology and biological diversity.",
        image: "/plantae.webp",
    },
    {
        number: "02",
        name: "Animalia",
        phrase: "Life in motion.",
        description:
            "Explore animals through taxonomy, behavior and biological diversity.",
        image: "/animalia.webp",
    },
    {
        number: "03",
        name: "Fungi",
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
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-leaf-accent">
                            Archive / Kingdoms
                        </span>

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
                    {kingdoms.map((kingdom, index) => (<article
                        key={kingdom.name}
                        className={`grid grid-cols-1 gap-8 border-b border-leaf-border py-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-10 ${index === 0 ? "lg:py-12" : ""
                            }`}
                    >
                        <div
                            className={`lg:col-span-4 ${index === 1 ? "lg:order-2" : ""
                                }`}
                        >
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

                            <button
                                type="button"
                                className="mt-7 font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-text transition-colors hover:text-leaf-accent"
                            >
                                Explore collection →
                            </button>
                        </div>

                        <div
                            className={`lg:col-span-8 ${index === 1 ? "lg:order-1" : ""
                                }`}
                        >
                            <div className="group relative aspect-[16/7] overflow-hidden border border-leaf-border">
                                <img
                                    src={kingdom.image}
                                    alt={kingdom.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
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