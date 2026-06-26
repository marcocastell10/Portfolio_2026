import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.name}>Marco Castellana</p>
          <p className={styles.role}>Art Director</p>
          <div className={styles.contactGroup} style={{ marginTop: 24 }}>
            <span className={styles.contactLabel}>Email</span>
            <a
              href="mailto:marco.castellana5e@gmail.com"
              className={styles.contactLink}
            >
              marco.castellana5e@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/marco-castellana99"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Marco Castellana
          </p>
        </div>
      </div>
    </footer>
  );
}
