import { useState, useEffect } from "react";
import { StarIcon } from "./shared";
import { useLocation, Link } from "react-router";
import { useTransitionNavigate } from "./TransitionContext";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const transitionNavigate = useTransitionNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isLight = !isHome || scrolled;

  const textColor = mobileMenuOpen
    ? "text-white"
    : isLight
      ? "text-[var(--dark)]"
      : "text-white";

  const navBgClass = scrolled
    ? "py-4"
    : "py-6 lg:py-10";

  const buttonBgClass = mobileMenuOpen
    ? "bg-white/10 border-white/10 text-white"
    : isLight
      ? "bg-black/5 border-black/10 text-[var(--dark)]"
      : "bg-white/10 border-white/10 text-white";

  const barBgClass = mobileMenuOpen
    ? "bg-white"
    : isLight
      ? "bg-[var(--dark)]"
      : "bg-white";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const cleanHash = hash.startsWith("#") ? hash : `#${hash}`;
    const targetId = cleanHash.replace("#", "");

    if (isHome) {
      if (!targetId || targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      window.history.pushState(null, "", cleanHash || "/");
    } else {
      transitionNavigate(`/${cleanHash}`);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    } else {
      transitionNavigate("/");
    }
  };

  const getLinkHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  const navLinks = [
    { name: "Home", href: "#home", num: "01" },
    { name: "Our Works", href: "#our-works", num: "02" },
    { name: "Services", href: "#services", num: "03" },
    { name: "Pricing", href: "#pricing", num: "04" },
  ];

  return (
    <>
      {/* Header Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass} px-5 lg:px-[100px] flex items-center justify-between lg:justify-center lg:gap-12`}
      >
        {/* Mobile Header: Logo + Brand Name */}
        <Link
          to="/"
          onClick={handleHomeClick}
          className="flex items-center gap-2 lg:hidden z-50 cursor-pointer"
        >
          <StarIcon color="#eb5503" size={26} />
          <span className={`font-[var(--font-manrope)] font-normal text-sm tracking-tight ${textColor}`}>
            TRD Studio
          </span>
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className={`lg:hidden z-50 flex items-center gap-2 backdrop-blur-md px-3.5 py-2 rounded-full border active:scale-95 transition-all ${buttonBgClass}`}
        >
          <span className="font-[var(--font-manrope)] text-[11px] uppercase tracking-wider font-medium">
            {mobileMenuOpen ? "Close" : "Menu"}
          </span>
          <div className="w-4 h-3 flex flex-col justify-between relative">
            <span
              className={`w-full h-0.5 ${barBgClass} transition-all duration-300 transform origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
            />
            <span
              className={`w-full h-0.5 ${barBgClass} transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-full h-0.5 ${barBgClass} transition-all duration-300 transform origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
            />
          </div>
        </button>

        {/* Desktop: left links */}
        <div className="hidden lg:flex gap-12 items-center">
          <a
            href={getLinkHref("#home")}
            onClick={(e) => handleLinkClick(e, "#home")}
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
          onClick={handleHomeClick}
          className="hidden lg:block cursor-pointer"
        >
          <StarIcon color="#eb5503" size={32} />
        </Link>

        {/* Desktop: right links */}
        <div className="hidden lg:flex gap-12 items-center">
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

      {/* Mobile Fullscreen Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0d0d0d] text-white lg:hidden flex flex-col justify-between px-6 pt-28 pb-10 transition-all duration-500 ease-in-out ${mobileMenuOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-4"
          }`}
      >
        <div className="flex flex-col gap-6 mt-4">
          <p className="font-[var(--font-archivo)] text-[11px] text-[var(--text-muted-trd)] uppercase tracking-widest m-0">
            Navigation
          </p>
          <div className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={getLinkHref(item.href)}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="flex items-center gap-4 py-1 group border-b border-white/5 active:text-[var(--brand)] transition-colors"
              >
                <span className="font-[var(--font-archivo)] font-light text-xs text-[var(--brand)]">
                  {item.num}
                </span>
                <span className="font-[var(--font-manrope)] font-light text-2xl tracking-tight text-white group-hover:text-[var(--brand)] transition-colors">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <a
            href={getLinkHref("#pricing")}
            onClick={(e) => handleLinkClick(e, "#pricing")}
            className="w-full bg-[var(--brand)] text-white text-center font-[var(--font-manrope)] font-normal text-sm py-3.5 rounded-full hover:opacity-90 active:scale-98 transition-all block"
          >
            Start a Project
          </a>

          <div className="flex justify-between items-end text-xs text-[var(--text-muted-trd)] font-[var(--font-manrope)] font-light border-t border-white/10 pt-4">
            <div>
              <p className="m-0 text-white font-normal">TRD Creative Studio</p>
              <p className="m-0 text-[11px]">hello@trdcreative.studio</p>
            </div>
            <p className="m-0 text-[10px]">© 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}

