export interface Project {
  slug: string;
  title: string;
  description: string;
  cover: string;
  year: string;
  client: string;
  images: [string, string];
  fullDescription: string;
}

// Per aggiungere un nuovo progetto, copia un blocco e modifica i dati.
// Le immagini vanno in /public/projects/nome-progetto/
export const projects: Project[] = [
  {
    slug: "brand-identity-aurora",
    title: "Aurora",
    description: "Brand identity per un marchio di cosmetica naturale",
    cover: "/projects/brand-identity-aurora/cover.svg",
    year: "2024",
    client: "Aurora Cosmetics",
    images: [
      "/projects/brand-identity-aurora/01.svg",
      "/projects/brand-identity-aurora/02.svg",
    ],
    fullDescription:
      "Progetto di brand identity completo per Aurora, un marchio emergente di cosmetica naturale. Il lavoro ha incluso la definizione del logo, della palette cromatica, del sistema tipografico e di tutti i materiali di comunicazione, dal packaging alla presenza digitale.",
  },
  {
    slug: "editorial-design-contrasto",
    title: "Contrasto",
    description: "Design editoriale per una rivista d'arte contemporanea",
    cover: "/projects/editorial-design-contrasto/cover.svg",
    year: "2024",
    client: "Contrasto Edizioni",
    images: [
      "/projects/editorial-design-contrasto/01.svg",
      "/projects/editorial-design-contrasto/02.svg",
    ],
    fullDescription:
      "Direzione artistica e progettazione editoriale per Contrasto, rivista trimestrale dedicata all'arte contemporanea. Il progetto ha definito il formato, la griglia tipografica, lo stile fotografico e l'identità visiva complessiva della pubblicazione.",
  },
  {
    slug: "visual-identity-spazio",
    title: "Spazio",
    description: "Identità visiva per uno spazio espositivo indipendente",
    cover: "/projects/visual-identity-spazio/cover.svg",
    year: "2023",
    client: "Spazio Gallery",
    images: [
      "/projects/visual-identity-spazio/01.svg",
      "/projects/visual-identity-spazio/02.svg",
    ],
    fullDescription:
      "Creazione dell'identità visiva per Spazio, un luogo espositivo indipendente dedicato ad artisti emergenti. Il progetto comprende logo, sistema di wayfinding, materiali promozionali e template per la comunicazione digitale.",
  },
  {
    slug: "packaging-terra",
    title: "Terra",
    description: "Packaging design per una linea di prodotti biologici",
    cover: "/projects/packaging-terra/cover.svg",
    year: "2023",
    client: "Terra Bio",
    images: [
      "/projects/packaging-terra/01.svg",
      "/projects/packaging-terra/02.svg",
    ],
    fullDescription:
      "Progettazione del packaging per Terra, una linea di prodotti alimentari biologici a km zero. Il design riflette i valori di autenticità e sostenibilità del marchio attraverso materiali naturali, illustrazioni organiche e una palette terrosa.",
  },
  {
    slug: "packaging-terra",
    title: "Terra",
    description: "Packaging design per una linea di prodotti biologici",
    cover: "/projects/packaging-terra/cover.svg",
    year: "2023",
    client: "Terra Bio",
    images: [
      "/projects/packaging-terra/01.svg",
      "/projects/packaging-terra/02.svg",
    ],
    fullDescription:
      "Progettazione del packaging per Terra, una linea di prodotti alimentari biologici a km zero. Il design riflette i valori di autenticità e sostenibilità del marchio attraverso materiali naturali, illustrazioni organiche e una palette terrosa.",
  },
];
