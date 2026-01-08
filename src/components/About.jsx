import { CometCard } from "./ui/CometCard";
import foto from "../assets/foto.jpg";

export default function About() {
  return (
    <section 
    id="about"
    className="w-full pt-20 pb-28 bg-[#f7f7f5]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg">
            A brief introduction about who I am, what I study, and what I’m
            currently focusing on.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* FOTO — COMET */}
          <div className="flex justify-center md:justify-start">
            <CometCard className="w-[260px]">
              <div className="rounded-2xl overflow-hidden bg-neutral-900">
                <img
                  src={foto}
                  alt="Titis Wahyudi Putro"
                  className="w-full h-[340px] object-cover"
                />

                <div className="px-4 py-4 text-white">
                  <p className="font-semibold text-base">
                    Titis Wahyudi Putro
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Internet Engineering Technology
                  </p>
                </div>
              </div>
            </CometCard>
          </div>

          {/* TEKS */}
          <div className="text-slate-700 text-lg leading-relaxed space-y-6">
            <p>
              I am an{" "}
              <span className="font-medium text-slate-900">
                Internet Engineering student
              </span>{" "}
              at Universitas Gadjah Mada with a strong interest in how technology
              connects systems, people, and data.
            </p>

            <p>
              My main focus areas include{" "}
              <span className="font-medium text-slate-900">
                web development
              </span>
              ,{" "}
              <span className="font-medium text-slate-900">
                cybersecurity
              </span>
              ,{" "}
              <span className="font-medium text-slate-900">
                networking
              </span>
              , and{" "}
              <span className="font-medium text-slate-900">
                cloud computing
              </span>
              .
            </p>

            <p>
              I enjoy building practical solutions and continuously improving my
              technical and problem-solving skills through hands-on projects.
            </p>

            {/* INFO MINI */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="font-medium text-slate-900">Education</p>
                <p className="text-slate-600 mt-1">UGM</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="font-medium text-slate-900">Field</p>
                <p className="text-slate-600 mt-1">
                  Internet Engineering
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="font-medium text-slate-900">Focus</p>
                <p className="text-slate-600 mt-1">
                  Web · Cybersecurity · Network
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
