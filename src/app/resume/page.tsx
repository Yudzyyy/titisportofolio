"use client";

import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="py-20 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
                    >
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black font-mono tracking-tighter mb-4">
                                My <span className="text-primary italic">Resume</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl">
                                Detailed professional background, technical skills, and education.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                            >
                                <Download className="h-5 w-5" />
                                Download PDF
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted font-bold hover:bg-muted/80 transition-colors"
                            >
                                <ExternalLink className="h-5 w-5" />
                                Full Screen
                            </a>
                        </div>
                    </motion.div>

                    {/* PDF Viewer */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative w-full aspect-[1/1.414] md:aspect-auto md:h-[1000px] bg-card rounded-3xl border border-border overflow-hidden shadow-2xl group"
                    >
                        {/* The PDF View using Object for better compatibility than Iframe */}
                        <object
                            data="/resume.pdf"
                            type="application/pdf"
                            className="absolute inset-0 z-20 w-full h-full"
                        >
                            {/* Detailed Fallback for browsers that don't support embedded PDFs */}
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center bg-zinc-900/50 backdrop-blur-sm">
                                <div className="mb-6 p-6 rounded-full bg-primary/10 border border-primary/20">
                                    <FileText className="h-12 w-12 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold font-mono mb-2">PDF Viewer Blocked</h3>
                                <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
                                    Browser atau pengaturan privasi Anda mencegah pratinjau PDF langsung. Jangan khawatir, Anda tetap bisa melihatnya!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Buka di Tab Baru
                                    </a>
                                </div>
                            </div>
                        </object>

                        {/* Loading State / Shadow Overlay */}
                        <div className="absolute inset-0 z-0 bg-muted animate-pulse flex items-center justify-center">
                            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Preparing Document...</span>
                        </div>
                    </motion.div>

                    {/* Additional Info / CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-muted-foreground">
                            Interested in collaborating? Feel free to reach out via
                            <a href="mailto:titiswahyudiputro2003@mail.ugm.ac.id" className="text-primary hover:underline ml-1">email</a> or
                            <a href="https://www.linkedin.com/in/titiswahyudiputro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">LinkedIn</a>.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
