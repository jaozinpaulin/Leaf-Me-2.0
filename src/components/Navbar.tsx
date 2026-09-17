import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-leaf-border bg-leaf-bg">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        src="/logoLifme.webp"
                        alt="Lifme"
                        width={110}
                        height={40}
                        className="h-15 w-auto object-contain"
                        priority
                    />

                    <span className="hidden border-l border-leaf-border pl-4 font-mono text-[9px] uppercase tracking-[0.18em] text-leaf-muted sm:block">
                        Archivum Vivum
                    </span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted">
                        8.7M Species
                    </span>

                    <Link href="/explore"
                        className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted transition-colors hover:text-leaf-text">
                        Explore
                    </Link>

                    <Link href="/about"
                        className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted transition-colors hover:text-leaf-text">
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
}