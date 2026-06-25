import Link from "next/link";
import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>About</p>
        <p className={styles.text}>
          Art Director con una passione per il design che comunica. Credo nel
          potere delle idee semplici, nella cura dei dettagli e nella forza di
          un&apos;identità visiva coerente.
        </p>
        <Link href="/about" className={styles.link}>
          Scopri di più
        </Link>
      </div>
    </section>
  );
}
