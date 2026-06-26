"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import type { Project } from "../data/projects";
import styles from "../app/projects/[slug]/project.module.css";

interface Props {
  project: Project;
  prevProject: { slug: string; title: string } | null;
  nextProject: { slug: string; title: string } | null;
}

export default function ProjectContent({ project, prevProject, nextProject }: Props) {
  const { lang } = useLang();
  const tr = t(lang);

  const fullDescription =
    lang === "en" && project.fullDescriptionEn
      ? project.fullDescriptionEn
      : project.fullDescription;

  const externalLink =
    lang === "en" && project.externalLinkEn
      ? project.externalLinkEn
      : project.externalLink;

  return (
    <>
      <Link href="/#lavori" className={styles.backLink}>
        &larr; {tr.projectPage.allProjects}
      </Link>

      <div className={styles.coverWrapper}>
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className={styles.coverImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.details}>
            <span className={styles.detailItem}>{project.year}</span>
            <span className={styles.detailDivider}>/</span>
            <span className={styles.detailItem}>{project.client}</span>
          </div>
        </div>
        {typeof fullDescription === "string" ? (
          <p className={styles.description}>{fullDescription}</p>
        ) : (
          <div className={styles.descriptionSections}>
            {fullDescription.map((section, i) => (
              <div key={i} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.body.split("\n\n").map((paragraph, j) => (
                  <p key={j} className={styles.description}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
        {externalLink && (
          <div className={styles.externalLinks}>
            {(Array.isArray(externalLink) ? externalLink : [externalLink]).map(
              (link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        )}
      </div>

      <div className={styles.imageGrid}>
        {project.images.map((src, i) => (
          <div key={i} className={styles.gridImage}>
            <Image
              src={src}
              alt={`${project.title} — ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <nav className={styles.nav}>
        <div>
          {prevProject && (
            <Link
              href={`/projects/${prevProject.slug}`}
              className={styles.navLink}
            >
              <span className={styles.navLabel}>&larr; {tr.projectPage.previous}</span>
              <span className={styles.navTitle}>{prevProject.title}</span>
            </Link>
          )}
        </div>
        <div>
          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className={styles.navLink}
              style={{ textAlign: "right" }}
            >
              <span className={styles.navLabel}>{tr.projectPage.next} &rarr;</span>
              <span className={styles.navTitle}>{nextProject.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
