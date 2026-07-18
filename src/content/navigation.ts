export const navigationItems = [
  {
    id: "presentation",
    label: "Présentation",
    shortLabel: "Accueil",
  },
  {
    id: "projets",
    label: "Projets",
    shortLabel: "Projets",
  },
  {
    id: "expertise",
    label: "Expertise",
    shortLabel: "Profil",
  },
  {
    id: "solutions",
    label: "Solutions",
    shortLabel: "Solutions",
  },
  {
    id: "contact",
    label: "Contact",
    shortLabel: "Contact",
  },
] as const;

export type SectionId = (typeof navigationItems)[number]["id"];

export const sectionIds = navigationItems.map((item) => item.id);

