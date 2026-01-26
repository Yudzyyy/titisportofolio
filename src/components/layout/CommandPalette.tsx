"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    FileText,
    Github,
    Moon,
    Sun,
    Laptop,
    ArrowRight,
    Mail,
    Home,
    Briefcase,
    Terminal,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useCommandPalette } from "@/context/CommandPaletteContext";

export default function CommandPalette() {
    const { isOpen, setIsOpen, runCommand, commands } = useCommandPalette();
    const { setTheme } = useTheme();

    // Filter commands by category
    const categories = React.useMemo(() => {
        const map: Record<string, typeof commands> = {};
        commands.forEach(cmd => {
            if (!map[cmd.category]) map[cmd.category] = [];
            map[cmd.category].push(cmd);
        });
        return map;
    }, [commands]);

    return (
        <AnimatePresence>
            {isOpen && (
                <CommandPrimitive.Dialog
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    label="Global Command Menu"
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32"
                >
                    {/* Backdrop with Neo-brutalism blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/40 backdrop-blur-md"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dialog Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={cn(
                            "relative z-[101] w-full max-w-xl overflow-hidden rounded-xl bg-card text-card-foreground shadow-2xl border-2 border-primary/20 mx-4",
                            "shadow-[8px_8px_0px_0px_rgba(var(--primary-rgb),0.1)]"
                        )}
                    >
                        <div className="flex items-center border-b-2 border-border/50 px-4">
                            <Search className="mr-3 h-5 w-5 shrink-0 opacity-50" />
                            <CommandPrimitive.Input
                                placeholder="Where do you want to go?"
                                className="flex h-14 w-full rounded-md bg-transparent py-4 text-base outline-none placeholder:text-muted-foreground"
                            />
                            <kbd className="hidden sm:flex h-6 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-[10px] font-medium opacity-50">
                                ESC
                            </kbd>
                        </div>

                        <CommandPrimitive.List className="max-h-[450px] overflow-y-auto p-2">
                            <CommandPrimitive.Empty className="py-12 text-center text-sm text-muted-foreground font-mono">
                                No results found for your query.
                            </CommandPrimitive.Empty>

                            {Object.entries(categories).map(([category, items]) => (
                                <CommandPrimitive.Group
                                    key={category}
                                    heading={category}
                                    className="text-xs font-bold font-mono text-muted-foreground px-3 py-2 uppercase tracking-widest mt-2"
                                >
                                    {items.map((item) => (
                                        <CommandItem
                                            key={item.id}
                                            onSelect={() => runCommand(item)}
                                        >
                                            <CommandIcon category={item.category} id={item.id} />
                                            <div className="flex flex-col">
                                                <span>{item.title}</span>
                                                {item.description && <span className="text-[10px] text-muted-foreground font-normal">{item.description}</span>}
                                            </div>
                                            {item.shortcut && (
                                                <div className="ml-auto flex items-center gap-1">
                                                    {item.shortcut.map(s => (
                                                        <kbd key={s} className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono border border-border">{s}</kbd>
                                                    ))}
                                                </div>
                                            )}
                                        </CommandItem>
                                    ))}
                                </CommandPrimitive.Group>
                            ))}

                            <CommandPrimitive.Group heading="Theme" className="text-xs font-bold font-mono text-muted-foreground px-3 py-2 uppercase tracking-widest mt-2">
                                <CommandItem onSelect={() => { setTheme("light"); setIsOpen(false); }}>
                                    <Sun className="mr-3 h-4 w-4" />
                                    <span>Switch to Light Mode</span>
                                </CommandItem>
                                <CommandItem onSelect={() => { setTheme("dark"); setIsOpen(false); }}>
                                    <Moon className="mr-3 h-4 w-4" />
                                    <span>Switch to Dark Mode</span>
                                </CommandItem>
                                <CommandItem onSelect={() => { setTheme("system"); setIsOpen(false); }}>
                                    <Laptop className="mr-3 h-4 w-4" />
                                    <span>Follow System Preference</span>
                                </CommandItem>
                            </CommandPrimitive.Group>
                        </CommandPrimitive.List>

                        <div className="border-t border-border/50 bg-muted/30 px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase font-bold">
                                    <kbd className="rounded border bg-card px-1 px-1.5 py-0.5">↑↓</kbd> Navigate
                                </span>
                                <span className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase font-bold">
                                    <kbd className="rounded border bg-card px-1 px-1.5 py-0.5">Enter</kbd> Select
                                </span>
                            </div>
                            <div className="text-[10px] font-mono text-muted-foreground opacity-50">
                                ANTIGRAVITY v1.0
                            </div>
                        </div>
                    </motion.div>
                </CommandPrimitive.Dialog>
            )}
        </AnimatePresence>
    );
}

function CommandItem({
    children,
    onSelect,
}: {
    children: React.ReactNode;
    onSelect: () => void;
}) {
    return (
        <CommandPrimitive.Item
            onSelect={onSelect}
            className={cn(
                "relative flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm outline-none transition-all",
                "aria-selected:bg-primary/10 aria-selected:text-primary aria-selected:translate-x-1",
                "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
            )}
        >
            {children}
        </CommandPrimitive.Item>
    );
}

function CommandIcon({ category, id }: { category: string, id: string }) {
    const size = 18;
    const className = "mr-3 h-4 w-4 shrink-0";

    if (id.includes('home')) return <Home className={className} />;
    if (id.includes('about')) return <Terminal className={className} />;
    if (id.includes('work')) return <Briefcase className={className} />;
    if (id.includes('cv')) return <FileText className={className} />;
    if (id.includes('email')) return <Mail className={className} />;
    if (id.includes('github')) return <Github className={className} />;

    switch (category) {
        case 'project': return <ArrowRight className={className} />;
        case 'skill': return <Terminal className={className} size={size} />;
        default: return <FileText className={className} />;
    }
}
