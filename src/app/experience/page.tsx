"use client";

import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

/**
 * Interface representing a single work or organizational experience item.
 */
interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
}

const workExperience: Experience[] = [
    {
        title: "Assistant Laboratory – Basic Computer Engineering Lab (Part-time)",
        company: "Sekolah Vokasi Universitas Gadjah Mada",
        period: "Aug 2025 – Dec 2025",
        description: [
            "Supported 25 students per semester in hands-on computer engineering and system operation labs.",
            "Prepared, configured, and maintained lab workstations, networking devices, and peripherals.",
            "Assisted in hardware, OS, and basic network troubleshooting, reducing lab downtime."
        ]
    },
    {
        title: "Java Fullstack Bootcamp",
        company: "Komdigi Yogyakarta × Metrodata IT",
        period: "Oct 2025 – Dec 2025",
        description: [
            "Completed intensive fullstack development training focused on Java ecosystem.",
            "Developed backend services using Spring Boot and relational databases.",
            "Built responsive frontend applications and integrated them with REST APIs."
        ]
    },
    {
        title: "Data Scientist Intern (Project-Based)",
        company: "ID/X Partners × Rakamin Academy (Remote)",
        period: "Oct 2025 – Nov 2025",
        description: [
            "Developed and evaluated multiple machine learning models (Logistic Regression, Random Forest, XGBoost) for credit risk prediction.",
            "Achieved 97.6% accuracy (AUC 0.957) using XGBoost after comprehensive feature engineering and model validation.",
            "Identified and eliminated 10 data leakage features, improving model generalizability and production reliability."
        ]
    },
    {
        title: "IT Fullstack Intern ",
        company: "Badan Pemeriksa Keuangan RI (DIY)",
        period: "Jun 2025 – Aug 2025",
        description: [
            "Supported internal IT systems in a regulated government environment.",
            "Developed a digital guestbook system with role-based access control (admin, internal, external)."
        ]
    },
    {
        title: "Assistant Laboratory – Telecommunication Engineering Lab (Part-time)",
        company: "Sekolah Vokasi Universitas Gadjah Mada",
        period: "Feb 2025 – Jun 2025",
        description: [
            "Assisted 24 students in mastering concepts of antenna types, digital modulation, and FDM multiplexing.",
            "Guided hands-on practice with VoIP systems and coaxial cable transmission to enhance practical understanding.",
            "Supported antenna design simulations using MMANA-GAL, facilitating accurate telecommunications analysis."
        ]
    },
    {
        title: "IT Support (Intern)",
        company: "PT Sari Warna Asli Garment",
        period: "Feb 2020 – Apr 2020",
        description: [
            "Assisted workstation setup, OS and application troubleshooting.",
            "Supported structured LAN cable installation.",
            "Handled basic printer, computer, and network connectivity issues."
        ]
    }
];

const organizations: Experience[] = [
    {
        title: "Vice Chairman",
        company: "National Networking Competition (Netcomp)",
        period: "Aug 2024 – Feb 2025",
        description: [
            "Coordinated national-level networking competition.",
            "Supported technical readiness and event operations.",
            "Assisted in maintaining WordPress-based event website."
        ]
    },
    {
        title: "Media & Streaming Team",
        company: "Ramadhan Berkah Mardliyah",
        period: "Dec 2024 – May 2025",
        description: [
            "Designed Instagram feed graphics for event promotion and audience engagement.",
            "Managed live streaming setup and broadcast operations during events.",
            "Operated and configured streaming cameras to ensure stable video production."
        ]
    },
    {
        title: "Vice Chairman – Iptek Division",
        company: "Forum Komunikasi Teknologi Rekayasa Internet (Forkom TRI)",
        period: "Nov 2023 – Dec 2024",
        description: [
            "Led technology-focused programs and managed community website.",
            "Coordinated professional certification events for teachers and lecturer"
        ]
    },
    {
        title: "Media Staff",
        company: "GAMAFORCE (Gadjah Mada Flying Object Research Center)",
        period: " Nov 2023 – Nov 2024",
        description: [
            "Managed and maintained the official event website using WordPress.",
            "Designed visual materials for the international team (social media, publications, and promotional assets).",
            "Assisted in content creation and visual branding strategy."
        ]
    },
];

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="py-20 px-4 md:px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-black font-mono tracking-tighter mb-4">
                            My <span className="text-primary italic">Experience</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            My professional journey and organizational involvement.
                        </p>
                    </motion.div>

                    {/* Work Experience */}
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="h-8 w-8 text-primary" />
                            <h2 className="text-3xl font-black font-mono tracking-tighter uppercase">Work Experience</h2>
                        </div>
                        <div className="space-y-12">
                            {workExperience.map((exp, idx) => (
                                <ExperienceItem key={`work-${idx}`} exp={exp} index={idx} />
                            ))}
                        </div>
                    </div>

                    {/* Organizations */}
                    <div className="pb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <Users className="h-8 w-8 text-primary" />
                            <h2 className="text-3xl font-black font-mono tracking-tighter uppercase">Organizations</h2>
                        </div>
                        <div className="space-y-12">
                            {organizations.map((exp, idx) => (
                                <ExperienceItem key={`org-${idx}`} exp={exp} index={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ExperienceItem({ exp, index }: { exp: Experience, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-muted hover:border-primary/50 transition-colors group"
        >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-muted group-hover:border-primary transition-colors" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold font-mono group-hover:text-primary transition-colors">
                    {exp.title}
                </h3>
                <span className="text-sm font-mono bg-muted px-3 py-1 rounded-full text-muted-foreground whitespace-nowrap">
                    {exp.period}
                </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-4 font-medium">
                <span>{exp.company}</span>
            </div>
            <ul className="space-y-2">
                {exp.description.map((item: string, i: number) => (
                    <li key={`desc-${i}`} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
