import React from "react";
import { Link } from "../Link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  return (
    <>
      <aside className={styles.aside}>
        <picture className={styles.picture}>
          <source className={styles.img} srcSet="/images/Profil_Movil.webp" media="(max-width: 800px)"/>
          <img
            className={styles.img}
            src="/images/Profil_Desktop.webp"
            alt="Profil picture of Heriberto Santana"
          />
        </picture>

      </aside>
      <main className={styles.main}>
        <h3>{t("header.greeting")}</h3>
        <h1>Heriberto Santana</h1>
        <h2 className={styles.h2}>{t("header.description")}</h2>
        <div className={styles.div}>
          <Link
            href="https://github.com/Hery8910"
            ariaLabel="Link to Github profile"
            icon={<FaGithub />}
          />
          <Link
            href="https://www.linkedin.com/in/heriberto-santana-solsona-7366342b2/"
            ariaLabel="Link to linkedin profile"
            icon={<FaLinkedin />}
          />
        </div>
      </main>
    </>
  );
}
