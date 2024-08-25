import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";
import styles from "./NavBar.module.css";

export function NavBar({ theme, toggleTheme }) {
  const { t } = useTranslation();
  return (
  
    <nav className={styles.nav}>
      <div className={styles.div}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <LanguageSwitcher />
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="navbar-link"
            aria-label="Link to home-section"
          >
            {t("nav.home")}
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="navbar-link"
            aria-label="Link to projects-section"
          >
            {t("nav.projects")}
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="navbar-link"
            aria-label="Link to contact-section"
          >
            {t("nav.contact")}
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="navbar-link"
            aria-label="Link to education-section"
          >
            {t("nav.education")}
          </Link>
        </li>
      </ul>
    </nav>
    
    
  );
}
