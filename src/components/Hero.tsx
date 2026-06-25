import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Creo identità visive che raccontano storie e lasciano il segno.
        </h1>
        <p className={styles.subtitle}>Art Director & Visual Designer</p>
      </div>
    </section>
  );
}
