import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { StarIcon } from "./shared";

interface TransitionContextType {
  transitionNavigate: (to: string | number) => void;
  transitionState: "idle" | "entering" | "exiting";
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function useTransitionNavigate() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error("useTransitionNavigate must be used within a TransitionProvider");
  }
  return ctx.transitionNavigate;
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [transitionState, setTransitionState] = useState<"idle" | "entering" | "exiting">("exiting");
  const navigate = useNavigate();

  const transitionNavigate = (to: string | number) => {
    if (transitionState !== "idle") return;
    setTransitionState("entering");
    setTimeout(() => {
      if (typeof to === "number") {
        navigate(to);
      } else {
        navigate(to);
      }
      setTransitionState("exiting");
    }, 600); // Wait for the slide-in to complete
  };

  useEffect(() => {
    if (transitionState === "exiting") {
      const timer = setTimeout(() => {
        setTransitionState("idle");
      }, 600); // Wait for the slide-out to complete
      return () => clearTimeout(timer);
    }
  }, [transitionState]);

  // Smooth scroll helper when transition ends on home/hash URL
  useEffect(() => {
    if (transitionState === "idle") {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Wrap in a tiny timeout to ensure DOM renders first
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [transitionState]);

  // Styling properties
  let transformStr = "translateX(100%)";
  let transitionStr = "none";
  let pointerEvents: "none" | "auto" = "none";

  if (transitionState === "entering") {
    transformStr = "translateX(0%)";
    transitionStr = "transform 600ms cubic-bezier(0.85, 0, 0.15, 1)";
    pointerEvents = "auto";
  } else if (transitionState === "exiting") {
    transformStr = "translateX(-100%)";
    transitionStr = "transform 600ms cubic-bezier(0.85, 0, 0.15, 1)";
    pointerEvents = "auto";
  }

  return (
    <TransitionContext.Provider value={{ transitionNavigate, transitionState }}>
      {children}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--brand)]"
        style={{
          transform: transformStr,
          transition: transitionStr,
          pointerEvents,
        }}
      >
        <StarIcon color="white" size={80} className="animate-pulse" />
      </div>
    </TransitionContext.Provider>
  );
}
