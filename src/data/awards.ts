export interface Award {
  name: string;
  logo: string;
  logoDark?: string;
  category: string;
  project: string;
}

// Per aggiungere un award, copia un blocco e modifica i dati.
// I loghi vanno in /public/awards/
export const awards: Award[] = [
  {
    name: "Mediakey",
    logo: "/awards/mediakey-logo.svg",
    category: "Ambient Media",
    project: "Meraviglisoamente Bufala",
  },
  {
    name: "Mediakey",
    logo: "/awards/mediakey-logo.svg",
    category: "Press, Outdoor & Promotion",
    project: "Horizon Automotive",
  },
  {
    name: "IAB",
    logo: "/awards/iab-logo-grey.png",
    logoDark: "/awards/iab-logo-bianco.png",
    category: "Brand Advertising Campaign",
    project: "Horizon Automotive",
  },
];
