import { StarIcon } from "./shared";

const pricingFeatures = [
  "Product manager, product designer and researcher",
  "Figma, docs and all assets licenses",
  "Weekly meetings/dedicated message communications",
  "Simple requests? same day. Complex flows in 1-3 business days",
];

function PricingFeature({ text }: { text: string }) {
  return (
    <div className="flex gap-2 items-center w-full">
      <StarIcon color="#eb5503" size={16} />
      <p className="font-[var(--font-manrope)] font-light text-sm text-[var(--dark)] flex-1 min-w-0 m-0">
        {text}
      </p>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="w-full bg-white">
      <div className="flex flex-col gap-12 lg:gap-16 items-center justify-center py-16 lg:py-[150px] px-5 lg:px-[100px]">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:gap-[41px] items-center w-full lg:w-[536px]">
          <div className="bg-[var(--brand-5)] flex items-center justify-center px-4 py-2 rounded-full">
            <p className="font-[var(--font-manrope)] font-light text-[var(--brand)] text-sm leading-[1.4] text-center whitespace-nowrap m-0">
              Partners &amp; Company We Work for
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start text-[var(--dark)] text-center w-full font-[var(--font-manrope)] font-normal">
            <p
              className="font-light w-full m-0"
              style={{ fontSize: "clamp(32px, 6vw, 48px)", lineHeight: "normal", letterSpacing: "-1.92px" }}
            >
              Pricing &amp; Packages
            </p>
            <p className="text-sm lg:text-regular font-light leading-[1.5] w-full m-0">
              We create experiences that are easier for users to understand, easier for teams to
              implement, and more valuable for businesses to grow.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch w-full lg:w-auto">
          {/* Studio Access */}
          <div className="bg-white flex flex-col gap-6 items-start justify-center p-8 rounded-[12px] w-full lg:w-[432px] lg:shrink-0 border border-[var(--border-subtle)]">
            <StarIcon color="#eb5503" size={32} />
            <div className="flex flex-col gap-1 items-start text-[var(--dark)] w-full">
              <p
                className="font-[var(--font-manrope)] font-light w-full m-0"
                style={{ fontSize: 32, lineHeight: "normal", letterSpacing: "-0.64px" }}
              >
                Studio Access
              </p>
              <p className="font-[var(--font-manrope)] font-light text-lg w-full m-0">
                Best for Startups &amp; Scale-ups
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <p
                className="font-[var(--font-manrope)] font-normal text-[var(--brand)] w-full m-0"
                style={{ fontSize: 48, lineHeight: "normal", letterSpacing: "-1px" }}
              >
                $2,500
              </p>
              <p className="font-[var(--font-manrope)] font-light text-base text-[var(--dark)] leading-[1.4] w-full m-0">
                Monthly Price, Cancel Anytime.
              </p>
            </div>
            <button className="bg-[var(--brand)] text-white font-[var(--font-manrope)] font-normal leading-[1.4] px-6 py-2 rounded-full border-none cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity">
              Claim 1 of 4 spots left
            </button>
            <div className="h-px bg-[var(--border-subtle)] w-full mt-2 mb-2" />
            <div className="flex flex-col gap-3 items-start w-full">
              <p className="font-[var(--font-manrope)] font-light text-sm text-[var(--dark)] w-full m-0">
                Includes :
              </p>
              {pricingFeatures.map((f) => <PricingFeature key={f} text={f} />)}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white flex flex-col gap-6 items-start justify-center p-8 lg:p-9 rounded-[12px] w-full lg:w-[432px] lg:shrink-0 border border-[var(--border-subtle)]">
            <StarIcon color="#b4b4b4" size={32} />
            <div className="flex flex-col gap-1 items-start text-[var(--dark)] w-full">
              <p
                className="font-[var(--font-manrope)] font-light w-full m-0"
                style={{ fontSize: 32, lineHeight: "normal", letterSpacing: "-0.64px" }}
              >
                Enterprise Plan
              </p>
              <p className="font-[var(--font-manrope)] font-light text-lg w-full m-0">
                Best for project-based
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <p
                className="font-[var(--font-manrope)] font-regular text-[var(--dark)] w-full m-0"
                style={{ fontSize: 48, lineHeight: "normal", letterSpacing: "-1px" }}
              >
                $3,500
              </p>
              <p className="font-[var(--font-manrope)] font-light text-base text-[var(--dark)] leading-[1.4] w-full m-0">
                Monthly Price, Cancel Anytime.
              </p>
            </div>
            <button className="bg-transparent text-[var(--brand)] font-[var(--font-manrope)] font-normal text-base leading-[1.4] px-6 py-2 rounded-full border border-[var(--brand)] cursor-pointer whitespace-nowrap hover:bg-[var(--brand-5)] transition-colors">
              Discuss Your Project
            </button>
            <div className="h-px bg-[var(--border-subtle)] w-full mt-2 mb-2" />
            <div className="flex flex-col gap-3 items-start w-full">
              <p className="font-[var(--font-manrope)] font-light text-sm text-[var(--dark)] w-full m-0">
                Includes :
              </p>
              {pricingFeatures.map((f) => <PricingFeature key={f} text={f} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
