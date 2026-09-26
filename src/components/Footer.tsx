import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-leaf-border/40 bg-leaf-bg">
            <div className="mx-auto max-w-7xl px-6 py-14 mt-10 lg:px-10">
                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                    <div>
                        <Link href="/" className="inline-flex items-center opacity-90 transition-opacity hover:opacity-100">
                            <Image
                                src="/lifme.webp"
                                alt="Lifme"
                                width={90}
                                height={36}
                                className="h-6 w-auto object-contain"
                            />
                        </Link>

                        <p className="mt-4 max-w-xs text-xs leading-6 text-leaf-muted">
                            Exploring the diversity of life through science, taxonomy and biodiversity.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                        <Link
                            href="/"
                            className="font-mono text-[9px] uppercase tracking-[0.2em] text-leaf-muted transition-colors hover:text-leaf-accent"
                        >
                            Explore
                        </Link>

                        <Link
                            href="/about"
                            className="font-mono text-[9px] uppercase tracking-[0.2em] text-leaf-muted transition-colors hover:text-leaf-accent"
                        >
                            About
                        </Link>

                        <Link
                            href="https://github.com/jaozinpaulin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.2em] text-leaf-muted transition-colors hover:text-leaf-accent"
                        >
                            <span>GitHub</span>
                            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-leaf-border/30 pt-6 sm:flex-row sm:items-center sm:justify-between">

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-leaf-muted/80">
                        &copy; 2026 Lifme.
                    </span>
                </div>
            </div>
        </footer>
    );
}