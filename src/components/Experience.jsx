import ExperienceCard from "./ExperienceCard";
import { Timeline } from "./ui/Timeline";

export default function Experience() {
  const professional = [
    {
      title: "2020",
      content: (
        <ExperienceCard
          role="IT Support"
          place="PT Sari Warna Asli Garment · Surakarta (Feb 2020 – Apr 2020)"
          bullets={[
            "Provided comprehensive IT support in a manufacturing environment to ensure continuity of critical operational systems.",
            "Managed installation, configuration, and troubleshooting of LAN infrastructure, including cabling, switches, and network connectivity across production lines and office areas.",
            "Performed maintenance and repair of hardware devices such as desktop computers, laptops, and printers to minimize operational downtime.",
          ]}
        />
      ),
    },
    {
      title: "2025",
      content: (
        <ExperienceCard
          role="Assistant Laboratory (Telecommunication Engineering Laboratory)"
          place="Sekolah Vokasi UGM · Yogyakarta (Feb 2025 – Jun 2025)"
          bullets={[
            "Assisted lecturers in conducting telecommunication practical sessions, covering signal transmission, modulation techniques, and network fundamentals.",
            "Supported preparation, testing, and maintenance of laboratory equipment to ensure reliable operation during experiments.",
            "Ensured students understood core telecommunication concepts through hands-on guidance during lab sessions.",
          ]}
        />
      ),
    },
    {
      title: "2025",
      content: (
        <ExperienceCard
          role="Public Relations"
          place="Sekolah Vokasi UGM · Yogyakarta (Mar 2025 – Aug 2025)"
          bullets={[
            "Edited and refined communication materials including articles, press releases, and social media content to ensure clarity, accuracy, and brand consistency.",
            "Contributed to visual storytelling by editing photos and videos for promotional campaigns and official publications.",
            "Supported branding efforts of the faculty through consistent and professional digital content production.",
          ]}
        />
      ),
    },
    {
      title: "2025",
      content: (
        <ExperienceCard
          role="IT Intern"
          place="Badan Pemeriksa Keuangan RI (BPK RI) DIY · Yogyakarta (Jun 2025 – Aug 2025)"
          bullets={[
            "Developed and implemented a digital guestbook application using the Laravel framework to streamline visitor registration and data management.",
            "Designed and managed the application’s database structure to ensure efficient data storage and retrieval.",
            "Improved visitor registration efficiency by approximately 40% through automation and digital transformation.",
          ]}
        />
      ),
    },
    {
      title: "2025",
      content: (
        <ExperienceCard
          role="Data Scientist Intern"
          place="ID/X Partners × Rakamin Academy · Remote (Oct 2025 – Nov 2025)"
          bullets={[
            "Built and evaluated multiple machine learning models, including Logistic Regression, Random Forest, and XGBoost.",
            "Achieved 97.6% accuracy with XGBoost and an AUC score of 0.957.",
            "Identified and removed 10 data leakage features to ensure model validity for production deployment.",
            "Produced comprehensive data visualizations and delivered actionable business recommendations based on model insights.",
          ]}
        />
      ),
    },
    {
      title: "2025",
      content: (
        <ExperienceCard
          role="Assistant Laboratory (Basic Computer Engineering Laboratory)"
          place="Sekolah Vokasi UGM · Yogyakarta (Aug 2025 – Dec 2025)"
          bullets={[
            "Assisted lecturers in conducting practical sessions on computer architecture, digital systems, and hardware components.",
            "Prepared, tested, and maintained laboratory equipment to ensure smooth and efficient learning activities.",
            "Guided students in operating and troubleshooting both hardware and software during practical classes.",
          ]}
        />
      ),
    },
  ];

  return (
    <section 
    id="experience"
    className="bg-[#f8f8f6] py-32">
      <h2 className="text-4xl font-bold text-center mb-24">
        Professional Experience
      </h2>

      <div className="max-w-5xl mx-auto px-6">
        <Timeline data={professional} />
      </div>
    </section>
  );
}
