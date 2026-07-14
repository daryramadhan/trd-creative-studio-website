const steps = [
  {
    id: 1,
    number: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="10" y1="11" x2="22" y2="11" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="16" x2="22" y2="16" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="21" x2="18" y2="21" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Discovery & Research",
    description:
      "We start by deeply understanding your business context, users, and goals through interviews, audits, and competitive analysis.",
  },
  {
    id: 2,
    number: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#1A1A1A" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="4" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="16" y1="4" x2="16" y2="8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="28" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="16" x2="8" y2="16" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="16" x2="28" y2="16" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Strategy & Planning",
    description:
      "We define success metrics, map user journeys, and establish a clear design strategy before any creative work begins.",
  },
  {
    id: 3,
    number: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24L12 20L20 12L24 8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 8L24 8L24 12" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 24L12 24L12 20" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Design & Creation",
    description:
      "We craft wireframes, visual designs, and interactive prototypes — iterating closely with your team at every step.",
  },
  {
    id: 4,
    number: "04",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6L18 10H22L19 13L20 17L16 15L12 17L13 13L10 10H14L16 6Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 22L10 26M23 22L22 26" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 24H24" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Delivery & Handoff",
    description:
      "Clean, developer-ready files with thorough documentation. We stay available through launch and beyond.",
  },
];

export function Process() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", fontFamily: "Manrope, sans-serif" }} className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p
              style={{ color: "#E8571E", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em" }}
              className="uppercase mb-3"
            >
              How We Work
            </p>
            <h2
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 200,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.1,
                color: "#1A1A1A",
                letterSpacing: "-0.02em",
              }}
            >
              A clear process to deliver <br className="hidden md:block" />
              meaningful results.
            </h2>
          </div>
          <p
            className="max-w-xs"
            style={{ color: "#888888", fontSize: "13px", fontWeight: 400, lineHeight: 1.7 }}
          >
            Our proven four-step process keeps projects on track and teams aligned from start to finish.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col gap-5">
              {/* Icon container */}
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#F2F1EE",
                }}
              >
                {step.icon}
              </div>
              {/* Number */}
              <p style={{ color: "#E8571E", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em" }}>
                {step.number}
              </p>
              {/* Title */}
              <p
                style={{
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 400,
                  fontSize: "17px",
                  color: "#1A1A1A",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </p>
              {/* Description */}
              <p style={{ color: "#888888", fontSize: "13px", fontWeight: 400, lineHeight: 1.7 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
