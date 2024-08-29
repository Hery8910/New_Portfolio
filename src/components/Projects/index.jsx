import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";

export function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <header>
        <h1 className={styles.h1}>{t("nav.projects")}</h1>
      </header>
      <main className={styles.main}>
        <aside className={styles.aside}>
          <img
            className={styles.img}
            src={t("projects.project1.image")}
            alt={t("projects.project1.name")}
          />
        </aside>
        <section className={styles.section}>
          <h2 className={styles.h2}>{t("projects.project1.name")}</h2>
          <p className={styles.p}>{t("projects.project1.description")}</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a
                className={styles.a}
                href={t("projects.project1.github")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("projects.project1.info")}
                {t("projects.project1.name")}
                <FaGithub className={styles.icon} />
              </a>
            </li>
            <li className={styles.li}>
              <a
                className={styles.a}
                href={t("projects.project1.live")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("projects.project1.info")}
                {t("projects.project1.name")}
                <FaExternalLinkAlt className={styles.icon} />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
