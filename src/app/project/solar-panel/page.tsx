import SolarPanelDiagram from "@/components/projects/SolarPanelDiagram";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function SolarPanelPage() {
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
                        Solar Panel <span className="text-emerald-500">IoT</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        An intelligent monitoring system for residential solar panels, featuring real-time data ingestion via MQTT and a comprehensive analytics dashboard.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90">
                            <ExternalLink size={18} />
                            Live Demo
                        </button>
                        <button className="flex items-center gap-2 rounded-full bg-muted px-6 py-3 text-sm font-bold hover:bg-muted/80">
                            <Github size={18} />
                            View Source
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Power Monitored</h4>
                        <p className="text-3xl font-black">2.4 <span className="text-sm font-normal text-muted-foreground">kW/h</span></p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Alert Status</h4>
                        <p className="text-3xl font-black text-emerald-500">Healthy</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50 col-span-2">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Key Tech</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['ESP32', 'MQTT', 'Laravel', 'Next.js', 'PostgreSQL', 'Docker'].map(t => (
                                <span key={t} className="text-[10px] font-mono bg-muted px-2 py-1 rounded uppercase">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive System Architecture */}
            <section className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold font-mono uppercase tracking-tight">System Architecture</h2>
                        <p className="text-muted-foreground text-sm">Interactive diagram: click nodes to see configuration details.</p>
                    </div>
                </div>

                <SolarPanelDiagram />
            </section>

            {/* Project content section */}
            <section className="mt-24 max-w-3xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Managing a distributed network of solar panels requires low-latency communication and robust data persistence. Most existing solutions are monolithic and hard to customize. I needed a system that could handle intermittent connectivity from the hardware sensors while maintaining high availability for the dashboard.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight">The Solution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        I designed a decoupled architecture using MQTT as the backbone. The sensors act as publishers, while a Laravel backend subscribes to relevant topics for processing and persistence. The Next.js dashboard uses WebSockets to reflect changes instantly, providing a seamless user experience.
                    </p>
                </div>
            </section>
        </div>
    );
}
