import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-leaf-border bg-leaf-bg">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <Link href="/"
                    className="text-xl font-semibold tracking-tight text-leaf-text">
                    Lifme
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/explore"
                        className="text-sm text-leaf-muted transition-colors hover:text-leaf-text">
                        Explore
                    </Link>

                    <Link href="/about"
                        className="text-sm text-leaf-muted transition-colors hover:text-leaf-text">
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
}