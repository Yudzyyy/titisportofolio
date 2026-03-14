"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ChevronLeft,
    Cpu,
    Container,
    Database,
    Server,
    Radio,
    Globe,
    CheckCircle2,
    ExternalLink,
    Zap,
    Layers,
    ArrowRight,
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

const CodeBlock = ({ code, label }: { code: string; label?: string }) => (
    <div className="my-6 group">
        {label && (
            <div className="text-xs font-mono text-muted-foreground mb-2 px-1 uppercase tracking-widest">
                {label}
            </div>
        )}
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-zinc-950 p-4 font-mono text-sm">
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre-wrap">
                <code>{code}</code>
            </pre>
        </div>
    </div>
);

// Docker containers architecture
const containers = [
    {
        name: "frontend",
        label: "React Frontend",
        port: "5173",
        icon: Globe,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        tech: "React + Vite + Tailwind",
        desc: "Dashboard real-time untuk monitoring dan kontrol robot cleaner.",
    },
    {
        name: "backend",
        label: "Python Backend",
        port: "5000",
        icon: Server,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        tech: "Flask + SocketIO + Eventlet",
        desc: "REST API & WebSocket server yang menjembatani frontend dengan MQTT broker.",
    },
    {
        name: "mqtt",
        label: "MQTT Broker",
        port: "1883",
        icon: Radio,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        tech: "Mosquitto Broker",
        desc: "Message broker untuk komunikasi async dengan ESP8266 di robot fisik.",
    },
    {
        name: "postgres",
        label: "PostgreSQL",
        port: "5432",
        icon: Database,
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/30",
        tech: "PostgreSQL 15",
        desc: "Database untuk menyimpan log aktivitas, riwayat pembersihan, dan data sensor.",
    },
];

export default function IoTSolarPanelPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header Banner */}
            <div className="relative h-80 overflow-hidden border-b border-border/50 bg-zinc-950">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent opacity-50" />
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
                            <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold uppercase tracking-widest">
                                IoT Project
                            </span>
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest">
                                Docker Compose
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl">
                            Solar Panel Robot Cleaner — IoT System
                        </h1>
                        <p className="text-muted-foreground text-base max-w-2xl">
                            A full-stack IoT system with 4 Docker containers: React frontend, Python backend, MQTT broker, and PostgreSQL — all orchestrated with Docker Compose.
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
                                    { id: "overview", label: "Overview", icon: Zap },
                                    { id: "containers", label: "Docker Containers", icon: Container },
                                    { id: "compose", label: "Docker Compose", icon: Layers },
                                    { id: "architecture", label: "Architecture", icon: Cpu },
                                    { id: "hardware", label: "Hardware", icon: Radio },
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
                            <h4 className="text-xs font-bold mb-3">Full Case Study</h4>
                            <Link
                                href="/project/solar-panel"
                                className="text-xs text-primary flex items-center gap-1 hover:underline font-mono"
                            >
                                View Project Page <ExternalLink className="w-3 h-3" />
                            </Link>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-2">
                        {/* Overview */}
                        <Section id="overview" title="Project Overview" icon={Zap}>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                This IoT project automates the cleaning of solar panels using a physical robot controlled via a web dashboard.
                                The entire server-side infrastructure runs inside <strong>4 Docker containers</strong> orchestrated with Docker Compose,
                                ensuring a consistent and portable development and production environment.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                {[
                                    { label: "Hardware", value: "ESP8266" },
                                    { label: "Containers", value: "4" },
                                    { label: "Protocol", value: "MQTT" },
                                    { label: "Real-time", value: "WebSocket" },
                                ].map((stat) => (
                                    <div key={stat.label} className="p-4 rounded-xl border border-border/50 bg-card/50 text-center">
                                        <div className="text-2xl font-black text-primary">{stat.value}</div>
                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Docker Containers */}
                        <Section id="containers" title="4 Docker Containers" icon={Container}>
                            <p className="text-muted-foreground text-sm mb-6">
                                Each service runs in its own isolated container. They communicate via a shared Docker network defined in <code className="text-blue-400 bg-blue-500/10 px-1 rounded">docker-compose.yml</code>.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {containers.map((c) => {
                                    const Icon = c.icon;
                                    return (
                                        <motion.div
                                            key={c.name}
                                            whileHover={{ y: -3 }}
                                            className={cn("p-5 rounded-2xl border", c.bg, c.border)}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={cn("p-2 rounded-lg border", c.bg, c.border)}>
                                                    <Icon className={cn("w-4 h-4", c.color)} />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm">{c.label}</div>
                                                    <div className="text-[10px] font-mono text-muted-foreground">:{c.port}</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-muted-foreground mb-2">{c.desc}</div>
                                            <div className={cn("inline-block text-[10px] font-mono px-2 py-0.5 rounded font-bold", c.bg, c.color)}>
                                                {c.tech}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </Section>

                        {/* Docker Compose */}
                        <Section id="compose" title="Docker Compose Configuration" icon={Layers}>
                            <p className="text-muted-foreground text-sm mb-4">
                                A single <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">docker-compose.yml</code> spins up all 4 services with one command: <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">docker compose up -d</code>.
                            </p>
                            <CodeBlock
                                label="docker-compose.yml"
                                code={`services:
  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend
    networks:
      - solar-net

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - mqtt
      - postgres
    environment:
      - DATABASE_URL=postgresql://user:pass@postgres:5432/solardb
      - MQTT_HOST=mqtt
    networks:
      - solar-net

  mqtt:
    image: eclipse-mosquitto:2
    ports:
      - "1883:1883"
      - "9001:9001"
    volumes:
      - ./mosquitto/config:/mosquitto/config
    networks:
      - solar-net

  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: solardb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - solar-net

networks:
  solar-net:
    driver: bridge

volumes:
  postgres_data:`}
                            />
                        </Section>

                        {/* Architecture */}
                        <Section id="architecture" title="Communication Architecture" icon={Cpu}>
                            <div className="space-y-4">
                                {[
                                    {
                                        from: "React Dashboard",
                                        to: "Flask Backend",
                                        protocol: "WebSocket (SocketIO)",
                                        color: "text-blue-400",
                                        desc: "Real-time bidirectional channel. Frontend sends commands (START, STOP) and receives live progress updates (P:1%...P:100%).",
                                    },
                                    {
                                        from: "Flask Backend",
                                        to: "MQTT Broker",
                                        protocol: "MQTT Publish/Subscribe",
                                        color: "text-emerald-400",
                                        desc: "Backend publishes movement commands to topics like `robot/command`. Robot subscribes and responds via the broker.",
                                    },
                                    {
                                        from: "MQTT Broker",
                                        to: "ESP8266 (Robot)",
                                        protocol: "MQTT over WiFi",
                                        color: "text-red-400",
                                        desc: "Physical hardware subscribes to command topics and publishes sensor data back through the Mosquitto broker.",
                                    },
                                    {
                                        from: "Flask Backend",
                                        to: "PostgreSQL",
                                        protocol: "SQLAlchemy ORM",
                                        color: "text-sky-400",
                                        desc: "All cleaning sessions, robot states, and timestamps are stored persistently in the PostgreSQL database.",
                                    },
                                ].map((flow, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/50">
                                        <div className="shrink-0 flex flex-col items-center pt-1">
                                            <CheckCircle2 className={cn("w-4 h-4", flow.color)} />
                                            {i < 3 && <div className="w-px flex-1 bg-border/50 mt-2" />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap mb-1">
                                                <span className="font-bold text-sm">{flow.from}</span>
                                                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                                                <span className="font-bold text-sm">{flow.to}</span>
                                                <span className={cn("text-[10px] font-mono px-2 py-0.5 rounded border bg-card", flow.color)}>
                                                    {flow.protocol}
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">{flow.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Hardware */}
                        <Section id="hardware" title="Hardware Components" icon={Radio}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { name: "ESP8266", role: "Microcontroller", desc: "WiFi-enabled MCU running the robot firmware and MQTT client." },
                                    { name: "L298N Driver", role: "Motor Controller", desc: "Dual H-bridge for controlling DC motors (forward, backward, stop)." },
                                    { name: "DC Motors", role: "Actuators", desc: "High-torque motors for moving the cleaning mechanism across the panel." },
                                    { name: "Water Pump", role: "Cleaning System", desc: "Activated remotely to spray water while the brush cleans the surface." },
                                    { name: "Limit Switches", role: "Position Sensors", desc: "Top and bottom switches to detect panel edges and stop movement." },
                                    { name: "WiFi Module", role: "Connectivity", desc: "Built-in to ESP8266, connects to local network for MQTT communication." },
                                ].map((hw) => (
                                    <div key={hw.name} className="p-4 rounded-xl border border-border/50 bg-card/50">
                                        <div className="font-bold text-sm mb-0.5">{hw.name}</div>
                                        <div className="text-[10px] uppercase tracking-widest text-primary mb-2">{hw.role}</div>
                                        <p className="text-xs text-muted-foreground">{hw.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Footer CTA */}
                        <div className="mt-16 pt-10 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">
                                    Want the full breakdown?
                                </span>
                                <h4 className="text-xl font-bold">Explore the full project case study</h4>
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                <Link
                                    href="/project/solar-panel"
                                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform flex items-center gap-2 text-sm"
                                >
                                    <Cpu className="w-4 h-4" /> View Project
                                </Link>
                                <Link
                                    href="/explore"
                                    className="px-6 py-3 rounded-xl bg-muted border border-border/50 font-bold hover:bg-muted/80 transition-colors text-sm"
                                >
                                    Back to Explore
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
