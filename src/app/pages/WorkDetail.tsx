import { useParams } from "react-router";
import { getProjects, subscribeProjects } from "../data/projectStore";
import { Project } from "../data/projects";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StarIcon } from "../components/shared";
import { useState, useEffect } from "react";
import { useTransitionNavigate } from "../components/TransitionContext";

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useTransitionNavigate();
  const [projectList, setProjectList] = useState<Project[]>(getProjects());

  useEffect(() => {
    const update = () => setProjectList(getProjects());
    const unsubscribe = subscribeProjects(update);
    return () => unsubscribe();
  }, []);

  const availableProjects = projectList.filter((p) => !p.hidden);
  const project = availableProjects.find((p) => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center flex-col gap-6 px-5 py-20">
          <p
            className="font-[var(--font-manrope)] text-[var(--dark)]"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 0.9, letterSpacing: "-2px" }}
          >
            Project not found.
          </p>
          <button
            onClick={() => navigate("/")}
            className="font-[var(--font-archivo)] font-light text-sm text-[var(--dark)] underline underline-offset-4"
          >
            ← Back to home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Next project for navigation
  const currentIndex = availableProjects.findIndex((p) => p.slug === slug);
  const nextProject = availableProjects[(currentIndex + 1) % availableProjects.length];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="w-full px-5 pt-16 pb-10 lg:px-[100px] lg:pt-[80px] lg:pb-16 border-b border-[#f4f4f4]">
        <div className="flex flex-col gap-6 max-w-[1200px]">
          {/* Back link */}
          <button
            onClick={() => {
              if (window.history.length > 2) {
                navigate(-1);
              } else {
                navigate("/#our-works");
              }
            }}
            className="relative z-50 cursor-pointer flex items-center gap-2 font-[var(--font-archivo)] font-light text-xs text-[var(--text-muted-trd)] hover:text-[var(--dark)] transition-colors w-fit"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>

          {/* Category tag
          <p className="font-[var(--font-archivo)] font-normal text-xs text-[var(--text-muted-trd)] uppercase tracking-widest m-0">
            {project.category}
          </p> */}

          {/* Title */}
          <h1
            className="font-[var(--font-manrope)] font-normal text-[var(--dark)] m-0 mt-24 mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 96px)", lineHeight: 0.9, letterSpacing: "-3px" }}
          >
            {project.title}
          </h1>

          {/* Tags + year row */}
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-[var(--font-archivo)] font-light text-xs text-[var(--dark)] border border-[#e8e8e8] rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
            <span className="font-[var(--font-archivo)] font-light text-xs text-[var(--text-muted-trd)] ml-auto">
              [{project.year}]
            </span>
          </div>
        </div>
      </section>

      {/* ── Cover Image ───────────────────────────────────────────── */}
      <section className="w-full px-5 py-10 lg:px-[100px] lg:py-16">
        <div className="w-full rounded-[6px] overflow-hidden aspect-video relative bg-[#f4f4f4]">
          <img
            src={project.coverImage}
            alt={`${project.title} cover`}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* ── Description + Stats ───────────────────────────────────── */}
      <section className="w-full px-5 pb-10 lg:px-[100px] lg:pb-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] items-start">
          {/* Description */}
          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <div className="flex flex-col gap-4">
              <p className="font-[var(--font-archivo)] font-normal text-xs text-[var(--text-muted-trd)] uppercase tracking-widest m-0">
                Overview
              </p>
              <p className="font-[var(--font-manrope)] font-light text-base lg:text-lg text-[var(--dark)] leading-[1.65] m-0">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[var(--font-archivo)] font-normal text-xs text-[var(--text-muted-trd)] uppercase tracking-widest m-0">
                The Challenge
              </p>
              <p className="font-[var(--font-manrope)] font-light text-sm lg:text-base text-[var(--dark)] leading-[1.65] m-0">
                {project.challenge}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[var(--font-archivo)] font-normal text-xs text-[var(--text-muted-trd)] uppercase tracking-widest m-0">
                The Outcome
              </p>
              <p className="font-[var(--font-manrope)] font-light text-sm lg:text-base text-[var(--dark)] leading-[1.65] m-0">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-6 lg:w-[280px] lg:shrink-0">
            <p className="font-[var(--font-archivo)] font-normal text-xs text-[var(--text-muted-trd)] uppercase tracking-widest m-0">
              Results
            </p>
            {project.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 border-t border-[#f4f4f4] pt-6">
                <p
                  className="font-[var(--font-manrope)] font-normal text-[var(--brand)] m-0"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1, letterSpacing: "-2px" }}
                >
                  {stat.value}
                </p>
                <p className="font-[var(--font-archivo)] font-light text-xs text-[var(--text-muted-trd)] m-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Gallery ─────────────────────────────────────────── */}
      {project.images && project.images.length > 0 && (() => {
        const displayImages = project.images.filter(
          (img, idx) => !(idx === 0 && img === project.coverImage)
        );
        const imagesToRender = displayImages.length > 0 ? displayImages : (project.images[0] !== project.coverImage ? project.images : []);

        if (imagesToRender.length === 0) return null;

        return (
          <section className="w-full px-5 pb-10 lg:px-[100px] lg:pb-16">
            <p className="font-[var(--font-archivo)] font-normal text-xs text-[var(--text-muted-trd)] uppercase tracking-widest mb-6 m-0">
              Gallery
            </p>
            <div className="flex flex-col gap-6 lg:gap-10">
              {imagesToRender.map((img, i) => (
                <div key={i} className="w-full rounded-[8px] overflow-hidden bg-[#f8f8f8] border border-[#eee]">
                  <img
                    src={img}
                    alt={`${project.title} gallery screenshot ${i + 1}`}
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>
          </section>
        );
      })()}

      {/* ── Next Project ──────────────────────────────────────────── */}
      <section className="w-full px-5 py-16 lg:px-[100px] lg:py-24 bg-[var(--dark)] mt-6">
        <div className="flex flex-col gap-6 items-start">
          <p className="font-[var(--font-archivo)] font-normal text-xs text-[var(--text-muted-trd)] uppercase tracking-widest m-0">
            Next Project
          </p>

          <button
            onClick={() => navigate(`/work/${nextProject.slug}`)}
            className="group flex flex-col gap-3 text-left w-full"
          >
            <div className="flex items-center gap-4">
              <StarIcon color="#eb5503" size={28} />
              <p className="font-[var(--font-archivo)] font-light text-xs text-[var(--text-muted-trd)] m-0">
                {nextProject.category}
              </p>
            </div>
            <p
              className="font-[var(--font-manrope)] font-normal text-white group-hover:text-[var(--brand)] transition-colors duration-300 m-0"
              style={{ fontSize: "clamp(32px, 6vw, 80px)", lineHeight: 0.9, letterSpacing: "-3px" }}
            >
              {nextProject.title}
            </p>
            <p className="font-[var(--font-archivo)] font-light text-xs text-[var(--text-muted-trd)] m-0">
              [{nextProject.year}] — View Project →
            </p>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
