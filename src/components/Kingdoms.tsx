const kingdoms = [
    {
        number: "01",
        name: "Plantae",
        phrase: "Life rooted in place.",
        image:
            "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "02",
        name: "Animalia",
        phrase: "Life in motion.",
        image:
             "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=1600&q=85",
    },
    {
        number: "03",
        name: "Fungi",
        phrase: "Life beneath the surface.",
        image:
             "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=1600&q=85",
    },
];

export default function Kingdoms() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3">
            {kingdoms.map((kingdom) => (
                <article
                    key={kingdom.name}
                    className="group relative min-h-[360px] overflow-hidden border-b border-leaf-border md:border-b-0 md:border-r last:md:border-r-0"
                >
                    <img
                        src={kingdom.image}
                        alt={kingdom.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-leaf-bg via-leaf-bg/20 to-transparent" />

                    <div className="relative flex min-h-[360px] flex-col justify-end p-6">
                        <span className="font-mono text-xs text-leaf-muted">
                            {kingdom.number} /
                        </span>

                        <h2 className="mt-3 font-display text-3xl text-leaf-text">
                            {kingdom.name}
                        </h2>

                        <div className="mt-4 h-px w-10 bg-leaf-accent" />

                        <p className="mt-4 font-display text-lg italic text-leaf-text">
                            {kingdom.phrase}
                        </p>
                    </div>
                </article>
            ))}
        </section>
    );
}