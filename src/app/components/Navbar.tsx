import { StarIcon } from "./shared";

const NAV_LEFT = ["Home", "Our Works"];
const NAV_RIGHT = ["Services", "Pricing"];

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 flex items-center justify-center gap-12 px-[100px] py-10">
      {NAV_LEFT.map((l) => (
        <a
          key={l}
          href={`#${l.toLowerCase().replace(" ", "-")}`}
          className="font-[var(--font-manrope)] font-light text-md text-white leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200"
        >
          {l}
        </a>
      ))}
      <StarIcon color="#eb5503" size={32} />
      {NAV_RIGHT.map((l) => (
        <a
          key={l}
          href={`#${l.toLowerCase()}`}
          className="font-[var(--font-manrope)] font-light text-md text-white leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200"
        >
          {l}
        </a>
      ))}
    </nav>
  );
}
