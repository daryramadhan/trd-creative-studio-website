import imgChatGptImageJul142026055012Pm1 from "../../imports/TrdCreativeStudioⒸWebsite-1/1632661aa3faadb418045d3e7667246cd6175bc3.png";
import { StarIcon } from "./shared";

export function About() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col items-center px-5 sm:px-[50px] py-16 lg:py-[150px]">
        <div className="flex flex-col gap-10 lg:gap-16 items-center max-w-[750px] w-full">
          {/* Illustration */}
          <div className="h-[120px] w-[144px] lg:h-[146px] lg:w-[176px] relative overflow-hidden">
            <img
              alt=""
              className="absolute max-w-none"
              style={{ height: "166.31%", left: "-18.6%", top: "-33.16%", width: "137.2%" }}
              src={imgChatGptImageJul142026055012Pm1}
            />
          </div>

          {/* Big text */}
          <div
            className="font-[var(--font-manrope)] font-light text-[var(--dark)] text-center w-full"
            style={{ fontSize: "clamp(24px, 4.5vw, 48px)", letterSpacing: "-0.5px" }}
          >
            <p className="leading-[1.2] text-[var(--brand)] m-0">
              TRD Creative Studio is an independent design studio based in Indonesia.
            </p>
            <p className="leading-[1.2]">&nbsp;</p>
            <p className="leading-[1.2] m-0">
              We work closely with businesses and product teams to transform ideas, requirements,
              and challenges into practical digital experiences
            </p>
          </div>

          {/* Star */}
          <StarIcon color="#eb5503" size={42} />

          {/* Sub text */}
          <div className="flex flex-col gap-4 items-start justify-center max-w-[500px] text-[var(--dark)] leading-[1.5] text-center w-full font-[var(--font-manrope)] font-light">
            <p className="m-0 w-full text-sm lg:text-base">
              TRD Creative Studio partners with businesses to design thoughtful websites,
              platforms, and digital experiences–from early strategy to final execution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
