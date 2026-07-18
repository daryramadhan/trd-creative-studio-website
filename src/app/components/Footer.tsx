import imgChatGptImageJul142026055012Pm1 from "../../imports/TrdCreativeStudioⒸWebsite-1/1632661aa3faadb418045d3e7667246cd6175bc3.png";
import imgImage11 from "../../imports/TrdCreativeStudioⒸWebsite-1/d2e0a0da0a57a02edbdf13fa7ba8ba12913b0266.png";

const footerServices = [
  "Product & UI/UX Design",
  "Website Design & Development",
  "Brand Strategy & Identity",
  "Creative Production",
];

const quickLinks = ["Home", "Work", "Contact"];
const socialLinks = ["LinkedIn", "Instagram", "Behance"];

export function Footer() {
  return (
    <>
      <section className="w-full py-10">
        <div className="flex flex-col lg:flex-row p-4 lg:p-[100px] items-start gap-12 lg:gap-[313px]">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:gap-8 items-start w-full lg:w-[350px] lg:shrink-0">
            <div className="h-[90px] w-[108px] lg:h-[106px] lg:w-[128px] relative">
              <div className="absolute h-full left-0 top-0 w-full overflow-hidden">
                <img
                  alt=""
                  className="absolute max-w-none"
                  style={{ height: "166.31%", left: "-18.6%", top: "-33.16%", width: "137.2%" }}
                  src={imgChatGptImageJul142026055012Pm1}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start text-[var(--dark)] w-full font-[var(--font-manrope)]">
              <p
                className="leading-[1] w-full font-light m-0"
                style={{ fontSize: "clamp(28px, 5vw, 42px)", letterSpacing: "-1px" }}
              >
                TRD Creative Studio
              </p>
              <p className="text-sm lg:text-base leading-[1.5] w-full m-0 font-light">
                We believe every touch need the best for the clients, so we hire the best talent.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 items-start w-full lg:w-auto">
            {/* Services */}
            <div className="flex flex-col gap-4 items-start justify-center">
              <p className="font-[var(--font-manrope)] font-light text-[var(--brand)] text-sm leading-[1.4] whitespace-nowrap m-0">
                SERVICES
              </p>
              <div className="flex flex-col gap-2 items-start text-[var(--dark)] font-[var(--font-manrope)] font-light text-sm lg:text-base" style={{ letterSpacing: "-0.32px" }}>
                {footerServices.map((s) => (
                  <p key={s} className="whitespace-nowrap m-0">{s}</p>
                ))}
                <div className="flex gap-2 items-center">
                  <p className="whitespace-nowrap m-0">AI Production</p>
                  <span className="bg-[var(--brand)] text-white font-[var(--font-manrope)] font-light text-[12px] leading-[1.4] px-2 py-[1px] rounded-full">
                    New
                  </span>
                </div>
                <p className="text-[var(--text-muted-trd)] whitespace-nowrap m-0">Social Media Design</p>
                <p className="text-[var(--text-muted-trd)] whitespace-nowrap m-0">Visual Merchandising</p>
              </div>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col gap-4 items-start justify-center w-[110px] lg:w-[125px]">
              <p className="font-[var(--font-manrope)] font-light text-[var(--brand)] text-sm leading-[1.4] m-0">
                QUICK LINKS
              </p>
              <div className="flex flex-col gap-2 items-start text-[var(--dark)] font-[var(--font-manrope)] font-light text-sm lg:text-base whitespace-nowrap">
                {quickLinks.map((l) => (
                  <p key={l} className="m-0">{l}</p>
                ))}
              </div>
            </div>
            {/* Social Media */}
            <div className="flex flex-col gap-4 items-start justify-center w-[110px] lg:w-[125px]">
              <p className="font-[var(--font-manrope)] font-light text-[var(--brand)] text-sm leading-[1.4] m-0">
                SOCIAL MEDIA
              </p>
              <div className="flex flex-col gap-2 items-start text-[var(--dark)] font-[var(--font-manrope)] font-light text-sm lg:text-base whitespace-nowrap">
                {socialLinks.map((l) => (
                  <p key={l} className="m-0">{l}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character strip */}
      <div className="flex items-center justify-center overflow-hidden pb-[25px] w-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-[80px] lg:h-[134px] w-[120px] lg:w-[202px] relative shrink-0 overflow-hidden">
            <img
              alt=""
              className="absolute inset-0 max-w-none w-full h-full object-cover object-bottom"
              src={imgImage11}
            />
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="w-full pb-6">
        <div
          className="flex flex-wrap gap-2 lg:gap-4 items-center justify-center px-5 lg:px-[100px] py-4 lg:py-6 text-[var(--dark)] text-sm lg:text-base leading-[1.4] font-normal"
          style={{ letterSpacing: "-0.32px" }}
        >
          <p className="font-[var(--font-manrope)] font-light m-0">2026 ⓒ TRD Creative Studio</p>
          <p className="font-[var(--font-manrope)] font-light underline m-0">Privacy Policy</p>
        </div>
      </div>
    </>
  );
}
