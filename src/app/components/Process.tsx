import imgChatGptImageJul142026061053Pm41 from "../../imports/TrdCreativeStudioⒸWebsite-1/6411199615007b44e4af90648dc545d69764fdc7.png";
import imgChatGptImageJul142026061053Pm42 from "../../imports/TrdCreativeStudioⒸWebsite-1/10b23f811973e12eea05b1129408f03b9288cb6d.png";
import imgChatGptImageJul142026061050Pm21 from "../../imports/TrdCreativeStudioⒸWebsite-1/228c7f6936938082e40aade80f342f6fb954db47.png";
import imgChatGptImageJul142026061051Pm31 from "../../imports/TrdCreativeStudioⒸWebsite-1/95ac5e22380e3659826653ab0d53d821056bbf47.png";

interface ProcessCardProps {
  num: string;
  badge?: string;
  img: string;
  imgW: number;
  imgH: number;
  title: string;
  desc: string;
}

function ProcessCard({ num, badge, img, imgW, imgH, title, desc }: ProcessCardProps) {
  return (
    <div className="w-full lg:flex-1 bg-white rounded-[20px] flex flex-col items-start justify-between p-6 h-auto lg:h-[460px] min-w-0 gap-7 lg:gap-0">
      <div className="flex items-start justify-between w-full">
        <p className="font-[var(--font-manrope)] font-light text-[var(--brand)] text-md whitespace-nowrap m-0">
          [{num}]
        </p>
        {badge && (
          <span className="bg-[var(--brand)] text-white font-[var(--font-manrope)] font-light text-sm px-3 py-1 rounded-full whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>
      <div
        className="relative block overflow-hidden"
        style={{ height: imgH, width: imgW }}
      >
        <img
          alt=""
          className="absolute max-w-none"
          style={{ height: "146%", left: "-17%", top: "-23%", width: "141%" }}
          src={img}
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-[42px] items-start w-full font-[var(--font-manrope)] font-normal">
        <div className="flex flex-col gap-2 items-start w-full">
          <p className="text-[var(--brand)] w-full m-0 font-light text-[24px] lg:text-[32px]">
            {title}
          </p>
          <p className="text-[var(--dark)] text-sm lg:text-md font-light w-full m-0">
            {desc}
          </p>
        </div>
        <p className="text-[var(--brand)] font-light text-sm lg:text-base whitespace-nowrap m-0">
          Book discovery call →
        </p>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section className="w-full bg-[var(--brand)]">
      {/* Header */}
      <div className="flex flex-col items-center justify-center pb-6 lg:pb-[25px] pt-12 lg:pt-[150px] px-5 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full text-white font-[var(--font-manrope)] font-normal gap-4 lg:gap-0">
          <div className="flex flex-col gap-4">
            <p className="font-[var(--font-archivo)] font-light text-xs leading-[1.4] m-0">
              THIS IS HOW WE WORKS
            </p>
            <p
              className="leading-[1] m-0 max-w-full lg:max-w-[657px]"
              style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.96px" }}
            >
              A clear process to deliver meaningful results.
            </p>
          </div>
          <p className="text-sm lg:text-regular font-light text-left lg:text-justify leading-[1.5] max-w-full lg:max-w-[418px] m-0">
            We create experiences that are easier for users to understand, easier for teams to
            implement, and more valuable for businesses to grow.
          </p>
        </div>
      </div>
      {/* Cards */}
      <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-2 pb-12 lg:pb-[150px] pt-6 lg:pt-[25px] px-5 lg:px-[100px] w-full">
        <ProcessCard num="1" badge="Free 30-min Discovery" img={imgChatGptImageJul142026061053Pm41} imgW={142} imgH={138} title="Discover" desc="Understand the challenge, audience, business, and success criteria" />
        <ProcessCard num="2" img={imgChatGptImageJul142026061053Pm42} imgW={168} imgH={142} title="Shape" desc="Define the experience, scope, priorities, and creative direction" />
        <ProcessCard num="3" img={imgChatGptImageJul142026061050Pm21} imgW={194} imgH={150} title="Create" desc="Design, prototype, review, and prepare the solution for implementation" />
        <ProcessCard num="4" img={imgChatGptImageJul142026061051Pm31} imgW={159} imgH={140} title="Deliver" desc="Complete quality assurance, handoff, development support, and launch" />
      </div>
    </section>
  );
}
