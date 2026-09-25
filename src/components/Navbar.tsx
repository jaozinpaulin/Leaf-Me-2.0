import Image from "next/image";
import Link from "next/link";

const kingdoms = [
    { name: "Plantae", href: "/kingdoms/plantae", color: "hover:text-emerald-400" },
    { name: "Fungi", href: "/kingdoms/fungi", color: "hover:text-amber-500" },
    { name: "Animalia", href: "/kingdoms/animalia", color: "hover:text-sky-400" },
];

const navLinks = [
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
];

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-leaf-border/40 bg-leaf-bg/90 backdrop-blur-md transition-all">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

                <Link href="/" className="flex items-center group">
                    <Image
                        src="/lifme.webp"
                        alt="Lifme"
                        width={90}
                        height={40}
                        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                </Link>

                <div className="flex items-center gap-6 md:gap-8">

                    <div className="hidden items-center gap-6 md:flex">
                        {kingdoms.map((kingdom) => (
                            <Link
                                key={kingdom.href}
                                href={kingdom.href}
                                className={`font-mono text-[10px] uppercase tracking-[0.2em] text-leaf-muted transition-colors ${kingdom.color}`}
                            >
                                {kingdom.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden h-4 w-[1px] bg-leaf-border/60 md:block" />

                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative font-mono text-[9px] uppercase tracking-[0.15em] text-leaf-muted transition-colors hover:text-leaf-text py-1 group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-leaf-text transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                </div>

            </nav>
        </header>
    );
}