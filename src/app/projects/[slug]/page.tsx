import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../data/projects";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./project.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Marco Castellana`,
    description: project.description,
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Header />
      <main className={styles.page}>
        <Link href="/#lavori" className={styles.backLink}>
          &larr; Tutti i progetti
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
          <p className={styles.description}>{project.fullDescription}</p>
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
                <span className={styles.navLabel}>&larr; Precedente</span>
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
                <span className={styles.navLabel}>Successivo &rarr;</span>
                <span className={styles.navTitle}>{nextProject.title}</span>
              </Link>
            )}
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}
