"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const animate = useCallback(() => {
    let current = 0;
    const interval = setInterval(() => {
      const remaining = 100 - current;
      const step = Math.max(0.5, remaining * (0.02 + Math.random() * 0.04));
      current = Math.min(100, current + step);
      setProgress(Math.round(current));

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 300);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return animate();
  }, [animate]);

  return (
    <>
      <div className={`${styles.overlay} ${done ? styles.done : ""}`}>
        <span className={styles.percentage}>{progress}%</span>
        <div className={styles.barWrapper}>
          <div className={styles.bar} style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className={`${styles.content} ${done ? styles.visible : ""}`}>
        {children}
      </div>
    </>
  );
}
