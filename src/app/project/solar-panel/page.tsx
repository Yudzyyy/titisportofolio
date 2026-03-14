import SolarPanelDiagram from "@/components/projects/SolarPanelDiagram";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

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
            </section>
        </div>
    );
}

