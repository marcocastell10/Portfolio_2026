"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} onClick={close}>
        MC
      </Link>

      <div className={styles.desktopNav}>
        <Link href="/#lavori" className={styles.navLink}>
          Lavori
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <ThemeToggle />
      </div>

      <div className={styles.mobileActions}>
        <ThemeToggle />
        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
        >
          <span className={`${styles.burgerLine} ${open ? styles.burgerOpen1 : ""}`} />
          <span className={`${styles.burgerLine} ${open ? styles.burgerOpen2 : ""}`} />
          <span className={`${styles.burgerLine} ${open ? styles.burgerOpen3 : ""}`} />
        </button>
      </div>

      <nav className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <Link href="/#lavori" className={styles.mobileLink} onClick={close}>
          Lavori
        </Link>
        <Link href="/about" className={styles.mobileLink} onClick={close}>
          About
        </Link>
      </nav>
    </header>
  );
}
