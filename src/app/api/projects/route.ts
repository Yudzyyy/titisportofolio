import { NextResponse } from "next/server";

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    url: string;
    github?: string;
    demo?: string;
    featured: boolean;
}

const projects: Project[] = [
    {
        id: "solar-panel-robot",
        title: "Solar Panel Robot Cleaner",
        description: "An automated cleaning system for solar panels with ESP8266 robot and Python/React dashboard.",
        category: "IoT",
        tags: ["ESP8266", "Python", "React", "MQTT", "IoT"],
        url: "/project/solar-panel",
        github: "https://github.com/Yudzyyy/solarpanelcleaner_iot",
        featured: true,
    },
    {
        id: "flood-monitoring-iot",
        title: "IoT Flood Monitoring System",
        description: "Monitoring ketinggian air otomatis dengan NodeMCU, sensor ultrasonik, dan orkestrasi Kubernetes.",
        category: "IoT",
        tags: ["NodeMCU", "Node.js", "Kubernetes", "MQTT", "IoT"],
        url: "/project/flood-monitoring",
        featured: true,
    },
    {
        id: "kkn-website",
        title: "KKN Team Website",
        description: "Village information website developed during KKN for digitalization support.",
        category: "Web",
        tags: ["Web Development", "Digitalization", "Community"],
        url: "https://www.kknmenyapakomodo.site/",
        demo: "https://www.kknmenyapakomodo.site/",
        featured: true,
    },
    {
        id: "karangtaruna-website",
        title: "LPP Karangtaruna Website",
        description: "Institutional website for LPP Karangtaruna featuring organizational programs and news.",
        category: "Web",
        tags: ["Web Development", "Organization", "React"],
        url: "https://kartadu.vercel.app/",
        demo: "https://kartadu.vercel.app/",
        featured: true,
    },
    {
        id: "komdigi-bootcamp",
        title: "Bootcamp Komdigi Jogja – Java",
        description: "Java programming bootcamp project focusing on backend logic and OOP.",
        category: "Web",
        tags: ["Java", "OOP", "Backend", "Bootcamp"],
        url: "https://github.com/BPSDMP-Komdigi-Jogja-Bootcamp-Java/final-project-kelompok-10",
        github: "https://github.com/BPSDMP-Komdigi-Jogja-Bootcamp-Java/final-project-kelompok-10",
        featured: false,
    },
    {
        id: "netcomp-website",
        title: "Netcomp Official Website",
        description: "Official competition website for National Networking Competition (Netcomp) event.",
        category: "Web",
        tags: ["Networking", "Competition", "WordPress"],
        url: "#",
        featured: false,
    },
    {
        id: "seedlabs-security",
        title: "SeedLabs – Network Security",
        description: "Hands-on network security labs covering packet sniffing, spoofing, and TCP attacks.",
        category: "Security",
        tags: ["Security", "Linux", "Networking", "SeedLabs"],
        url: "/project/seedlabs",
        github: "https://github.com/Yudzyyy/Seedlabs-Practice",
        featured: true,
    },
    {
        id: "private-cicd-server",
        title: "Private CI/CD Server Implementation",
        description: "Implemented a private CI/CD server on Ubuntu VPS using Gitea, NGINX reverse proxy, and GoAccess for real-time monitoring.",
        category: "DevOps",
        tags: ["Gitea", "NGINX", "Ubuntu", "GoAccess", "CI/CD"],
        url: "/project/cicd-server",
        featured: false,
    },
    {
        id: "network-design-cumulonimbus",
        title: "Data Center Network Design",
        description: "Designed a redundant hierarchical network infrastructure for Data Center rack expansion, including physical topology, VLAN logical mapping, and Bill of Materials (RAB).",
        category: "Networking",
        tags: ["Network Design", "Mikrotik CCR", "Dell Networking", "VLAN", "RAB"],
        url: "/project/network-design",
        featured: false,
    },
    {
        id: "ftth-design-sumedang",
        title: "FTTH Network Design (Sumedang)",
        description: "Designing FTTH (Fiber to the Home) infrastructure in Sumedang area utilizing Atoll for radio planning and OptiSystem for optical link budget analysis.",
        category: "Networking",
        tags: ["FTTH", "Atoll", "OptiSystem", "Fiber Optics"],
        url: "/project/ftth-design",
        featured: false,
    },
    {
        id: "broadband-network-lab",
        title: "Broadband Network Labs (Optic & Splicing)",
        description: "Hands-on experience with broadband networking including fiber optic fusion splicing, OPM measurements, and OTDR troubleshooting.",
        category: "Networking",
        tags: ["Splicing", "Broadband", "Fiber Optic", "Network Lab"],
        url: "#",
        featured: false,
    },
];

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");
        const featured = searchParams.get("featured");

        let filteredProjects = projects;

        if (category && category !== "All") {
            filteredProjects = filteredProjects.filter((p) => p.category === category);
        }

        if (featured === "true") {
            filteredProjects = filteredProjects.filter((p) => p.featured);
        }

        return NextResponse.json(
            {
                success: true,
                data: filteredProjects,
                count: filteredProjects.length,
                timestamp: new Date().toISOString(),
            },
            {
                headers: {
                    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
                },
            }
        );
    } catch (error) {
        console.error("Projects API error:", error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
                timestamp: new Date().toISOString(),
            },
            { status: 500 }
        );
    }
}
