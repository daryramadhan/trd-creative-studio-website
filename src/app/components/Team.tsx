import imgImage11 from "../../imports/TrdCreativeStudioⒸWebsite-1/d2e0a0da0a57a02edbdf13fa7ba8ba12913b0266.png";
import { StarIcon } from "./shared";

const teamMembers = [
  { name: "Wildan", role: "Founder & Director" },
  { name: "Dary", role: "Product Designer" },
  { name: "Avei", role: "Front-end Engineer" },
  { name: "Dary", role: "Back-end Engineer" },
];

export function Team() {
  return (
    <section className="w-full relative border-t border-b border-[var(--border-subtle)]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-0 py-12 lg:pb-[150px] lg:pt-[100px] px-5 lg:px-[100px]">
        {/* Left */}
        <div className="flex flex-col gap-6 lg:gap-8 items-start w-full lg:w-[400px] lg:shrink-0">
          <StarIcon color="#eb5503" size={36} className="lg:hidden" />
          <StarIcon color="#eb5503" size={56} className="hidden lg:flex" />
          <div className="flex flex-col gap-4 items-start text-[var(--dark)] w-full font-[var(--font-manrope)] font-light">
            <p
              className="leading-[1] w-full m-0"
              style={{ fontSize: "clamp(26px, 8vw, 48px)", letterSpacing: "-0.04em" }}
            >
              The people behind TRD Creative Studio.
            </p>
            <p className="text-sm lg:text-base w-full m-0">
              We work with a focused team of designers, developers, and creative partners to make
              every project clear, thoughtful, and ready to launch.
            </p>
          </div>
        </div>
        {/* Right: team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:flex lg:flex-row lg:gap-6 items-start w-full lg:w-auto">
          {teamMembers.map((m, i) => (
            <div key={i} className="flex flex-col gap-3 lg:gap-6 items-center min-w-0 flex-1">
              <div className="h-[140px] lg:h-[180px] w-full flex items-center justify-center overflow-hidden">
                <img
                  alt={m.name}
                  className="h-full w-auto max-w-full object-contain"
                  src={imgImage11}
                />
              </div>
              <div className="flex flex-col gap-1 items-center text-[var(--dark)] text-center w-full" style={{ lineHeight: "normal" }}>
                <p className="font-[var(--font-manrope)] font-normal text-sm lg:text-base w-full m-0">{m.name}</p>
                <p className="font-[var(--font-manrope)] font-light text-xs lg:text-sm text-[var(--text-muted-trd)] w-full m-0">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
