import { StarIcon } from "./shared";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 grid grid-cols-3 items-center px-5 py-6 lg:flex lg:justify-center lg:gap-12 lg:px-[100px] lg:py-10">
      {/* Mobile nav mirrors the compact Figma header */}
      <a
        href="#our-works"
        className="justify-self-start font-[var(--font-manrope)] font-light text-[11px] text-white leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200 lg:hidden"
      >
        Our Works
      </a>
      <StarIcon color="#eb5503" size={24} className="justify-self-center lg:hidden" />
      <a
        href="#services"
        className="justify-self-end font-[var(--font-manrope)] font-light text-[11px] text-white leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200 lg:hidden"
      >
        Services
      </a>

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
    </nav>
  );
}
