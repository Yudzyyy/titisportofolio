import FloodMonitoringDiagram from "@/components/projects/FloodMonitoringDiagram";
import { ArrowLeft, ExternalLink, Github, Droplets, Bell, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function FloodMonitoringPage() {
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
                        Flood <span className="text-blue-500">Monitoring</span> System
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        An automated water level monitoring system for early flood detection, featuring multi-sensor data fusion and real-time Telegram alerts.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90">
                            <ExternalLink size={18} />
                            Live Dashboard
                        </button>
                        <button className="flex items-center gap-2 rounded-full bg-muted px-6 py-3 text-sm font-bold hover:bg-muted/80">
                            <Github size={18} />
                            View Source
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Microcontroller</h4>
                        <p className="text-3xl font-black text-blue-500">ESP32</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Push Alerts</h4>
                        <p className="text-3xl font-black text-emerald-500">Telegram</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50 col-span-2">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Key Tech Stack</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['Node.js', 'React', 'MongoDB', 'Docker', 'Kubernetes', 'Cloudflare'].map(t => (
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
                        <h2 className="text-2xl font-bold font-mono uppercase tracking-tight">Cloud-Native Architecture</h2>
                        <p className="text-muted-foreground text-sm">Interactive diagram: visualizing the flow from sensor to Kubernetes-managed backend.</p>
                    </div>
                </div>

                <FloodMonitoringDiagram />
            </section>

            {/* Project content section */}
            <section className="mt-24 max-w-4xl mx-auto space-y-16 pb-20">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary flex items-center gap-3">
                            <Droplets className="text-blue-500" /> 01. Concept
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Proyek ini adalah sistem monitoring ketinggian air berbasis IoT yang dirancang untuk deteksi dini banjir. Sistem ini mengintegrasikan berbagai sensor lingkungan untuk memberikan gambaran lengkap tentang kondisi di lapangan secara real-time.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary flex items-center gap-3">
                            <Bell className="text-emerald-500" /> 02. Real-time Alerts
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Menggunakan Telegram Bot API untuk memberikan notifikasi instan saat ketinggian air mencapai ambang batas bahaya atau saat terdeteksi hujan deras, memastikan respons cepat dari pihak terkait.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary flex items-center gap-3">
                        <ShieldCheck className="text-purple-500" /> 03. Infrastructure & Scalability
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl border border-border bg-card/30">
                            <h3 className="font-bold mb-2">Docker</h3>
                            <p className="text-sm text-muted-foreground">Kontainerisasi seluruh layanan (frontend, backend, database) untuk portabilitas yang maksimal.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-border bg-card/30">
                            <h3 className="font-bold mb-2">Kubernetes</h3>
                            <p className="text-sm text-muted-foreground">Orkestrasi klaster untuk memastikan ketersediaan tinggi dan skalabilitas otomatis sistem.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-border bg-card/30">
                            <h3 className="font-bold mb-2">Cloudflare</h3>
                            <p className="text-sm text-muted-foreground">Keamanan dari serangan DDoS dan akselerasi pengiriman konten dashboard global.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary flex items-center gap-3">
                        <Activity className="text-orange-500" /> 04. Features & Specs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold border-b border-border pb-2">Hardware</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                    NodeMCU ESP32 & HC-SR04 Ultrasonic
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                    DHT22 (Suhu/Lembab) & Rain Sensor
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                    Buzzer & LCD I2C Output
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold border-b border-border pb-2">Software</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                    React Dashboard with Graphic Logs
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                    Node.js/Express REST & WebSocket
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                    Admin Mode for Data Management
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

