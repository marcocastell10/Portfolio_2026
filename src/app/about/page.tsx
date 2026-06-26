import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — Marco Castellana",
  description:
    "Scopri di più su Marco Castellana, Art Director e Visual Designer.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.container}>
          <p className={styles.label}>About</p>
          <p className={styles.text}>
            Sono Marco, Art Director con base a Milano.
            Mi occupo di direzione visuale e progettazione di campagne stampa, social e digital ADV, lavorando sull&apos;equilibrio tra estetica e strategia.
          </p>
          <p className={styles.text}>
            Progetto identità visive, contenuti e format per i social — organici e paid — seguendo l&apos;intero processo creativo: dall&apos;idea alla produzione, fino alla declinazione in asset statici e animati. Il mio approccio è pratico, orientato al risultato e attento al contesto in cui i contenuti vivono.
          </p>
          <p className={styles.text}>
            Lavoro quotidianamente con la suite Adobe, con un focus su Photoshop e Illustrator, e utilizzo After Effects per animazioni essenziali ma funzionali. Mi interesso anche di UX/UI, sperimentando con Figma nella progettazione di interfacce e prototipi responsive.
          </p>
          <p className={styles.text}>
            Fuori dal lavoro porto dentro al lavoro quello che mi definisce: sport, cultura visiva, fumetti, videogiochi e un&apos;attenzione costante ai linguaggi digitali e ai trend contemporanei.
            Mi piacciono i progetti che mettono in discussione le soluzioni ovvie e costringono a fare un passo in più.
          </p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Studi</h2>
            <div className={styles.studyList}>
              <div className={styles.studyItem}>
                <div>
                  <p className={styles.studyTitle}>Laurea triennale in Communication Design</p>
                  <p className={styles.studyPlace}>IAAD Bologna — Votazione finale: 108</p>
                </div>
                <span className={styles.studyYears}>2019 – 2022</span>
              </div>
              <div className={styles.studyItem}>
                <div>
                  <p className={styles.studyTitle}>Liceo Artistico — Indirizzo Grafico Pubblicitario</p>
                  <p className={styles.studyPlace}>Liceo A. Venturi, Modena</p>
                </div>
                <span className={styles.studyYears}>2013 – 2018</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Competenze</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>Art Direction</li>
              <li className={styles.listItem}>Brand Identity</li>
              <li className={styles.listItem}>Visual Design</li>
              <li className={styles.listItem}>Editorial Design</li>
              <li className={styles.listItem}>Creative Direction</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Strumenti</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>Adobe Creative Suite</li>
              <li className={styles.listItem}>Figma</li>
              <li className={styles.listItem}>After Effects</li>
              <li className={styles.listItem}>AI Tools (ChatGPT, Midjourney, Firefly)</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
