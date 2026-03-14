import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CicdServerPage() {
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
                        Private CI/CD <span className="text-blue-500">Infrastructure</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        A self-hosted automation infrastructure designed to manage Git repositories and automate deployment pipelines for internal applications with full data sovereignty.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Role</h4>
                        <p className="text-2xl font-black">System Architect</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">OS</h4>
                        <p className="text-2xl font-black text-blue-500">Ubuntu Server</p>
                    </div>
                    <div className="rounded-xl border border-border p-6 bg-card/50 col-span-2">
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Internal Stack</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['Gitea', 'NGINX', 'GoAccess', 'SSL/TLS', 'Bash Scripting', 'systemd'].map(t => (
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
                        This project is a self-hosted (private) CI/CD infrastructure designed to manage internal Git repositories and automate application deployment workflows. It provides a centralized platform for code versioning, automated builds, and real-time server performance monitoring without relying on external SaaS providers.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">02. Why It Was Built</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The primary goal was to achieve full data sovereignty and eliminate dependence on third-party cloud platforms for internal tools. This setup ensures that proprietary code and deployment metadata remain strictly within the private infrastructure, while also optimizing operational costs and providing full control over the deployment pipeline.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">03. How It Works (High-Level)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Deployed on an Ubuntu VPS, the system uses Gitea for lightweight Git management. NGINX serves as a robust reverse proxy, handling SSL/TLS termination and securing traffic. For operational visibility, GoAccess is implemented to parse web logs in real-time, providing an analytics dashboard for monitoring traffic patterns and server health, all integrated within the server environment.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">04. Technologies Used</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Gitea (Git Service)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>NGINX (Reverse Proxy)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Ubuntu Server 22.04 LTS</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>GoAccess (Real-time Monitoring)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>Certbot / Lets Encrypt (SSL)</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-primary">05. My Role & Contribution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        As the System Architect, I was responsible for the end-to-end setup of the VPS environment. I configured the NGINX reverse proxy with hardened security headers and managed the SSL/TLS certificate lifecycle. I also optimized Gitea for performance and implemented the GoAccess monitoring system to ensure high availability and visibility into system logs.
                    </p>
                </div>
            </section>
        </div>
    );
}

