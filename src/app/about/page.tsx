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
          <h1 className={styles.title}>
            Progetto esperienze visive che connettono brand e persone.
          </h1>
          <p className={styles.text}>
            Sono Marco Castellana, Art Director con base in Italia. Il mio
            lavoro si muove tra brand identity, editorial design e direzione
            creativa, con un approccio che mette al centro la chiarezza visiva e
            la coerenza narrativa.
          </p>
          <p className={styles.text}>
            Credo che il design migliore nasca dall&apos;ascolto: capire
            l&apos;essenza di un progetto, le persone a cui si rivolge e il
            contesto in cui vive. Ogni dettaglio — dalla scelta tipografica alla
            palette cromatica — è una decisione consapevole al servizio della
            storia da raccontare.
          </p>
          <p className={styles.text}>
            Ho lavorato con realtà di diversa natura e dimensione, sempre con la
            stessa attenzione alla qualità e alla cura del risultato finale.
          </p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Competenze</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>Art Direction</li>
              <li className={styles.listItem}>Brand Identity</li>
              <li className={styles.listItem}>Visual Design</li>
              <li className={styles.listItem}>Editorial Design</li>
              <li className={styles.listItem}>Packaging Design</li>
              <li className={styles.listItem}>Creative Direction</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Strumenti</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>Adobe Creative Suite</li>
              <li className={styles.listItem}>Figma</li>
              <li className={styles.listItem}>After Effects</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
