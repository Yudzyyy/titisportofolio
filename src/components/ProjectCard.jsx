import { useState } from "react";

export default function ProjectCard({
  title,
  image,
  link,
  description,
  contribution,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        className="
          group relative overflow-hidden rounded-2xl
          bg-white/80 backdrop-blur
          border border-neutral-200
          shadow-sm
          transition-all duration-300
          hover:-translate-y-2 hover:shadow-xl
        "
      >
        {/* IMAGE */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-neutral-900">
            {title}
          </h3>

          <p className="text-sm text-neutral-600 mb-5 line-clamp-2">
            {description}
          </p>

          {/* ACTIONS */}
          <div className="flex gap-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2 rounded-full
                  bg-neutral-900 text-white
                  text-sm font-medium
                  hover:bg-neutral-800 transition
                "
              >
                Visit Site →
              </a>
            )}

            <button
              onClick={() => setOpen(true)}
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-full
                border border-neutral-300
                text-sm font-medium
                hover:bg-neutral-100 transition
              "
            >
              Preview
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="relative w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-3">
              {title}
            </h3>

            <p className="text-neutral-600 mb-6">
              {description}
            </p>

            <h4 className="font-medium mb-3">My Contribution</h4>
            <ul className="space-y-3 text-sm text-neutral-700">
              {contribution.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block mt-8
                  text-sm font-medium
                  text-blue-600 hover:underline
                "
              >
                Open Live Website →
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
