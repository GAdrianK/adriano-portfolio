"use client";

import { useEffect, useState } from "react";

import { sectionIds, type SectionId } from "@/content/navigation";

const initialSection: SectionId = "presentation";

function isSectionId(value: string): value is SectionId {
  return sectionIds.some((sectionId) => sectionId === value);
}

export function useActiveSection() {
  const [activeSection, setActiveSection] =
    useState<SectionId>(initialSection);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const syncWithHash = () => {
      const hash = window.location.hash.slice(1);

      if (isSectionId(hash)) {
        setActiveSection(hash);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top) -
              Math.abs(second.boundingClientRect.top),
          )[0];

        if (activeEntry && isSectionId(activeEntry.target.id)) {
          setActiveSection(activeEntry.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -62% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncWithHash);
    };
  }, []);

  return activeSection;
}

