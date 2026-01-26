"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Network, Code, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useMediaQuery";

export default function HeroSplitScreen() {
    const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
    const isMobile = useIsMobile();

    const getWidth = (side: "left" | "right") => {
        if (isMobile) return "100%";
        if (hoveredSide === null) return "50%";
        return hoveredSide === side ? "60%" : "40%";
    };

    const getHeight = (side: "left" | "right") => {
        if (!isMobile) return "100%";
        if (hoveredSide === null) return "50%";
        return hoveredSide === side ? "60%" : "40%";
    };

    return (
        <section
            className="relative flex h-[calc(100vh-4rem)] w-full flex-col overflow-hidden md:flex-row"
            aria-label="Welcome section"
        >
            {/* Left Side - Network */}
            <motion.div
                className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-zinc-900 border-b md:border-b-0 md:border-r border-white/5"
                onMouseEnter={() => setHoveredSide("left")}
                onMouseLeave={() => setHoveredSide(null)}
                animate={{
                    width: getWidth("left"),
                    height: getHeight("left"),
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                role="region"
                aria-label="Networking specialisation"
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-600/10 via-zinc-900 to-zinc-900" />

                {/* Background Image Reveal */}
                <motion.div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    animate={{
                        opacity: hoveredSide === "left" ? 0.3 : 0.05,
                        scale: hoveredSide === "left" ? 1.05 : 1
                    }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/images/network-infrastructure.svg"
                        alt=""
                        fill
                        className="object-cover"
                        priority
                        sizes="50vw"
                    />
                </motion.div>

                <div className="relative z-10 flex flex-col items-center text-center p-6 md:p-12">
                    <motion.div
                        animate={{
                            rotate: hoveredSide === "left" ? 90 : 0,
                            backgroundColor: hoveredSide === "left" ? "rgba(16, 185, 129, 0.15)" : "rgba(16, 185, 129, 0.05)"
                        }}
                        className="mb-8 rounded-lg p-5 border-2 border-emerald-500/30 relative"
                    >
                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-emerald-500" />
                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-emerald-500" />
                        <Network className="h-10 w-10 text-emerald-400" />
                    </motion.div>

                    <h2 className="text-4xl font-black font-mono tracking-tighter text-foreground md:text-7xl uppercase">
                        Net<span className="text-emerald-600 dark:text-emerald-500 italic">Work</span>
                    </h2>

                    <AnimatePresence mode="wait">
                        {hoveredSide === "left" && (
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-6 max-w-sm text-lg md:text-xl text-emerald-900/70 dark:text-emerald-100/70 font-medium leading-relaxed"
                            >
                                I configure the network where your code runs.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Right Side - Code */}
            <motion.div
                className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background dark:bg-zinc-950"
                onMouseEnter={() => setHoveredSide("right")}
                onMouseLeave={() => setHoveredSide(null)}
                animate={{
                    width: getWidth("right"),
                    height: getHeight("right"),
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                role="region"
                aria-label="Software development specialisation"
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-bl from-blue-600/10 via-background dark:via-zinc-950 to-background dark:to-zinc-950" />

                {/* Background Image Reveal */}
                <motion.div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    animate={{
                        opacity: hoveredSide === "right" ? 0.3 : 0.05,
                        scale: hoveredSide === "right" ? 1.05 : 1
                    }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/images/code-snippet.svg"
                        alt=""
                        fill
                        className="object-cover"
                        priority
                        sizes="50vw"
                    />
                </motion.div>

                <div className="relative z-10 flex flex-col items-center text-center p-6 md:p-12">
                    <motion.div
                        animate={{
                            scale: hoveredSide === "right" ? 1.1 : 1,
                            backgroundColor: hoveredSide === "right" ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.05)"
                        }}
                        className="mb-8 rounded-lg p-5 border-2 border-blue-500/30 relative"
                    >
                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-blue-500" />
                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-blue-500" />
                        <Code className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    </motion.div>

                    <h2 className="text-4xl font-black font-mono tracking-tighter text-foreground md:text-7xl uppercase">
                        Co<span className="text-blue-600 dark:text-blue-500 italic">De</span>
                    </h2>

                    <AnimatePresence mode="wait">
                        {hoveredSide === "right" && (
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-6 max-w-sm text-lg md:text-xl text-blue-100/70 font-medium leading-relaxed"
                            >
                                I write the code that automates your infrastructure.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Center Button - Convergence */}
            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                    animate={{
                        scale: hoveredSide ? 0.8 : 1,
                        opacity: isMobile && hoveredSide ? 0 : 1
                    }}
                    transition={{ duration: 0.4 }}
                    className="pointer-events-auto"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 30px -5px rgba(16, 185, 129, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center gap-3 rounded-xl border-2 border-white/20 bg-black px-8 py-4 text-sm font-black text-white hover:text-emerald-400 transition-all hover:border-emerald-500/50"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Convergence <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                        </span>

                        {/* Interactive Grid Overlay */}
                        <div className="absolute inset-0 -z-10 rounded-lg bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/30"
            >
                <div className="h-10 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
            </motion.div>
        </section>
    );
}
