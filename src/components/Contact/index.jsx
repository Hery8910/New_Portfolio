import React from "react";
import { Link } from "../Link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("cta.message2")}</h2>
      <ul className={styles.ul}>
        <li>
          <Link
            href={`mailto:${t("cta.email")}`}
            ariaLabel={"Link to Email"}
            icon={<FaEnvelope />}
          />
        </li>
        <li>
          <Link
            href={t("cta.linkedin")}
            ariaLabel={"Link to Linkedin profile"}
            icon={<FaLinkedin />}
          />
        </li>
      </ul>
    </>
  );
}
