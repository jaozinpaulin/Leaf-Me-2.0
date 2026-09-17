import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-leaf-border bg-leaf-bg">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
                <Link href="/" className="inline-flex items-center">
                    <Image
                        src="/logoLifme.webp"
                        alt="Lifme"
                        width={100}
                        height={36}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="/about"
                        className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted transition-colors hover:text-leaf-text">
                        About
                    </Link>

                    <Link
                        href="https://github.com/jaozinpaulin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted transition-colors hover:text-leaf-text">
                        GitHub
                    </Link>

                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted">
                        © 2026
                    </span>
                </div>
            </div>
        </footer>
    );
}