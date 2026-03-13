"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ChevronLeft, 
    Cloud, 
    Server, 
    Terminal, 
    ShieldCheck, 
    Container, 
    Globe,
    Cpu,
    ExternalLink,
    CheckCircle2,
    Lock,
    Code,
    Github,
    Layers,
    Camera,
    Image as ImageIcon,
    X as CloseIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Section = ({ id, title, icon: Icon, children, className }: { id?: string; title: string; icon: React.ElementType; children: React.ReactNode; className?: string }) => (
    <motion.section 
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn("mb-12 scroll-mt-24", className)}
    >
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                <Icon className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>
        <div className="pl-0 md:pl-11">
            {children}
        </div>
    </motion.section>
);

const CodeBlock = ({ code, label }: { code: string; label?: string }) => (
    <div className="my-6 group">
        {label && <div className="text-xs font-mono text-muted-foreground mb-2 px-1 uppercase tracking-widest">{label}</div>}
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-zinc-950 p-4 font-mono text-sm">
            <pre className="text-emerald-400 overflow-x-auto">
                <code>{code}</code>
            </pre>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Terminal className="w-4 h-4 text-zinc-600" />
            </div>
        </div>
    </div>
);

const Step = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
    <div className="flex gap-4 mb-8">
        <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
            {number}
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            {children}
        </div>
    </div>
);

export default function AWSDeploymentPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header / Banner */}
            <div className="relative h-96 overflow-hidden border-b border-border/50 bg-zinc-950">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-50" />
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <div className="container relative z-10 mx-auto h-full flex flex-col justify-end p-6 pb-12 md:p-12 md:pb-20 max-w-5xl">
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
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest">
                                Cloud Deployment Project
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl">
                            Deploying Next.js Portfolio with Docker on AWS EC2
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl font-medium">
                            I deployed my personal portfolio using a production-ready cloud architecture with high-level containerization and security.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block space-y-8 sticky top-24 h-fit">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">On this page</h4>
                            <nav className="flex flex-col gap-3">
                                {[
                                    { id: "overview", label: "Overview", icon: Globe },
                                    { id: "architecture", label: "Architecture", icon: Cpu },
                                    { id: "tech-stack", label: "Technology", icon: Layers },
                                    { id: "learning", label: "Learnings", icon: CheckCircle2 },
                                    { id: "gallery", label: "Visual Documentation", icon: Camera },
                                    { id: "skills", label: "DevOps Skills", icon: ShieldCheck },
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
                            <h4 className="text-xs font-bold mb-2">Live Demo</h4>
                            <a 
                                href="https://titiswahyudi.space" 
                                target="_blank" 
                                className="text-xs text-primary flex items-center gap-1 hover:underline font-mono"
                            >
                                titiswahyudi.space <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <Section id="overview" title="Project Overview" icon={Globe}>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                This project focuses on transforming a frontend application into a production-ready system in a cloud environment. 
                                The application runs inside a <strong>Docker</strong> container on an <strong>AWS EC2 Ubuntu</strong> instance. 
                                <strong>Nginx</strong> is configured as a reverse proxy to route traffic from the domain to the application. 
                                <strong>HTTPS</strong> is enabled using Let&apos;s Encrypt to secure data communication.
                            </p>
                        </Section>

                        <Section id="architecture" title="Deployment Architecture" icon={Cpu}>
                            <div className="relative mb-10">
                                <div className="flex flex-col items-center gap-4 py-8 px-4 rounded-3xl bg-zinc-950 border border-border/50">
                                    {[
                                        { label: "User", icon: Globe, color: "text-zinc-400" },
                                        { label: "Domain (Hostinger DNS)", icon: ExternalLink, color: "text-blue-400" },
                                        { label: "HTTPS (Let's Encrypt SSL)", icon: Lock, color: "text-emerald-400" },
                                        { label: "Nginx Reverse Proxy", icon: Server, color: "text-emerald-500" },
                                        { label: "Docker Container", icon: Container, color: "text-blue-500" },
                                        { label: "Next.js Application", icon: Code, color: "text-white" },
                                        { label: "AWS EC2 Server (Ubuntu)", icon: Cloud, color: "text-orange-400" },
                                    ].map((item, index, array) => (
                                        <React.Fragment key={item.label}>
                                            <div className="flex items-center gap-4 w-full max-w-sm p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                                <item.icon className={cn("w-6 h-6", item.color)} />
                                                <span className="font-mono text-sm md:text-base font-bold">{item.label}</span>
                                            </div>
                                            {index < array.length - 1 && (
                                                <motion.div 
                                                    animate={{ y: [0, 5, 0] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                    className="text-zinc-600"
                                                >
                                                    <ChevronLeft className="w-6 h-6 rotate-[-90deg]" />
                                                </motion.div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </Section>

                        <Section id="tech-stack" title="Technologies Used" icon={Layers}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {[
                                    { name: "Next.js 15", icon: Code },
                                    { name: "React 19", icon: Cpu },
                                    { name: "Docker", icon: Container },
                                    { name: "AWS EC2", icon: Cloud },
                                    { name: "Nginx", icon: Server },
                                    { name: "Let's Encrypt", icon: Lock },
                                    { name: "Ubuntu Linux", icon: Terminal },
                                    { name: "GitHub", icon: Github },
                                ].map((tech) => (
                                    <div key={tech.name} className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                                        <tech.icon className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-bold">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section id="gallery" title="Visual Documentation" icon={Camera}>
                            <GalleryGrid />
                            <p className="text-sm text-muted-foreground italic text-center">
                                Documentation of the workflow from cloud provisioning to HTTPS security. (Click Image to Enlarge)
                            </p>
                        </Section>

                        <Section id="learning" title="Key Learning Points" icon={CheckCircle2}>
                            <div className="space-y-4">
                                {[
                                    { title: "Containerization", desc: "Wrapping the Next.js application with Docker for consistency across various environments." },
                                    { title: "AWS Configuration", desc: "Managing EC2 instances, Security Groups, and Elastic IP for public access." },
                                    { title: "Nginx Proxy", desc: "Setting up routing from port 80/443 to the internal application on port 3000." },
                                    { title: "Domain Management", desc: "Connecting a custom domain via Hostinger DNS to the AWS server." },
                                    { title: "SSL Security", desc: "Automatic HTTPS implementation using Certbot and Let's Encrypt." },
                                    { title: "SSH Automation", desc: "Managing deployment and server maintenance remotely via terminal." },
                                ].map((point, i) => (
                                    <div key={i} className="p-5 rounded-2xl bg-muted/30 border border-border/50">
                                        <h4 className="font-bold mb-1 text-primary">{point.title}</h4>
                                        <p className="text-sm text-muted-foreground">{point.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section id="skills" title="DevOps & Cloud Skills" icon={ShieldCheck}>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { name: "AWS", level: "Intermediate" },
                                    { name: "Docker", level: "Advanced" },
                                    { name: "Nginx", level: "Advanced" },
                                    { name: "Linux Server", level: "Advanced" },
                                    { name: "GitHub Actions", level: "Intermediate" },
                                    { name: "Next.js", level: "Advanced" },
                                ].map((skill) => (
                                    <div key={skill.name} className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 flex flex-col items-center min-w-[120px]">
                                        <span className="text-sm font-black">{skill.name}</span>
                                        <span className="text-[10px] uppercase text-muted-foreground/60">{skill.level}</span>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Implementation Details */}
                        <Section id="implementation" title="Implementation Details" icon={Terminal} className="mt-20">
                            <Step number="1" title="Multi-stage Dockerfile">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Optimizing the Docker image by separating build and runtime stages for minimal image size.
                                </p>
                            </Step>
                            <CodeBlock 
                                label="Dockerfile"
                                code={`FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
CMD ["node", "server.js"]`} 
                            />

                            <Step number="2" title="Nginx Configuration">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Routing HTTPS traffic to the application running inside the container.
                                </p>
                            </Step>
                            <CodeBlock 
                                label="nginx.conf"
                                code={`server {
    server_name titiswahyudi.space;
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
    }
    listen 443 ssl;
    # SSL config by Certbot
}`} 
                            />
                        </Section>

                        <div className="mt-20 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Ready for the next level?</span>
                                <h4 className="text-xl font-bold">Need a more detailed report?</h4>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform flex items-center gap-2">
                                    <Cloud className="w-4 h-4" /> Contact Me
                                </button>
                                <button className="px-6 py-3 rounded-xl bg-muted border border-border/50 font-bold hover:bg-muted/80 transition-colors">
                                    View GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const GalleryGrid = () => {
    const [selectedImg, setSelectedImg] = useState<{ id: number; label: string } | null>(null);

    const images = [
        { id: 1, label: "AWS EC2 Instance" },
        { id: 2, label: "Docker Configuration" },
        { id: 3, label: "GitHub Repository" },
        { id: 4, label: "Nginx Config Test" },
        { id: 5, label: "Server Name Configuration" },
        { id: 6, label: "AWS HTTPS Settings" },
        { id: 7, label: "SSL Let's Encrypt" },
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {images.map((img) => (
                    <motion.div 
                        key={img.id} 
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedImg(img)}
                        className="group relative aspect-video overflow-hidden rounded-2xl border border-border/50 bg-muted/30 cursor-zoom-in"
                    >
                        <Image 
                            src={`/images/${img.id}.png`} 
                            alt={img.label} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                            <div className="flex items-center gap-2 text-white">
                                <span className="bg-primary px-2 py-0.5 rounded text-[10px] font-black uppercase">Step {img.id}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white mt-1">
                                <ImageIcon className="w-3.5 h-3.5 text-primary" />
                                <span className="font-bold text-sm tracking-tight">{img.label}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImg && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-7xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image 
                                src={`/images/${selectedImg.id}.png`} 
                                alt={selectedImg.label} 
                                fill 
                                className="object-contain"
                                priority
                            />
                            
                            {/* Close Button */}
                            <button 
                                onClick={() => setSelectedImg(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white border border-white/20 hover:bg-white/20 transition-colors"
                            >
                                <CloseIcon className="w-5 h-5" />
                            </button>

                            {/* Caption Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="flex items-center gap-3">
                                    <span className="bg-primary px-3 py-1 rounded text-xs font-black uppercase">Step {selectedImg.id}</span>
                                    <h4 className="text-white font-bold text-lg">{selectedImg.label}</h4>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}


