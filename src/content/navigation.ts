export const navigationItems = [
  {
    id: "presentation",
    label: "Ouverture",
    shortLabel: "Cahier",
  },
  {
    id: "projets",
    label: "L’Établi",
    shortLabel: "Établi",
  },
  {
    id: "expertise",
    label: "Sous le capot",
    shortLabel: "Capot",
  },
  {
    id: "solutions",
    label: "Manifeste",
    shortLabel: "Notes",
  },
  {
    id: "contact",
    label: "Colophon",
    shortLabel: "Contact",
  },
] as const;

export type SectionId = (typeof navigationItems)[number]["id"];

export const sectionIds = navigationItems.map((item) => item.id);
