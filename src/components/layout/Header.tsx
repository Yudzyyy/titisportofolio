"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCommandPalette } from "@/context/CommandPaletteContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { toggle } = useCommandPalette();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 font-mono font-bold">
                    <span className="text-xl tracking-tighter">TWP<span className="text-primary">.dev</span></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Experience", href: "/experience" },
                        { name: "Explore", href: "/explore" },
                        { name: "Contact", href: "/contact" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === link.href ? "text-foreground" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/resume"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Resume
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggle}
                        className="flex items-center gap-2 rounded-md border border-input bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground shadow-sm hover:bg-muted hover:text-foreground transition-all"
                    >
                        <span className="hidden md:inline-flex text-xs">Search...</span>
                        <span className="inline-flex md:hidden"><Command className="h-4 w-4" /></span>
                        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 md:flex">
                            <span className="text-xs">Ctrl</span>K
                        </kbd>
                    </button>

                    <ThemeToggle />

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden border-b border-border/40 bg-background overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "/about" },
                                { name: "Experience", href: "/experience" },
                                { name: "Explore", href: "/explore" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        pathname === link.href ? "text-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/resume"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                Resume
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
