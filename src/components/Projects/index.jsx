import React from "react";
import { Link } from "../Link";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";

export function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <main className={styles.main}>
        <section className={styles.img_section}>
          <img
            className={styles.img}
            src={t("projects.project1.image")}
            alt={t("projects.project1.name")}
          />
        </section>
        <section className={styles.section}>
          <h2 className={styles.h2}>{t("projects.project1.name")}</h2>
          <p className={styles.p}>{t("projects.project1.description")}</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link
                href={t("projects.project1.github")}
                ariaLabel={"Link to the project on Github"}
                text={`${t("projects.project1.info")}`}
                icon={<FaGithub />}
              />
            </li>
            <li className={styles.li}>
              <Link
                href={t("projects.project1.live")}
                ariaLabel={"Link to the project on Github"}
                text={`${t("projects.project1.info")}`}
                icon={<FaExternalLinkAlt />}
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
