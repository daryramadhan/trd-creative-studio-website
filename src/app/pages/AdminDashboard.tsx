import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  getProjects,
  saveProject,
  deleteProject,
  toggleProjectVisibility,
  resetToDefaults,
  subscribeProjects,
} from "../data/projectStore";
import { Project } from "../data/projects";
import { StarIcon } from "../components/shared";
import { compressImageFile, formatBytes } from "../utils/imageOptimizer";

export default function AdminDashboard() {
  const [projectList, setProjectList] = useState<Project[]>(getProjects());
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [compressionInfo, setCompressionInfo] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportedCode, setExportedCode] = useState("");
  const navigate = useNavigate();

  // Generate TS Code for projects.ts
  const handleOpenExport = () => {
    const jsonStr = JSON.stringify(projectList, null, 2);
    const code = `// Project data — single source of truth for SelectedWork + detail pages
// Generated from Admin Dashboard on ${new Date().toLocaleDateString()}

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

export const projects: Project[] = ${jsonStr};
`;
    setExportedCode(code);
    setIsExportModalOpen(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(exportedCode);
    triggerToast("Code copied to clipboard! Paste into src/app/data/projects.ts");
  };

  const handleDownloadCode = () => {
    const blob = new Blob([exportedCode], { type: "text/typescript;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "projects.ts");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerToast("Downloaded projects.ts file!");
  };

  // Form State
  const [formData, setFormData] = useState<Project>({
    slug: "",
    title: "",
    year: new Date().getFullYear().toString(),
    category: "UI/UX Design",
    tags: ["UI/UX", "Web Design"],
    coverImage: "",
    images: [],
    description: "",
    challenge: "",
    outcome: "",
    hidden: false,
    stats: [
      { label: "User satisfaction", value: "95%" },
      { label: "Performance boost", value: "2×" },
    ],
  });

  const [tagInput, setTagInput] = useState("");

  // Sync projects list
  useEffect(() => {
    const update = () => setProjectList(getProjects());
    const unsubscribe = subscribeProjects(update);
    return () => unsubscribe();
  }, []);

  // Show auto-dismissing toast
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Helper to open modal for new project
  const handleOpenAdd = () => {
    setEditingSlug(null);
    setCompressionInfo("");
    setFormData({
      slug: "",
      title: "",
      year: new Date().getFullYear().toString(),
      category: "UI/UX Design",
      tags: ["UI/UX", "Web Design"],
      coverImage: "",
      images: [],
      description: "",
      challenge: "",
      outcome: "",
      hidden: false,
      stats: [{ label: "Metric label", value: "+30%" }],
    });
    setTagInput("");
    setIsModalOpen(true);
  };

  // Helper to open modal for editing
  const handleOpenEdit = (project: Project) => {
    setEditingSlug(project.slug);
    setCompressionInfo("");
    setFormData({ ...project });
    setTagInput("");
    setIsModalOpen(true);
  };

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    const slugified = val
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-");
    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: editingSlug ? prev.slug : slugified,
    }));
  };

  // Tag Manager
  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    if (!formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
    }
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tagToRemove),
    }));
  };

  // Cover Image Upload with Canvas Compression
  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsCompressing(true);
    try {
      const res = await compressImageFile(file, 1200, 1200, 0.72);
      setFormData((prev) => ({ ...prev, coverImage: res.dataUrl }));
      setCompressionInfo(
        `Optimized: ${formatBytes(res.originalSize)} → ${formatBytes(res.compressedSize)}`
      );
      triggerToast("Cover image optimized and compressed successfully!");
    } catch (err) {
      alert("Failed to process image file.");
    } finally {
      setIsCompressing(false);
    }
  };

  // Gallery Images Upload
  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsCompressing(true);
    try {
      const newImages: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const res = await compressImageFile(files[i], 1200, 1200, 0.72);
        newImages.push(res.dataUrl);
      }
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }));
      triggerToast(`Optimized ${newImages.length} gallery images!`);
    } catch (err) {
      alert("Failed to process gallery images.");
    } finally {
      setIsCompressing(false);
    }
  };

  // Stats / Results Manager
  const handleStatChange = (index: number, key: "label" | "value", val: string) => {
    const updatedStats = [...formData.stats];
    updatedStats[index][key] = val;
    setFormData((prev) => ({ ...prev, stats: updatedStats }));
  };

  const handleAddStatRow = () => {
    setFormData((prev) => ({
      ...prev,
      stats: [...prev.stats, { label: "New Metric", value: "100%" }],
    }));
  };

  const handleRemoveStatRow = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      stats: prev.stats.filter((_, i) => i !== index),
    }));
  };

  // Submit Form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert("Please provide a project title.");
      return;
    }
    if (!formData.slug.trim()) {
      alert("Please provide a valid slug.");
      return;
    }
    if (!formData.coverImage) {
      alert("Please upload or provide a cover image.");
      return;
    }

    try {
      saveProject(formData);
      setIsModalOpen(false);
      triggerToast(
        editingSlug ? "Project updated successfully!" : "New project added successfully!"
      );
    } catch (err: any) {
      alert(err.message || "Failed to save project.");
    }
  };

  // Toggle Visibility
  const handleToggleVisibility = (slug: string, title: string, currentlyHidden?: boolean) => {
    toggleProjectVisibility(slug);
    triggerToast(`"${title}" is now ${currentlyHidden ? "visible on" : "hidden from"} website.`);
  };

  // Delete Action
  const handleDelete = (slug: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteProject(slug);
      triggerToast(`Project "${title}" deleted.`);
    }
  };

  // Reset Storage
  const handleReset = () => {
    if (confirm("Reset project database to original defaults?")) {
      resetToDefaults();
      triggerToast("Projects reset to original defaults.");
    }
  };

  // Filtered List
  const filteredProjects = projectList.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      p.title.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.tags.some((t) => t.toLowerCase().includes(term))
    );
  });

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-[var(--font-manrope)] flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-[var(--brand)] text-white px-5 py-3 rounded-lg shadow-xl font-normal text-sm flex items-center gap-3 animate-bounce">
          <StarIcon color="white" size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="border-b border-white/10 bg-[#161616] sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <StarIcon color="#eb5503" size={32} />
          <div>
            <h1 className="text-lg font-normal tracking-tight m-0 text-white leading-none">
              TRD Creative Studio
            </h1>
            <p className="text-xs text-[var(--text-muted-trd)] m-0 mt-1 font-[var(--font-archivo)] font-light">
              Project Management Dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="text-xs text-[var(--text-muted-trd)] hover:text-white transition-colors cursor-pointer border border-white/10 px-3 py-1.5 rounded-full"
          >
            Reset Defaults
          </button>
          <Link
            to="/"
            target="_blank"
            className="text-xs text-white hover:text-[var(--brand)] transition-colors cursor-pointer border border-white/10 px-3 py-1.5 rounded-full"
          >
            Live Site ↗
          </Link>
          <button
            onClick={handleOpenExport}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-emerald-950/50"
          >
            <span>📥 Export Code</span>
          </button>
          <button
            onClick={handleOpenAdd}
            className="bg-[var(--brand)] text-white text-xs font-medium px-4 py-2 rounded-full hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>+ Add Project</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-8 flex flex-col gap-6">
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#161616] p-4 rounded-xl border border-white/5">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Search projects by title, category, or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#222] border border-white/10 text-white text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--brand)] transition-colors"
            />
          </div>
          <div className="text-xs text-[var(--text-muted-trd)] font-[var(--font-archivo)]">
            Total Projects: <span className="text-white font-medium">{filteredProjects.length}</span>
          </div>
        </div>

        {/* Project List Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, idx) => (
            <div
              key={p.slug}
              className={`bg-[#161616] border rounded-xl overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all shadow-lg ${
                p.hidden ? "border-amber-500/30 opacity-75" : "border-white/10"
              }`}
            >
              <div>
                {/* Thumbnail */}
                <div className="aspect-video w-full relative bg-[#222] overflow-hidden">
                  {p.coverImage ? (
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-xs text-[var(--text-muted-trd)]">
                      No Image
                    </div>
                  )}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {p.hidden ? (
                      <span className="bg-amber-500/90 backdrop-blur-md text-[10px] text-white px-2.5 py-0.5 rounded-full font-medium">
                        🙈 Hidden
                      </span>
                    ) : (
                      <span className="bg-emerald-500/90 backdrop-blur-md text-[10px] text-white px-2.5 py-0.5 rounded-full font-medium">
                        👁 Published
                      </span>
                    )}
                  </div>
                  <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-[10px] text-white px-2.5 py-1 rounded-full font-[var(--font-archivo)]">
                    [{p.year}]
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <span className="text-[10px] text-[var(--brand)] uppercase tracking-widest font-[var(--font-archivo)] block mb-1">
                      {p.category}
                    </span>
                    <h3 className="text-lg font-normal text-white m-0 group-hover:text-[var(--brand)] transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] text-[var(--text-muted-trd)] bg-white/5 px-2 py-0.5 rounded-md border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-[var(--text-muted-trd)] leading-relaxed line-clamp-2 m-0 mt-1">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-4 border-t border-white/5 bg-black/30 flex items-center justify-between text-xs">
                <button
                  onClick={() => navigate(`/work/${p.slug}`)}
                  className="text-xs text-[var(--text-muted-trd)] hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  View Case Study →
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleVisibility(p.slug, p.title, p.hidden)}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    {p.hidden ? "👁 Show" : "🙈 Hide"}
                  </button>
                  <button
                    onClick={() => handleOpenEdit(p)}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.slug, p.title)}
                    className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Add / Edit Project Drawer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-[720px] bg-[#141414] h-full overflow-y-auto p-6 lg:p-8 flex flex-col justify-between border-l border-white/10 shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h2 className="text-xl font-normal text-white m-0">
                    {editingSlug ? "Edit Project" : "Add New Project"}
                  </h2>
                  <p className="text-xs text-[var(--text-muted-trd)] m-0 mt-1">
                    Fill in project details & case study content.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white/60 hover:text-white text-xl font-light cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Visibility Toggle Checkbox */}
                <div className="flex items-center gap-3 bg-[#222] p-3.5 rounded-lg border border-white/10">
                  <input
                    type="checkbox"
                    id="hiddenCheckbox"
                    checked={formData.hidden || false}
                    onChange={(e) => setFormData((prev) => ({ ...prev, hidden: e.target.checked }))}
                    className="w-4 h-4 accent-[var(--brand)] cursor-pointer"
                  />
                  <label htmlFor="hiddenCheckbox" className="text-xs text-white cursor-pointer select-none flex items-center gap-2">
                    <span>Hide from front website</span>
                    <span className="text-[10px] text-[var(--text-muted-trd)]">(Stays saved in admin dashboard, but hidden from public visitors)</span>
                  </label>
                </div>

                {/* Title & Slug */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[var(--text-muted-trd)]">Project Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="e.g. Pupuk Indonesia"
                      className="bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2.5 focus:border-[var(--brand)] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[var(--text-muted-trd)]">URL Slug *</label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                      placeholder="pupuk-indonesia"
                      className="bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2.5 focus:border-[var(--brand)] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Category & Year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[var(--text-muted-trd)]">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                      className="bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2.5 focus:border-[var(--brand)] focus:outline-none"
                    >
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Product Design">Product Design</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Creative Production">Creative Production</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[var(--text-muted-trd)]">Year</label>
                    <input
                      type="text"
                      value={formData.year}
                      onChange={(e) => setFormData((prev) => ({ ...prev, year: e.target.value }))}
                      placeholder="2026"
                      className="bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2.5 focus:border-[var(--brand)] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Tags Manager */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[var(--text-muted-trd)]">Tags</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTag();
                        }
                      }}
                      placeholder="Add tag (e.g. SaaS) and press Enter"
                      className="flex-1 bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2.5 focus:border-[var(--brand)] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="bg-white/10 hover:bg-white/20 text-white text-xs px-4 rounded-lg cursor-pointer"
                    >
                      Add Tag
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {formData.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[var(--brand-10)] border border-[var(--brand)] text-[var(--brand)] text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5"
                      >
                        {t}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(t)}
                          className="hover:text-white cursor-pointer"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cover Image Upload (with Canvas Compression) */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[var(--text-muted-trd)]">
                    Cover Image (Auto-compressed on upload) *
                  </label>
                  <div className="flex flex-col gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleCoverUpload}
                      className="text-xs text-white/80 file:bg-[var(--brand)] file:text-white file:border-none file:px-3 file:py-1.5 file:rounded-md file:cursor-pointer"
                    />
                    <input
                      type="text"
                      value={formData.coverImage}
                      onChange={(e) => setFormData((prev) => ({ ...prev, coverImage: e.target.value }))}
                      placeholder="Or enter Image URL (e.g. https://...)"
                      className="bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2.5 focus:border-[var(--brand)] focus:outline-none"
                    />
                  </div>
                  {compressionInfo && (
                    <p className="text-[11px] text-emerald-400 m-0">{compressionInfo}</p>
                  )}
                  {formData.coverImage && (
                    <div className="aspect-video w-48 rounded-lg overflow-hidden border border-white/10 mt-1">
                      <img src={formData.coverImage} alt="Cover preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Case Study Details */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[var(--text-muted-trd)]">Overview Description</label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Provide a high-level summary of the project..."
                    className="bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2.5 focus:border-[var(--brand)] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[var(--text-muted-trd)]">The Challenge</label>
                  <textarea
                    rows={3}
                    value={formData.challenge}
                    onChange={(e) => setFormData((prev) => ({ ...prev, challenge: e.target.value }))}
                    placeholder="Describe the initial problem or challenge..."
                    className="bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2.5 focus:border-[var(--brand)] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[var(--text-muted-trd)]">The Outcome</label>
                  <textarea
                    rows={3}
                    value={formData.outcome}
                    onChange={(e) => setFormData((prev) => ({ ...prev, outcome: e.target.value }))}
                    placeholder="Describe the results and value delivered..."
                    className="bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2.5 focus:border-[var(--brand)] focus:outline-none"
                  />
                </div>

                {/* Results / Key Metrics Builder */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-[var(--text-muted-trd)]">Key Metrics & Results</label>
                    <button
                      type="button"
                      onClick={handleAddStatRow}
                      className="text-xs text-[var(--brand)] hover:underline cursor-pointer"
                    >
                      + Add Metric
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    {formData.stats.map((stat, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => handleStatChange(i, "label", e.target.value)}
                          placeholder="Metric label (e.g. Faster info access)"
                          className="flex-1 bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2 focus:border-[var(--brand)] focus:outline-none"
                        />
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => handleStatChange(i, "value", e.target.value)}
                          placeholder="Value (e.g. 40%)"
                          className="w-28 bg-[#222] border border-white/10 text-white text-xs rounded-lg p-2 focus:border-[var(--brand)] focus:outline-none"
                        />
                        {formData.stats.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveStatRow(i)}
                            className="text-red-400 hover:text-red-300 text-xs px-2 cursor-pointer"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery Upload */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[var(--text-muted-trd)]">
                    Gallery Screenshots (Auto-compressed)
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleGalleryUpload}
                    className="text-xs text-white/80 file:bg-white/10 file:text-white file:border-none file:px-3 file:py-1.5 file:rounded-md file:cursor-pointer"
                  />
                  {formData.images.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.images.map((img, i) => (
                        <div key={i} className="relative w-24 aspect-video rounded border border-white/10 overflow-hidden group">
                          <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                images: prev.images.filter((_, idx) => idx !== i),
                              }))
                            }
                            className="absolute top-1 right-1 bg-black/80 text-red-400 text-[10px] w-4 h-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Form Footer */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="text-xs text-[var(--text-muted-trd)] hover:text-white px-4 py-2 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isCompressing}
                    className="bg-[var(--brand)] text-white font-medium text-xs px-6 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isCompressing ? "Optimizing..." : editingSlug ? "Save Changes" : "Create Project"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Export Code Modal */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#161616] border border-white/15 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#1f1f1f]">
              <div className="flex items-center gap-2">
                <StarIcon color="#10b981" size={22} />
                <h2 className="text-base font-medium text-white m-0">Export `projects.ts` Code for Live Site</h2>
              </div>
              <button
                onClick={() => setIsExportModalOpen(false)}
                className="text-white/60 hover:text-white text-sm cursor-pointer border border-white/10 w-7 h-7 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              <div className="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-xl text-xs text-emerald-200 leading-relaxed flex flex-col gap-1.5">
                <span className="font-semibold text-emerald-400">💡 100% Free Live Site Update Workflow:</span>
                <ol className="list-decimal pl-4 space-y-1 text-emerald-300/90">
                  <li>Click <strong>Copy Code to Clipboard</strong> or <strong>Download `projects.ts`</strong> below.</li>
                  <li>Replace the file at <code className="bg-black/50 px-1.5 py-0.5 rounded text-emerald-300 font-mono">src/app/data/projects.ts</code> with this exported code.</li>
                  <li>Push to GitHub (<code className="bg-black/50 px-1.5 py-0.5 rounded font-mono">git commit -am "Update projects" && git push</code>).</li>
                  <li>Your hosting (Vercel / Netlify) auto-deploys your live website instantly for <strong>$0 cost</strong>!</li>
                </ol>
              </div>

              <div className="relative">
                <pre className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-[11px] font-mono text-emerald-400/90 max-h-80 overflow-auto whitespace-pre-wrap select-all">
                  {exportedCode}
                </pre>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between bg-[#1f1f1f]">
              <span className="text-xs text-[var(--text-muted-trd)]">
                {projectList.length} project(s) ready to export
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownloadCode}
                  className="text-xs text-white bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 rounded-full cursor-pointer transition-all flex items-center gap-1.5"
                >
                  💾 Download `projects.ts`
                </button>
                <button
                  onClick={handleCopyCode}
                  className="text-xs text-white bg-emerald-600 hover:bg-emerald-500 font-medium px-5 py-2 rounded-full cursor-pointer transition-all shadow-lg shadow-emerald-900/40 flex items-center gap-1.5"
                >
                  📋 Copy Code to Clipboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
