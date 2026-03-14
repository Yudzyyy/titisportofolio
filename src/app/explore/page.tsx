"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Compass,
    Globe,
    Shield,
    Cpu,
    Workflow,
    Server,
    Network,
    Code,
    Zap,
    ArrowRight,
    Github,
    ExternalLink,
    BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Category = "All" | "DevOps & Cloud" | "IoT" | "Security" | "Web" | "Networking";

interface ExploreItem {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    bg: string;
    border: string;
    category: Category;
    href?: string;
    github?: string;
    demo?: string;
    tags: string[];
    featured?: boolean;
    comingSoon?: boolean;
}

const items: ExploreItem[] = [
    // ── DevOps & Cloud ──────────────────────────────────────────────
    {
        id: "aws-deployment",
        title: "Cloud Deployment on AWS",
        description: "In-depth guide on deploying Next.js apps to AWS EC2 using Docker, Nginx, and SSL.",
        icon: Globe,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        category: "DevOps & Cloud",
        href: "/explore/aws-deployment",
        tags: ["AWS EC2", "Docker", "Nginx", "SSL", "Next.js"],
        featured: true,
    },
    {
        id: "cicd-pipeline",
        title: "CI/CD Pipeline",
        description: "Automated portfolio website deployment with GitHub Actions workflow.",
        icon: Workflow,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        category: "DevOps & Cloud",
        href: "/explore/cicd-pipeline",
        tags: ["GitHub Actions", "Docker", "Automation", "CI/CD"],
    },
    {
        id: "private-cicd-server",
        title: "Private CI/CD Server",
        description: "Self-hosted Git & CI/CD infrastructure on Ubuntu VPS using Gitea, NGINX reverse proxy, and GoAccess for real-time monitoring.",
        icon: Server,
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
        category: "DevOps & Cloud",
        href: "/project/cicd-server",
        tags: ["Gitea", "NGINX", "Ubuntu", "GoAccess", "Self-Hosted"],
    },

    // ── IoT ──────────────────────────────────────────────────────────
    {
        id: "iot-solar-panel",
        title: "Solar Panel Robot Cleaner",
        description: "Automated solar panel cleaning robot with ESP8266, MQTT, WebSocket, Flask, and React dashboard — fully containerized and deployed on a local Kubernetes cluster.",
        icon: Cpu,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        category: "IoT",
        href: "/explore/iot-solar-panel",
        github: "https://github.com/Yudzyyy/solarpanelcleaner_iot",
        tags: ["ESP8266", "Python", "React", "Kubernetes", "MQTT"],
        featured: true,
    },
    {
        id: "iot-flood-monitoring",
        title: "IoT Flood Monitoring System",
        description: "Real-time water-level monitoring for early flood detection using ESP32, Node.js, Docker & Kubernetes, with Telegram notifications.",
        icon: Zap,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        category: "IoT",
        href: "/project/flood-monitoring",
        tags: ["ESP32", "Node.js", "Kubernetes", "MQTT", "IoT"],
        featured: true,
    },

    // ── Security ─────────────────────────────────────────────────────
    {
        id: "network-security",
        title: "Network Security (SEEDLabs)",
        description: "Hands-on SEEDLabs practice covering packet sniffing & spoofing, ICMP redirect, TCP/IP attacks, Mitnick attack, DNS attacks, firewall, DNS rebinding, and BGP exploration.",
        icon: Shield,
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        category: "Security",
        href: "/explore/network-security",
        github: "https://github.com/Yudzyyy/Seedlabs-Practice",
        tags: ["Wireshark", "Scapy", "iptables", "DNS", "BGP"],
        featured: true,
    },

    // ── Web ──────────────────────────────────────────────────────────
    {
        id: "kkn-website",
        title: "KKN Team Website",
        description: "Village information portal developed during KKN for community digitalization support in the Komodo area.",
        icon: Code,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        category: "Web",
        href: "https://www.kknmenyapakomodo.site/",
        demo: "https://www.kknmenyapakomodo.site/",
        tags: ["Web Development", "Digitalization", "Community"],
    },
    {
        id: "karangtaruna-website",
        title: "LPP Karangtaruna Website",
        description: "Official institutional website for LPP Karangtaruna featuring organizational programs, member management, and news distribution.",
        icon: Code,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        category: "Web",
        href: "https://kartadu.vercel.app/",
        demo: "https://kartadu.vercel.app/",
        tags: ["React", "Organization", "Web Development"],
    },
    {
        id: "komdigi-bootcamp",
        title: "Bootcamp Komdigi Jogja – Java",
        description: "Backend system developed during an intensive Java bootcamp, focusing on OOP principles and scalable business logic layers.",
        icon: BookOpen,
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        category: "Web",
        href: "https://github.com/BPSDMP-Komdigi-Jogja-Bootcamp-Java/final-project-kelompok-10",
        github: "https://github.com/BPSDMP-Komdigi-Jogja-Bootcamp-Java/final-project-kelompok-10",
        tags: ["Java", "OOP", "Backend", "Bootcamp"],
    },
    {
        id: "netcomp-website",
        title: "Netcomp Official Website",
        description: "Event management website for a national-scale networking competition, handling registrations, schedules, and live updates.",
        icon: Code,
        color: "text-pink-400",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
        category: "Web",
        tags: ["WordPress", "Event Management", "Competition"],
        comingSoon: true,
    },

    // ── Networking ───────────────────────────────────────────────────

    {
        id: "datacenter-network-design",
        title: "Data Center Network Design",
        description: "Redundant hierarchical network infrastructure design for Data Center rack expansion at Perusahaan Cumulonimbus, including VLAN mapping and Bill of Materials.",
        icon: Network,
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        category: "Networking",
        href: "/project/network-design",
        tags: ["Network Design", "Mikrotik CCR", "VLAN", "RAB"],
    },
    {
        id: "ftth-design",
        title: "FTTH Network Design (Sumedang)",
        description: "Planning and design of FTTH infrastructure for residential areas in Sumedang using GPON technology, Atoll, and OptiSystem for optical link budget analysis.",
        icon: Network,
        color: "text-teal-400",
        bg: "bg-teal-500/10",
        border: "border-teal-500/20",
        category: "Networking",
        href: "/project/ftth-design",
        tags: ["FTTH", "GPON", "Atoll", "OptiSystem", "Fiber Optics"],
    },

];

const categories: Category[] = ["All", "DevOps & Cloud", "IoT", "Security", "Web", "Networking"];

const categoryMeta: Record<Category, { label: string; color: string }> = {
    "All": { label: "All", color: "text-foreground" },
    "DevOps & Cloud": { label: "DevOps & Cloud", color: "text-blue-400" },
    "IoT": { label: "IoT", color: "text-emerald-400" },
    "Security": { label: "Security", color: "text-red-400" },
    "Web": { label: "Web", color: "text-cyan-400" },
    "Networking": { label: "Networking", color: "text-violet-400" },
};

function ExploreCard({ item, index }: { item: ExploreItem; index: number }) {
    const Icon = item.icon;
    const isExternal = item.href?.startsWith("http");

    const cardContent = (
        <div className="relative flex flex-col h-full p-6 rounded-2xl border transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
            {/* Background gradient */}
            <div className={cn("absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500", item.bg)} />
            <div className={cn("absolute inset-0 border rounded-2xl transition-colors duration-300", item.border)} />

            {/* Decorative icon */}
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Icon size={100} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={cn("p-2.5 rounded-xl border shrink-0", item.bg, item.border)}>
                        <Icon className={cn("w-5 h-5", item.color)} />
                    </div>
                    <div className="flex items-center gap-2">
                        {item.featured && (
                            <span className="text-[9px] px-2 py-0.5 rounded-full bg-primary text-primary-foreground uppercase font-black tracking-widest">
                                Featured
                            </span>
                        )}
                        {item.comingSoon && (
                            <span className="text-[9px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground uppercase font-black tracking-widest border border-border/50">
                                Soon
                            </span>
                        )}
                    </div>
                </div>

                {/* Title & category */}
                <div className="mb-1">
                    <span className={cn("text-[10px] font-mono font-bold uppercase tracking-widest", item.color)}>
                        {item.category}
                    </span>
                </div>
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/30 text-muted-foreground border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    {!item.comingSoon ? (
                        <span className="text-xs font-bold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                            {isExternal ? "Visit Site" : "Explore"}
                            <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                    ) : (
                        <span className="text-xs text-muted-foreground">Coming Soon</span>
                    )}
                    <div className="flex items-center gap-2" onClick={(e) => e.preventDefault()}>
                        {item.github && (
                            <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg bg-muted/50 hover:bg-muted hover:text-primary transition-all border border-border/50"
                                aria-label="GitHub"
                            >
                                <Github className="w-3.5 h-3.5" />
                            </a>
                        )}
                        {item.demo && (
                            <a
                                href={item.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg bg-muted/50 hover:bg-muted hover:text-primary transition-all border border-border/50"
                                aria-label="Live Demo"
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    const wrapper = (
        <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: index * 0.05 }}
            className="h-full"
        >
            {item.href && !item.comingSoon ? (
                isExternal ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {cardContent}
                    </a>
                ) : (
                    <Link href={item.href} className="block h-full">
                        {cardContent}
                    </Link>
                )
            ) : (
                <div className="h-full">{cardContent}</div>
            )}
        </motion.div>
    );

    return wrapper;
}

export default function ExplorePage() {
    const [active, setActive] = useState<Category>("All");

    const filtered = active === "All" ? items : items.filter((i) => i.category === active);

    const stats = {
        total: items.filter((i) => !i.comingSoon).length,
        featured: items.filter((i) => i.featured).length,
        categories: categories.length - 1,
    };

    return (
        <main className="min-h-[calc(100vh-4rem)] py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Hero */}
                <div className="flex flex-col items-center text-center mb-14 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-2"
                    >
                        <Compass className="w-8 h-8" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter"
                    >
                        Explore My <span className="text-primary italic">Universe</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl"
                    >
                        A journey through my technical expertise, creative projects, and the technologies I&apos;m passionate about.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-6 pt-2"
                    >
                        {[
                            { label: "Projects", value: stats.total },
                            { label: "Featured", value: stats.featured },
                            { label: "Categories", value: stats.categories },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <div className="text-2xl font-black text-primary">{s.value}</div>
                                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border",
                                active === cat
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                    : "bg-muted/30 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-primary"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <AnimatePresence mode="popLayout">
                    {active === "All" ? (
                        // Grouped by category when showing all
                        <div className="space-y-14">
                            {(categories.filter((c) => c !== "All") as Category[]).map((cat) => {
                                const catItems = items.filter((i) => i.category === cat);
                                if (catItems.length === 0) return null;
                                const meta = categoryMeta[cat];
                                return (
                                    <motion.div
                                        key={cat}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={cn("h-8 w-1 rounded-full bg-current", meta.color)} />
                                            <h2 className={cn("text-xl font-black uppercase tracking-widest font-mono", meta.color)}>
                                                {cat}
                                            </h2>
                                            <span className="text-xs text-muted-foreground font-mono ml-1">
                                                {catItems.length} item{catItems.length !== 1 ? "s" : ""}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                            {catItems.map((item, idx) => (
                                                <ExploreCard key={item.id} item={item} index={idx} />
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {filtered.map((item, idx) => (
                                <ExploreCard key={item.id} item={item} index={idx} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
