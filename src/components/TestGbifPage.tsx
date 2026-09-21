export default async function TestGbifPage() {
    const response = await fetch(
        "https://api.gbif.org/v1/occurrence/search?kingdom=Plantae&limit=3"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch GBIF data");
    }

    const data = await response.json();

    return (
        <main className="min-h-screen bg-[#090D0B] px-6 py-12 text-[#E3E7E1]">
            <div className="mx-auto max-w-6xl">
                <header className="mb-10">
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[#8A968D]">
                        GBIF / API TEST
                    </p>

                    <h1 className="text-3xl font-semibold">
                        Plantae Occurrences
                    </h1>

                    <p className="mt-3 text-sm text-[#8A968D]">
                        {data.count.toLocaleString()} records found
                    </p>
                </header>

                <section className="grid gap-5 md:grid-cols-3">
                    {data.results.map((item: any) => (
                        <article
                            key={item.key}
                            className="border border-[#24211D] bg-[#111714] p-5"
                        >
                            <p className="mb-4 font-mono text-xs text-[#8A968D]">
                                GBIF ID: {item.key}
                            </p>

                            <h2 className="text-lg font-medium">
                                {item.scientificName}
                            </h2>

                            <div className="mt-6 space-y-2 text-sm">
                                <p>
                                    <span className="text-[#8A968D]">Kingdom:</span>{" "}
                                    {item.kingdom}
                                </p>

                                <p>
                                    <span className="text-[#8A968D]">Phylum:</span>{" "}
                                    {item.phylum}
                                </p>

                                <p>
                                    <span className="text-[#8A968D]">Family:</span>{" "}
                                    {item.family}
                                </p>

                                <p>
                                    <span className="text-[#8A968D]">Country:</span>{" "}
                                    {item.country ?? "—"}
                                </p>

                                <p>
                                    <span className="text-[#8A968D]">Date:</span>{" "}
                                    {item.eventDate ?? "—"}
                                </p>
                            </div>

                            {item.media?.length > 0 && (
                                <p className="mt-6 font-mono text-xs text-[#7D9A83]">
                                    Media available
                                </p>
                            )}
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}