import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Work", "Services", "About", "Pricing"];

  return (
    <nav
      style={{ fontFamily: "Manrope, sans-serif", backgroundColor: "#1A1A1A" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between"
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2">
        <span
          style={{ color: "#E8571E", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em" }}
          className="uppercase"
        >
          ●
        </span>
        <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 600, letterSpacing: "0.02em" }}>
          TRD Creative Studio
        </span>
      </a>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{ color: "#A0A0A0", fontSize: "13px", fontWeight: 400 }}
            className="hover:text-white transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 transition-colors duration-200"
        style={{
          backgroundColor: "#E8571E",
          color: "#FFFFFF",
          fontSize: "13px",
          fontWeight: 600,
        }}
      >
        Get in touch
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-4 px-6 py-8"
          style={{ backgroundColor: "#1A1A1A", borderTop: "1px solid #2A2A2A" }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 500 }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex self-start rounded-full px-5 py-2 mt-2"
            style={{ backgroundColor: "#E8571E", color: "#FFFFFF", fontSize: "13px", fontWeight: 600 }}
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
