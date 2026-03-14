"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft,
    Shield,
    ExternalLink,
    FileText,
    Lock,
    Globe,
    Wifi,
    Key,
    AlertTriangle,
    Network,
    BookOpen,
    ChevronDown,
    Github,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Section = ({
    id,
    title,
    icon: Icon,
    children,
    className,
}: {
    id?: string;
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
    className?: string;
}) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn("mb-14 scroll-mt-24", className)}
    >
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                <Icon className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>
        <div className="pl-0 md:pl-11">{children}</div>
    </motion.section>
);

// All SEEDLabs reports from the repository
const reports = [
    {
        id: "unit1",
        label: "Unit 1",
        title: "Packet Sniffing & Spoofing",
        topics: ["Packet Sniffing", "Packet Spoofing", "Scapy", "Wireshark", "Raw Socket"],
        icon: Network,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        category: "Fundamentals",
        pdfUrl: "https://github.com/Yudzyyy/Seedlabs-Practice/blob/main/521969_Titis%20Wahyudi_Unit1dan2.pdf",
    },
    {
        id: "unit3",
        label: "Unit 3",
        title: "MAC Layer Attack",
        topics: ["ARP Poisoning", "MAC Spoofing", "Layer 2 Security", "Ethernet Frames", "Switch Security"],
        icon: AlertTriangle,
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        category: "Attack & Defense",
        pdfUrl: "https://github.com/Yudzyyy/Seedlabs-Practice/blob/main/PKI3_Titis.pdf",
    },
    {
        id: "unit4",
        label: "Unit 4",
        title: "ICMP Redirect Attack",
        topics: ["ICMP Redirect", "Routing Manipulation", "Man-in-the-Middle", "Network Layer", "Traffic Hijacking"],
        icon: AlertTriangle,
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        category: "Attack & Defense",
        pdfUrl: "https://github.com/Yudzyyy/Seedlabs-Practice/blob/main/Unit4_Titis%20Wahyudi%20Putro_521969.pdf",
    },
    {
        id: "unit5",
        label: "Unit 5",
        title: "TCP/IP Attack",
        topics: ["SYN Flooding", "TCP Session Hijacking", "RST Attack", "TCP Stack", "Blind Spoofing"],
        icon: Wifi,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        category: "Attack & Defense",
        pdfUrl: "https://github.com/Yudzyyy/Seedlabs-Practice/blob/main/Unit5_Titis%20Wahyudi%20Putro_521969.pdf",
    },
    {
        id: "unit6",
        label: "Unit 6",
        title: "Mitnick Attack",
        topics: ["IP Spoofing", "TCP Sequence Prediction", "Trust Exploitation", "Remote Shell", "Session Replay"],
        icon: Lock,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        category: "Attack & Defense",
        pdfUrl: "https://github.com/Yudzyyy/Seedlabs-Practice/blob/main/Unit6_Titis%20Wahyudi%20Putro_521969%20-%20Copy.pdf",
    },
    {
        id: "unit8",
        label: "Unit 8",
        title: "DNS Attack",
        topics: ["DNS Spoofing", "Cache Poisoning", "DNS Hijacking", "DNSSEC", "Kaminsky Attack"],
        icon: Globe,
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
        category: "Attack & Defense",
        pdfUrl: "https://github.com/Yudzyyy/Seedlabs-Practice/blob/main/Unit8_Titis%20Wahyudi%20Putro_521969.pdf",
    },
    {
        id: "unit9",
        label: "Unit 9",
        title: "Firewall Exploration",
        topics: ["iptables Rules", "Packet Filtering", "Stateful Firewall", "NAT", "Defense in Depth"],
        icon: Shield,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        category: "Defense",
        pdfUrl: "https://github.com/Yudzyyy/Seedlabs-Practice/blob/main/521969_Titis%20Wahyudi%20Putro_B2.pdf",
    },
    {
        id: "unit10",
        label: "Unit 10",
        title: "DNS Rebinding Attack",
        topics: ["DNS Rebinding", "Same-Origin Policy Bypass", "Browser Security", "Internal Network Access", "Phishing"],
        icon: Key,
        color: "text-pink-400",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
        category: "Attack & Defense",
        pdfUrl: "https://github.com/Yudzyyy/Seedlabs-Practice/blob/main/521969_Titis%20Wahyudi%20Putro_Unit9.pdf",
    },
    {
        id: "unit11",
        label: "Unit 11",
        title: "BGP Exploration & Attack Lab",
        topics: ["BGP Routing", "Route Hijacking", "RPKI", "AS Path Manipulation", "BGP Security"],
        icon: Network,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        category: "Routing Security",
        pdfUrl: "https://github.com/Yudzyyy/Seedlabs-Practice/blob/main/BGP_Titis%20Wahyudi%20dan%20Jonathan%20Sidebang.pdf",
    },
];

const categories = ["All", "Fundamentals", "Defense", "Attack & Defense", "Routing Security"];

const ReportCard = ({ report }: { report: typeof reports[0] }) => {
    const [expanded, setExpanded] = useState(false);
    const Icon = report.icon;

    return (
        <motion.div
            whileHover={{ y: -3 }}
            className={cn("rounded-2xl border overflow-hidden transition-all", report.bg, report.border)}
        >
            <div
                className="p-5 cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-lg border shrink-0", report.bg, report.border)}>
                            <Icon className={cn("w-4 h-4", report.color)} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className={cn("text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded", report.bg, report.color)}>
                                    {report.label}
                                </span>
                                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                    {report.category}
                                </span>
                            </div>
                            <h3 className="font-bold text-sm mt-1">{report.title}</h3>
                        </div>
                    </div>
                    <ChevronDown
                        className={cn(
                            "w-4 h-4 text-muted-foreground shrink-0 transition-transform mt-1",
                            expanded && "rotate-180"
                        )}
                    />
                </div>

                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {report.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="text-[10px] font-mono px-2 py-1 rounded bg-black/30 text-muted-foreground border border-white/5"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={report.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className={cn(
                                        "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all hover:scale-105",
                                        report.bg,
                                        report.color,
                                        "border",
                                        report.border
                                    )}
                                >
                                    <FileText className="w-3.5 h-3.5" />
                                    View Report PDF
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default function NetworkSecurityPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? reports
        : reports.filter((r) => r.category === activeCategory);

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header Banner */}
            <div className="relative h-80 overflow-hidden border-b border-border/50 bg-zinc-950">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="container relative z-10 mx-auto h-full flex flex-col justify-end p-6 pb-12 md:p-12 md:pb-16 max-w-5xl">
                    <Link
                        href="/explore"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 w-fit group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Explore
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-3"
                    >
                        <div className="flex items-center gap-3 flex-wrap">
                            <span className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 border border-blue-600/20 text-[10px] font-bold uppercase tracking-widest">
                                Network Security
                            </span>
                            <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 text-[10px] font-bold uppercase tracking-widest">
                                SEEDLabs Practice
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl">
                            Exploring Network Security with SEEDLabs
                        </h1>
                        <p className="text-muted-foreground text-base max-w-2xl">
                            Hands-on network security labs covering attacks, defenses, cryptography, BGP routing, and wireless security — documented as academic lab reports.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar */}
                    <aside className="hidden lg:block space-y-8 sticky top-24 h-fit">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                On this page
                            </h4>
                            <nav className="flex flex-col gap-3">
                                {[
                                    { id: "about", label: "About SEEDLabs", icon: BookOpen },
                                    { id: "skills", label: "Skills Gained", icon: Shield },
                                    { id: "reports", label: "Lab Reports", icon: FileText },
                                ].map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <item.icon className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="p-4 rounded-2xl bg-muted/30 border border-border/50">
                            <h4 className="text-xs font-bold mb-3">All Reports</h4>
                            <a
                                href="https://github.com/Yudzyyy/Seedlabs-Practice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary flex items-center gap-1 hover:underline font-mono"
                            >
                                <Github className="w-3 h-3" />
                                GitHub Repository
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>

                        <div className="p-4 rounded-2xl bg-muted/30 border border-border/50">
                            <h4 className="text-xs font-bold mb-2">Total Labs</h4>
                            <div className="text-3xl font-black text-primary">9</div>
                            <div className="text-[10px] uppercase text-muted-foreground tracking-widest">Reports Completed</div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-2">

                        {/* About SEEDLabs */}
                        <Section id="about" title="About SEEDLabs" icon={BookOpen}>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                <strong>SEED (Software, Education, Education, and Development)</strong> is a hands-on cybersecurity education project developed at <strong>Syracuse University</strong>. It provides real-world lab environments where students practice actual attack and defense techniques in controlled virtual networks using tools like Wireshark, iptables, and Scapy.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {[
                                    { label: "Units Covered", value: "9" },
                                    { label: "Attack Labs", value: "6" },
                                    { label: "Defense Labs", value: "2" },
                                    { label: "Total PDFs", value: "9" },
                                ].map((stat) => (
                                    <div key={stat.label} className="p-4 rounded-xl border border-border/50 bg-card/50 text-center">
                                        <div className="text-2xl font-black text-primary">{stat.value}</div>
                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Skills Gained */}
                        <Section id="skills" title="Skills & Knowledge Gained" icon={Shield}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        category: "Attack Techniques",
                                        color: "text-red-400",
                                        bg: "bg-red-500/10",
                                        border: "border-red-500/20",
                                        icon: AlertTriangle,
                                        skills: ["ARP Spoofing & Poisoning", "DNS Cache Poisoning", "Session Hijacking", "MITM Attacks", "BGP Route Hijacking", "WiFi Evil Twin"],
                                    },
                                    {
                                        category: "Defense & Hardening",
                                        color: "text-emerald-400",
                                        bg: "bg-emerald-500/10",
                                        border: "border-emerald-500/20",
                                        icon: Shield,
                                        skills: ["iptables Firewall Rules", "DNSSEC Configuration", "WPA2 Security", "RPKI for BGP", "VPN Setup (OpenVPN)", "SSL/TLS Hardening"],
                                    },
                                    {
                                        category: "Cryptography",
                                        color: "text-purple-400",
                                        bg: "bg-purple-500/10",
                                        border: "border-purple-500/20",
                                        icon: Key,
                                        skills: ["Public Key Infrastructure", "X.509 Certificates", "Digital Signatures", "Certificate Authority", "TLS Handshake", "Key Exchange Protocols"],
                                    },
                                    {
                                        category: "Tools Used",
                                        color: "text-sky-400",
                                        bg: "bg-sky-500/10",
                                        border: "border-sky-500/20",
                                        icon: Network,
                                        skills: ["Wireshark", "Scapy (Python)", "iptables / nftables", "OpenVPN", "Nmap", "Dig / nslookup"],
                                    },
                                ].map((group) => {
                                    const GroupIcon = group.icon;
                                    return (
                                        <div key={group.category} className={cn("p-5 rounded-2xl border", group.bg, group.border)}>
                                            <div className="flex items-center gap-2 mb-4">
                                                <GroupIcon className={cn("w-4 h-4", group.color)} />
                                                <span className="font-bold text-sm">{group.category}</span>
                                            </div>
                                            <ul className="space-y-1.5">
                                                {group.skills.map((skill) => (
                                                    <li key={skill} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <span className={cn("w-1 h-1 rounded-full shrink-0", `bg-${group.color.split("-")[1]}-400`)} />
                                                        {skill}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </Section>

                        {/* Lab Reports */}
                        <Section id="reports" title="Lab Reports" icon={FileText}>
                            <p className="text-muted-foreground text-sm mb-6">
                                Click on any card to expand and access the full PDF report. All reports are hosted on{" "}
                                <a
                                    href="https://github.com/Yudzyyy/Seedlabs-Practice"
                                    target="_blank"
                                    className="text-primary hover:underline"
                                >
                                    GitHub
                                </a>.
                            </p>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={cn(
                                            "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all border",
                                            activeCategory === cat
                                                ? "bg-primary text-primary-foreground border-primary"
                                                : "bg-muted/30 text-muted-foreground border-border/50 hover:border-primary/30 hover:text-primary"
                                        )}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <AnimatePresence mode="popLayout">
                                    {filtered.map((report) => (
                                        <motion.div
                                            key={report.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                        >
                                            <ReportCard report={report} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </Section>

                        {/* Footer CTA */}
                        <div className="mt-16 pt-10 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">
                                    Want to see all reports?
                                </span>
                                <h4 className="text-xl font-bold">Browse the full GitHub repository</h4>
                            </div>
                            <a
                                href="https://github.com/Yudzyyy/Seedlabs-Practice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform flex items-center gap-2 text-sm"
                            >
                                <Github className="w-4 h-4" /> View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
