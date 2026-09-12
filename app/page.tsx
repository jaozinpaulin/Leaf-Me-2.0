export default function Home() {
  return (
    <main className="min-h-screen bg-[#0E110F] text-[#E2E8E4] flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full flex flex-col items-center text-center gap-6">

        <h1 className="text-4xl font-bold text-[#F4F7F4] tracking-tight">
          Leaf & Me 2.0
        </h1>

        <p className="text-[#98AD9E] text-base leading-relaxed">
          Releitura moderna do meu primeiro projeto, reconstruído com Next.js, TypeScript e Tailwind CSS.
        </p>

        <footer className="text-xs text-[#6B7E72] pt-4">
          Construído rumo a 2027.
        </footer>

      </div>
    </main>
  );
}