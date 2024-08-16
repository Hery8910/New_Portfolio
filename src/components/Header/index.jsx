import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Header.module.css";
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <div>
        <img className={styles.img} src="/images/Profil.webp" alt="Picture of Heriberto Santana" />
      </div>
      <div>
        <p className={styles.p}>{t('header.greeting')}</p>
        <h1 className={styles.h1}>Heriberto Santana</h1>
        <h2 className={styles.h2}>{t('header.description')}</h2>
        <div className={styles.div}>
        <a
          className={styles.a}
          href="https://github.com/Hery8910"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Github profile"
        >
          <FaGithub />
        </a>
        <a
          className={styles.a}
          href="https://www.linkedin.com/in/heriberto-santana-solsona-7366342b2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to linkedin profile"
        >
          <FaLinkedin />
        </a>
        </div>
      </div>
    </main>
  );
}
