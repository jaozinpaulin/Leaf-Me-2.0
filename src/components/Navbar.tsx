import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-leaf-border/40 bg-leaf-bg/80 backdrop-blur-md">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
                <Link href="/" className="flex items-center gap-4 group">
                    <Image
                        src="/lifme.webp"
                        alt="Lifme"
                        width={90}
                        height={40}
                        className="h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                        priority
                    />

                    <span className="hidden border-l border-leaf-border pl-4 font-mono text-[9px] uppercase tracking-[0.18em] text-leaf-muted sm:block">
                        Archivum Vivum
                    </span>
                </Link>

                <div className="flex items-center gap-8">
                    <span className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted md:block">
                        8.7M Species
                    </span>

                    <Link
                        href="/explore"
                        className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted transition-colors hover:text-leaf-text"
                    >
                        Explore
                    </Link>

                    <Link
                        href="/about"
                        className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted transition-colors hover:text-leaf-text"
                    >
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
}