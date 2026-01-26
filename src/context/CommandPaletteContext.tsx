"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { commands, type CommandItem } from "@/lib/commands";

interface CommandPaletteContextType {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    toggle: () => void;
    runCommand: (command: CommandItem) => void;
    commands: CommandItem[];
}

const CommandPaletteContext = createContext<CommandPaletteContextType | undefined>(undefined);

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = useCallback((command: CommandItem) => {
        setIsOpen(false);

        if (command.action) {
            command.action();
            return;
        }

        if (command.url) {
            router.push(command.url);
        }
    }, [router]);

    return (
        <CommandPaletteContext.Provider value={{ isOpen, setIsOpen, toggle, runCommand, commands }}>
            {children}
        </CommandPaletteContext.Provider>
    );
}

export function useCommandPalette() {
    const context = useContext(CommandPaletteContext);
    if (context === undefined) {
        throw new Error("useCommandPalette must be used within a CommandPaletteProvider");
    }
    return context;
}
