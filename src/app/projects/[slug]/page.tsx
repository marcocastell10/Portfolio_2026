import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProjectContent from "../../../components/ProjectContent";
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
        <ProjectContent
          project={project}
          prevProject={prevProject ? { slug: prevProject.slug, title: prevProject.title } : null}
          nextProject={nextProject ? { slug: nextProject.slug, title: nextProject.title } : null}
        />
      </main>
      <Footer />
    </>
  );
}
