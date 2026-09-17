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
        image:
            "https://images.unsplash.com/photo-1629198735667-5d7c7f7d1a0d?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "03",
        name: "Fungi",
        phrase: "Life beneath the surface.",
        image:
            "https://images.unsplash.com/photo-1603616392738-5b7b5d4f3c3c?auto=format&fit=crop&w=1200&q=85",
    },
];

export default function Kingdoms() {
    return (
        <section className="border-b border-leaf-border bg-leaf-bg text-leaf-text">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-leaf-accent">
                            Archive / Kingdoms
                        </span>

                        <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
                            The living archive.
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pl-10">
                        <p className="max-w-md text-sm leading-7 text-leaf-muted">
                            A growing catalogue of life, organized through
                            biological kingdoms and scientific classification.
                        </p>
                    </div>
                </div>

                <div className="mt-16 border-t border-leaf-border">
                    <article className="grid grid-cols-1 border-b border-leaf-border py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
                        <div className="lg:col-span-4">
                            <span className="font-mono text-[10px] text-leaf-accent">
                                {kingdoms[0].number} /
                            </span>

                            <h3 className="mt-4 font-display text-4xl">
                                {kingdoms[0].name}
                            </h3>

                            <p className="mt-3 font-display text-lg italic text-leaf-muted">
                                {kingdoms[0].phrase}
                            </p>

                            <p className="mt-6 max-w-sm text-sm leading-6 text-leaf-muted">
                                {kingdoms[0].description}
                            </p>

                            <button
                                type="button"
                                className="mt-8 font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-text transition-colors hover:text-leaf-accent"
                            >
                                Explore Collection →
                            </button>
                        </div>

                        <div className="mt-8 lg:col-span-8 lg:mt-0">
                            <div className="relative aspect-[16/7] overflow-hidden border border-leaf-border">
                                <img
                                    src={kingdoms[0].image}
                                    alt={kingdoms[0].name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </article>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {kingdoms.slice(1).map((kingdom) => (
                            <article
                                key={kingdom.name}
                                className="border-b border-leaf-border py-8 md:border-b-0 md:py-10 md:first:border-r md:first:pr-10 md:last:pl-10"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="font-mono text-[10px] text-leaf-muted">
                                        {kingdom.number} /
                                    </span>

                                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-muted">
                                        Archive
                                    </span>
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_180px] sm:items-end">
                                    <div>
                                        <h3 className="font-display text-3xl">
                                            {kingdom.name}
                                        </h3>

                                        <p className="mt-2 font-display text-base italic text-leaf-muted">
                                            {kingdom.phrase}
                                        </p>

                                        <p className="mt-5 text-sm leading-6 text-leaf-muted">
                                            {kingdom.description}
                                        </p>
                                    </div>

                                    <div className="relative aspect-square overflow-hidden border border-leaf-border">
                                        <img
                                            src={kingdom.image}
                                            alt={kingdom.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-muted">
                        Biological Archive
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-muted">
                        03 Collections
                    </span>
                </div>
            </div>
        </section>
    );
}