import imgChatGptImageJul142026061051Pm31 from "../../imports/TrdCreativeStudioⒸWebsite-1/95ac5e22380e3659826653ab0d53d821056bbf47.png";
import imgRectangle11 from "../../imports/TrdCreativeStudioⒸWebsite-1/980394d6102a53ba9bdac22f3b4fb6485086f05d.png";

function WorkCard({ index }: { index: number }) {
  return (
    <div className="flex-1 flex flex-col gap-3 items-center min-w-0">
      <div className="h-[430px] sm:h-[520px] lg:h-[400px] rounded-[6px] w-full relative overflow-hidden">
        <img
          alt={`Pupuk Indonesia case study preview ${index}`}
          className="absolute inset-0 h-full w-full object-cover object-top"
          src={imgRectangle11}
        />
      </div>
      <div className="flex flex-col gap-1 items-start w-full">
        <div className="flex items-start justify-between w-full font-[var(--font-archivo)] font-light text-sm text-center whitespace-nowrap">
          <span className="text-[var(--dark)]">Pupuk Indonesia</span>
          <span className="text-[var(--dark)]">[2026]</span>
        </div>
      </div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="our-works" className="w-full">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] items-start px-5 py-12 lg:p-[100px]">
        {/* Sidebar */}
        <div className="flex flex-col gap-6 lg:gap-10 items-start justify-center w-full lg:w-[341px] lg:shrink-0 lg:sticky lg:top-[100px] lg:self-start">
          <p className="font-[var(--font-archivo)] font-normal text-xs text-[var(--dark)] whitespace-nowrap leading-[1.4] m-0">
            TRD CREATIVE STUDIO ⓒ 2026
          </p>
          <div className="h-[120px] w-[132px] lg:h-[161px] lg:w-[177px] relative overflow-hidden">
            <img
              alt=""
              className="absolute max-w-none"
              style={{ height: "150.7%", left: "-18.6%", top: "-14.88%", width: "137.2%" }}
              src={imgChatGptImageJul142026061051Pm31}
            />
          </div>
          <div className="flex flex-col gap-3 lg:gap-4">
            <p
              className="font-[var(--font-manrope)] font-normal text-[var(--dark)] m-0"
              style={{ fontSize: "clamp(24px, 4vw, 32px)", lineHeight: 0.9, letterSpacing: "-0.96px" }}
            >
              Selected Work
            </p>
            <p className="font-[var(--font-manrope)] font-light text-sm lg:text-md text-[var(--dark)] leading-[1.5] text-justify w-full m-0">
              TRD Creative Studio partners with businesses to design thoughtful websites,
              platforms, and digital.
            </p>
          </div>
        </div>

        {/* Work grid */}
        <div className="flex-1 flex flex-col gap-4 lg:gap-6 items-start min-w-0 w-full">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex flex-col sm:flex-row gap-4 lg:gap-2 items-start w-full">
              <WorkCard index={row * 2 + 1} />
              <WorkCard index={row * 2 + 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
