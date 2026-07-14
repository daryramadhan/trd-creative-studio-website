import { useState } from "react";
import imgChatGptImageJul142026061051Pm31 from "../imports/TrdCreativeStudioⒸWebsite-1/95ac5e22380e3659826653ab0d53d821056bbf47.png";
import imgRectangle11 from "../imports/TrdCreativeStudioⒸWebsite-1/980394d6102a53ba9bdac22f3b4fb6485086f05d.png";
import imgRectangle12 from "../imports/TrdCreativeStudioⒸWebsite-1/762357e8ca5bcaeffeb62526afbd5039d9393891.png";
import imgChatGptImageJul142026055012Pm1 from "../imports/TrdCreativeStudioⒸWebsite-1/1632661aa3faadb418045d3e7667246cd6175bc3.png";
import imgChatGptImageJul142026061053Pm41 from "../imports/TrdCreativeStudioⒸWebsite-1/6411199615007b44e4af90648dc545d69764fdc7.png";
import imgChatGptImageJul142026061053Pm42 from "../imports/TrdCreativeStudioⒸWebsite-1/10b23f811973e12eea05b1129408f03b9288cb6d.png";
import imgChatGptImageJul142026061050Pm21 from "../imports/TrdCreativeStudioⒸWebsite-1/228c7f6936938082e40aade80f342f6fb954db47.png";
import imgImage11 from "../imports/TrdCreativeStudioⒸWebsite-1/d2e0a0da0a57a02edbdf13fa7ba8ba12913b0266.png";

/* ── Star/asterisk decorative icon (matches Figma exactly) ──────── */
function StarIcon({ color = "#eb5503", size = 42 }: { color?: string; size?: number }) {
  const mid = size * 0.4705;
  const arm = size * 0.5294;
  const thick = size * 0.0589;
  return (
    <div className="flex items-center justify-center flex-shrink-0" style={{ width: size, height: size }}>
      <div style={{ width: size, height: size, position: "relative", transform: "rotate(90deg)" }}>
        {/* Horizontal arms */}
        <div style={{ position: "absolute", background: color, height: thick, left: 0, top: mid, width: arm }} />
        <div style={{ position: "absolute", background: color, height: thick, right: 0, top: mid, width: arm }} />
        {/* Vertical arms */}
        <div style={{ position: "absolute", background: color, width: thick, left: mid, top: mid, height: arm }} />
        <div style={{ position: "absolute", background: color, width: thick, left: mid, top: 0, height: arm }} />
        {/* Diagonal arms */}
        <div style={{ position: "absolute", left: size * 0.1176, top: size * 1176, width: size * 0.416, height: size * 0.416, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: color, height: thick, width: arm, transform: "rotate(-135deg)" }} />
        </div>
        <div style={{ position: "absolute", left: size * 0.1176, top: size * 0.4705, width: size * 0.416, height: size * 0.416, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: color, height: thick, width: arm, transform: "rotate(135deg)" }} />
        </div>
        <div style={{ position: "absolute", left: size * 0.4705, top: size * 0.4705, width: size * 0.416, height: size * 0.416, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: color, height: thick, width: arm, transform: "rotate(45deg)" }} />
        </div>
        <div style={{ position: "absolute", left: size * 0.4705, top: size * 0.1176, width: size * 0.416, height: size * 0.416, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: color, height: thick, width: arm, transform: "rotate(-45deg)" }} />
        </div>
        {/* Center dot */}
        <div style={{ position: "absolute", left: size * 0.647, top: size * 0.176, width: size * 0.166, height: size * 0.166, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: color, borderRadius: "50%", width: thick * 2, height: thick * 2 }} />
        </div>
      </div>
    </div>
  );
}

function Dot({ color = "#D9D9D9", size = 4 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ flexShrink: 0 }}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  );
}

/* ── HERO ───────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ backgroundColor: "#1e1e1e", minHeight: 982, position: "relative", width: "100%" }}>
      {/* Nav bar */}
      <nav style={{ backgroundColor: "#1b1b1b", position: "absolute", top: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 64, padding: "16px 100px" }}>
        {["Home", "Our Works"].map(l => (
          <span key={l} style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, color: "#fff", lineHeight: 1.4, whiteSpace: "nowrap" }}>{l}</span>
        ))}
        <StarIcon color="#eb5503" size={42} />
        {["Services", "Pricing"].map(l => (
          <span key={l} style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, color: "#fff", lineHeight: 1.4, whiteSpace: "nowrap" }}>{l}</span>
        ))}
      </nav>

      {/* Main content */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", padding: "200px 100px", gap: 56 }}>
        {/* Badge */}
        <div style={{ backgroundColor: "rgba(235,85,3,0.1)", display: "flex", gap: 10, alignItems: "center", justifyContent: "center", padding: "8px 16px", borderRadius: 100 }}>
          <p style={{ fontFamily: "Manrope, sans-serif", color: "#eb5503", fontSize: 14, lineHeight: 1.4, textAlign: "center", margin: 0 }}>
            <span style={{ fontWeight: 700 }}>6 project slots </span>
            <span style={{ fontWeight: 400 }}>available this month</span>
          </p>
          <Dot color="#eb5503" size={4} />
          <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 500, color: "#eb5503", fontSize: 14, lineHeight: 1.4, textDecoration: "underline", whiteSpace: "nowrap" }}>See Pricing</span>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32, maxWidth: 974, width: "100%", textAlign: "center" }}>
          <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 82, color: "#fff", lineHeight: 1, letterSpacing: "-1.64px", margin: 0 }}>
            Turn complex ideas into clear digital products.
          </p>
          <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, color: "#fff", lineHeight: 1.5, maxWidth: 586, margin: 0 }}>
            TRD Creative Studio partners with businesses to design thoughtful websites, platforms, and digital experiences–from early strategy to final execution
          </p>
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <button style={{ backgroundColor: "#eb5503", color: "#fff", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 16, lineHeight: 1.4, padding: "8px 24px", borderRadius: 100, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
            Start a Project
          </button>
          <button style={{ background: "none", color: "#fff", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 16, lineHeight: 1.4, padding: "8px 24px", borderRadius: 100, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
            View Selected Work
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── SERVICE TICKER ──────────────────────────────────────────────── */
function ServiceTicker() {
  return (
    <div style={{ width: "100%", borderBottom: "1px solid #f4f4f4" }}>
      <div style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "center", padding: "24px 100px", flexWrap: "wrap" }}>
        {[
          "Product & Experience Design",
          "Website Design & Development",
          "Brand & Strategy",
        ].map((s, i) => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span style={{ fontFamily: "Archivo, sans-serif", fontWeight: 200, fontSize: 18, color: "#1e1e1e", lineHeight: 1.4, textAlign: "center", whiteSpace: "nowrap" }}>{s}</span>
            <Dot color="#D9D9D9" size={4} />
          </div>
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
          <span style={{ fontFamily: "Archivo, sans-serif", fontWeight: 200, fontSize: 18, color: "#1e1e1e", lineHeight: 1.4, whiteSpace: "nowrap" }}>AI Video Production</span>
          <span style={{ backgroundColor: "#eb5503", color: "#fff", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 14, lineHeight: 1.4, padding: "2px 8px", borderRadius: 100, whiteSpace: "nowrap" }}>New!</span>
        </div>
      </div>
    </div>
  );
}

/* ── SELECTED WORK ───────────────────────────────────────────────── */
function WorkCard() {
  return (
    <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: 24, alignItems: "center", minWidth: 0 }}>
      <div style={{ height: 400, borderRadius: 8, width: "100%", position: "relative", overflow: "hidden" }}>
        <img alt="" style={{ position: "absolute", left: 0, top: "0.08%", width: "100%", height: "238.24%", maxWidth: "none" }} src={imgRectangle11} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%", fontFamily: "Archivo, sans-serif", fontWeight: 200, fontSize: 14, textAlign: "center", whiteSpace: "nowrap" }}>
          <span style={{ color: "#1e1e1e" }}>Pupuk Indonesia</span>
          <span style={{ color: "#1e1e1e" }}>(2026)</span>
        </div>
        <p style={{ fontFamily: "Archivo, sans-serif", fontWeight: 300, fontSize: 18, color: "#1e1e1e", width: "100%", lineHeight: 1.4, margin: 0 }}>
          Redesigning the Everyday Workplace Portal for Pupuk Indonesia
        </p>
      </div>
    </div>
  );
}

function SelectedWork() {
  return (
    <section style={{ width: "100%" }}>
      <div style={{ display: "flex", gap: 100, alignItems: "flex-start", padding: 100 }}>
        {/* Left sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "flex-start", justifyContent: "center", width: 341, flexShrink: 0, position: "sticky", top: 100, alignSelf: "flex-start" }}>
          <p style={{ fontFamily: "Archivo, sans-serif", fontWeight: 400, fontSize: 12, color: "#1e1e1e", textAlign: "center", whiteSpace: "nowrap", lineHeight: 1.4, margin: 0 }}>TRD CREATIVE STUDIO</p>
          <div style={{ height: 161, width: 177, position: "relative", overflow: "hidden" }}>
            <img alt="" style={{ position: "absolute", height: "150.7%", left: "-18.6%", top: "-14.88%", width: "137.2%", maxWidth: "none" }} src={imgChatGptImageJul142026061051Pm31} />
          </div>
          <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 48, color: "#1e1e1e", lineHeight: 0.9, letterSpacing: "-0.96px", whiteSpace: "nowrap", margin: 0 }}>Selected Work</p>
          <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, color: "#1e1e1e", lineHeight: 1.5, textAlign: "justify", width: "100%", margin: 0 }}>
            TRD Creative Studio partners with businesses to design thoughtful websites, platforms, and digital.
          </p>
        </div>

        {/* Right grid: 3 rows × 2 cards */}
        <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", minWidth: 0 }}>
          {[0, 1, 2].map(row => (
            <div key={row} style={{ display: "flex", gap: 16, alignItems: "flex-start", width: "100%" }}>
              <WorkCard />
              <WorkCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ────────────────────────────────────────────────────── */
const servicesData = [
  {
    n: 1,
    t: "Product & Experience Design",
    items: ["Product and UX Strategy", "UI/UX Design", "Mobile Application Design", "SaaS Dashboard Design", "UX Audits and Usability Testing", "Design Systems"],
  },
  {
    n: 2,
    t: "Website Design & Development",
    items: ["Landing Page Design", "Web App Design", "E-commerce Design", "Responsive & Mobile-first", "CMS Integration", "Front-end Development"],
  },
  {
    n: 3,
    t: "Brand & Strategy",
    items: ["Brand Identity & Logo", "Typography & Color Systems", "Brand Guidelines", "Tone of Voice", "Competitive Analysis", "Go-to-market Strategy"],
  },
  {
    n: 4,
    t: "AI Video Production",
    items: ["AI-Generated Video Ads", "Explainer Videos", "Social Media Content", "Product Demo Videos", "Motion Graphics", "Script & Storyboarding"],
  },
];

function Services() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <section style={{ backgroundColor: "#eb5503", width: "100%" }}>
      {/* Section header */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", paddingTop: 150, paddingLeft: 100, paddingRight: 100 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", width: "100%", color: "#fff" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "flex-start", whiteSpace: "nowrap" }}>
            <p style={{ fontFamily: "Archivo, sans-serif", fontWeight: 600, fontSize: 14, lineHeight: 1.4, letterSpacing: "1.4px", margin: 0 }}>SERVICES</p>
            <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 48, lineHeight: 0.9, letterSpacing: "-0.96px", margin: 0 }}>Our Services</p>
          </div>
          <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: 1.5, maxWidth: 465, textAlign: "justify", margin: 0 }}>
            TRD Creative Studio partners with businesses to design thoughtful websites, platforms, and digital experiences–from early strategy to final execution
          </p>
        </div>
      </div>

      {/* Service rows */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingBottom: 150, paddingTop: 50, paddingLeft: 100, paddingRight: 100, width: "100%" }}>
        {servicesData.map(svc => {
          const isOpen = openIndex === svc.n;
          return (
            <div key={svc.n} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "32px 0", width: "100%", borderBottom: "1px solid rgba(255,255,255,0.5)" }}>
              {/* Row header — clickable */}
              <div
                onClick={() => setOpenIndex(isOpen ? 0 : svc.n)}
                style={{ display: "flex", gap: 16, alignItems: "center", width: "100%", cursor: "pointer", marginBottom: isOpen ? 32 : 0 }}
              >
                <div style={{ width: 40, flexShrink: 0 }}>
                  <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 20, color: "#fff", lineHeight: 1.4, textAlign: "center", whiteSpace: "nowrap", margin: 0 }}>[{svc.n}]</p>
                </div>
                <div style={{ flex: "1 0 0" }}>
                  <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 32, color: "#fff", lineHeight: 1.4, letterSpacing: "-0.64px", whiteSpace: "nowrap", margin: 0 }}>{svc.t}</p>
                </div>
                <a
                  href="#"
                  onClick={e => e.stopPropagation()}
                  style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, color: "#fff", lineHeight: 1.4, textDecoration: "underline", whiteSpace: "nowrap" }}
                >
                  View Service Details
                </a>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", width: "100%" }}>
                  {/* Sub-items */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", paddingLeft: 56, width: 400, flexShrink: 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", width: "100%" }}>
                      <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, color: "#fff", lineHeight: "normal", whiteSpace: "nowrap", margin: 0 }}>What we can offer for you:</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", width: "100%" }}>
                        {svc.items.map(item => (
                          <div key={item} style={{ display: "flex", gap: 12, alignItems: "center", width: "100%" }}>
                            <Dot color="white" size={5} />
                            <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, color: "#fff", lineHeight: "normal", whiteSpace: "nowrap", margin: 0 }}>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, color: "#fff", lineHeight: 1.4, whiteSpace: "nowrap", margin: 0 }}>Discuss Your Project →</p>
                  </div>
                  {/* Image grid */}
                  <div style={{ flex: "1 0 0", display: "flex", gap: 8, alignItems: "center", minWidth: 0, overflow: "hidden" }}>
                    {[0, 1, 2, 3].map(i => (
                      <div key={i} style={{ borderRadius: 8, flexShrink: 0, width: 300, height: 300, position: "relative", overflow: "hidden" }}>
                        <img alt="" style={{ position: "absolute", left: 0, top: "0.1%", width: "100%", height: "133.33%", maxWidth: "none" }} src={imgRectangle12} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── ABOUT ───────────────────────────────────────────────────────── */
function About() {
  return (
    <section style={{ backgroundColor: "#fff", width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "150px 50px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 64, alignItems: "center", maxWidth: 833, width: "100%" }}>
          {/* Illustration */}
          <div style={{ height: 146, width: 176, position: "relative", overflow: "hidden" }}>
            <img alt="" style={{ position: "absolute", height: "166.31%", left: "-18.6%", top: "-33.16%", width: "137.2%", maxWidth: "none" }} src={imgChatGptImageJul142026055012Pm1} />
          </div>

          {/* Big text */}
          <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 48, color: "#1e1e1e", textAlign: "center", letterSpacing: "-0.96px", width: "100%" }}>
            <p style={{ lineHeight: 1.2, color: "#eb5503", margin: 0 }}>TRD Creative Studio is an independent design studio based in Indonesia.</p>
            <p style={{ lineHeight: 1.2, margin: "8px 0" }}>&nbsp;</p>
            <p style={{ lineHeight: 1.2, margin: 0 }}>We work closely with businesses and product teams to transform ideas, requirements, and challenges into practical digital experiences</p>
          </div>

          {/* Star */}
          <StarIcon color="#eb5503" size={42} />

          {/* Sub text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", justifyContent: "center", color: "#1e1e1e", fontSize: 16, lineHeight: 1.5, textAlign: "center", width: "100%", fontFamily: "Manrope, sans-serif", fontWeight: 400 }}>
            <p style={{ margin: 0, width: "100%" }}>Independent design studio based in Indonesia.</p>
            <p style={{ margin: 0, width: "100%" }}>TRD Creative Studio partners with businesses to design thoughtful websites, platforms, and digital experiences–from early strategy to final execution</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PROCESS ─────────────────────────────────────────────────────── */
function ProcessCard({ num, badge, img, imgW, imgH, title, desc }: {
  num: string; badge?: string; img: string; imgW: number; imgH: number; title: string; desc: string;
}) {
  return (
    <div style={{ flex: "1 0 0", backgroundColor: "#fff", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", padding: 24, height: 460, minWidth: 0 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%" }}>
        <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, color: "#eb5503", fontSize: 20, lineHeight: 1.4, whiteSpace: "nowrap", margin: 0 }}>[ {num} ]</p>
        {badge && <span style={{ backgroundColor: "#eb5503", color: "#fff", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 14, lineHeight: 1.4, padding: "2px 8px", borderRadius: 100, whiteSpace: "nowrap" }}>{badge}</span>}
      </div>
      <div style={{ height: imgH, width: imgW, position: "relative", overflow: "hidden" }}>
        <img alt="" style={{ position: "absolute", height: "146%", left: "-17%", top: "-23%", width: "141%", maxWidth: "none" }} src={img} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 42, alignItems: "flex-start", width: "100%", fontFamily: "Manrope, sans-serif", fontWeight: 400 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", width: "100%" }}>
          <p style={{ color: "#eb5503", fontSize: 32, lineHeight: 1.2, letterSpacing: "-0.64px", width: "100%", margin: 0 }}>{title}</p>
          <p style={{ color: "#1e1e1e", fontSize: 17, lineHeight: "normal", width: "100%", margin: 0 }}>{desc}</p>
        </div>
        <p style={{ color: "#eb5503", fontSize: 16, lineHeight: 1.4, whiteSpace: "nowrap", margin: 0 }}>Book discovery call →</p>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section style={{ backgroundColor: "#eb5503", width: "100%" }}>
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingBottom: 25, paddingTop: 150, paddingLeft: 100, paddingRight: 100 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", width: "100%", color: "#fff", fontFamily: "Manrope, sans-serif", fontWeight: 400 }}>
          <p style={{ fontSize: 48, lineHeight: 1, letterSpacing: "-0.96px", maxWidth: 657, margin: 0 }}>A clear process to deliver meaningful results.</p>
          <p style={{ fontSize: 16, lineHeight: 1.5, maxWidth: 418, margin: 0 }}>We create experiences that are easier for users to understand, easier for teams to implement, and more valuable for businesses to grow.</p>
        </div>
      </div>
      {/* Cards */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 150, paddingTop: 25, paddingLeft: 100, paddingRight: 100, width: "100%" }}>
        <ProcessCard num="1" badge="Free 30-min Discovery" img={imgChatGptImageJul142026061053Pm41} imgW={142} imgH={138} title="Discover" desc="Understand the challenge, audience, business, and success criteria" />
        <ProcessCard num="2" img={imgChatGptImageJul142026061053Pm42} imgW={168} imgH={142} title="Shape" desc="Define the experience, scope, priorities, and creative direction" />
        <ProcessCard num="3" img={imgChatGptImageJul142026061050Pm21} imgW={194} imgH={150} title="Create" desc="Design, prototype, review, and prepare the solution for implementation" />
        <ProcessCard num="4" img={imgChatGptImageJul142026061051Pm31} imgW={159} imgH={140} title="Deliver" desc="Complete quality assurance, handoff, development support, and launch" />
      </div>
    </section>
  );
}

/* ── PRICING ─────────────────────────────────────────────────────── */
function PricingFeature({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", width: "100%" }}>
      <StarIcon color="#eb5503" size={16} />
      <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 14, color: "#1e1e1e", lineHeight: 1.4, flex: "1 0 0", minWidth: 0, margin: 0 }}>{text}</p>
    </div>
  );
}

const pricingFeatures = [
  "Product manager, product designer and researcher",
  "Figma, docs and all assets licenses",
  "Weekly meetings/dedicated message communications",
  "Simple requests? same day. Complex flows in 1-3 business days",
];

function Pricing() {
  return (
    <section style={{ backgroundColor: "#fff", width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 64, alignItems: "center", justifyContent: "center", padding: "150px 100px" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: 41, alignItems: "center", width: 536 }}>
          <div style={{ backgroundColor: "rgba(235,85,3,0.05)", display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 16px", borderRadius: 100 }}>
            <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 500, color: "#eb5503", fontSize: 14, lineHeight: 1.4, textAlign: "center", whiteSpace: "nowrap", margin: 0 }}>Partners &amp; Company We Work for</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", color: "#1e1e1e", textAlign: "center", width: "100%", fontFamily: "Manrope, sans-serif", fontWeight: 400 }}>
            <p style={{ fontSize: 48, lineHeight: "normal", letterSpacing: "-1.92px", width: "100%", margin: 0 }}>Pricing &amp; Packages</p>
            <p style={{ fontSize: 16, lineHeight: 1.5, width: "100%", margin: 0 }}>We create experiences that are easier for users to understand, easier for teams to implement, and more valuable for businesses to grow.</p>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
          {/* Studio Access */}
          <div style={{ backgroundColor: "#fff", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", justifyContent: "center", padding: 36, borderRadius: 12, width: 432, flexShrink: 0, border: "1px solid #f4f4f4" }}>
            <StarIcon color="#eb5503" size={42} />
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start", color: "#1e1e1e", width: "100%" }}>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 500, fontSize: 32, lineHeight: "normal", letterSpacing: "-0.64px", width: "100%", margin: 0 }}>Studio Access</p>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: 1.4, width: "100%", margin: 0 }}>Best for Startups &amp; Scale-ups</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", width: "100%" }}>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 500, fontSize: 56, color: "#eb5503", lineHeight: "normal", letterSpacing: "-2.24px", width: "100%", margin: 0 }}>$2,500</p>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 14, color: "#1e1e1e", lineHeight: 1.4, width: "100%", margin: 0 }}>Monthly Price, Cancel Anytime.</p>
            </div>
            <button style={{ backgroundColor: "#eb5503", color: "#fff", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 16, lineHeight: 1.4, padding: "8px 24px", borderRadius: 100, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>Claim 1 of 4 spots left</button>
            <div style={{ height: 1, background: "#f4f4f4", width: "100%" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", width: "100%" }}>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 14, color: "#1e1e1e", lineHeight: 1.4, width: "100%", margin: 0 }}>Includes :</p>
              {pricingFeatures.map(f => <PricingFeature key={f} text={f} />)}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div style={{ backgroundColor: "#fff", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", justifyContent: "center", padding: 36, borderRadius: 12, width: 432, flexShrink: 0, border: "1px solid #f4f4f4" }}>
            <StarIcon color="#b4b4b4" size={42} />
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start", color: "#1e1e1e", width: "100%" }}>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 500, fontSize: 32, lineHeight: "normal", letterSpacing: "-0.64px", width: "100%", margin: 0 }}>Enterprise Plan</p>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: 1.4, width: "100%", margin: 0 }}>Best for project-based</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", width: "100%" }}>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 500, fontSize: 56, color: "#1e1e1e", lineHeight: "normal", letterSpacing: "-2.24px", width: "100%", margin: 0 }}>$3,500+</p>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 14, color: "#1e1e1e", lineHeight: 1.4, width: "100%", margin: 0 }}>Monthly Price, Cancel Anytime.</p>
            </div>
            <button style={{ background: "none", color: "#eb5503", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 16, lineHeight: 1.4, padding: "8px 24px", borderRadius: 100, border: "1px solid #eb5503", cursor: "pointer", whiteSpace: "nowrap" }}>Discuss Your Project</button>
            <div style={{ height: 1, background: "#f4f4f4", width: "100%" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", width: "100%" }}>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 14, color: "#1e1e1e", lineHeight: 1.4, width: "100%", margin: 0 }}>Includes :</p>
              {pricingFeatures.map(f => <PricingFeature key={f} text={f} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TEAM ────────────────────────────────────────────────────────── */
const teamMembers = [
  { name: "Wildan", role: "Founder & Director" },
  { name: "Dary", role: "Product Designer" },
  { name: "Avei", role: "Front-end Engineer" },
  { name: "Dary", role: "Back-end Engineer" },
];

function Team() {
  return (
    <section style={{ width: "100%", position: "relative", borderTop: "1px solid #f4f4f4", borderBottom: "1px solid #f4f4f4" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 150, paddingTop: 100, paddingLeft: 100, paddingRight: 100 }}>
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "flex-start", width: 437, flexShrink: 0 }}>
          <StarIcon color="#eb5503" size={42} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", color: "#1e1e1e", width: "100%", fontFamily: "Manrope, sans-serif", fontWeight: 400 }}>
            <p style={{ fontSize: 48, lineHeight: 1, letterSpacing: "-1.92px", width: "100%", margin: 0 }}>The people behind TRD Creative Studio.</p>
            <p style={{ fontSize: 16, lineHeight: 1.5, width: "100%", margin: 0 }}>We work with a focused team of designers, developers, and creative partners to make every project clear, thoughtful, and ready to launch.</p>
          </div>
        </div>
        {/* Right: team grid */}
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
          {teamMembers.map((m, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
              <div style={{ height: 119, width: 180, position: "relative", overflow: "hidden" }}>
                <img alt={m.name} style={{ position: "absolute", inset: 0, maxWidth: "none", objectPosition: "bottom", width: "100%", height: "100%", objectFit: "cover" }} src={imgImage11} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center", color: "#1e1e1e", textAlign: "center", width: "100%", lineHeight: "normal" }}>
                <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 18, width: "100%", margin: 0 }}>{m.name}</p>
                <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, width: "100%", margin: 0 }}>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────────────────── */
function CallToAction() {
  return (
    <section style={{ backgroundColor: "#eb5503", width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "150px 100px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 48, alignItems: "center", maxWidth: 858, width: "100%" }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 16px", borderRadius: 100 }}>
            <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 500, color: "#fff", fontSize: 14, lineHeight: 1.4, textAlign: "center", whiteSpace: "nowrap", margin: 0 }}>Partners &amp; Company We Work for</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", color: "#fff", fontFamily: "Manrope, sans-serif", fontWeight: 400, textAlign: "center" }}>
            <p style={{ fontSize: 82, lineHeight: 1, letterSpacing: "-1.64px", width: "100%", margin: 0 }}>Let's shape something valuable together.</p>
            <p style={{ fontSize: 16, lineHeight: 1.5, maxWidth: 532, margin: 0 }}>Tell us about your product, website, or business challenge. We'll help you identify the right scope and next step.</p>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <button style={{ backgroundColor: "#fff", color: "#eb5503", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 16, lineHeight: 1.4, padding: "8px 24px", borderRadius: 100, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>Start a Project</button>
            <button style={{ background: "none", color: "#fff", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 16, lineHeight: 1.4, padding: "8px 24px", borderRadius: 100, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>Schedule Free 30-min Call</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <>
      <section style={{ width: "100%" }}>
        <div style={{ display: "flex", padding: 100, alignItems: "center", gap: 313 }}>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "flex-start", width: 437, flexShrink: 0 }}>
            <div style={{ height: 106, width: 128, position: "relative" }}>
              <div style={{ position: "absolute", height: 105, left: 0, top: 0, width: 128, overflow: "hidden" }}>
                <img alt="" style={{ position: "absolute", height: "166.31%", left: "-18.6%", top: "-33.16%", width: "137.2%", maxWidth: "none" }} src={imgChatGptImageJul142026055012Pm1} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", color: "#1e1e1e", width: "100%", fontFamily: "Manrope, sans-serif", fontWeight: 400 }}>
              <p style={{ fontSize: 48, lineHeight: 1, letterSpacing: "-1.92px", width: "100%", margin: 0 }}>TRD Creative Studio</p>
              <p style={{ fontSize: 16, lineHeight: 1.5, width: "100%", margin: 0 }}>We believe every touch need the best for the clients, so we hire the best talent. We believe every touch need the best for the clients, so we hire the best talent.</p>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 56, alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", justifyContent: "center" }}>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, color: "#eb5503", fontSize: 16, lineHeight: 1.4, whiteSpace: "nowrap", margin: 0 }}>Services</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", color: "#1e1e1e", fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: 1.4, letterSpacing: "-0.32px" }}>
                {["Product & UI/UX Design", "Website Design & Development", "Brand Strategy & Identity", "Creative Production"].map(s => (
                  <p key={s} style={{ whiteSpace: "nowrap", margin: 0 }}>{s}</p>
                ))}
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <p style={{ whiteSpace: "nowrap", margin: 0 }}>AI Production</p>
                  <span style={{ backgroundColor: "#eb5503", color: "#fff", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 12, lineHeight: 1.4, padding: "2px 8px", borderRadius: 100 }}>New</span>
                </div>
                <p style={{ color: "#b4b4b4", whiteSpace: "nowrap", margin: 0 }}>Social Media Design</p>
                <p style={{ color: "#b4b4b4", whiteSpace: "nowrap", margin: 0 }}>Visual Merchandising</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", justifyContent: "center", width: 125 }}>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, color: "#eb5503", fontSize: 16, lineHeight: 1.4, margin: 0 }}>Quick Links</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", color: "#1e1e1e", fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: 1.4, whiteSpace: "nowrap" }}>
                {["Home", "Work", "Contact"].map(l => <p key={l} style={{ margin: 0 }}>{l}</p>)}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", justifyContent: "center", width: 125 }}>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, color: "#eb5503", fontSize: 16, lineHeight: 1.4, margin: 0 }}>Social Media</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", color: "#1e1e1e", fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: 1.4, whiteSpace: "nowrap" }}>
                {["LinkedIn", "Instagram", "Behance"].map(l => <p key={l} style={{ margin: 0 }}>{l}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character strip */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingBottom: 50, width: "100%" }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ height: 134, width: 202, position: "relative", flexShrink: 0, overflow: "hidden" }}>
            <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", objectPosition: "bottom", width: "100%", height: "100%", objectFit: "cover" }} src={imgImage11} />
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div style={{ width: "100%", borderTop: "1px solid #f4f4f4" }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "center", padding: "24px 100px", color: "#1e1e1e", fontSize: 16, lineHeight: 1.4, letterSpacing: "-0.32px", whiteSpace: "nowrap", fontWeight: 400 }}>
          <p style={{ fontFamily: "Manrope, sans-serif", margin: 0 }}>2026 ⓒ TRD Creative Studio</p>
          <p style={{ fontFamily: "Manrope, sans-serif", textDecoration: "underline", margin: 0 }}>Privacy Policy</p>
        </div>
      </div>
    </>
  );
}

/* ── ROOT ────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div style={{ backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
      <Hero />
      <ServiceTicker />
      <SelectedWork />
      <Services />
      <About />
      <Process />
      <Pricing />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
}
