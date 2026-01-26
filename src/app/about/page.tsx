"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Network, Code, Server, Cloud, Award, Mail, Github, Linkedin, Phone } from "lucide-react";
import { CERTIFICATIONS, TECH_STACK } from "@/lib/constants";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-block mb-6">
                        <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 p-1">
                            <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden relative">
                            <Image
                                src="/fotosaya.jpg"
                                alt="Foto Saya"
                                fill
                                className="object-cover"
                            />
                            </div>
                        </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black font-mono tracking-tighter mb-4">
                            Titis <span className="text-primary italic">Wahyudi</span> Putro
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                            Internet Engineering Technology
                        </p>
                        <p className="mt-4 text-muted-foreground/80 max-w-2xl mx-auto">
                            Bridging the gap between network infrastructure and software automation
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4 mb-12"
                    >
                        <a
                            href="mailto:titiswahyudiputro2003@mail.ugm.ac.id"
                            className="p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                        <a
                            href="https://github.com/Yudzyyy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/titiswahyudiputro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="tel:081339705561"
                            className="p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                            aria-label="Phone"
                        >
                            <Phone className="h-5 w-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-16 px-4 md:px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="prose prose-invert max-w-none mb-16"
                    >
                        <h2 className="text-3xl font-bold font-mono mb-6">About Me</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                I am a Technology of Internet Engineering student with a strong interest in Network Engineering, DevOps, 
                                and infrastructure automation. I am currently building my foundation in networking while exploring how modern 
                                automation and cloud technologies can improve the way networks are designed, deployed, and managed.
                            </p>
                            <p>
                                Beyond academics, I enjoy experimenting in lab environments, building small-scale projects, 
                                and learning from real-world case studies related to NetDevOps and cloud-native systems. 
                                I am eager to grow into a NetDevOps Engineer who can bridge traditional networking principles w
                                ith DevOps and cloud-native practices in the future.
                            </p>
                        </div>
                    </motion.div>

                    {/* Expertise Areas */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold font-mono mb-8">Core Expertise</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: Network, title: "Network Engineering", desc: "Cisco, MikroTik, pfSense, BGP, OSPF" },
                                { icon: Code, title: "Web Development", desc: "Backend focus, REST API, Laravel, Spring Boot" },
                                { icon: Server, title: "Infrastructure", desc: "Docker, Kubernetes, Linux, Monitoring" },
                                { icon: Cloud, title: "Cloud Platforms", desc: "AWS, GCP, Self-hosted solutions" },
                            ].map((area, idx) => (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
                                >
                                    <area.icon className="h-8 w-8 text-primary mb-4" />
                                    <h3 className="text-xl font-bold font-mono mb-2">{area.title}</h3>
                                    <p className="text-sm text-muted-foreground">{area.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold font-mono mb-8 flex items-center gap-3">
                            <Award className="h-8 w-8 text-amber-400" />
                            Certifications
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {CERTIFICATIONS.map((cert, idx) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-xl border border-border bg-gradient-to-br from-muted/50 to-muted/30 text-center"
                                >
                                    <div className="text-2xl font-black font-mono text-primary mb-2">{cert.name}</div>
                                    <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tech Stack Summary */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold font-mono mb-8">Technical Skills</h2>
                        <div className="space-y-8">
                            {Object.entries(TECH_STACK).map(([category, skills]) => (
                                <div key={category} className="space-y-6">
                                    <div className="inline-flex items-center px-4 py-2 rounded-xl bg-muted border border-border text-foreground text-sm font-bold font-mono uppercase tracking-tight shadow-sm">
                                        {category}
                                    </div>
                                    <div className="space-y-3">
                                        {skills.map((skill) => (
                                            <div key={skill.name}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="font-medium">{skill.name}</span>
                                                    <span className="text-muted-foreground font-mono">{skill.level}%</span>
                                                </div>
                                                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: 0.2 }}
                                                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
