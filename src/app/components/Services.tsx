import { useState } from "react";
import imgRectangle12 from "../../imports/TrdCreativeStudioⒸWebsite-1/762357e8ca5bcaeffeb62526afbd5039d9393891.png";
import { Dot } from "./shared";

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

export function Services() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <section className="w-full bg-[var(--brand)]">
      {/* Section header */}
      <div className="flex flex-col items-start justify-center pt-[150px] px-[100px]">
        <div className="flex items-end justify-between w-full text-white">
          <div className="flex flex-col gap-8 items-start whitespace-nowrap">
            <p className="font-[var(--font-archivo)] font-light text-xs leading-[1.4] m-0">
              SERVICES
            </p>
            <p
              className="font-[var(--font-manrope)] font-normal text-white m-0"
              style={{ fontSize: 48, lineHeight: 0.9, letterSpacing: "-0.96px" }}
            >
              Our Services
            </p>
          </div>
          <p className="font-[var(--font-manrope)] font-light text-md leading-[1.5] max-w-[465px] text-justify m-0">
            TRD Creative Studio partners with businesses to design thoughtful websites,
            platforms, and digital experiences–from early strategy to final execution
          </p>
        </div>
      </div>

      {/* Service rows */}
      <div className="flex flex-col items-start pb-[150px] pt-[50px] px-[100px] w-full">
        {servicesData.map((svc) => {
          const isOpen = openIndex === svc.n;
          return (
            <div
              key={svc.n}
              className="flex flex-col items-start py-8 w-full border-b border-white/10"
            >
              {/* Row header — clickable */}
              <div
                onClick={() => setOpenIndex(isOpen ? 0 : svc.n)}
                className="flex gap-4 items-center w-full cursor-pointer transition-[margin-bottom] duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ marginBottom: isOpen ? 32 : 0 }}
              >
                <div className="w-10 shrink-0">
                  <p className="font-[var(--font-manrope)] font-light text-sm text-white leading-[1.4] text-center whitespace-nowrap m-0">
                    [{svc.n}]
                  </p>
                </div>
                <div className="flex-1">
                  <p
                    className="font-[var(--font-manrope)] font-light text-white whitespace-nowrap m-0"
                    style={{ fontSize: 32, letterSpacing: "-0.64px" }}
                  >
                    {svc.t}
                  </p>
                </div>
                <a
                  href="#"
                  onClick={(e) => e.stopPropagation()}
                  className="font-[var(--font-manrope)] font-light text-sm text-white leading-[1.4] underline whitespace-nowrap"
                >
                  View Service Details
                </a>
              </div>

              {/* Animated expanded content */}
              <div
                className="overflow-hidden w-full transition-[max-height,opacity] duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  maxHeight: isOpen ? "600px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div
                  className="flex gap-4 items-start w-full transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ transform: isOpen ? "translateY(0)" : "translateY(-12px)" }}
                >
                  {/* Sub-items */}
                  <div className="flex flex-col gap-4 items-start pl-14 w-[400px] shrink-0">
                    <div className="flex flex-col gap-4 items-start w-full">
                      <p className="font-[var(--font-manrope)] font-light text-base text-white whitespace-nowrap m-0">
                        What we can offer for you:
                      </p>
                      <div className="flex flex-col gap-1 items-start w-full">
                        {svc.items.map((item) => (
                          <div key={item} className="flex gap-3 items-center w-full">
                            <Dot color="white" size={5} />
                            <p className="font-[var(--font-manrope)] font-light text-sm text-white whitespace-nowrap m-0">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="font-[var(--font-manrope)] font-light text-base text-white whitespace-nowrap m-0">
                      Discuss Your Project →
                    </p>
                  </div>
                  {/* Image grid */}
                  <div className="flex-1 flex gap-2 items-center min-w-0 overflow-hidden">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="rounded-[6px] shrink-0 w-[300px] h-[300px] relative overflow-hidden">
                        <img
                          alt=""
                          className="absolute left-0 top-[0.1%] w-full max-w-none"
                          style={{ height: "133.33%" }}
                          src={imgRectangle12}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
