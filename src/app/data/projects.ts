// Project data — single source of truth for SelectedWork + detail pages

import img1 from "../../imports/TrdCreativeStudioⒸWebsite-1/980394d6102a53ba9bdac22f3b4fb6485086f05d.png";
import img2 from "../../imports/TrdCreativeStudioⒸWebsite-1/95ac5e22380e3659826653ab0d53d821056bbf47.png";
import img3 from "../../imports/TrdCreativeStudioⒸWebsite-1/228c7f6936938082e40aade80f342f6fb954db47.png";
import img4 from "../../imports/TrdCreativeStudioⒸWebsite-1/6411199615007b44e4af90648dc545d69764fdc7.png";
import img5 from "../../imports/TrdCreativeStudioⒸWebsite-1/762357e8ca5bcaeffeb62526afbd5039d9393891.png";
import img6 from "../../imports/TrdCreativeStudioⒸWebsite-1/1632661aa3faadb418045d3e7667246cd6175bc3.png";

export interface Project {
  slug: string;
  title: string;
  year: string;
  category: string;
  tags: string[];
  coverImage: string;
  images: string[];
  description: string;
  challenge: string;
  outcome: string;
  stats: { label: string; value: string }[];
  hidden?: boolean;
}

export const projects: Project[] = [
  {
    slug: "pupuk-indonesia",
    title: "Pupuk Indonesia",
    year: "2026",
    category: "UI/UX Design",
    tags: ["Corporate Portal", "UI/UX", "Web Design"],
    coverImage: img1,
    images: [img1, img2, img3],
    description:
      "We reconstructed the primary digital portal for Indonesia's state-owned fertilizer enterprise — unifying product information, optimising investor dashboards, and establishing a contemporary aesthetic grounded in agricultural reliability.",
    challenge:
      "Pupuk Indonesia's existing portal had fragmented information architecture, poor mobile responsiveness, and an outdated visual language that didn't reflect the scale of the organisation.",
    outcome:
      "A unified, responsive corporate portal with a clean design system, 40% faster information accessibility, and a significantly improved experience for both retail and institutional visitors.",
    stats: [
      { label: "Faster info access", value: "40%" },
      { label: "Mobile user growth", value: "3×" },
      { label: "Design system coverage", value: "100%" },
    ],
  },
  {
    slug: "resumify",
    title: "Resumify",
    year: "2025",
    category: "Product Design",
    tags: ["AI Tool", "Dashboard", "SaaS"],
    coverImage: img2,
    images: [img2, img4, img5],
    description:
      "Designed an interactive dashboard for an AI-powered resume builder — drag-and-drop editing, ATS scoring visualisations, and a clean workspace that makes building a resume feel effortless.",
    challenge:
      "Job seekers were overwhelmed by complex resume tools. Resumify needed a product that felt fast, intelligent, and confidence-inspiring — especially for users unfamiliar with ATS optimisation.",
    outcome:
      "A polished SaaS dashboard with intuitive section editing, real-time ATS feedback, and export to PDF, HTML, and print formats.",
    stats: [
      { label: "Avg. resume build time", value: "2 min" },
      { label: "User satisfaction", value: "90%" },
      { label: "Export formats", value: "4" },
    ],
  },
  {
    slug: "greenflags",
    title: "Greenflags",
    year: "2025",
    category: "Brand Identity",
    tags: ["Branding", "Packaging", "Visual Identity"],
    coverImage: img3,
    images: [img3, img6, img1],
    description:
      "Developed a complete brand identity for an organic botanical skincare brand — from typography and colour tokens to packaging layouts and a comprehensive brand guidelines document.",
    challenge:
      "Greenflags needed to stand out in a saturated natural skincare market with a brand that felt premium, sustainable, and authentic — without relying on tired eco-brand clichés.",
    outcome:
      "A distinctive visual identity with a custom colour palette, packaging system across 8 variants, and a thorough brand guidelines document covering every touchpoint.",
    stats: [
      { label: "Packaging variants", value: "8" },
      { label: "Brand asset files", value: "120+" },
      { label: "Deliverable formats", value: "Print + Digital" },
    ],
  },
  {
    slug: "junso",
    title: "Junso",
    year: "2024",
    category: "Web Development",
    tags: ["Landing Page", "Web Dev", "Startup"],
    coverImage: img4,
    images: [img4, img5, img6],
    description:
      "Built a high-converting landing page and dashboard UX for Junso — a B2B SaaS startup connecting freelancers and businesses across Indonesia.",
    challenge:
      "Junso needed a web presence that could explain a complex two-sided marketplace clearly, drive sign-ups, and communicate trust to both freelancers and business clients.",
    outcome:
      "A fast, responsive landing page with a clear value proposition, animated feature breakdowns, and a sign-up flow that reduced drop-off significantly.",
    stats: [
      { label: "Page load time", value: "<1.2s" },
      { label: "Sign-up conversion", value: "+28%" },
      { label: "Pages designed", value: "6" },
    ],
  },
  {
    slug: "developer-academy",
    title: "Developer Academy",
    year: "2024",
    category: "UI/UX Design",
    tags: ["Education", "Mobile", "App Design"],
    coverImage: img5,
    images: [img5, img1, img3],
    description:
      "Designed the mobile app experience for Apple Developer Academy's internal learning management system — used by hundreds of students and mentors across multiple campuses.",
    challenge:
      "The existing system was web-only and not optimised for the fast-paced, project-based learning environment at the Academy. Students needed a mobile-first experience that kept them connected to their cohort.",
    outcome:
      "A clean, intuitive mobile app design with cohort dashboards, project tracking, mentor messaging, and resource libraries.",
    stats: [
      { label: "App screens designed", value: "40+" },
      { label: "User testing rounds", value: "3" },
      { label: "Student users", value: "500+" },
    ],
  },
  {
    slug: "synapsis",
    title: "Synapsis",
    year: "2024",
    category: "Brand & Web",
    tags: ["Branding", "Website", "Tech"],
    coverImage: img6,
    images: [img6, img2, img4],
    description:
      "Refreshed the brand identity and redesigned the marketing website for Synapsis — a healthcare tech platform connecting clinics and labs across Indonesia.",
    challenge:
      "Synapsis had grown rapidly but their visual identity and website hadn't kept pace. They needed a brand refresh that communicated credibility, precision, and technological sophistication.",
    outcome:
      "A refined brand system with updated typography, a new colour palette, and a fully redesigned marketing website that increased their inbound demo requests by 30%.",
    stats: [
      { label: "Demo request increase", value: "+30%" },
      { label: "Website pages", value: "8" },
      { label: "Brand touchpoints", value: "12" },
    ],
  },
];
