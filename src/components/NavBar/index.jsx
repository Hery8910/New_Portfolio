import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";
import { Contact } from "../Contact";
import styles from './NavBar.module.css'

export function NavBar({ theme, toggleTheme }) {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <header className={styles.header}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <LanguageSwitcher />
      </header>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="home" smooth={true} duration={500} className="navbar-link">
            {t("nav.home")}
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="navbar-link"
          >
            {t("nav.projects")}
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="contact" smooth={true} duration={500} className="navbar-link">
            {t("nav.contact")}
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="navbar-link"
          >
            {t("nav.education")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
