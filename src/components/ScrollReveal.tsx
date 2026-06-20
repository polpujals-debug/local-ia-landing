"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }

    const groups = new Map<Element | null, HTMLElement[]>();
    els.forEach((e) => {
      const parent = e.parentElement;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent)!.push(e);
    });
    groups.forEach((list) => {
      if (list.length > 1) {
        list.forEach((e, i) => {
          e.style.transitionDelay = `${i * 0.1}s`;
        });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );

    els.forEach((e) => observer.observe(e));

    return () => observer.disconnect();
  }, []);

  return null;
}
