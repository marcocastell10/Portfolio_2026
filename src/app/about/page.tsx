import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutContent from "../../components/AboutContent";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — Marco Castellana",
  description:
    "Scopri di più su Marco Castellana, Art Director e Visual Designer.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
