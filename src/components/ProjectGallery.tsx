import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";
import styles from "./ProjectGallery.module.css";

export default function ProjectGallery() {
  return (
    <section id="lavori" className={styles.section}>
      <p className={styles.sectionTitle}>I miei progetti</p>
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
                <span className={styles.overlayText}>Guarda il progetto</span>
              </div>
            </div>
            <div className={styles.info}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
