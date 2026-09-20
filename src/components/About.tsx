export default function About() {
    return (
        <section className="border-t border-leaf-border px-6 py-24 md:px-10">
            <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
                <div>
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-leaf-accent">
                        About Lifme
                    </p>

                    <h2 className="font-display text-3xl tracking-tight text-leaf-text md:text-4xl">
                        A living archive of biodiversity.
                    </h2>

                    <p className="mt-6 max-w-lg text-sm leading-7 text-leaf-muted">
                        Lifme is a scientific exploration of life on Earth, bringing
                        together taxonomy, biodiversity and visual research in one place.
                    </p>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-leaf-muted">
                        The project explores the diversity of living organisms through
                        scientific information, classification and curated specimens.
                    </p>
                </div>

                <div className="border border-leaf-border bg-leaf-surface p-6 md:p-8">
                    <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.18em] text-leaf-muted">
                        Life classification
                    </p>

                    <div className="space-y-5 font-mono text-xs">
                        <div className="flex items-center gap-4">
                            <span className="text-leaf-muted">01</span>
                            <span className="text-leaf-text">LIFE</span>
                        </div>

                        <div className="ml-6 flex items-center gap-4 border-l border-leaf-border pl-5">
                            <span className="text-leaf-muted">02</span>
                            <span className="text-leaf-text">KINGDOMS</span>
                        </div>

                        <div className="ml-12 flex items-center gap-4 border-l border-leaf-border pl-5">
                            <span className="text-leaf-muted">03</span>
                            <span className="text-leaf-text">SPECIES</span>
                        </div>

                        <div className="ml-18 flex items-center gap-4 border-l border-leaf-border pl-5">
                            <span className="text-leaf-muted">04</span>
                            <span className="text-leaf-accent">DISCOVERY</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
