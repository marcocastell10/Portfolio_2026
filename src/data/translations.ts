const translations = {
  it: {
    header: {
      works: "Lavori",
      about: "About",
      openMenu: "Apri menu",
      closeMenu: "Chiudi menu",
    },
    hero: {
      subtitle: "Marco Castellana — Art Director & Visual Designer",
    },
    projects: {
      sectionTitle: "I miei progetti",
      viewProject: "Guarda il progetto",
    },
    aboutPreview: {
      label: "About",
      text: "Art Director con una passione per il design che comunica. Credo nel potere delle idee semplici, nella cura dei dettagli e nella forza di un’identità visiva coerente.",
      link: "Scopri di più",
    },
    aboutPage: {
      label: "About",
      intro: [
        "Sono Marco, Art Director con base a Milano. Mi occupo di direzione visuale e progettazione di campagne stampa, social e digital ADV, lavorando sull’equilibrio tra estetica e strategia.",
        "Progetto identità visive, contenuti e format per i social — organici e paid — seguendo l’intero processo creativo: dall’idea alla produzione, fino alla declinazione in asset statici e animati. Il mio approccio è pratico, orientato al risultato e attento al contesto in cui i contenuti vivono.",
        "Lavoro quotidianamente con la suite Adobe, con un focus su Photoshop e Illustrator, e utilizzo After Effects per animazioni essenziali ma funzionali. Mi interesso anche di UX/UI, sperimentando con Figma nella progettazione di interfacce e prototipi responsive.",
        "Fuori dal lavoro porto dentro al lavoro quello che mi definisce: sport, cultura visiva, fumetti, videogiochi e un’attenzione costante ai linguaggi digitali e ai trend contemporanei. Mi piacciono i progetti che mettono in discussione le soluzioni ovvie e costringono a fare un passo in più.",
      ],
      studiesTitle: "Studi",
      studies: [
        {
          title: "Laurea triennale in Communication Design",
          place: "IAAD Bologna — Votazione finale: 108",
          years: "2019 – 2022",
        },
        {
          title: "Liceo Artistico — Indirizzo Grafico Pubblicitario",
          place: "Liceo A. Venturi, Modena",
          years: "2013 – 2018",
        },
      ],
      skillsTitle: "Competenze",
      skills: ["Art Direction", "Brand Identity", "Visual Design", "Editorial Design", "Creative Direction"],
      toolsTitle: "Strumenti",
      tools: ["Adobe Creative Suite", "Figma", "After Effects", "AI Tools (ChatGPT, Midjourney, Firefly)"],
    },
    projectPage: {
      allProjects: "Tutti i progetti",
      previous: "Precedente",
      next: "Successivo",
    },
    footer: {
      emailLabel: "Email",
    },
    theme: {
      light: "Attiva modalità chiara",
      dark: "Attiva modalità scura",
    },
  },
  en: {
    header: {
      works: "Works",
      about: "About",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      subtitle: "Marco Castellana — Art Director & Visual Designer",
    },
    projects: {
      sectionTitle: "My projects",
      viewProject: "View project",
    },
    aboutPreview: {
      label: "About",
      text: "Art Director with a passion for design that communicates. I believe in the power of simple ideas, attention to detail, and the strength of a consistent visual identity.",
      link: "Learn more",
    },
    aboutPage: {
      label: "About",
      intro: [
        "I’m Marco, an Art Director based in Milan. I work in visual direction and campaign design for print, social, and digital advertising, balancing aesthetics and strategy.",
        "I design visual identities, content, and social media formats — organic and paid — following the entire creative process: from concept to production, through to static and animated asset delivery. My approach is hands-on, results-driven, and mindful of the context where content lives.",
        "I work daily with the Adobe suite, with a focus on Photoshop and Illustrator, and use After Effects for essential yet functional animations. I’m also interested in UX/UI, experimenting with Figma for interface and responsive prototype design.",
        "Outside of work, I bring into my work what defines me: sports, visual culture, comics, video games, and a constant attention to digital languages and contemporary trends. I enjoy projects that challenge the obvious solutions and push for something more.",
      ],
      studiesTitle: "Education",
      studies: [
        {
          title: "Bachelor’s Degree in Communication Design",
          place: "IAAD Bologna — Final grade: 108",
          years: "2019 – 2022",
        },
        {
          title: "Art High School — Graphic & Advertising Design",
          place: "Liceo A. Venturi, Modena",
          years: "2013 – 2018",
        },
      ],
      skillsTitle: "Skills",
      skills: ["Art Direction", "Brand Identity", "Visual Design", "Editorial Design", "Creative Direction"],
      toolsTitle: "Tools",
      tools: ["Adobe Creative Suite", "Figma", "After Effects", "AI Tools (ChatGPT, Midjourney, Firefly)"],
    },
    projectPage: {
      allProjects: "All projects",
      previous: "Previous",
      next: "Next",
    },
    footer: {
      emailLabel: "Email",
    },
    theme: {
      light: "Switch to light mode",
      dark: "Switch to dark mode",
    },
  },
};

export type Lang = "it" | "en";

export function t(lang: Lang) {
  return translations[lang];
}
