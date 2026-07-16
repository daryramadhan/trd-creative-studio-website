import { Dot } from "./shared";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section className="relative w-full bg-[var(--dark)]" style={{ minHeight: 982 }}>
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col items-center justify-end h-full px-[100px] pt-[200px] pb-[100px] gap-14">
        {/* Badge */}
        <div className="flex gap-[10px] items-center justify-center px-4 py-2 rounded-full bg-[var(--brand-10)]">
          <p className="font-[var(--font-manrope)] text-[var(--brand)] text-sm leading-[1.4] text-center m-0">
            <span className="font-medium">6 project slots </span>
            <span className="font-normal">available this month</span>
          </p>
          <Dot color="#eb5503" size={4} />
          <span className="font-[var(--font-manrope)] font-lgith text-[var(--brand)] text-sm leading-[1.4] underline whitespace-nowrap">
            See Pricing
          </span>
        </div>

        {/* Headline block */}
        <div className="flex flex-col items-center gap-8 max-w-[800px] w-full text-center">
          <p
            className="font-[var(--font-manrope)] font-normal text-white m-0"
            style={{ fontSize: 82, lineHeight: 1, letterSpacing: "-1.64px" }}
          >
            Turn complex ideas into clear digital products.
          </p>
          <p className="font-[var(--font-manrope)] font-light text-white text-base leading-[1.5] max-w-[586px] m-0">
            TRD Creative Studio partners with businesses to design thoughtful websites,
            platforms, and digital experiences–from early strategy to final execution
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-4 items-center">
          <button className="bg-[var(--brand)] text-white font-[var(--font-manrope)] font-light text-base leading-[1.4] px-6 py-2 rounded-full border-none cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity">
            Start a Project
          </button>
          <button className="bg-transparent text-white font-[var(--font-manrope)] font-light text-base leading-[1.4] px-6 py-2 rounded-full border-none cursor-pointer whitespace-nowrap hover:opacity-80 transition-opacity">
            View Selected Work
          </button>
        </div>
      </div>
    </section>
  );
}
