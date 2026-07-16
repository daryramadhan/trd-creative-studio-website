import imgChatGptImageJul142026061051Pm31 from "../../imports/TrdCreativeStudioⒸWebsite-1/95ac5e22380e3659826653ab0d53d821056bbf47.png";
import imgRectangle11 from "../../imports/TrdCreativeStudioⒸWebsite-1/980394d6102a53ba9bdac22f3b4fb6485086f05d.png";

function WorkCard() {
  return (
    <div className="flex-1 flex flex-col gap-3 items-center min-w-0">
      <div className="h-[400px] rounded-[6px] w-full relative overflow-hidden">
        <img
          alt=""
          className="absolute left-0 top-[0.08%] w-full max-w-none"
          style={{ height: "238.24%" }}
          src={imgRectangle11}
        />
      </div>
      <div className="flex flex-col gap-1 items-start w-full">
        <div className="flex items-start justify-between w-full font-[var(--font-archivo)] font-light text-sm text-center whitespace-nowrap">
          <span className="text-[var(--dark)]">Pupuk Indonesia</span>
          <span className="text-[var(--dark)]">[2026]</span>
        </div>
        {/* <p className="font-[var(--font-archivo)] font-light text-[20px] text-[var(--dark)] w-full leading-[1.4] m-0">
          Landing Page for Pupuk Indonesia
        </p> */}
      </div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section className="w-full">
      <div className="flex gap-[100px] items-start p-[100px]">
        {/* Left sidebar */}
        <div className="flex flex-col gap-10 items-start justify-center w-[341px] shrink-0 sticky top-[100px] self-start">
          <p className="font-[var(--font-archivo)] font-normal text-xs text-[var(--dark)] text-center whitespace-nowrap leading-[1.4] m-0">
            TRD CREATIVE STUDIO ⓒ 2026
          </p>
          <div className="h-[161px] w-[177px] relative overflow-hidden">
            <img
              alt=""
              className="absolute max-w-none"
              style={{ height: "150.7%", left: "-18.6%", top: "-14.88%", width: "137.2%" }}
              src={imgChatGptImageJul142026061051Pm31}
            />
          </div>
          <div className="flex flex-col gap-4">
            <p
              className="font-[var(--font-manrope)] font-normal text-[var(--dark)] m-0 whitespace-nowrap"
              style={{ fontSize: 32, lineHeight: 0.9, letterSpacing: "-0.96px" }}
            >
              Selected Work
            </p>
            <p className="font-[var(--font-manrope)] font-light text-md text-[var(--dark)] leading-[1.5] text-justify w-full m-0">
              TRD Creative Studio partners with businesses to design thoughtful websites,
              platforms, and digital.
            </p>
          </div>
        </div>

        {/* Right grid: 3 rows × 2 cards */}
        <div className="flex-1 flex flex-col gap-6 items-start min-w-0">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex gap-2 items-start w-full">
              <WorkCard />
              <WorkCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
