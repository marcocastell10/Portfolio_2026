export interface DescriptionSection {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  cover: string;
  year: string;
  client: string;
  images: [string, string];
  fullDescription: string | DescriptionSection[];
  externalLink?: { label: string; url: string } | { label: string; url: string }[];
}

// Per aggiungere un nuovo progetto, copia un blocco e modifica i dati.
// Le immagini vanno in /public/projects/nome-progetto/
export const projects: Project[] = [
  {
    slug: "brand-identity-aurora",
    title: "Meravigliosamente Bufala",
    description: "Campagna di posizionamento - Nuovo Payoff",
    cover: "/projects/cover_1.jpg",
    year: "2026",
    client: "Fattorie Garofalo",
    images: [
      "/projects/fattorie-garofalo/foto-interna-1.jpg",
      "/projects/fattorie-garofalo/foto-interna-2.jpg",
    ],
    fullDescription: [
      {
        title: "Il brief",
        body: "Fattorie Garofalo è il maggior produttore mondiale di mozzarella di bufala. Un brand con una filiera DOP e un prodotto di eccellenza che, però, mancava di una voce riconoscibile capace di raccontarlo fino in fondo.\n\nL'obiettivo era costruire un posizionamento chiaro e una firma visiva in grado di fare da collante tra prodotto, cultura bufalina e momenti di consumo.",
      },
      {
        title: "Il payoff",
        body: "Da questa esigenza nasce Meravigliosamente Bufala: più che un avverbio, un modo di essere. Una firma che condensa la promessa del brand — latte 100% italiano, filiera DOP, gusto senza compromessi — in una parola sola.\n\nNon serve strafare. Quando è fatta come Dio comanda, la bufala parla da sola.",
      },
      {
        title: "La campagna",
        body: "Il lancio è stato affidato a una campagna OOH e DOOH su scala nazionale, da Capua fino alle principali stazioni e aeroporti d'Italia.\n\nIl pezzo forte è stata l'installazione all'esterno dell'Aeroporto di Capodichino (NA): 70m² realizzati con vernice ecologica Airlite®, capace di eliminare 3,9 kg di NOx ogni anno — l'equivalente di 3 alberi al giorno in purificazione dell'aria. Sostenibilità concreta, non decorativa.",
      },
      {
        title: "L'art direction",
        body: "Per lo shooting abbiamo scelto un registro pop e diretto, lontano dall'estetica food tradizionale. Niente luce morbida da studio, niente perfezione patinata: la mozzarella si mangia in mano, si addenta, si divide in spicchi.\n\nImmagini vive, quasi documentarie, che raccontano il piacere reale di un prodotto che non ha bisogno di essere abbellito. Sui social la campagna ha allargato il racconto oltre la mozzarella, esplorando tutta la gamma bufala — con un tocco di ironia sul modo giusto di tagliarla (spoiler: a spicchi, non a fette).",
      },
      {
        title: "I risultati",
        body: "Nel periodo marzo–maggio la campagna ha generato 1 milione di OTS tra OOH e DOOH, con una reach netta di 700K e una frequenza media di 1,4 esposizioni per persona.\n\nSolo a Capodichino sono stati raggiunti il 58% dei passeggeri reali su 1,72 milioni di transiti. Sul fronte organico Meta: 60K visualizzazioni totali e una reach media per post di 5K.",
      },
    ],
    externalLink: {
      label: "Leggi l'articolo su Engage",
      url: "https://www.engage.it/agenzie/fattorie-garofalo-lancia-la-campagna-meravigliosamente-bufala-firmata-italiaonline.aspx",
    },
  },
  {
    slug: "packaging-terra",
    title: "B&B Hotels",
    description: "OOH Hotel Fiumicino",
    cover: "/projects/bb/bb-cover-1.jpg",
    year: "2026",
    client: "B&B Hotels",
    images: [
      "/projects/bb/bb-immagine-1.jpg",
      "/projects/bb/bb-immagine-4.jpg",
    ],
    fullDescription: [
      {
        title: "Il contesto",
        body: "Un aeroporto è uno dei pochi posti dove il tuo pubblico è fisicamente fermo, ha tempo e — soprattutto — ha appena finito un viaggio o sta per iniziarne uno.\n\nL'affissione all'interno del terminal di Fiumicino per B&B Hotels Roma non era quindi una campagna qualsiasi: era una conversazione con viaggiatori nel momento esatto in cui il viaggio è ancora nell'aria.",
      },
      {
        title: "La sfida",
        body: "La comunicazione delle catene alberghiere tende a somigliarsi: immagini patinate, promesse generiche, tono istituzionale.\n\nL'obiettivo era rompere questo schema portando più vita, più persone, un tono leggero e diretto — quello di un brand che sa stare dalla parte del viaggiatore senza prendersi troppo sul serio.",
      },
      {
        title: "La strategia dei soggetti",
        body: "Abbiamo sviluppato quattro soggetti distinti, ognuno a presidio di un territorio di comunicazione: capillarità della rete (900+ hotel in 19 paesi), comodità (i letti memory foam come promessa centrale), valori del brand (onestà, semplicità, rapporto qualità-prezzo), e fidelizzazione verso il prossimo viaggio tramite il programma B&Me.\n\nI poster sono stati pensati in coppia e in funzione della posizione fisica: i soggetti all'ingresso agganciano e incuriosiscono, quelli sulla parete opposta approfondiscono la relazione e spingono alla prenotazione successiva.",
      },
      {
        title: "Il copy",
        body: "Il tono è il vero differenziale del progetto. Niente superlativi, niente promesse vuote — solo headline dirette, autoironiche, con una personalità precisa:\n\n\"We don't do fancy. We do right.\"\n\n\"Smart people sleep well. Are you smart?\"\n\n\"Your next trip is not going to book itself. Just saying.\"\n\n\"Already planning your next trip? Same, honey.\"\n\n\"You can get over your ex. You won't get over our beds.\"\n\nUna voce che parla al viaggiatore da pari a pari, con il ritmo e il registro di un brand che ha qualcosa da dire — e sa anche quando fermarsi.",
      },
    ],
  },
  {
    slug: "editorial-design-contrasto",
    title: "Horizon Automotive",
    description: "Campagna integrata di posizionamento",
    cover: "/projects/horizon/cover_2.jpg",
    year: "2025",
    client: "Horizon Automotive",
    images: [
      "/projects/horizon/horizon-foto-1.jpg",
      "/projects/horizon/horizon-foto-2.jpg",
    ],
    fullDescription: [
      {
        title: "Il contesto",
        body: "Il progetto nasce in un momento di forte crisi del settore automotive, quando il mercato inizia a mettere in discussione il modello della proprietà.\n\nHorizon Automotive — player nel noleggio a lungo termine — aveva bisogno di una campagna capace di intercettare questo cambiamento e trasformarlo in un'opportunità di posizionamento: non rincorrere il mercato, ma anticiparne la direzione.",
      },
      {
        title: "La strategia",
        body: "L'obiettivo era ridefinire culturalmente il concetto stesso di mobilità. Non più l'auto come bene da possedere, ma come servizio — flessibile, accessibile, su misura.\n\nIl racconto doveva funzionare su due livelli in parallelo: parlare al consumatore finale e al mondo business, intercettando un bisogno di cambiamento reale in entrambi. Da questa lettura nasce il claim: C'è chi cambia auto. C'è chi cambia tutto.",
      },
      {
        title: "Il formato narrativo",
        body: "Il claim diventa il motore di uno storytelling che segue persone reali che non si limitano a sostituire un mezzo, ma trasformano il loro rapporto con la mobilità.\n\nUn format volutamente umano e narrativo, lontano dai codici estetici classici del settore automotive — niente asfalto bagnato, niente curve panoramiche. Al centro ci sono le persone e le loro scelte, non la macchina.",
      },
      {
        title: "Il piano media",
        body: "La campagna è stata distribuita su un ecosistema multi-touchpoint coerente: uno spot TV da 15 secondi su Rai e Sky, annunci stampa declinati sia in chiave B2C che B2B, un annuncio radio su Spotify, DOOH a Milano e attività sui social media.\n\nOgni canale ha mantenuto la stessa voce strategica, adattandosi al contesto e al target senza perdere riconoscibilità.",
      },
    ],
    externalLink: [
      {
        label: "Leggi l'articolo su Engage",
        url: "https://engage.it/agenzie/italiaonline-firma-la-campagna-integrata-di-horizon-automotive.aspx",
      },
      {
        label: "Leggi l'articolo su Mediakey",
        url: "https://mediakey.it/news/la-campagna-di-comunicazione-di-horizon-automotive-vince-il-press-outdoor-promotion-key-award-2025-nella-categoria-automotive-energy/",
      },
    ],
  },
  {
    slug: "visual-identity-spazio",
    title: "Lo spazio in tasca",
    description: "Mini serie - Agenzia Spaziale Italiana",
    cover: "/projects/asi/asi-cover-1.jpg",
    year: "2025",
    client: "Agenzia Spaziale Italiana",
    images: [
      "/projects/asi/asi-immagine-1.jpg",
      "/projects/asi/asi-immagine-2.jpg",
    ],
    fullDescription: [
      {
        title: "Il progetto",
        body: "Lo Spazio in tasca è una miniserie divulgativa in cinque episodi sviluppata per l'Agenzia Spaziale Italiana, con l'obiettivo di dare ad ASI un volto pubblico riconoscibile e consolidarne la reputazione istituzionale.\n\nIl punto di partenza: raccontare lo spazio non come un mondo lontano e inaccessibile, ma come una presenza silenziosa nella vita di tutti i giorni — nelle fotocamere degli smartphone, nei sistemi meteo, nelle operazioni finanziarie, nelle tute degli astronauti firmate Prada e Dainese.",
      },
      {
        title: "Il concept",
        body: "Il titolo dice tutto: lo spazio è già in tasca a ognuno di noi, anche senza saperlo. La serie costruisce un racconto che parte da domande immediate e concrete — E se si spegnessero tutti i satelliti? — per arrivare a spiegare missioni, tecnologie e programmi di ricerca con la stessa chiarezza con cui si racconta qualcosa di familiare.\n\nIl target è ampio: appassionati e neofiti, studenti e ricercatori, giovani professionisti tra i 18 e i 45 anni.",
      },
      {
        title: "Il tono di voce",
        body: "La direzione editoriale ha lavorato su un registro preciso: competente ma curioso, sobrio ma brillante. Non spiegare dall'alto, ma raccontare da dentro.\n\nQuesto si è tradotto in scelte concrete: metafore al posto di definizioni tecniche, dati trattati come uncini narrativi da valorizzare graficamente piuttosto che liste di cifre, ritmo costruito nella struttura delle frasi anziché negli aggettivi. I reference editoriali — da Barbero ad Alberto Angela, da Massimo Polidoro a Michela Murgia — danno la misura dell'ambizione: divulgazione di qualità, senza mai scendere a patti con la banalizzazione.",
      },
      {
        title: "I cinque episodi",
        body: "Ogni puntata parte da un paradosso o una provocazione per poi aprire su un tema più grande: il blackout satellitare e la dipendenza dallo spazio nella vita quotidiana; i meccanici spaziali dell'orbita bassa e il problema dei detriti; il contributo dell'Italia in oltre 30 missioni nel Sistema Solare — da Rosetta a BepiColombo, da Cassini a ExoMars; lo scambio bidirezionale di tecnologie tra terra e spazio; e infine il ruolo dell'intelligenza artificiale come nuovo carburante per l'esplorazione.",
      },
      {
        title: "La produzione",
        body: "La serie è partita a giugno 2025 con la raccolta dei materiali e la scrittura degli script, per arrivare al go-live il 14 ottobre con il primo episodio e proseguire con un'uscita cadenzata ogni due settimane fino a dicembre.\n\nLa distribuzione ha seguito una strategia multicanale pensata su misura: il canale istituzionale di ASI, i profili social del Presidente Teodoro Valente e una presenza pop-divulgativa su piattaforme come Instagram e YouTube, con contenuti originali — quiz, quote, approfondimenti — a supporto di ogni episodio.",
      },
    ],
    externalLink: {
      label: "Guarda il primo episodio su Instagram",
      url: "https://www.instagram.com/reels/DQE8TYRFS9Q/",
    },
  },
];
