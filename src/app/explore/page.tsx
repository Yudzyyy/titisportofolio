"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Compass, Globe, Zap, Shield, Code, Cpu, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Cloud Deployment Project",
        description: "In-depth guide on deploying Next.js apps to AWS EC2 using Docker, Nginx, and SSL.",
        icon: Globe,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        href: "/explore/aws-deployment",
        featured: true
    },
    {
        title: "CI/CD Pipeline",
        description: "Automated GitHub Actions workflow that lints, builds, and deploys to AWS EC2 with Docker on every push.",
        icon: Workflow,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        href: "/explore/cicd-pipeline",
    },
    {
        title: "Network Security",
        description: "Exploring the depths of cybersecurity, from penetration testing to secure network architecture design.",
        icon: Shield,
        color: "text-blue-600",
        bg: "bg-blue-600/10",
        border: "border-blue-600/20",
    },
    {
        title: "Automation & DevOps",
        description: "Streamlining development workflows with CI/CD pipelines, Ansible, and Terraform.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
    {
        title: "Full Stack Dev",
        description: "Building modern web applications with React, Next.js, and robust backend systems.",
        icon: Code,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
    },
    {
        title: "IoT Systems",
        description: "Connecting the physical world with digital intelligence through embedded systems and sensor networks.",
        icon: Cpu,
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
    },
    {
        title: "Network Engineering",
        description: "Designing and optimizing high-performance telecommunication networks and FTTH systems.",
        icon: Compass,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
    },
];

export default function ExplorePage() {
    return (
        <main className="min-h-[calc(100vh-4rem)] py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-2"
                    >
                        <Compass className="w-8 h-8" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter"
                    >
                        Explore My <span className="text-primary italic">Universe</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl"
                    >
                        A journey through my technical expertise, creative projects, and the technologies I&apos;m passionate about.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const CardWrapper = feature.href ? Link : 'div';
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <CardWrapper
                                    href={feature.href || '#'}
                                    className={cn(
                                        "group relative flex flex-col h-full p-8 rounded-3xl border transition-all duration-300 overflow-hidden",
                                        feature.bg,
                                        feature.border,
                                        "hover:shadow-2xl hover:shadow-primary/5",
                                        feature.featured && "md:col-span-1 lg:border-primary/40 shadow-xl shadow-primary/5"
                                    )}
                                >
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className={cn("p-4 rounded-2xl w-fit mb-6", feature.bg, "border", feature.border)}>
                                            <feature.icon className={cn("w-6 h-6", feature.color)} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            {feature.title}
                                            {feature.featured && <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary text-primary-foreground uppercase font-black tracking-widest">Featured</span>}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed flex-grow">
                                            {feature.description}
                                        </p>
                                        
                                        {feature.href && (
                                            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                                                Read Documentation <Compass className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Decorative background element */}
                                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <feature.icon size={120} />
                                    </div>
                                </CardWrapper>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
