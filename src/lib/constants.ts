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
    "Cloud & DevOps": [
        { name: "Docker & Containerization", level: 90 },
        { name: "AWS EC2 & Infrastructure", level: 85 },
        { name: "Nginx Reverse Proxy", level: 85 },
        { name: "Linux Server (Ubuntu)", level: 85 },
        { name: "CI/CD (GitHub Actions)", level: 80 },
        { name: "SSL/TLS (Certbot)", level: 90 },
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
    title: "Proyek Deployment Cloud",
    description: "Men-deploy portofolio pribadi menggunakan arsitektur cloud yang siap produksi dengan Docker, AWS EC2, dan Nginx.",
    image: "/images/aws-deployment-thumbnail.jpg",
    caseStudyUrl: "/explore/aws-deployment",
};

export const STATUS_API_URL = "/api/status";
