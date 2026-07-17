import { Dot } from "./shared";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh w-full bg-[var(--dark)]"
    >
      <Navbar />

      {/* Main content */}
      <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-7 px-5 py-10 pt-[104px] lg:gap-14 lg:px-[100px] lg:py-[100px] lg:pt-[120px]">
        {/* Badge */}
        <div className="flex gap-[10px] items-center justify-center rounded-full bg-[var(--brand-10)] px-3 py-2 lg:px-4">
          <p className="font-[var(--font-manrope)] text-[var(--brand)] text-[12px] leading-[1.4] text-center m-0 lg:text-sm">
            <span className="font-medium">6 project slots </span>
            <span className="font-normal">available this month</span>
          </p>
          <Dot color="#eb5503" size={4} />
          <span className="font-[var(--font-manrope)] font-light text-[var(--brand)] text-[12px] leading-[1.4] underline whitespace-nowrap lg:text-sm">
            See Pricing
          </span>
        </div>

        {/* Headline block */}
        <div className="flex flex-col items-center gap-4 lg:gap-8 max-w-[800px] w-full text-center">
          <p
            className="font-[var(--font-manrope)] font-normal text-white m-0"
            style={{ fontSize: "clamp(30px, 9vw, 82px)", lineHeight: 1, letterSpacing: "-0.04em" }}
          >
            Turn complex ideas into clear digital products.
          </p>
          <p className="font-[var(--font-manrope)] font-light text-white text-[12px] lg:text-base leading-[1.5] max-w-[586px] m-0">
            TRD Creative Studio partners with businesses to design thoughtful websites,
            platforms, and digital experiences–from early strategy to final execution
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col gap-3 items-center justify-center lg:flex-row lg:gap-4">
          <button className="min-w-[220px] bg-[var(--brand)] text-white font-[var(--font-manrope)] font-light text-sm lg:text-base leading-[1.4] px-6 py-2 rounded-full border-none cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity">
            Start a Project
          </button>
          <button className="bg-transparent text-white font-[var(--font-manrope)] font-light text-sm lg:text-base leading-[1.4] px-6 py-2 rounded-full border-none cursor-pointer whitespace-nowrap hover:opacity-80 transition-opacity">
            View Selected Work
          </button>
        </div>
      </div>
    </section>
  );
}
