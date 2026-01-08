import ProjectCard from "./ProjectCard";

import solarImg from "../assets/projects/solar.png";
import kknImg from "../assets/projects/kkn.png";
import lppImg from "../assets/projects/lpp.png";
import bootcampImg from "../assets/projects/bootcamp.png";
import netcompImg from "../assets/projects/netcomp.png";

export default function Projects() {
  const projects = [
    {
      title: "Solar Panel Monitoring System",
      image: solarImg,
      link: "https://github.com/Yudzyyy/solarpanelcleaner_iot", // tidak ada web publik
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
      link: "https://github.com/BPSDMP-Komdigi-Jogja-Bootcamp-Java/final-project-kelompok-10/blob/main/materials/images/landing-page.png",
      description:
        "Java programming bootcamp project focusing on backend logic and OOP.",
      contribution: [
        "Implemented Java OOP concepts",
        "Completed hands-on backend exercises",
        "Built small functional modules",
      ],
    },
    {
      title: "Netcomp Website (National Networking Competition)",
      image: netcompImg,
      description:
        "Official competition website for Netcomp event.",
      contribution: [
        "Developed and maintained competition website",
        "Managed event information and registration flow",
        "Collaborated with IT team for deployment",
      ],
    },
  ];

  return (
    <section 
    id="projects"
    className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-14 text-center">
        Projects Website
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
