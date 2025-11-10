/**
 * Palette de couleurs NETLINK SOLUTIONS - Respect de la règle 60/30/10
 *
 * 60% - Couleurs dominantes (neutrals, backgrounds)
 * 30% - Couleurs secondaires (supports, contrasts)
 * 10% - Couleurs d'accent (actions, highlights)
 */
export const colors = {
  // 60% - COULEURS DOMINANTES (Neutrals & Backgrounds)
  dominant: {
    primary: "#000000", // Texte/logo principal noir
    primaryHover: "#1A1A1A", // Variante hover
    secondary: "#1F1F1F", // Fond secondaire foncé
    secondaryHover: "#2A2A2A",
    light: "#FAFAFA", // Fond très clair
    border: "#E5E7EB", // Bordures principales
    divider: "#F3F4F6", // Séparateurs
  },

  // 30% - COULEURS SECONDAIRES (Support & Contrast)
  support: {
    primary: "#1fb2ff", // Bleu vif (logo)
    primaryHover: "#0a92db",
    light: "#d0f0ff",
    dark: "#045791",
    medium: "#6fd0ff",
    border: "#a1e0ff",
  },

  // 10% - COULEURS D’ACCENT (Actions & Highlights)
  accent: {
    primary: "#1530FF", // Bleu foncé du logo OPTIM
    primaryHover: "#0a1e99",
    primaryLight: "#5BC6FF", // Bleu clair du logo OPTIM

    success: "#388E3C",
    successHover: "#2E7B32",
    successLight: "#E8F5E8",

    danger: "#D12D2A",
    dangerHover: "#B71C1C",
    dangerLight: "#FFEBEE",

    warning: "#F59E0B",
    warningHover: "#D97706",
    warningLight: "#FEF3C7",

    premium: "#8B5CF6",
    premiumHover: "#7C3AED",
    premiumLight: "#F3E8FF",
  },

  // TEXTE
  text: {
    primary: "#111827",
    secondary: "#374151",
    tertiary: "#6B7280",
    quaternary: "#9CA3AF",
    inverse: "#FFFFFF",
    placeholder: "rgba(0, 0, 0, 0.4)",
  },
};
