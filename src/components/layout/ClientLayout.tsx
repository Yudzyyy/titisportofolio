"use client";

import { ThemeProvider } from "next-themes";
import Header from "./Header";
import CommandPalette from "./CommandPalette";
import { CommandPaletteProvider } from "@/context/CommandPaletteContext";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <CommandPaletteProvider>
                <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased text-foreground">
                    <Header />
                    <main className="flex-1 w-full flex flex-col">{children}</main>
                    <CommandPalette />
                </div>
            </CommandPaletteProvider>
        </ThemeProvider>
    );
}
