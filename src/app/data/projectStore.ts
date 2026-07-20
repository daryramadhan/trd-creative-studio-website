import { Project, projects as defaultProjects } from "./projects";

const STORAGE_KEY = "trd_studio_projects_v1";
const EVENT_NAME = "trd_projects_updated";

/**
 * Retrieves all projects, merging localStorage saved items with initial seed data.
 */
export function getProjects(): Project[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultProjects;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultProjects;
  } catch (err) {
    console.error("Error reading projects from storage", err);
    return defaultProjects;
  }
}

/**
 * Retrieves a single project by slug.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  const all = getProjects();
  return all.find((p) => p.slug === slug);
}

/**
 * Saves or updates a project, emitting an event for live updates.
 */
export function saveProject(project: Project): void {
  const all = getProjects();
  const existingIndex = all.findIndex((p) => p.slug === project.slug);

  let updated: Project[];
  if (existingIndex >= 0) {
    updated = [...all];
    updated[existingIndex] = project;
  } else {
    // New project added at top of list
    updated = [project, ...all];
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (err) {
    console.error("Failed to save project to localStorage", err);
    throw new Error("Storage limit exceeded. Try compressing images further.");
  }
}

/**
 * Toggles a project's visibility state (hidden vs published).
 */
export function toggleProjectVisibility(slug: string): void {
  const all = getProjects();
  const updated = all.map((p) =>
    p.slug === slug ? { ...p, hidden: !p.hidden } : p
  );
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (err) {
    console.error("Failed to toggle project visibility", err);
  }
}

/**
 * Deletes a project by slug.
 */
export function deleteProject(slug: string): void {
  const all = getProjects();
  const filtered = all.filter((p) => p.slug !== slug);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (err) {
    console.error("Failed to delete project", err);
  }
}

/**
 * Resets storage to initial default projects seed.
 */
export function resetToDefaults(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (err) {
    console.error("Failed to reset projects to default", err);
  }
}

/**
 * Subscribe helper to listen for project updates.
 */
export function subscribeProjects(callback: () => void): () => void {
  window.addEventListener(EVENT_NAME, callback);
  return () => window.removeEventListener(EVENT_NAME, callback);
}
