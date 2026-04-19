import { useEffect } from "react";

/**
 * Adds `is-visible` class to all `.reveal` elements once they enter the viewport.
 * Uses a single IntersectionObserver shared across all reveals on the page.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
