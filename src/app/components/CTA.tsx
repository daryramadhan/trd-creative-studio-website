export function CTA() {
  return (
    <section className="w-full bg-[var(--brand)]">
      <div className="flex flex-col items-center justify-center py-[150px] px-[100px]">
        <div className="flex flex-col gap-12 items-center max-w-[858px] w-full">
          <div className="bg-white/10 flex items-center justify-center px-4 py-2 rounded-full">
            <p className="font-[var(--font-manrope)] font-medium text-white text-sm leading-[1.4] text-center whitespace-nowrap m-0">
              Partners &amp; Company We Work for
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center text-white font-[var(--font-manrope)] font-normal text-center">
            <p className="text-[82px] leading-[1] w-full m-0" style={{ letterSpacing: "-1.64px" }}>
              Let's shape something valuable together.
            </p>
            <p className="text-base leading-[1.5] max-w-[532px] m-0">
              Tell us about your product, website, or business challenge. We'll help you identify
              the right scope and next step.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-white text-[var(--brand)] font-[var(--font-manrope)] font-semibold text-base leading-[1.4] px-6 py-2 rounded-full border-none cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity">
              Start a Project
            </button>
            <button className="bg-transparent text-white font-[var(--font-manrope)] font-semibold text-base leading-[1.4] px-6 py-2 rounded-full border-none cursor-pointer whitespace-nowrap hover:opacity-80 transition-opacity">
              Schedule Free 30-min Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
