// Portfolio Constants

export const CERTIFICATIONS = [
    { name: "CCNA", issuer: "Cisco", icon: "cisco" },
    { name: "MTCNA", issuer: "MikroTik", icon: "mikrotik" },
    { name: "MTCRE", issuer: "MikroTik", icon: "mikrotik" },
    { name: "Docker Fundamental", issuer: "Boer Technology", icon: "docker" },
];

export const TECH_STACK = {
    "Network Engineering": [
        { name: "TCP/IP & Routing", level: 90 },
        { name: "Cisco (CCNA)", level: 85 },
        { name: "MikroTik (MTCNA)", level: 90 },
        { name: "VLAN & NAT", level: 85 },
        { name: "Troubleshooting", level: 90 },
    ],
    "Cloud & Virtualization": [
        { name: "Container Networking", level: 70 },
        { name: "Linux Server Administration", level: 75 },
        { name: "CI/CD (GitHub Actions / GitLab CI – basic)", level: 65 },
        { name: "Cloud Fundamentals (AWS/GCP – basic)", level: 60 },
    ],
    "Web & App Dev": [
        { name: "React JS", level: 85 },
        { name: "Vue JS", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "Responsive Design", level: 90 },
    ],
    "IoT": [
        { name: "IoT System Design", level: 85 },
        { name: "Arduino Systems", level: 80 },
        { name: "MQTT", level: 90 },
        { name: "IoT Dashboards", level: 85 },
    ],
    "Programming & Backend": [
        { name: "Python", level: 90 },
        { name: "Golang", level: 60 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "PHP", level: 80 },
        { name: "Laravel", level: 85 },
        { name: "Spring Boot", level: 70 },
    ],
    "Database & Data": [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Relational Design", level: 80 },
        { name: "SQL Querying", level: 85 },
    ],
    "Data & ML": [
        { name: "Pandas & NumPy", level: 80 },
        { name: "Scikit-learn", level: 75 },
        { name: "EDA & Features", level: 80 },
        { name: "NLP Basics", level: 65 },
    ],
};

export const FEATURED_PROJECT = {
    title: "Solar Panel Monitoring System",
    description: "A web-based monitoring system to observe solar panel performance in real-time using IoT sensors and MQTT protocol.",
    image: "/images/network-infrastructure.svg",
    caseStudyUrl: "/project/solar-panel",
};

export const STATUS_API_URL = "/api/status";
