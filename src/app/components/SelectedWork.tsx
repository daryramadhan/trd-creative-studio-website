import { projects } from "../data/projects";
import imgSidebar from "../../imports/TrdCreativeStudioⒸWebsite-1/95ac5e22380e3659826653ab0d53d821056bbf47.png";
import { useTransitionNavigate } from "./TransitionContext";

function WorkCard({ slug, title, year, coverImage, index }: {
  slug: string;
  title: string;
  year: string;
  coverImage: string;
  index: number;
}) {
  const navigate = useTransitionNavigate();

  return (
    <button
      onClick={() => navigate(`/work/${slug}`)}
      className="flex w-full flex-1 flex-col gap-3 items-start min-w-0 text-left group cursor-pointer"
      aria-label={`View ${title} case study`}
    >
      {/* Thumbnail */}
      <div className="aspect-square w-full rounded-[6px] relative overflow-hidden bg-[#f4f4f4]">
        <img
          alt={`${title} case study preview ${index}`}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          src={coverImage}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--dark)] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-[6px]" />
        {/* View label */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-[var(--font-archivo)] font-light text-xs text-white tracking-widest uppercase">
            View Project →
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-1 items-start w-full">
        <div className="flex items-start justify-between w-full font-[var(--font-archivo)] font-light text-sm text-center whitespace-nowrap">
          <span className="text-[var(--dark)] group-hover:text-[var(--brand)] transition-colors duration-200">
            {title}
          </span>
          <span className="text-[var(--dark)]">[{year}]</span>
        </div>
      </div>
    </button>
  );
}

export function SelectedWork() {
  // Show 6 cards — 3 rows × 2 columns
  const displayProjects = projects.slice(0, 6);

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
              src={imgSidebar}
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
            <div key={row} className="flex flex-col sm:flex-row gap-4 lg:gap-2 items-stretch w-full">
              {displayProjects.slice(row * 2, row * 2 + 2).map((project, i) => (
                <WorkCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  year={project.year}
                  coverImage={project.coverImage}
                  index={row * 2 + i + 1}
                />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
