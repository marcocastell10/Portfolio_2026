import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          &ldquo;Everything I do is for the 17-year-old version of myself.&rdquo;
        </h1>
        <p className={styles.author}>— Virgil Abloh</p>
        <p className={styles.subtitle}>Marco Castellana — Art Director & Visual Designer</p>
      </div>
    </section>
  );
}
