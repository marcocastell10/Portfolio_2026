"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import styles from "./ProjectGallery.module.css";

export default function ProjectGallery() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="lavori" className={styles.section}>
      <p className={styles.sectionTitle}>{tr.projects.sectionTitle}</p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>{tr.projects.viewProject}</span>
              </div>
            </div>
            <div className={styles.info}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {lang === "en" && project.descriptionEn ? project.descriptionEn : project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
