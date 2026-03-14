import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

export default function SeedLabsPage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            {/* Breadcrumbs */}
            <Link
                href="/explore"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
                <ArrowLeft size={16} />
                Back to Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        SeedLabs <span className="text-red-500">Security</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        Technical lab series focusing on identifying and mitigating network security vulnerabilities through controlled exploitation and defense implementation.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a 
                            href="https://github.com/Yudzyyy/Seedlabs-Practice" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90"
                        >
                            <Github size={18} />
                            View Source
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Category</h4>
                        <p className="text-2xl font-black">Network Security</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Platform</h4>
                        <p className="text-2xl font-black text-red-500">Linux / Ubuntu</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50 col-span-2">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Key Tech</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['Scapy', 'Wireshark', 'Docker', 'Netwox', 'TCP/IP', 'Firewall'].map(t => (
                                <span key={t} className="text-[10px] font-mono bg-muted px-2 py-1 rounded uppercase">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Project content section */}
            <section className="mt-24 max-w-3xl mx-auto space-y-16 pb-20">
                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">01. What This Project Does</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        This project consists of a series of technical laboratory modules focused on identifying and mitigating network security vulnerabilities. It covers practical scenarios including packet sniffing, ARP spoofing, TCP session hijacking, and DNS cache poisoning, providing deep insights into how networking protocols can be exploited and subsequently secured.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">02. Why It Was Built</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Theoretical knowledge of network security is often insufficient for real-world application. This project was built to provide hands-on experience in understanding the mechanics of network attacks. By simulating these attacks in a controlled environment, it enables the development and testing of robust defense configurations and security policies.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">03. How It Works (High-Level)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The project utilizes a virtualized Linux environment managed via Docker containers to simulate complex network topologies. Attacks are orchestrated using Python scripts with the Scapy library for packet manipulation and Netwox for automated tasks. Monitoring and analysis are performed using Wireshark to observe packet flows and verify the effectiveness of mitigation strategies like firewall rules and secure protocol implementations.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">04. Technologies Used</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Linux (Ubuntu) & Docker</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Python & Scapy Library</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Wireshark & Tcpdump</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Netwox & Network Utilities</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>IP Tables & Firewall Rules</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">05. My Role & Contribution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        As a Security Researcher, I was responsible for executing controlled attack scenarios and analyzing data at the packet level. I implemented mitigation strategies for various vulnerabilities, including configuring firewalls and enhancing protocol security. Additionally, I documented all exploitation techniques and defense mechanisms to provide a clear technical roadmap for vulnerability assessment.
                    </p>
                </div>
            </section>
        </div>
    );
}

