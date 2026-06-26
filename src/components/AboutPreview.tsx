"use client";

import Link from "next/link";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>{tr.aboutPreview.label}</p>
        <p className={styles.text}>{tr.aboutPreview.text}</p>
        <Link href="/about" className={styles.link}>
          {tr.aboutPreview.link}
        </Link>
      </div>
    </section>
  );
}
