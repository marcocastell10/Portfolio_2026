"use client";

import { useLang } from "../context/LanguageContext";
import styles from "./LanguageToggle.module.css";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button className={styles.toggle} onClick={toggleLang} aria-label="Switch language">
      <span className={lang === "it" ? styles.active : styles.inactive}>IT</span>
      <span className={styles.divider}>/</span>
      <span className={lang === "en" ? styles.active : styles.inactive}>EN</span>
    </button>
  );
}
