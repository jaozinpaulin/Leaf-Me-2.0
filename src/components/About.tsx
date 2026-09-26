const kingdomsOverview = [
    { name: "Plantae", code: "01", desc: "Life rooted in place." },
    { name: "Animalia", code: "02", desc: "Life in motion." },
    { name: "Fungi", code: "03", desc: "Life beneath the surface." },
];

export default function About() {
    return (
        <section className="border-t border-leaf-border/30 bg-leaf-bg text-leaf-text px-6 py-24 md:px-10">
            <div className="mx-auto max-w-5xl">

                <div className="mb-14">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-leaf-accent">
                        About Lifme
                    </span>
                    <h2 className="mt-3 font-display text-2xl sm:text-3xl tracking-tight text-leaf-text">
                        An archive dedicated to the diversity of life.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                    <div className="md:col-span-7 space-y-4 text-sm leading-6 text-leaf-muted">
                        <p>
                            <strong className="text-leaf-text font-medium">Lifme</strong> is a digital sanctuary and scientific platform created to explore, categorize, and preserve global biodiversity registries.
                        </p>
                        <p>
                            By integrating modern web design with botanical and zoological taxonomy, the platform maps the delicate relationships that shape terrestrial ecosystems across the primary biological lineages.
                        </p>
                    </div>

                    <div className="md:col-span-5 border border-leaf-border/30 bg-leaf-surface/20 p-6">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-leaf-muted block mb-4">
                            Biological Lineages
                        </span>

                        <div className="space-y-4">
                            {kingdomsOverview.map((item) => (
                                <div key={item.name} className="flex items-center justify-between border-b border-leaf-border/20 pb-3 last:border-none last:pb-0">
                                    <div className="relative">
                                        <span className="absolute top-0 -left-3 font-mono text-[8px] text-leaf-accent mr-2">{item.code}</span>
                                        <span className="font-display italic text-base text-leaf-text">{item.name}</span>
                                    </div>
                                    <span className="font-mono text-[8px] uppercase text-leaf-muted/70 tracking-wider">
                                        {item.desc}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}