import imgImage11 from "../../imports/TrdCreativeStudioⒸWebsite-1/d2e0a0da0a57a02edbdf13fa7ba8ba12913b0266.png";
import { StarIcon } from "./shared";
import { useLocation } from "react-router";
import { useTransitionNavigate } from "./TransitionContext";

const footerServices = [
  "Product & UI/UX Design",
  "Website Design & Development",
  "Brand Strategy & Identity",
  "Creative Production",
];

const quickLinks = [
  { label: "Home", hash: "#home" },
  { label: "Work", hash: "#our-works" },
  { label: "Contact", hash: "#pricing" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/trd-creative-studio" },
  { label: "Instagram", href: "https://instagram.com/trd.studio" },
  { label: "Behance", href: "https://behance.net/trdcreative" },
];

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const transitionNavigate = useTransitionNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
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

  const getLinkHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <>
      <section className="w-full py-10 bg-white">
        <div className="flex flex-col lg:flex-row p-4 lg:p-[100px] items-start gap-12 lg:gap-[313px]">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:gap-8 items-start w-full lg:w-[350px] lg:shrink-0">
            <a
              href={getLinkHref("#home")}
              onClick={(e) => handleLinkClick(e, "#home")}
              className="cursor-pointer group flex flex-col gap-4 items-start text-left"
            >
              <StarIcon color="#eb5503" size={64} className="group-hover:scale-105 transition-transform" />
              <div className="flex flex-col gap-4 items-start text-[var(--dark)] w-full font-[var(--font-manrope)]">
                <p
                  className="leading-[1] w-full font-light m-0 group-hover:text-[var(--brand)] transition-colors"
                  style={{ fontSize: "clamp(28px, 5vw, 42px)", letterSpacing: "-1px" }}
                >
                  TRD Creative Studio
                </p>
                <p className="text-sm lg:text-base leading-[1.5] w-full m-0 font-light text-[var(--dark)]">
                  We believe every touch need the best for the clients, so we hire the best talent.
                </p>
              </div>
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 items-start w-full lg:w-auto">
            {/* Services */}
            <div className="flex flex-col gap-4 items-start justify-center">
              <p className="font-[var(--font-manrope)] font-light text-[var(--brand)] text-sm leading-[1.4] whitespace-nowrap m-0 uppercase tracking-wider">
                SERVICES
              </p>
              <div
                className="flex flex-col gap-2.5 items-start text-[var(--dark)] font-[var(--font-manrope)] font-light text-sm lg:text-base"
                style={{ letterSpacing: "-0.32px" }}
              >
                {footerServices.map((s) => (
                  <a
                    key={s}
                    href={getLinkHref("#services")}
                    onClick={(e) => handleLinkClick(e, "#services")}
                    className="whitespace-nowrap m-0 text-[var(--dark)] hover:text-[var(--brand)] transition-colors cursor-pointer"
                  >
                    {s}
                  </a>
                ))}
                <a
                  href={getLinkHref("#services")}
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="flex gap-2 items-center text-[var(--dark)] hover:text-[var(--brand)] transition-colors cursor-pointer"
                >
                  <span className="whitespace-nowrap m-0">AI Production</span>
                  <span className="bg-[var(--brand)] text-white font-[var(--font-manrope)] font-light text-[12px] leading-[1.4] px-2 py-[1px] rounded-full">
                    New
                  </span>
                </a>
                <p className="text-[var(--text-muted-trd)] whitespace-nowrap m-0 cursor-default">
                  Social Media Design
                </p>
                <p className="text-[var(--text-muted-trd)] whitespace-nowrap m-0 cursor-default">
                  Visual Merchandising
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4 items-start justify-center w-[110px] lg:w-[125px]">
              <p className="font-[var(--font-manrope)] font-light text-[var(--brand)] text-sm leading-[1.4] m-0 uppercase tracking-wider">
                QUICK LINKS
              </p>
              <div className="flex flex-col gap-2.5 items-start text-[var(--dark)] font-[var(--font-manrope)] font-light text-sm lg:text-base whitespace-nowrap">
                {quickLinks.map((l) => (
                  <a
                    key={l.label}
                    href={getLinkHref(l.hash)}
                    onClick={(e) => handleLinkClick(e, l.hash)}
                    className="m-0 text-[var(--dark)] hover:text-[var(--brand)] transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-4 items-start justify-center w-[110px] lg:w-[125px]">
              <p className="font-[var(--font-manrope)] font-light text-[var(--brand)] text-sm leading-[1.4] m-0 uppercase tracking-wider">
                SOCIAL MEDIA
              </p>
              <div className="flex flex-col gap-2.5 items-start text-[var(--dark)] font-[var(--font-manrope)] font-light text-sm lg:text-base whitespace-nowrap">
                {socialLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-0 text-[var(--dark)] hover:text-[var(--brand)] transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character strip */}
      <div className="flex items-center justify-center overflow-hidden pb-[25px] w-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-[80px] lg:h-[134px] w-[120px] lg:w-[202px] relative shrink-0 overflow-hidden">
            <img
              alt=""
              className="absolute inset-0 max-w-none w-full h-full object-cover object-bottom"
              src={imgImage11}
            />
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="w-full pb-6">
        <div
          className="flex flex-wrap gap-2 lg:gap-4 items-center justify-center px-5 lg:px-[100px] py-4 lg:py-6 text-[var(--dark)] text-sm lg:text-base leading-[1.4] font-normal"
          style={{ letterSpacing: "-0.32px" }}
        >
          <p className="font-[var(--font-manrope)] font-light m-0">2026 ⓒ TRD Creative Studio</p>
          <span className="text-[var(--text-muted-trd)]">•</span>
          <a
            href="#privacy"
            onClick={(e) => e.preventDefault()}
            className="font-[var(--font-manrope)] font-light underline text-[var(--dark)] hover:text-[var(--brand)] transition-colors cursor-pointer m-0"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}
