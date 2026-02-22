"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, ExternalLink } from "lucide-react";

/**
 * Interface for contact information items.
 */
interface ContactDetail {
    icon: any;
    label: string;
    value: string;
    href: string;
    color: string;
}

const contactDetails: ContactDetail[] = [
    {
        icon: Mail,
        label: "Email",
        value: "titiswahyudiputro2003@mail.ugm.ac.id",
        href: "mailto:titiswahyudiputro2003@mail.ugm.ac.id",
        color: "text-red-400"
    },
    {
        icon: Github,
        label: "GitHub",
        value: "Yudzyyy",
        href: "https://github.com/Yudzyyy",
        color: "text-zinc-400"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Titis Wahyudi Putro",
        href: "https://linkedin.com/in/titiswahyudiputro",
        color: "text-blue-400"
    }
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <section className="py-24 px-4 md:px-6">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-8xl font-black font-mono tracking-tighter mb-6 uppercase">
                            Get in <span className="text-primary italic underline decoration-primary/30 underline-offset-8">Touch</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto">
                            I&apos;m always open to new opportunities, collaborations, or just a friendly chat about networking and automation.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl">
                                <h2 className="text-2xl font-bold font-mono mb-8 flex items-center gap-3">
                                    <Send className="h-6 w-6 text-primary" />
                                    Contact Details
                                </h2>
                                
                                <div className="space-y-6">
                                    {contactDetails.map((contact, idx) => (
                                        <a
                                            key={contact.label}
                                            href={contact.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all group"
                                        >
                                            <div className={`p-4 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors ${contact.color}`}>
                                                <contact.icon className="h-6 w-6" />
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest leading-none mb-1">
                                                    {contact.label}
                                                </p>
                                                <p className="text-lg font-medium truncate font-mono">
                                                    {contact.value}
                                                </p>
                                            </div>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-12 pt-8 border-t border-border/50 flex items-start gap-4 text-muted-foreground">
                                    <MapPin className="h-5 w-5 mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold font-mono text-foreground uppercase tracking-tight">Location</p>
                                        <p className="text-sm font-medium">Yogyakarta, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Direct Contact Message (CTA) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="h-full"
                        >
                            <div className="h-full p-8 md:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent flex flex-col justify-center text-center lg:text-left">
                                <h3 className="text-3xl font-black font-mono tracking-tighter mb-6">
                                    Ready to build something <span className="text-primary italic">great</span> together?
                                </h3>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    Whether you have a specific project in mind or just want to explore potential synergies, feel free to reach out. I try my best to respond within 24 hours.
                                </p>
                                <a
                                    href="mailto:titiswahyudiputro2003@mail.ugm.ac.id"
                                    className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] mx-auto lg:mx-0 w-max"
                                >
                                    <Mail className="h-5 w-5" />
                                    Send an Email
                                </a>
                                
                                <div className="mt-12 space-y-4">
                                    <p className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">Availability</p>
                                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                        Open for new opportunities
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-blue-500">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        Remote & Hybrid work ready
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
