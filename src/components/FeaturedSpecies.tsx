const specimens = [
    {
        number: "01",
        kingdom: "Plantae",
        species: "Adiantum pedatum",
        classification: "Tracheophyta",
        image: "/plantae.webp",
    },
    {
        number: "02",
        kingdom: "Animalia",
        species: "Specimen Archive",
        classification: "Chordata",
        image: "/animalia.webp",
    },
    {
        number: "03",
        kingdom: "Fungi",
        species: "Specimen Archive",
        classification: "Basidiomycota",
        image: "/fungi.webp",
    },
];

export default function FeaturedSpecies() {
    return (
        <section className="border-b border-leaf-border bg-leaf-bg text-leaf-text">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
                <div className="text-center">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-leaf-accent">
                        Archive / Specimens
                    </span>

                    <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                        Featured species.
                    </h2>

                    <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-leaf-muted">
                        Selected specimens from the living archive.
                    </p>
                </div>

                <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
                    {specimens.map((specimen) => (
                        <article
                            key={specimen.number}
                            className="text-center"
                        >
                            <div className="mx-auto w-full max-w-[220px]">
                                <div className="aspect-square overflow-hidden border border-leaf-border">
                                    <img
                                        src={specimen.image}
                                        alt={specimen.species}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            <span className="mt-5 block font-mono text-[8px] uppercase tracking-[0.15em] text-leaf-accent">
                                {specimen.number} / {specimen.kingdom}
                            </span>

                            <h3 className="mt-2 font-display text-xl italic">
                                {specimen.species}
                            </h3>

                            <span className="mt-2 block font-mono text-[8px] uppercase tracking-[0.12em] text-leaf-muted">
                                {specimen.classification}
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}