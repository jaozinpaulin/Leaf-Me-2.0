import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-leaf-border bg-leaf-bg">
            <div className="px-6 py-10 mt-10 lg:px-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/lifme.webp"
                                alt="Lifme"
                                width={90}
                                height={36}
                                className="h-6 w-auto object-contain"
                            />
                        </Link>

                        <p className="mt-3 max-w-xs text-xs leading-5 text-leaf-muted">
                            Exploring the diversity of life through science,
                            taxonomy and biodiversity.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <Link
                            href="/"
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

                        <Link
                            href="https://github.com/jaozinpaulin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted transition-colors hover:text-leaf-text"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-leaf-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted">
                        Archivum Vivum
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted">
                        © 2026 Lifme
                    </span>
                </div>
            </div>
        </footer>
    );
}
