import { useState } from "react";
import { StarIcon } from "./shared";

const NAV_LINKS = ["Home", "Our Works", "Services", "Pricing"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between lg:justify-center gap-12 px-5 lg:px-[100px] py-8 lg:py-10">
        {/* Mobile: logo mark on the left */}
        <div className="lg:hidden">
          <StarIcon color="#eb5503" size={28} />
        </div>

        {/* Desktop: left links */}
        <div className="hidden lg:flex gap-12 items-center">
          {["Home", "Our Works"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="font-[var(--font-manrope)] font-light text-md text-white leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Desktop: center star */}
        <StarIcon color="#eb5503" size={32} className="hidden lg:block" />

        {/* Desktop: right links */}
        <div className="hidden lg:flex gap-12 items-center">
          {["Services", "Pricing"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-[var(--font-manrope)] font-light text-md text-white leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Mobile: hamburger button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer bg-transparent border-none p-0"
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-white transition-all duration-300 origin-center"
            style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-5 h-px bg-white transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-white transition-all duration-300 origin-center"
            style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[var(--dark)] flex flex-col items-center justify-center gap-8 transition-all duration-300 overflow-hidden"
        style={{ height: open ? "100dvh" : 0, opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(" ", "-")}`}
            onClick={() => setOpen(false)}
            className="font-[var(--font-manrope)] font-light text-2xl text-white hover:text-[var(--brand)] transition-colors duration-200"
          >
            {l}
          </a>
        ))}
        <button
          onClick={() => setOpen(false)}
          className="mt-4 bg-[var(--brand)] text-white font-[var(--font-manrope)] font-light text-base px-6 py-2 rounded-full border-none cursor-pointer"
        >
          Start a Project
        </button>
      </div>
    </>
  );
}
