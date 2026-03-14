import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NetworkDesignPage() {
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
                        Data Center <span className="text-purple-500">Design</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        Technical project involving the design of a redundant hierarchical network infrastructure for Enterprise Data Center expansion.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Scope</h4>
                        <p className="text-2xl font-black">Core-Dist-Access</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Hardware</h4>
                        <p className="text-2xl font-black text-purple-500">Mikrotik / Dell</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50 col-span-2">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Technical Specs</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['Redundant Link', 'VLAN Mapping', 'LACP Bonding', 'RAB Calculation', 'Visio Mapping', 'IPv4/IPv6'].map(t => (
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
                        This project is a detailed technical design of a redundant hierarchical network infrastructure for a Data Center rack expansion. It covers the physical topology design, logical VLAN mapping, and a comprehensive Bill of Materials (RAB) to support high-density server environments.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">02. Why It Was Built</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The project was initiated to address the need for reliable and scalable network infrastructure during Data Center expansion. The design focuses on ensuring zero downtime through link redundancy and optimal traffic flow for critical enterprise services, following industry best practices for high-availability networking.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">03. How It Works (High-Level)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The architecture follows the three-tier hierarchical model (Core, Distribution, and Access). It utilizes Mikrotik CCR series routers for core routing and Dell Networking switches for the distribution and access layers. Technical features include LACP for link aggregation, structured VLAN tagging for department isolation, and redundant uplinks to prevent single points of failure.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">04. Technologies Used</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Mikrotik RouterOS (CCR)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Dell Networking (OS6/OS10)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>VLAN & Trunking Protocols</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>LACP & Link Aggregation</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Microsoft Visio (Topologies)</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">05. My Role & Contribution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        As the Network Designer, I developed both the physical and logical network topologies using professional design tools. I was responsible for calculating the total power budget and optical link requirements, as well as compiling the Bill of Materials (RAB) for the entire rack expansion project to ensure technical feasibility and economic efficiency.
                    </p>
                </div>
            </section>
        </div>
    );
}

