import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#E8571E", fontFamily: "Manrope, sans-serif" }}
      className="py-32 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
          }}
          className="uppercase mb-8"
        >
          Ready to Start?
        </p>

        {/* Headline */}
        <h2
          className="mb-10"
          style={{
            fontFamily: "Archivo, sans-serif",
            fontWeight: 200,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.05,
            color: "#FFFFFF",
            letterSpacing: "-0.025em",
          }}
        >
          Let's shape something valuable together.
        </h2>

        {/* Subtext */}
        <p
          className="mb-12"
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: 1.75,
            maxWidth: "480px",
            margin: "0 auto 48px",
          }}
        >
          Have a project in mind or just want to explore working together? Reach out — we respond within 24 hours.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@trdcreative.studio"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#1A1A1A",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Send us a message <ArrowRight size={15} />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
