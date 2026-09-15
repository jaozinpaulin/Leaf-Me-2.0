export default function Hero() {
    return (
        <section className="border-b border-leaf-border">
            <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center border-b border-leaf-border px-6 py-16 md:border-b-0 md:border-r md:px-12 md:py-24">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-leaf-muted">
                        Vol. I — Kingdom Survey
                    </span>

                    <h1 className="mt-8 max-w-xl font-display text-6xl leading-[0.95] tracking-tight text-leaf-text md:text-7xl">
                        Explore the diversity of life.
                    </h1>

                    <p className="mt-8 max-w-md text-base leading-relaxed text-leaf-muted">
                        A scientific journey through the kingdoms that shape life on Earth.
                    </p>

                    <div className="mt-10 w-14 border-t border-leaf-accent" />

                    <span className="mt-5 font-mono text-xs uppercase tracking-[0.1em] text-leaf-muted">
                        Folio Ref: 2026.09
                    </span>
                </div>

                <div className="relative min-h-[520px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=1600&q=85"
                        alt="Dark botanical specimen"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/25" />

                    <div className="absolute right-6 top-6 font-mono text-[10px] uppercase leading-6 tracking-[0.08em] text-leaf-text">
                        <p>Division: Tracheophyta</p>
                        <p>Species: Botanical specimen</p>
                        <p>Scale: 100 μm</p>
                        <p>Depth: 12.4 μm</p>
                    </div>

                    <div className="absolute bottom-6 left-6 font-mono text-xs text-leaf-text">
                        01 / PLANTAE
                    </div>
                </div>
            </div>
        </section>
    );
}