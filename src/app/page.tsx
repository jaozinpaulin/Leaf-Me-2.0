import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-leaf-bg text-leaf-text">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight">
          Explore the diversity of life.
        </h1>

        <p className="mt-4 max-w-xl text-leaf-muted">
          Discover species, explore kingdoms and learn about the diversity
          of life through science.
        </p>
      </section>
    </main>
  );
}