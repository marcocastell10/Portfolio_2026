"use client";

import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import styles from "../app/about/about.module.css";

export default function AboutContent() {
  const { lang } = useLang();
  const tr = t(lang);
  const about = tr.aboutPage;

  return (
    <div className={styles.container}>
      <p className={styles.label}>{about.label}</p>
      {about.intro.map((text, i) => (
        <p key={i} className={styles.text}>{text}</p>
      ))}

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{about.studiesTitle}</h2>
        <div className={styles.studyList}>
          {about.studies.map((study, i) => (
            <div key={i} className={styles.studyItem}>
              <div>
                <p className={styles.studyTitle}>{study.title}</p>
                <p className={styles.studyPlace}>{study.place}</p>
              </div>
              <span className={styles.studyYears}>{study.years}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{about.skillsTitle}</h2>
        <ul className={styles.list}>
          {about.skills.map((skill, i) => (
            <li key={i} className={styles.listItem}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{about.toolsTitle}</h2>
        <ul className={styles.list}>
          {about.tools.map((tool, i) => (
            <li key={i} className={styles.listItem}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
