import { awards } from "../data/awards";
import MediakeyLogo from "./MediakeyLogo";
import styles from "./Awards.module.css";

export default function Awards() {
  return (
    <section className={styles.section}>
      <p className={styles.sectionTitle}>Awards</p>
      <div className={styles.list}>
        {awards.map((award, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.logoWrapper}>
              {award.logo === "/awards/mediakey-logo.svg" ? (
                <MediakeyLogo className={styles.logo} />
              ) : award.logoDark ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={award.logo}
                    alt={award.name}
                    className={`${styles.logo} ${styles.logoLight}`}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={award.logoDark}
                    alt={award.name}
                    className={`${styles.logo} ${styles.logoDark}`}
                  />
                </>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={award.logo}
                  alt={award.name}
                  className={styles.logo}
                />
              )}
            </div>
            <span className={styles.category}>{award.category}</span>
            <span className={styles.project}>{award.project}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
