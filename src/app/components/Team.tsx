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
      <div className="flex items-center justify-between pb-[150px] pt-[100px] px-[100px]">
        {/* Left */}
        <div className="flex flex-col gap-8 items-start w-[437px] shrink-0">
          <StarIcon color="#eb5503" size={42} />
          <div className="flex flex-col gap-4 items-start text-[var(--dark)] w-full font-[var(--font-manrope)] font-normal">
            <p className="text-[48px] leading-[1] w-full m-0" style={{ letterSpacing: "-1.92px" }}>
              The people behind TRD Creative Studio.
            </p>
            <p className="text-base leading-[1.5] w-full m-0">
              We work with a focused team of designers, developers, and creative partners to make
              every project clear, thoughtful, and ready to launch.
            </p>
          </div>
        </div>
        {/* Right: team grid */}
        <div className="flex gap-6 items-start">
          {teamMembers.map((m, i) => (
            <div key={i} className="flex flex-col gap-6 items-center">
              <div className="h-[119px] w-[180px] relative overflow-hidden">
                <img
                  alt={m.name}
                  className="absolute inset-0 max-w-none w-full h-full object-cover object-bottom"
                  src={imgImage11}
                />
              </div>
              <div className="flex flex-col gap-1 items-center text-[var(--dark)] text-center w-full" style={{ lineHeight: "normal" }}>
                <p className="font-[var(--font-manrope)] font-semibold text-[18px] w-full m-0">{m.name}</p>
                <p className="font-[var(--font-manrope)] font-normal text-base w-full m-0">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
