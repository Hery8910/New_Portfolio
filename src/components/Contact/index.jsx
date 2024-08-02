import React from "react";
import styles from "./Contact.module.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>{t("cta.message")}</h2>
      <h3 className={styles.h3}>{t("cta.message2")}</h3>
      <ul className={styles.ul}>
        <li>
        
          <a className={styles.a} href={`mailto:${t("cta.email")}`} target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a className={styles.a} href={t("cta.linkedin")} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </section>
  );
}
