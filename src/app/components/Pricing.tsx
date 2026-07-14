import { Check } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Studio Essentials",
    price: "$2,500",
    period: "per project",
    description: "Perfect for early-stage startups and small teams that need focused design help.",
    features: [
      "Up to 10 screens / pages",
      "UI Design (Web or Mobile)",
      "1 Round of revisions",
      "Basic component library",
      "Figma source files",
      "1-week delivery turnaround",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    id: 2,
    name: "Creative Plus",
    price: "$3,500+",
    period: "per project",
    description: "For teams that need comprehensive design support — from strategy through to polished delivery.",
    features: [
      "Unlimited screens & flows",
      "Full UX Research & Strategy",
      "Brand Identity included",
      "3 Rounds of revisions",
      "Full design system",
      "Motion & interaction design",
      "Developer handoff support",
      "30-day post-launch support",
    ],
    cta: "Get Started",
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      style={{ backgroundColor: "#F2F1EE", fontFamily: "Manrope, sans-serif" }}
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            style={{ color: "#E8571E", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em" }}
            className="uppercase mb-3"
          >
            Investment
          </p>
          <h2
            style={{
              fontFamily: "Archivo, sans-serif",
              fontWeight: 200,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            Pricing & Packages
          </h2>
          <p style={{ color: "#888888", fontSize: "14px", fontWeight: 400, marginTop: "12px", lineHeight: 1.7 }}>
            Transparent pricing with no surprises. Every project starts with a discovery call.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                backgroundColor: plan.highlight ? "#1A1A1A" : "#FFFFFF",
                border: plan.highlight ? "none" : "1px solid #E5E5E0",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p
                    style={{
                      color: plan.highlight ? "rgba(255,255,255,0.5)" : "#888888",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                    }}
                    className="uppercase mb-2"
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span
                      style={{
                        fontFamily: "Archivo, sans-serif",
                        fontWeight: 200,
                        fontSize: "2.8rem",
                        color: plan.highlight ? "#E8571E" : "#1A1A1A",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ color: plan.highlight ? "rgba(255,255,255,0.4)" : "#AAAAAA", fontSize: "12px" }}>
                      {plan.period}
                    </span>
                  </div>
                </div>
              </div>

              <p
                style={{
                  color: plan.highlight ? "rgba(255,255,255,0.6)" : "#888888",
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: 1.7,
                }}
                className="mb-8"
              >
                {plan.description}
              </p>

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{
                        width: "18px",
                        height: "18px",
                        backgroundColor: plan.highlight ? "#E8571E" : "#F2F1EE",
                      }}
                    >
                      <Check size={10} color={plan.highlight ? "#FFFFFF" : "#1A1A1A"} strokeWidth={3} />
                    </span>
                    <span
                      style={{
                        color: plan.highlight ? "rgba(255,255,255,0.8)" : "#555555",
                        fontSize: "13px",
                        fontWeight: 400,
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="w-full text-center rounded-full py-3 transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: plan.highlight ? "#E8571E" : "#1A1A1A",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 600,
                  display: "block",
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center mt-8" style={{ color: "#AAAAAA", fontSize: "12px", fontWeight: 400 }}>
          Need something custom? <a href="#contact" style={{ color: "#E8571E", textDecoration: "underline" }}>Let's talk</a> — we're happy to scope something unique.
        </p>
      </div>
    </section>
  );
}
