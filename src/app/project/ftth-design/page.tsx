import { ArrowLeft, Radio, Zap, Map } from "lucide-react";
import Link from "next/link";

export default function FtthDesignPage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            {/* Breadcrumbs */}
            <Link
                href="/project"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
                <ArrowLeft size={16} />
                Back to Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        FTTH Network <span className="text-emerald-500">Planning</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        High-capacity fiber-optic network design for residential areas in Sumedang, utilizing GPON technology and precise optical link budget analysis.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Location</h4>
                        <p className="text-2xl font-black">Sumedang Area</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Tech</h4>
                        <p className="text-2xl font-black text-emerald-500">GPON / Fiber</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50 col-span-2">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Planning Stack</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['Atoll', 'OptiSystem', 'Link Budget', 'Attenuation Analysis', 'ODC/ODP Mapping', 'PON Architecture'].map(t => (
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
                        This project involves the planning and design of a Fiber-To-The-Home (FTTH) network infrastructure for residential areas in Sumedang. It utilizes high-capacity optical link planning to deliver broadband internet via Gigabit Passive Optical Network (GPON) technology.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">02. Why It Was Built</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        To support the increasing demand for high-speed internet in suburban residential areas, this project focuses on designing an efficient and scalable optical distribution network. The objective was to ensure reliable signal delivery with minimal loss over long distances using cost-effective PON architecture.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">03. How It Works (High-Level)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The design methodology uses Atoll for radio and coverage planning and OptiSystem for simulating the optical link budget. The architecture includes the placement of Optical Distribution Cabinets (ODC) and Optical Distribution Points (ODP), ensuring signal attenuation remains within IEEE 802.3ah GPON standards. It calculates precise splitter ratios and fiber pathing for optimal service delivery.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">04. Technologies Used</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Atoll Radio Planning Software</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>OptiSystem (Optical Simulation)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>GPON (Gigabit PON) Technology</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Single-mode Fiber (G.652D)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>GIS Mapping Tools</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">05. My Role & Contribution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        As the Planning Engineer, I performed the end-to-end link budget calculations and signal loss simulations. I mapped the entire distribution network, determining the optimal placement for passive components like splitters and distribution points. I also verified the technical feasibility of the design through comprehensive simulations in Atoll and OptiSystem.
                    </p>
                </div>
            </section>
        </div>
    );
}
