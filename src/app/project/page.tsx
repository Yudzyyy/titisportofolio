"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Network, Server, Code, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: "solar-panel-iot",
        title: "Solar Panel Monitoring System",
        description: "A web-based monitoring system to observe solar panel performance in real-time.",
        category: "IoT",
        tags: ["ESP32", "MQTT", "Next.js", "IoT"],
        image: "/images/network-topology.svg",
        url: "/project/solar-panel",
        github: "https://github.com/Yudzyyy/solarpanelcleaner_iot",
        demo: null,
        featured: true,
    },
    {
        id: "kkn-website",
        title: "KKN Team Website",
        description: "Village information website developed during KKN for digitalization support.",
        category: "Web",
        tags: ["Web Development", "Digitalization", "Community"],
        image: "/images/code-snippet.svg",
        url: "https://www.kknmenyapakomodo.site/",
        github: null,
        demo: "https://www.kknmenyapakomodo.site/",
        featured: true,
    },
    {
        id: "karangtaruna-website",
        title: "LPP Karangtaruna Website",
        description: "Institutional website for LPP Karangtaruna featuring organizational programs and news.",
        category: "Web",
        tags: ["Web Development", "Organization", "React"],
        image: "/images/code-snippet.svg",
        url: "https://kartadu.vercel.app/",
        github: null,
        demo: "https://kartadu.vercel.app/",
        featured: true,
    },
    {
        id: "komdigi-bootcamp",
        title: "Bootcamp Komdigi Jogja – Java",
        description: "Java programming bootcamp project focusing on backend logic and OOP.",
        category: "Web",
        tags: ["Java", "OOP", "Backend", "Bootcamp"],
        image: "/images/code-snippet.svg",
        url: "https://github.com/BPSDMP-Komdigi-Jogja-Bootcamp-Java/final-project-kelompok-10",
        github: "https://github.com/BPSDMP-Komdigi-Jogja-Bootcamp-Java/final-project-kelompok-10",
        demo: null,
        featured: false,
    },
    {
        id: "netcomp-website",
        title: "Netcomp Official Website",
        description: "Official competition website for National Networking Competition (Netcomp) event.",
        category: "Web",
        tags: ["Networking", "Competition", "WordPress"],
        image: "/images/network-topology.svg",
        url: "#",
        github: null,
        demo: null,
        featured: false,
    },
    {
        id: "seedlabs-security",
        title: "SeedLabs – Network Security",
        description: "Hands-on network security labs covering packet sniffing, spoofing, and TCP attacks.",
        category: "Security",
        tags: ["Security", "Linux", "Networking", "SeedLabs"],
        image: "/images/network-topology.svg",
        url: "https://github.com/Yudzyyy/Seedlabs-Practice",
        github: "https://github.com/Yudzyyy/Seedlabs-Practice",
        demo: null,
        featured: true,
    },
    {
        id: "private-cicd-server",
        title: "Private CI/CD Server Implementation",
        description: "Implemented a private CI/CD server on Ubuntu VPS using Gitea, NGINX reverse proxy, and GoAccess for real-time monitoring.",
        category: "DevOps",
        tags: ["Gitea", "NGINX", "Ubuntu", "GoAccess", "CI/CD"],
        image: "/images/code-snippet.svg",
        url: "#",
        github: null,
        demo: null,
        featured: false,
    },
    {
        id: "network-design-cumulonimbus",
        title: "Data Center Network Design",
        description: "Designed a redundant hierarchical network infrastructure for Data Center rack expansion at Perusahaan Cumulonimbus, including physical topology, VLAN logical mapping, and Bill of Materials (RAB).",
        category: "Networking",
        tags: ["Network Design", "Mikrotik CCR", "Dell Networking", "VLAN", "RAB"],
        image: "/images/network-topology.svg",
        url: "#",
        github: null,
        demo: null,
        featured: false,
    },
    {
        id: "ftth-design-sumedang",
        title: "FTTH Network Design (Sumedang)",
        description: "Designing FTTH (Fiber to the Home) infrastructure in Sumedang area utilizing Atoll for radio planning and OptiSystem for optical link budget analysis.",
        category: "Networking",
        tags: ["FTTH", "Atoll", "OptiSystem", "Fiber Optics"],
        image: "/images/network-topology.svg",
        url: "#",
        github: null,
        demo: null,
        featured: false,
    },
    {
        id: "broadband-network-lab",
        title: "Broadband Network Labs (Optic & Splicing)",
        description: "Hands-on experience with broadband networking including fiber optic fusion splicing, OPM measurements, and OTDR troubleshooting.",
        category: "Networking",
        tags: ["Splicing", "Broadband", "Fiber Optic", "Network Lab"],
        image: "/images/network-topology.svg",
        url: "#",
        github: null,
        demo: null,
        featured: false,
    },
];

const categories = ["All", "Web", "IoT", "Security", "Networking", "DevOps"];

export default function ProjectPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const networkIofProjects = projects.filter(p => ["IoT", "Security", "Networking", "DevOps"].includes(p.category));
    const webProjects = projects.filter(p => p.category === "Web");

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="py-20 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-7xl font-black font-mono tracking-tighter mb-4">
                            My <span className="text-primary italic">Projects</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Showcasing my work in infrastructure, security, and web development
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-bold font-mono transition-all ${selectedCategory === category
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 md:px-6 pb-20">
                <div className="container mx-auto max-w-6xl">
                    {selectedCategory === "All" ? (
                        <div className="space-y-24">
                            {/* Section 1: Network, IoT, Security, DevOps */}
                            <div>
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="h-10 w-1 bg-primary rounded-full" />
                                    <h2 className="text-4xl font-black font-mono tracking-tighter uppercase">Network & IoT Projects</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {networkIofProjects.map((project, idx) => (
                                        <ProjectCard key={project.id} project={project} index={idx} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
                                    ))}
                                </div>
                            </div>

                            {/* Section 2: Web Development */}
                            <div>
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="h-10 w-1 bg-blue-500 rounded-full" />
                                    <h2 className="text-4xl font-black font-mono tracking-tighter uppercase">Web Development</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {webProjects.map((project, idx) => (
                                        <ProjectCard key={project.id} project={project} index={idx} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            layout
                            className="grid md:grid-cols-2 gap-6"
                        >
                            {filteredProjects.map((project, idx) => (
                                <ProjectCard key={project.id} project={project} index={idx} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
                            ))}
                        </motion.div>
                    )}

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}

function ProjectCard({ project, index, hoveredProject, setHoveredProject }: { project: any, index: number, hoveredProject: string | null, setHoveredProject: (id: string | null) => void }) {
    const getGradient = (category: string) => {
        switch (category) {
            case "IoT": return "from-emerald-500/10 via-emerald-500/5 to-transparent";
            case "DevOps": return "from-blue-500/10 via-blue-500/5 to-transparent";
            case "Networking": return "from-purple-500/10 via-purple-500/5 to-transparent";
            case "Security": return "from-red-500/10 via-red-500/5 to-transparent";
            case "Web": return "from-blue-400/10 via-cyan-400/5 to-transparent";
            default: return "from-primary/10 via-primary/5 to-transparent";
        }
    };

    const getGlow = (category: string) => {
        switch (category) {
            case "IoT": return "rgba(16, 185, 129, 0.15)";
            case "DevOps": return "rgba(59, 130, 246, 0.15)";
            case "Networking": return "rgba(168, 85, 247, 0.15)";
            case "Security": return "rgba(239, 68, 68, 0.15)";
            case "Web": return "rgba(34, 211, 238, 0.15)";
            default: return "rgba(16, 185, 129, 0.15)";
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative h-full"
        >
            <div className="relative h-full rounded-2xl border border-border bg-card/30 overflow-hidden hover:border-primary/50 transition-all backdrop-blur-sm flex flex-col">
                {/* Main Link Overlay */}
                <Link 
                    href={project.url} 
                    className="absolute inset-0 z-10"
                    aria-label={`View ${project.title}`}
                />

                {/* Category Gradient Background */}
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-500",
                    getGradient(project.category)
                )} />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col z-20 pointer-events-none">
                    {/* Category Badge */}
                    <div className="flex items-center gap-3 mb-4">
                        {project.category === "IoT" && <Zap className="h-4 w-4 text-emerald-400" />}
                        {project.category === "DevOps" && <Server className="h-4 w-4 text-blue-400" />}
                        {project.category === "Networking" && <Network className="h-4 w-4 text-purple-400" />}
                        {project.category === "Security" && <Server className="h-4 w-4 text-red-400" />}
                        {project.category === "Web" && <Code className="h-4 w-4 text-blue-400" />}
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                            {project.category}
                        </span>
                        {project.featured && (
                            <span className="text-xs font-bold text-primary">FEATURED</span>
                        )}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-black font-mono tracking-tighter mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 4).map((tag: any) => (
                            <span
                                key={tag}
                                className="text-[10px] font-mono bg-muted/50 px-2 py-1 rounded uppercase border border-border/50"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-auto pointer-events-auto">
                        <span className="text-sm font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                            {project.url.startsWith('http') ? 'Visit Site' : 'View Case Study'}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="flex items-center gap-2 ml-auto z-30">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-muted/50 hover:bg-muted hover:text-primary transition-all border border-border/50 relative z-30"
                                >
                                    <Github className="h-4 w-4" />
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-muted/50 hover:bg-muted hover:text-primary transition-all border border-border/50 relative z-30"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"
                    style={{
                        background: `radial-gradient(circle at ${hoveredProject === project.id ? '50% 50%' : '0% 0%'}, ${getGlow(project.category)}, transparent 70%)`,
                    }}
                />
            </div>
        </motion.div>
    );
}
