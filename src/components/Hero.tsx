"use client";

import { useRef, useEffect, useCallback } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import styles from "./Hero.module.css";

export default function Hero() {
  const { lang } = useLang();
  const tr = t(lang);
  const heroRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const currentPos = useRef({ x: 0.5, y: 0.5 });

  const animate = useCallback(() => {
    const blob = blobRef.current;
    if (!blob) return;

    currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.05;
    currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.05;

    blob.style.left = `${currentPos.current.x * 100}%`;
    blob.style.top = `${currentPos.current.y * 100}%`;

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      mousePos.current.x = (e.clientX - rect.left) / rect.width;
      mousePos.current.y = (e.clientY - rect.top) / rect.height;
    };

    hero.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      hero.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <>
      <section ref={heroRef} className={styles.hero}>
        <div className={styles.gradientContainer}>
          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.blob3} />
          <div ref={blobRef} className={styles.blobCursor} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            &ldquo;Everything I do is for the 17-year-old version of myself.&rdquo;
          </h1>
          <p className={styles.author}>— Virgil Abloh</p>
          <p className={styles.subtitle}>{tr.hero.subtitle}</p>
        </div>
      </section>
      <div className={styles.spacer} />
    </>
  );
}
