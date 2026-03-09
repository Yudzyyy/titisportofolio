"use client";

import { motion } from "framer-motion";
import { 
    ChevronLeft, 
    Cloud, 
    Server, 
    Terminal, 
    Link as LinkIcon, 
    ShieldCheck, 
    Container, 
    Globe,
    Cpu,
    ExternalLink,
    CheckCircle2,
    Code2,
    Database,
    Lock
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Section = ({ title, icon: Icon, children, className }: any) => (
    <motion.section 
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

const Step = ({ number, title, children }: any) => (
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
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
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
                            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-[10px] font-bold uppercase tracking-widest">
                                AWS Deployment
                            </span>
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest">
                                Docker
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl">
                            Next.js Deployment to AWS EC2 with Docker & Nginx
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl font-medium">
                            A comprehensive guide on architecting a secure, scalable, and professional production environment for Next.js applications.
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
                                    { id: "intro", label: "Introduction", icon: Globe },
                                    { id: "architecture", label: "Architecture", icon: Cpu },
                                    { id: "aws-ec2", label: "AWS EC2 Setup", icon: Cloud },
                                    { id: "docker", label: "Dockerization", icon: Container },
                                    { id: "nginx", label: "Nginx Proxy", icon: Server },
                                    { id: "ssl", label: "SSL & Security", icon: ShieldCheck },
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
                                className="text-xs text-primary flex items-center gap-1 hover:underline"
                            >
                                titiswahyudi.space <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <Section id="intro" title="Introduction" icon={Globe}>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                This documentation details the end-to-end process of deploying a modern Next.js application to <strong>AWS EC2</strong>. 
                                We leverage <strong>Docker</strong> for containerization, <strong>Nginx</strong> as a high-performance reverse proxy, 
                                and <strong>Let&apos;s Encrypt</strong> for military-grade SSL encryption.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {[
                                    { label: "Cloud", value: "AWS EC2", icon: Cloud },
                                    { label: "OS", value: "Ubuntu 24.04", icon: Globe },
                                    { label: "Container", value: "Docker", icon: Container },
                                    { label: "Proxy", value: "Nginx", icon: Server },
                                ].map((tech) => (
                                    <div key={tech.label} className="p-4 rounded-xl border border-border/50 bg-card/50">
                                        <tech.icon className="w-4 h-4 text-primary mb-2" />
                                        <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">{tech.label}</div>
                                        <div className="text-sm font-bold">{tech.value}</div>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section id="architecture" title="System Architecture" icon={Cpu}>
                            <div className="relative p-8 rounded-3xl bg-zinc-950 border border-border/50 overflow-hidden mb-8">
                                <div className="absolute inset-0 opacity-10 pointer-events-none">
                                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
                                </div>
                                <pre className="font-mono text-[10px] md:text-sm text-emerald-400/80 leading-relaxed overflow-x-auto">
{`Internet
  │
  ▼
titiswahyudi.space (DNS Hostinger)
  │
  ▼
AWS EC2 Server
  │
  ▼
Nginx Reverse Proxy (SSL Terminated)
  │
  ▼
Docker Container (Next.js App)
  │
  ▼
Aplikasi Running on Port 3000`}
                                </pre>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "DNS routing via Hostinger A-Records to AWS Elastic IP.",
                                    "Nginx handles HTTPS handshake and forwards traffic to Localhost:3000.",
                                    "Docker isolates the application environment for consistent behavior.",
                                    "Automated SSL renewal with Certbot cron-jobs."
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-primary flex-none mt-0.5" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section id="aws-ec2" title="AWS Infrastructure" icon={Cloud}>
                            <Step number="1" title="Instance Creation">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Launch a <strong>t3.micro</strong> (or t2.micro) instance on AWS. For optimal compatibility, use <strong>Ubuntu Server 24.04 LTS</strong>.
                                </p>
                            </Step>
                            <Step number="2" title="Security Group Configuration">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Configure the following firewall rules to allow production traffic:
                                </p>
                                <div className="overflow-hidden rounded-xl border border-border/50">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-muted text-muted-foreground font-mono text-xs">
                                            <tr>
                                                <th className="px-4 py-2 uppercase">Type</th>
                                                <th className="px-4 py-2 uppercase">Port</th>
                                                <th className="px-4 py-2 uppercase">Source</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/50">
                                            <tr><td className="px-4 py-3 font-medium">SSH</td><td className="px-4 py-3">22</td><td className="px-4 py-3 text-xs opacity-60 italic">Your IP</td></tr>
                                            <tr><td className="px-4 py-3 font-medium">HTTP</td><td className="px-4 py-3">80</td><td className="px-4 py-3">0.0.0.0/0</td></tr>
                                            <tr><td className="px-4 py-3 font-medium">HTTPS</td><td className="px-4 py-3">443</td><td className="px-4 py-3">0.0.0.0/0</td></tr>
                                            <tr><td className="px-4 py-3 font-medium">Custom TCP</td><td className="px-4 py-3">3000</td><td className="px-4 py-3">0.0.0.0/0</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Step>
                            <CodeBlock 
                                label="Connect via SSH"
                                code="ssh -i portogravity-key.pem ubuntu@13.221.62.135" 
                            />
                        </Section>

                        <Section id="docker" title="Docker Setup" icon={Container}>
                            <p className="text-sm text-muted-foreground mb-6">
                                Prepare the server and deploy the containerized application.
                            </p>
                            <CodeBlock 
                                label="Install Docker Engine"
                                code={`sudo apt update && sudo apt upgrade -y
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
# Add user to docker group to avoid sudo for docker commands
sudo usermod -aG docker ubuntu`} 
                            />
                            <Step number="3" title="Build & Run Container">
                                <CodeBlock 
                                    label="Build Image"
                                    code={`git clone https://github.com/Yudzyyy/titisportofolio.git
cd titisportofolio
docker build -t titisportofolio .`}
                                />
                                <CodeBlock 
                                    label="Execute Container"
                                    code="docker run -d -p 3000:3000 --name titisportofolio titisportofolio"
                                />
                            </Step>
                        </Section>

                        <Section id="nginx" title="Nginx Reverse Proxy" icon={Server}>
                            <p className="text-sm text-muted-foreground mb-6">
                                Nginx serves as the entry point, providing better security and load handling than raw Node.js.
                            </p>
                            <CodeBlock 
                                label="Nginx Config (/etc/nginx/sites-available/portogravity)"
                                code={`server {
   listen 80;
   server_name titiswahyudi.space www.titiswahyudi.space;

   location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
   }
}`}
                            />
                            <CodeBlock 
                                label="Activate & Reload"
                                code={`sudo ln -s /etc/nginx/sites-available/portogravity /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx`}
                            />
                        </Section>

                        <Section id="ssl" title="SSL & Final Touches" icon={ShieldCheck}>
                            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-8">
                                <div className="flex gap-4">
                                    <Lock className="w-8 h-8 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold mb-1">Let&apos;s Encrypt Security</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Automate HTTPS encryption using Certbot for Nginx. This ensures all user data is encrypted in transit and boosts SEO.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <CodeBlock 
                                label="Generate Certificate"
                                code={`sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d titiswahyudi.space -d www.titiswahyudi.space`}
                            />
                            <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4" />
                                Deployment Status: SUCCESSFUL - Website Secured (🔒)
                            </div>
                        </Section>

                        {/* Pagination / Next */}
                        <div className="mt-20 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Ready for the next level?</span>
                                <h4 className="text-xl font-bold">Need a deeper report?</h4>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform">
                                    Download Full DOCX
                                </button>
                                <button className="px-6 py-3 rounded-xl bg-muted border border-border/50 font-bold hover:bg-muted/80 transition-colors">
                                    Get Architecture Diagram
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
