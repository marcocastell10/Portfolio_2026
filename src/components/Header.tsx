"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} onClick={close}>
          MC
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="/#lavori" className={styles.navLink}>
            Lavori
          </Link>
          <Link
            href="/about"
            className={styles.navLink}
            onMouseEnter={() => setShowPhoto(true)}
            onMouseLeave={() => setShowPhoto(false)}
          >
            About
          </Link>
          <ThemeToggle />
        </nav>

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
      </header>

      {showPhoto && (
        <img src="/marco.jpg" alt="Marco Castellana" className={styles.aboutPhoto} />
      )}

      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/#lavori" className={styles.mobileLink} onClick={close}>
            Lavori
          </Link>
          <Link href="/about" className={styles.mobileLink} onClick={close}>
            About
          </Link>
        </nav>
        <div className={styles.mobileTheme}>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
