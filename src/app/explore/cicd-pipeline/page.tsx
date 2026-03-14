"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft,
    GitBranch,
    CheckCircle2,
    XCircle,
    Clock,
    Cloud,
    Zap,
    ShieldCheck,
    ExternalLink,
    Play,
    Code,
    ArrowDown,
    Globe,
    RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Sub-components ──────────────────────────────────────────────────────────

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

// ── Pipeline Visualization ───────────────────────────────────────────────────

const pipelineStages = [
    {
        id: "push",
        label: "git push",
        sublabel: "Developer pushes to main",
        icon: GitBranch,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
    {
        id: "checkout",
        label: "Checkout",
        sublabel: "actions/checkout@v4",
        icon: Code,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        id: "lint",
        label: "ESLint",
        sublabel: "npm run lint",
        icon: ShieldCheck,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
    },
    {
        id: "build",
        label: "Build Check",
        sublabel: "npm run build",
        icon: Zap,
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
    },
    {
        id: "vercel",
        label: "Vercel Deploy",
        sublabel: "Auto-triggered by Vercel",
        icon: Cloud,
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
    },
    {
        id: "live",
        label: "Live 🚀",
        sublabel: "titiswahyudi.space",
        icon: Globe,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
    },
];

const PipelineVisualizer = () => {
    const [activeStage, setActiveStage] = useState<number | null>(null);
    const [running, setRunning] = useState(false);
    const [completed, setCompleted] = useState<number[]>([]);

    const runPipeline = async () => {
        if (running) return;
        setRunning(true);
        setCompleted([]);
        setActiveStage(null);

        for (let i = 0; i < pipelineStages.length; i++) {
            setActiveStage(i);
            await new Promise((r) => setTimeout(r, 700));
            setCompleted((prev) => [...prev, i]);
        }
        setActiveStage(null);
        setRunning(false);
    };

    return (
        <div className="rounded-3xl bg-zinc-950 border border-border/50 p-6 md:p-10">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">
                        Pipeline Simulation
                    </h3>
                    <p className="text-xs text-zinc-600">GitHub Actions (CI) → Vercel (CD)</p>
                </div>
                <button
                    onClick={runPipeline}
                    disabled={running}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all",
                        running
                            ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                            : "bg-emerald-500 text-black hover:bg-emerald-400 hover:scale-105"
                    )}
                >
                    <Play className="w-4 h-4" />
                    {running ? "Running..." : "▶  Run Pipeline"}
                </button>
            </div>

            <div className="flex flex-col items-center gap-3">
                {pipelineStages.map((stage, idx) => {
                    const isActive = activeStage === idx;
                    const isDone = completed.includes(idx);
                    const Icon = stage.icon;
                    // Vercel step is separate from GitHub Actions
                    const isVercelStep = stage.id === "vercel" || stage.id === "live";

                    return (
                        <React.Fragment key={stage.id}>
                            {/* Divider label between CI and CD */}
                            {stage.id === "vercel" && (
                                <div className="flex items-center gap-3 w-full max-w-md my-1">
                                    <div className="flex-1 h-px bg-border/30" />
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Vercel CD</span>
                                    <div className="flex-1 h-px bg-border/30" />
                                </div>
                            )}
                            {stage.id === "push" && (
                                <div className="flex items-center gap-3 w-full max-w-md mb-1">
                                    <div className="flex-1 h-px bg-border/30" />
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">GitHub Actions CI</span>
                                    <div className="flex-1 h-px bg-border/30" />
                                </div>
                            )}
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.04 : 1,
                                    borderColor: isActive
                                        ? "rgba(16, 185, 129, 0.6)"
                                        : isDone
                                        ? "rgba(16, 185, 129, 0.2)"
                                        : "rgba(255,255,255,0.05)",
                                }}
                                className={cn(
                                    "w-full max-w-md flex items-center gap-4 p-4 rounded-xl border bg-white/[0.02]",
                                    isVercelStep && "border-dashed"
                                )}
                            >
                                <div
                                    className={cn(
                                        "p-2 rounded-lg border shrink-0",
                                        isDone ? "bg-emerald-500/10 border-emerald-500/30" : stage.bg + " " + stage.border
                                    )}
                                >
                                    <Icon
                                        className={cn(
                                            "w-5 h-5",
                                            isDone ? "text-emerald-400" : stage.color
                                        )}
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-bold text-sm">{stage.label}</div>
                                    <div className="text-xs text-zinc-500 font-mono truncate">
                                        {stage.sublabel}
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    {isDone ? (
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    ) : isActive ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        >
                                            <Clock className="w-5 h-5 text-yellow-400" />
                                        </motion.div>
                                    ) : (
                                        <XCircle className="w-5 h-5 text-zinc-700" />
                                    )}
                                </div>
                            </motion.div>
                            {idx < pipelineStages.length - 1 && (
                                <motion.div
                                    animate={{ opacity: isDone ? 1 : 0.2 }}
                                    className="text-zinc-600"
                                >
                                    <ArrowDown className="w-4 h-4" />
                                </motion.div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <AnimatePresence>
                {completed.length === pipelineStages.length && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-8 text-center"
                    >
                        <p className="text-emerald-400 font-bold text-sm font-mono">
                            ✅ All checks passed — deployed to Vercel!
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ── Main Page ────────────────────────────────────────────────────────────────

export default function CICDPipelinePage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header Banner */}
            <div className="relative h-80 overflow-hidden border-b border-border/50 bg-zinc-950">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent opacity-50" />
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
                            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest">
                                DevOps Project
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                Pipeline Active
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl">
                            GitHub Actions CI + Vercel CD
                        </h1>
                        <p className="text-muted-foreground text-base max-w-2xl">
                            Every push to{" "}
                            <code className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">
                                main
                            </code>{" "}
                            triggers GitHub Actions to lint and validate, then Vercel automatically deploys the new version — zero manual steps.
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
                                    { id: "pipeline", label: "Pipeline Simulation", icon: Play },
                                    { id: "workflow", label: "Workflow File", icon: GitBranch },
                                    { id: "vercel", label: "Vercel Integration", icon: RefreshCw },
                                    { id: "stack", label: "Tech Stack", icon: Cloud },
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
                            <h4 className="text-xs font-bold mb-2">Live Site</h4>
                            <a
                                href="https://titiswahyudi.space"
                                target="_blank"
                                className="text-xs text-primary flex items-center gap-1 hover:underline font-mono"
                            >
                                titiswahyudi.space <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>

                        <div className="p-4 rounded-2xl bg-muted/30 border border-border/50">
                            <h4 className="text-xs font-bold mb-2">Source Code</h4>
                            <a
                                href="https://github.com/Yudzyyy/titisportofolio"
                                target="_blank"
                                className="text-xs text-primary flex items-center gap-1 hover:underline font-mono"
                            >
                                GitHub Repo <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-2">
                        {/* Overview */}
                        <Section id="overview" title="How It Works" icon={Zap}>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                This portfolio uses a split CI/CD strategy. <strong>GitHub Actions</strong> handles the <em>Continuous Integration</em> (validating code quality), while <strong>Vercel</strong> handles the <em>Continuous Deployment</em> (building and serving the app globally).
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                {[
                                    {
                                        label: "CI — GitHub Actions",
                                        color: "text-purple-400",
                                        bg: "bg-purple-500/10",
                                        border: "border-purple-500/20",
                                        icon: GitBranch,
                                        items: ["Checkout code", "Install dependencies", "Run ESLint", "Build validation"],
                                    },
                                    {
                                        label: "CD — Vercel",
                                        color: "text-sky-400",
                                        bg: "bg-sky-500/10",
                                        border: "border-sky-500/20",
                                        icon: Cloud,
                                        items: ["Detects push to main", "Optimized Next.js build", "Global CDN deployment", "Preview URLs for PRs"],
                                    },
                                ].map((col) => (
                                    <div key={col.label} className={cn("p-5 rounded-2xl border", col.bg, col.border)}>
                                        <div className="flex items-center gap-2 mb-4">
                                            <col.icon className={cn("w-4 h-4", col.color)} />
                                            <span className="font-bold text-sm">{col.label}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {col.items.map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Pipeline Visualizer */}
                        <Section id="pipeline" title="Pipeline Simulation" icon={Play}>
                            <p className="text-muted-foreground text-sm mb-6">
                                Click <strong>Run Pipeline</strong> to simulate the full flow. The first 4 steps run on GitHub Actions; the last 2 are handled automatically by Vercel.
                            </p>
                            <PipelineVisualizer />
                        </Section>

                        {/* Workflow File */}
                        <Section id="workflow" title="GitHub Actions Workflow" icon={GitBranch}>
                            <p className="text-muted-foreground text-sm mb-4">
                                The CI workflow is defined at{" "}
                                <code className="text-blue-400 bg-blue-500/10 px-1 rounded">
                                    .github/workflows/ci-cd.yml
                                </code>. It runs on every push and pull request to <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">main</code>, catching lint errors and build failures <em>before</em> Vercel deploys.
                            </p>
                            <CodeBlock
                                label=".github/workflows/ci-cd.yml"
                                code={`name: CI — Lint & Build Check

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate:
    name: Lint & Build Check
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Build Next.js app
        run: npm run build`}
                            />
                        </Section>

                        {/* Vercel */}
                        <Section id="vercel" title="Vercel Auto Deployment" icon={RefreshCw}>
                            <p className="text-muted-foreground text-sm mb-6">
                                Vercel is connected directly to the GitHub repository. Once a push lands on <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">main</code>, Vercel automatically picks it up, runs an optimized Next.js build, and deploys it globally via its edge CDN.
                            </p>
                            <div className="space-y-3">
                                {[
                                    { title: "Automatic Deployments", desc: "Every push to main triggers a production deployment with zero configuration." },
                                    { title: "Preview Deployments", desc: "Every pull request gets its own unique preview URL for review before merging." },
                                    { title: "Zero Config Next.js", desc: "Vercel is built by the Next.js team — it understands the framework natively and optimizes accordingly." },
                                    { title: "Global Edge CDN", desc: "Assets are served from the edge closest to each visitor for maximum performance." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/50">
                                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-bold text-sm mb-0.5">{item.title}</div>
                                            <div className="text-xs text-muted-foreground">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Tech Stack */}
                        <Section id="stack" title="Tech Stack" icon={Cloud}>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { name: "GitHub Actions", role: "CI Runner", icon: GitBranch },
                                    { name: "Vercel", role: "CD Platform", icon: Cloud },
                                    { name: "Next.js 15", role: "Application", icon: Code },
                                    { name: "ESLint", role: "Code Quality", icon: ShieldCheck },
                                    { name: "Node.js 20", role: "Runtime", icon: Zap },
                                    { name: "GitHub", role: "Source Control", icon: GitBranch },
                                ].map((tech) => (
                                    <div key={tech.name} className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                                        <tech.icon className="w-4 h-4 text-primary shrink-0" />
                                        <div>
                                            <div className="text-xs font-bold">{tech.name}</div>
                                            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{tech.role}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Footer CTA */}
                        <div className="mt-16 pt-10 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">
                                    See it in action
                                </span>
                                <h4 className="text-xl font-bold">Check the live GitHub workflow runs</h4>
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                <a
                                    href="https://github.com/Yudzyyy/titisportofolio/actions"
                                    target="_blank"
                                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform flex items-center gap-2 text-sm"
                                >
                                    <GitBranch className="w-4 h-4" /> View Actions
                                </a>
                                <Link
                                    href="/explore/aws-deployment"
                                    className="px-6 py-3 rounded-xl bg-muted border border-border/50 font-bold hover:bg-muted/80 transition-colors text-sm"
                                >
                                    AWS Deployment Docs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
