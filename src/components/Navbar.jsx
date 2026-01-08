import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center pt-6 px-4">
      {/* DESKTOP */}
      <nav
        className="
          hidden md:inline-flex items-center gap-8
          bg-slate-900 text-white
          px-8 py-4
          rounded-full
          text-sm
          shadow-sm
        "
      >
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-medium">Titis Wahyudi</span>
        </div>

        <div className="flex items-center gap-6">
          <NavItem label="Home" href="#home" />
          <NavItem label="About" href="#about" />
          <NavItem label="Experience" href="#experience" />
          <NavItem label="Project" href="#projects" />
          <NavItem label="Contact" href="#contact" />
        </div>
      </nav>

      {/* MOBILE */}
      <div className="md:hidden w-full max-w-md">
        <div className="flex items-center justify-between bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-medium text-sm">Titis Wahyudi</span>
          </div>

          <button onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="mt-3 bg-slate-900 text-white rounded-2xl py-4 shadow-sm">
            <div className="flex flex-col items-center gap-4">
              <NavItem mobile label="Home" href="#home" onClick={() => setOpen(false)} />
              <NavItem mobile label="About" href="#about" onClick={() => setOpen(false)} />
              <NavItem mobile label="Experience" href="#experience" onClick={() => setOpen(false)} />
              <NavItem mobile label="Project" href="#projects" onClick={() => setOpen(false)} />
              <NavItem mobile label="Contact" href="#contact" onClick={() => setOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}