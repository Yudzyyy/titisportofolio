import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section 
    id="contact"
    className="relative min-h-[80vh] bg-[#f8f8f6] text-[#0a0a0a] py-28 overflow-visible">
      {/* ORNAMEN */}
      <div className="pointer-events-none absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>

        <p className="text-center text-neutral-600 max-w-xl mx-auto mb-14 text-sm md:text-base">
          I’m currently open to new opportunities, collaborations, or discussions.
          Feel free to reach out through any platform below.
        </p>

        {/* CONTACT CARDS */}
        <div className="space-y-4">
          {/* EMAIL */}
          <a
            href="mailto:titiswahyudiputro2003@mail.ugm.ac.id"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-4 transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <IconMail className="h-6 w-6 text-blue-600" />
              <span className="text-sm md:text-base font-medium break-all">
                titiswahyudiputro2003@mail.ugm.ac.id
              </span>
            </div>
            <span className="text-xs text-neutral-500 group-hover:text-neutral-700">
              Email
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/titiswahyudiputro"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-4 transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <IconBrandLinkedin className="h-6 w-6 text-blue-600" />
              <span className="text-sm md:text-base font-medium">
                LinkedIn Profile
              </span>
            </div>
            <span className="text-xs text-neutral-500 group-hover:text-neutral-700">
              Visit
            </span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Yudzyyy"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-4 transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <IconBrandGithub className="h-6 w-6 text-neutral-800" />
              <span className="text-sm md:text-base font-medium">
                GitHub Profile
              </span>
            </div>
            <span className="text-xs text-neutral-500 group-hover:text-neutral-700">
              Explore
            </span>
          </a>
        </div>

        {/* FOOTER */}
        <p className="mt-16 text-center text-xs text-neutral-500">
          © 2025 Titis Wahyudi Putro · Built with React & Tailwind
        </p>
      </div>
    </section>
  );
}
