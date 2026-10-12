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
    label: "Compétences",
    shortLabel: "Stack",
  },
  {
    id: "solutions",
    label: "Méthode",
    shortLabel: "Méthode",
  },
  {
    id: "contact",
    label: "Contact",
    shortLabel: "Contact",
  },
] as const;

export type SectionId = (typeof navigationItems)[number]["id"];

export const sectionIds = navigationItems.map((item) => item.id);
