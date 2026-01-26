"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Github, Layers } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import LiveStatusTile from "./LiveStatusTile";
import { CERTIFICATIONS, TECH_STACK, FEATURED_PROJECT } from "@/lib/constants";
import { GitHubCalendar } from 'react-github-calendar';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function BentoGrid() {
    return (
        <section
            className="w-full py-16 px-4 md:px-6"
            aria-labelledby="glance-heading"
        >
            <div className="container mx-auto">
                <motion.h2
                    id="glance-heading"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center text-3xl font-bold font-mono md:text-4xl tracking-tighter"
                >
                    At a <span className="text-primary italic">Glance</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[200px]"
                >
                    {/* Live Status Tile (2x2) */}
                    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 order-1">
                        <BentoCard className="h-full" colSpan={2} rowSpan={2} aria-label="System Live Status">
                            <LiveStatusTile />
                        </BentoCard>
                    </motion.div>

                    {/* Certifications Tile (1x1) */}
                    <motion.div variants={itemVariants} className="order-2">
                        <BentoCard className="h-full" aria-label="Certifications">
                            <div className="flex h-full flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <Award className="h-5 w-5 text-amber-400" />
                                    <h3 className="text-lg font-semibold font-mono">Certifications</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {CERTIFICATIONS.map((cert) => (
                                        <div
                                            key={cert.name}
                                            role="img"
                                            aria-label={`${cert.name} by ${cert.issuer}`}
                                            className="group/cert relative rounded-lg bg-muted/50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
                                        >
                                            {cert.name}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-popover px-2 py-1 text-[10px] opacity-0 transition-opacity group-hover/cert:opacity-100 whitespace-nowrap shadow-xl border border-border">
                                                {cert.issuer}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </BentoCard>
                    </motion.div>

                    {/* Tech Stack Tile (1x2) */}
                    <motion.div variants={itemVariants} className="md:row-span-3 order-3">
                        <BentoCard className="h-full" rowSpan={3} aria-label="Tech Stack and Skills">
                            <div className="flex h-full flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <Layers className="h-5 w-5 text-blue-400" />
                                    <h3 className="text-lg font-semibold font-mono">Tech Stack</h3>
                                </div>
                                <div className="space-y-6 overflow-y-auto pr-2 scrollbar-hide">
                                    {Object.entries(TECH_STACK).map(([category, skills]) => (
                                        <div key={category} className="space-y-4">
                                            <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-[10px] font-black font-mono uppercase tracking-widest">
                                                {category}
                                            </div>
                                            <div className="space-y-3">
                                                {skills.map((skill) => (
                                                    <div key={skill.name} className="group/skill" title={`${skill.name}: ${skill.level}%`}>
                                                        <div className="flex items-center justify-between text-xs">
                                                            <span className="font-medium">{skill.name}</span>
                                                            <span className="text-muted-foreground opacity-0 transition-opacity group-hover/skill:opacity-100 font-mono">
                                                                {skill.level}%
                                                            </span>
                                                        </div>
                                                        <div className="mt-1.5 h-1 w-full rounded-full bg-muted overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: `${skill.level}%` }}
                                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-indigo-500"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </BentoCard>
                    </motion.div>

                    {/* GitHub Activity Tile (2x1) */}
                    <motion.div variants={itemVariants} className="md:col-span-2 order-4">
                        <BentoCard className="h-full" colSpan={2} aria-label="GitHub Contributions">
                            <div className="flex h-full flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <Github className="h-5 w-5" />
                                    <h3 className="text-lg font-semibold font-mono">GitHub Activity</h3>
                                </div>
                                <div className="flex-1 flex items-center justify-center overflow-hidden">
                                    <GitHubCalendar 
                                        username="Yudzyyy" 
                                        blockSize={10}
                                        blockMargin={4}
                                        fontSize={12}
                                        theme={{
                                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                        }}
                                        loading={false}
                                    />
                                </div>
                            </div>
                        </BentoCard>
                    </motion.div>

                    {/* Featured Project Tile (2x2) */}
                    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 order-5">
                        <BentoCard className="h-full p-0 flex flex-col md:flex-row" colSpan={2} rowSpan={2} aria-label="Featured Project">
                            <div className="relative h-48 md:h-auto md:w-1/2 overflow-hidden bg-muted">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-emerald-500/10 to-transparent z-10" />
                                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                                    ⚡
                                </div>
                                <Image
                                    src={FEATURED_PROJECT.image}
                                    alt={FEATURED_PROJECT.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col p-6 md:w-1/2">
                                <div className="mb-2 text-[10px] font-bold text-primary uppercase tracking-widest">Selected Project</div>
                                <h3 className="text-2xl font-black font-mono tracking-tighter mb-2">{FEATURED_PROJECT.title}</h3>
                                <p className="flex-1 text-sm text-muted-foreground leading-relaxed mb-6">
                                    {FEATURED_PROJECT.description}
                                </p>
                                <Link
                                    href={FEATURED_PROJECT.caseStudyUrl}
                                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors mt-auto"
                                >
                                    Explore Case Study
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </BentoCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
