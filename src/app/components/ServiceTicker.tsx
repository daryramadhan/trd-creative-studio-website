import { Dot } from "./shared";

const SERVICES = [
  "Product & Experience Design",
  "Website Design & Development",
  "Brand & Strategy",
];

export function ServiceTicker() {
  return (
    <div className="w-full border-b border-[var(--border-subtle)]">
      <div className="flex gap-3 lg:gap-4 items-center justify-center px-5 lg:px-[100px] py-4 lg:py-6 flex-wrap">
        {SERVICES.map((s) => (
          <div key={s} className="flex items-center gap-3 lg:gap-4">
            <span className="font-[var(--font-archivo)] font-extralight text-sm lg:text-[16px] text-[var(--dark)] text-center whitespace-nowrap">
              {s}
            </span>
            <Dot color="#D9D9D9" size={4} />
          </div>
        ))}
        <div className="flex items-center gap-[10px] justify-center">
          <span className="font-[var(--font-archivo)] font-extralight text-sm lg:text-[16px] text-[var(--dark)] whitespace-nowrap">
            AI Video Production
          </span>
          <span className="bg-[var(--brand)] text-white font-[var(--font-manrope)] font-semibold text-sm leading-[1.4] px-2 py-[2px] rounded-full whitespace-nowrap">
            New!
          </span>
        </div>
      </div>
    </div>
  );
}
