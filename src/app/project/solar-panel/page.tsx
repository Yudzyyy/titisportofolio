import SolarPanelDiagram from "@/components/projects/SolarPanelDiagram";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import ZoomableImage from "@/components/ui/ZoomableImage";

export default function SolarPanelPage() {
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
                        Solar Panel <span className="text-emerald-500">Robot Cleaner</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        An automated cleaning system for solar panels featuring an ESP8266-powered robot with real-time control via Python (Flask) and a React dashboard.
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
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Robot Brain</h4>
                        <p className="text-3xl font-black">ESP8266</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Communication</h4>
                        <p className="text-3xl font-black text-emerald-500">MQTT & WS</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50 col-span-2">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Key Tech</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['ESP8266', 'Python', 'Flask', 'React', 'MQTT', 'Docker'].map(t => (
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
            <section className="mt-24 max-w-3xl mx-auto space-y-16 pb-20">
                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">01. What This Project Does</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        This project is an automated cleaning system for solar panels. It consists of a physical robot controlled via a web interface. The robot moves across the panel surface to remove dust and debris, maximizing energy efficiency. Users can start the cleaning process, monitor real-time progress, and receive status updates through a dedicated dashboard.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">02. Hardware Components (Robot)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <h3 className="font-bold text-foreground">Core Brain</h3>
                            <p className="text-sm text-muted-foreground">ESP8266 microcontroller with built-in WiFi for MQTT communication.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-foreground">Actors</h3>
                            <p className="text-sm text-muted-foreground">L298N Motor Driver, High-torque DC Motors, and a specialized Water Pump.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-foreground">Sensors</h3>
                            <p className="text-sm text-muted-foreground">Top and Bottom Limit Switches for precise movement boundaries.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">03. Communication Workflow</h2>
                    <div className="space-y-6 text-muted-foreground">
                        <div>
                            <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-blue-500" /> Web ↔ Backend (WebSocket)
                            </h3>
                            <p className="text-sm leading-relaxed">
                                Real-time bidirectional communication between the React frontend and Python backend. Handles command execution and provides instant progress updates (e.g., P:1%, P:2%) to the user interface.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Backend ↔ Robot (MQTT)
                            </h3>
                            <p className="text-sm leading-relaxed">
                                Asynchronous messaging via Mosquitto Broker. The backend sends movement commands (START, RETURN), while the ESP8266 robot reports its physical status and progress back to the system.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">04. Technologies Used</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>React (Vite) & Tailwind CSS</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Python (Flask & Eventlet)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>MQTT (Mosquitto) & WebSockets</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>PostgreSQL & Docker Compose</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">05. My Role & Contribution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        I designed the full-stack architecture, including the circuit schematics for the sensor nodes and the firmware logic for reliable data transmission under varying network conditions. I implemented the MQTT-based communication layer and developed the interactive web dashboard, which features custom SVG-based system architecture diagrams and real-time data visualization charts.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">06. Kubernetes Integration & Value</h2>
                    <div className="space-y-6 text-muted-foreground">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="rounded-xl border border-border p-6 bg-card/50">
                                <h3 className="font-bold text-foreground mb-4">Struktur Sistem Kamu Sekarang</h3>
                                <p className="mb-4">Secara arsitektur:</p>
                                <ul className="space-y-1 mb-6 ml-4 border-l-2 border-primary/20 pl-4 font-mono text-sm">
                                    <li>Browser</li>
                                    <li className="text-primary pl-2">↓</li>
                                    <li>Frontend (React Pod)</li>
                                    <li className="text-primary pl-2">↓</li>
                                    <li>Backend Service</li>
                                    <li className="text-primary pl-2">↓</li>
                                    <li>Backend Pod x3</li>
                                    <li className="text-primary pl-2">↓</li>
                                    <li>MQTT Broker</li>
                                    <li className="text-primary pl-2">↓</li>
                                    <li>ESP8266 Robot</li>
                                    <li className="text-primary pl-2">↓</li>
                                    <li>PostgreSQL</li>
                                </ul>
                                <p className="text-sm font-bold text-foreground bg-muted p-2 rounded-md">Semua berjalan di Kubernetes cluster lokal.</p>
                            </div>

                            <div className="rounded-xl border border-primary/20 p-6 bg-primary/5">
                                <h3 className="font-bold text-primary mb-4 text-xl">Nilai Portfolio Kamu Sekarang</h3>
                                <p className="mb-4">Project ini menunjukkan kamu mengerti:</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {['Containerization', 'Kubernetes orchestration', 'IoT communication (MQTT)', 'Websocket realtime system', 'Persistent storage', 'Horizontal scaling'].map(t => (
                                        <span key={t} className="text-[12px] font-mono bg-primary/10 text-primary px-3 py-1.5 rounded uppercase border border-primary/20">{t}</span>
                                    ))}
                                </div>
                                <p className="font-bold text-foreground mb-4 border-l-4 border-primary pl-3 py-1">Ini sangat kuat untuk posisi DevOps / Cloud / Platform Engineer.</p>
                                
                                <div className="bg-background/80 p-4 rounded-lg border border-border/50">
                                    <p className="text-sm mb-3 text-foreground">💡 Jika kamu ingin menaikkan level portfolio ini menjadi benar-benar profesional, langkah berikutnya biasanya:</p>
                                    <div className="space-y-2 text-sm font-mono ml-2 text-muted-foreground">
                                        <p>1️⃣ Ingress Controller (akses domain seperti production)</p>
                                        <p>2️⃣ Horizontal Pod Autoscaler (auto scale)</p>
                                        <p>3️⃣ Monitoring (Prometheus + Grafana)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="rounded-xl overflow-hidden border border-border bg-card">
                                <ZoomableImage src="/images/kube1.png" alt="Kubernetes pods architecture" width={800} height={600} className="w-full h-auto object-cover" />
                            </div>
                            <div className="rounded-xl overflow-hidden border border-border bg-card">
                                <ZoomableImage src="/images/kube2.png" alt="Kubernetes services architecture" width={800} height={600} className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

