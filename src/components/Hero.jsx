export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-120px)] flex items-center"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* BADGE */}
        <p className="text-sm tracking-wide text-blue-600 font-medium mb-6">
          Internet Engineering Student · UGM
        </p>

        {/* HEADLINE */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          TITIS
          <span className="text-blue-600"> WAHYUDI PUTRO</span>
          <span className="text-blue-600">.</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
          An Internet Engineering student at Universitas Gadjah Mada with a strong
          interest in web development, networking, cybersecurity, and cloud-based systems.
        </p>

        {/* CTA */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <a
            href="/cv/Titis_Wahyudi_Putro_CV.pdf"
            download
            className="px-7 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            Contact Me
          </a>
        </div>

        {/* SOCIAL */}
        <div className="mt-12 flex justify-center gap-8 text-slate-500 text-sm">
          <a
            href="https://github.com/Yudzyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/titiswahyudiputro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:titiswahyudiputro2003@mail.ugm.ac.id"
            className="hover:text-blue-600 transition"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
