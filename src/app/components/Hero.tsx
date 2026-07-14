import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-20"
      style={{ backgroundColor: "#1A1A1A", fontFamily: "Manrope, sans-serif" }}
    >
      {/* Eyebrow label */}
      <div className="flex items-center gap-2 mb-8">
        <span style={{ color: "#E8571E", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em" }} className="uppercase">
          ★ Creative Studio
        </span>
      </div>

      {/* Main headline */}
      <h1
        className="max-w-4xl mb-8"
        style={{
          fontFamily: "Archivo, sans-serif",
          fontWeight: 200,
          fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
          lineHeight: 1.08,
          color: "#F2F0EB",
          letterSpacing: "-0.02em",
        }}
      >
        Turn complex ideas into clear digital products.
      </h1>

      {/* Subtext */}
      <p
        className="max-w-md mb-12"
        style={{ color: "#888888", fontSize: "15px", fontWeight: 400, lineHeight: 1.7 }}
      >
        We help startups and product teams transform ideas, requirements, and challenges into practical digital experiences.
      </p>

      {/* CTA row */}
      <div className="flex flex-wrap items-center gap-6">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#E8571E", color: "#FFFFFF", fontSize: "14px", fontWeight: 600 }}
        >
          Start a Project <ArrowRight size={15} />
        </a>
        <a
          href="#work"
          style={{ color: "#888888", fontSize: "14px", fontWeight: 500 }}
          className="hover:text-white transition-colors duration-200 flex items-center gap-1"
        >
          See our work <ArrowRight size={14} />
        </a>
      </div>

      {/* Bottom stat bar */}
      <div
        className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-6 flex flex-wrap items-center gap-10"
        style={{ borderTop: "1px solid #2A2A2A" }}
      >
        {[
          { value: "50+", label: "Projects Delivered" },
          { value: "8+", label: "Years of Experience" },
          { value: "35+", label: "Happy Clients" },
          { value: "100%", label: "Client Satisfaction" },
        ].map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-2">
            <span style={{ color: "#E8571E", fontSize: "20px", fontWeight: 700, fontFamily: "Archivo, sans-serif" }}>
              {stat.value}
            </span>
            <span style={{ color: "#555555", fontSize: "12px", fontWeight: 400 }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
