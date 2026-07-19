import { StarIcon } from "./shared";
import { useLocation, Link } from "react-router";
import { useTransitionNavigate } from "./TransitionContext";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const transitionNavigate = useTransitionNavigate();

  const textColor = isHome ? "text-white" : "text-[var(--dark)]";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (isHome) return; // Let default anchor behavior handle it on Home
    e.preventDefault();
    transitionNavigate(`/${hash}`);
  };

  const getLinkHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <nav className="pointer-events-none absolute top-0 left-0 right-0 z-50 grid grid-cols-3 items-center px-5 py-6 lg:flex lg:justify-center lg:gap-12 lg:px-[100px] lg:py-10">
      {/* Mobile nav mirrors the compact Figma header */}
      <a
        href={getLinkHref("#our-works")}
        onClick={(e) => handleLinkClick(e, "#our-works")}
        className={`pointer-events-auto justify-self-start font-[var(--font-manrope)] font-light text-[11px] ${textColor} leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200 lg:hidden`}
      >
        Our Works
      </a>
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          transitionNavigate("/");
        }}
        className="pointer-events-auto justify-self-center lg:hidden"
      >
        <StarIcon color="#eb5503" size={24} />
      </Link>
      <a
        href={getLinkHref("#services")}
        onClick={(e) => handleLinkClick(e, "#services")}
        className={`pointer-events-auto justify-self-end font-[var(--font-manrope)] font-light text-[11px] ${textColor} leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200 lg:hidden`}
      >
        Services
      </a>

      {/* Desktop: left links */}
      <div className="pointer-events-auto hidden lg:flex gap-12 items-center">
        <a
          href={getLinkHref("#")}
          onClick={(e) => handleLinkClick(e, "#")}
          className={`font-[var(--font-manrope)] font-light text-md ${textColor} leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200`}
        >
          Home
        </a>
        <a
          href={getLinkHref("#our-works")}
          onClick={(e) => handleLinkClick(e, "#our-works")}
          className={`font-[var(--font-manrope)] font-light text-md ${textColor} leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200`}
        >
          Our Works
        </a>
      </div>

      {/* Desktop: center star */}
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          transitionNavigate("/");
        }}
        className="pointer-events-auto hidden lg:block"
      >
        <StarIcon color="#eb5503" size={32} />
      </Link>

      {/* Desktop: right links */}
      <div className="pointer-events-auto hidden lg:flex gap-12 items-center">
        {["Services", "Pricing"].map((l) => (
          <a
            key={l}
            href={getLinkHref(`#${l.toLowerCase()}`)}
            onClick={(e) => handleLinkClick(e, `#${l.toLowerCase()}`)}
            className={`font-[var(--font-manrope)] font-light text-md ${textColor} leading-[1.4] whitespace-nowrap hover:text-[var(--brand)] transition-colors duration-200`}
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}

