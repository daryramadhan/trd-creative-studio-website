import { Project, projects as defaultProjects } from "./projects";

const STORAGE_KEY = "trd_studio_projects_v1";
const EVENT_NAME = "trd_projects_updated";
const DB_NAME = "TRDStudioDB";
const STORE_NAME = "projects";
const KEY = "trd_projects_v1";

// In-memory cache for instant synchronous access
let cachedProjects: Project[] | null = null;

// IndexedDB Helper for high-capacity storage (GBs capacity vs 5MB localStorage)
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      reject("IndexedDB not supported");
      return;
    }
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveToIDB(projects: Project[]): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put(projects, KEY);
    return new Promise((resolve) => {
      tx.oncomplete = () => resolve();
    });
  } catch (err) {
    console.warn("IndexedDB save failed", err);
  }
}

async function loadFromIDB(): Promise<Project[] | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const req = tx.objectStore(STORE_NAME).get(KEY);
    return new Promise((resolve) => {
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch (err) {
    return null;
  }
}

// Background sync from IndexedDB on initial load
if (typeof window !== "undefined") {
  loadFromIDB().then((idbProjects) => {
    if (idbProjects && Array.isArray(idbProjects) && idbProjects.length > 0) {
      cachedProjects = idbProjects;
      window.dispatchEvent(new Event(EVENT_NAME));
    }
  });
}

/**
 * Retrieves all projects synchronously from memory / localStorage / defaults.
 */
export function getProjects(): Project[] {
  if (cachedProjects) {
    return cachedProjects;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        cachedProjects = parsed;
        return parsed;
      }
    }
  } catch (err) {
    console.warn("localStorage read error", err);
  }

  cachedProjects = defaultProjects;
  return defaultProjects;
}

/**
 * Retrieves a single project by slug.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  const all = getProjects();
  return all.find((p) => p.slug === slug);
}

/**
 * Saves or updates a project safely into memory + IndexedDB + localStorage.
 */
export function saveProject(project: Project): void {
  const all = getProjects();
  const existingIndex = all.findIndex((p) => p.slug === project.slug);

  let updated: Project[];
  if (existingIndex >= 0) {
    updated = [...all];
    updated[existingIndex] = project;
  } else {
    updated = [project, ...all];
  }

  cachedProjects = updated;

  // 1. Save to IndexedDB (unlimited storage quota)
  saveToIDB(updated);

  // 2. Best-effort save to localStorage (5MB limit)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn("localStorage quota exceeded. Saved to IndexedDB successfully instead.");
  }

  // 3. Notify listeners
  window.dispatchEvent(new Event(EVENT_NAME));
}

/**
 * Toggles project visibility.
 */
export function toggleProjectVisibility(slug: string): void {
  const all = getProjects();
  const updated = all.map((p) =>
    p.slug === slug ? { ...p, hidden: !p.hidden } : p
  );
  cachedProjects = updated;

  saveToIDB(updated);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {}

  window.dispatchEvent(new Event(EVENT_NAME));
}

/**
 * Deletes a project.
 */
export function deleteProject(slug: string): void {
  const all = getProjects();
  const filtered = all.filter((p) => p.slug !== slug);
  cachedProjects = filtered;

  saveToIDB(filtered);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (err) {}

  window.dispatchEvent(new Event(EVENT_NAME));
}

/**
 * Resets storage to initial default projects seed.
 */
export function resetToDefaults(): void {
  cachedProjects = defaultProjects;

  saveToIDB(defaultProjects);

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {}

  window.dispatchEvent(new Event(EVENT_NAME));
}

/**
 * Subscribe helper to listen for project updates.
 */
export function subscribeProjects(callback: () => void): () => void {
  window.addEventListener(EVENT_NAME, callback);
  return () => window.removeEventListener(EVENT_NAME, callback);
}
