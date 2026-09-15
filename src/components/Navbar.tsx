import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-leaf-border bg-leaf-bg">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        src="/logoLifme.webp"
                        alt="Lifme"
                        width={110}
                        height={40}
                        className="h-9 w-auto object-contain"
                        priority
                    />

                    <span className="hidden border-l border-leaf-border pl-4 font-mono text-[10px] uppercase tracking-[0.18em] text-leaf-muted sm:block">
                        Archivum Vivum
                    </span>
                </Link>

                {/* Archive information */}
                <div className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-leaf-muted md:block">
                    Kingdom Survey / Vol. I
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/explore"
                        className="font-mono text-[10px] uppercase tracking-[0.12em] text-leaf-muted transition-colors hover:text-leaf-text"
                    >
                        Explore
                    </Link>

                    <Link
                        href="/about"
                        className="font-mono text-[10px] uppercase tracking-[0.12em] text-leaf-muted transition-colors hover:text-leaf-text"
                    >
                        About
                    </Link>

                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-leaf-muted sm:block">
                        [ Index ]
                    </span>
                </div>
            </nav>
        </header>
    );
}