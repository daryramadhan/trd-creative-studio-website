import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Product & Service Design",
    description:
      "End-to-end product design from discovery through delivery. We craft interfaces and experiences that are both beautiful and functional, grounded in user research and strategic thinking.",
    tags: ["UX Research", "UI Design", "Prototyping", "Usability Testing"],
  },
  {
    id: 2,
    number: "02",
    title: "Brand Identity & Guideline",
    description:
      "Comprehensive brand systems built to scale. From logo and visual language to tone of voice and motion principles, we create cohesive identities that communicate clearly across every touchpoint.",
    tags: ["Logo Design", "Typography", "Color Systems", "Brand Guidelines"],
  },
  {
    id: 3,
    number: "03",
    title: "Research & Strategy",
    description:
      "Data-informed decisions backed by qualitative depth. We conduct user interviews, competitive analysis, and design audits to build strategic foundations before a single pixel is designed.",
    tags: ["User Research", "Competitive Analysis", "Design Audit", "Roadmapping"],
  },
  {
    id: 4,
    number: "04",
    title: "Motion & Interaction",
    description:
      "Interfaces that feel alive. We design micro-interactions, animated flows, and motion systems that guide users through your product intuitively and delightfully.",
    tags: ["Micro-interactions", "Animation", "Motion Design", "Interactive Prototypes"],
  },
];

export function Services() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{ backgroundColor: "#E8571E", fontFamily: "Manrope, sans-serif" }}
      className="py-24 px-6 md:px-12"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
            }}
            className="uppercase mb-3"
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "Archivo, sans-serif",
              fontWeight: 200,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            Our Services
          </h2>
        </div>
        <p
          className="max-w-xs"
          style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", fontWeight: 400, lineHeight: 1.7 }}
        >
          We offer a focused set of design services to help teams build products people love.
        </p>
      </div>

      {/* Accordion list */}
      <div>
        {services.map((svc, i) => (
          <div
            key={svc.id}
            style={{ borderTop: "1px solid rgba(255,255,255,0.2)", ...(i === services.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.2)" } : {}) }}
          >
            <button
              onClick={() => setOpenId(openId === svc.id ? null : svc.id)}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <div className="flex items-center gap-6">
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em" }}>
                  {svc.number}
                </span>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    fontWeight: 500,
                    fontFamily: "Archivo, sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {svc.title}
                </span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>
                {openId === svc.id ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>

            {openId === svc.id && (
              <div className="pb-8 pl-12">
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", fontWeight: 400, lineHeight: 1.75, maxWidth: "600px" }} className="mb-5">
                  {svc.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
