import ProjectCard from "./ProjectCard";

import solarImg from "../assets/projects/solar.png";
import kknImg from "../assets/projects/kkn.png";
import lppImg from "../assets/projects/lpp.png";
import bootcampImg from "../assets/projects/bootcamp.png";
import netcompImg from "../assets/projects/netcomp.png";

import seedlabsImg from "../assets/projects/seedlabs.png";
import networkImg from "../assets/projects/network.png";

export default function Projects() {
  const webProjects = [
    {
      title: "Solar Panel Monitoring System",
      image: solarImg,
      link: "https://github.com/Yudzyyy/solarpanelcleaner_iot",
      description:
        "A web-based monitoring system to observe solar panel performance in real-time.",
      contribution: [
        "Designed system flow and monitoring dashboard",
        "Processed energy output data for performance evaluation",
        "Presented results for reporting and analysis",
      ],
    },
    {
      title: "KKN Team Website",
      image: kknImg,
      link: "https://kknmenyapakomodo.site",
      description:
        "Village information website developed during KKN for digitalization support.",
      contribution: [
        "Developed frontend layout and information structure",
        "Managed content for village profile and programs",
        "Deployed website for public access",
      ],
    },
    {
      title: "LPP Karangtaruna Website",
      image: lppImg,
      link: "https://kartadu.vercel.app",
      description:
        "Institutional website for LPP Karangtaruna featuring organizational programs and news.",
      contribution: [
        "Designed UI structure and navigation",
        "Implemented content management layout",
        "Ensured responsive design",
      ],
    },
    {
      title: "Bootcamp Komdigi Jogja – Java Programming",
      image: bootcampImg,
      link: "https://github.com/BPSDMP-Komdigi-Jogja-Bootcamp-Java/final-project-kelompok-10",
      description:
        "Java programming bootcamp project focusing on backend logic and OOP.",
      contribution: [
        "Implemented Java OOP concepts",
        "Completed hands-on backend exercises",
        "Built small functional modules",
      ],
    },
    {
      title: "Netcomp Website",
      image: netcompImg,
      description: "Official competition website for Netcomp event.",
      contribution: [
        "Developed and maintained competition website",
        "Managed event information and registration flow",
        "Collaborated with IT team for deployment",
      ],
    },
  ];

  const securityProjects = [
    {
      title: "SeedLabs – Network Security",
      image: seedlabsImg,
      description:
        "Hands-on network security labs covering packet sniffing, spoofing, and TCP attacks.",
      contribution: [
        "Performed ARP spoofing and packet sniffing attacks",
        "Analyzed TCP session hijacking scenarios",
        "Documented attack methods and mitigation techniques",
      ],
    },
    {
      title: "Network Traffic Analysis",
      image: networkImg,
      description:
        "Network traffic analysis using Wireshark to identify anomalies and attack patterns.",
      contribution: [
        "Captured and analyzed TCP/UDP packets",
        "Identified suspicious traffic behavior",
        "Created traffic analysis reports",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      
      {/* WEB PROJECTS */}
      <h2 className="text-4xl font-bold mb-14 text-center">
        Web Development Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {webProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* SECURITY PROJECTS */}
      <h2 className="text-4xl font-bold mb-14 text-center">
        Network & Security Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {securityProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
