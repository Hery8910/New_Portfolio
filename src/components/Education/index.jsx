import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Education.module.css";
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaDownload, FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";

export function Education() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  function handelOpen() {
    setIsOpen(true);
  }
  function handelClose() {
    setIsOpen(false);
  }

  return (
    <section className={styles.section}>
      <main className={styles.main}>
        <h2 className={styles.h2}>{t("education.about")}</h2>
        <p className={styles.p}>{t("education.aboutMessage")}</p>
        <div className={styles.buttons}>
          <a
            className={styles.a}
            href={t("education.cv.link")}
            download="Heriberto_Santana_CV.pdf"
          >
            {t("education.cv.show")} <FaDownload />
          </a>
          {isOpen ? (
            <div className={styles.showPdf}>
              <button  className={styles.closeButton} onClick={handelClose}>X</button>
              <iframe
                className={styles.iframe}
                src={t("education.cv.link")}
                width="110%"
                height="100%"
              />
            </div>
          ) : (
            <button className={styles.showButton} onClick={handelOpen}>
              {t("education.cv.download")}
            </button>
          )}
        </div>
      </main>
      <aside>
        <ul className={styles.ul}>
          <li>
            <ImHtmlFive2 />
          </li>
          <li>
            <TbBrandCss3 />
          </li>
          <li>
            <RiJavascriptLine />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <FaSass />
          </li>
          <li>
            <FaLinux />
          </li>
          <li>
            <FaNodeJs />
          </li>
          <li>
            <SiMongodb />
          </li>
          <li>
            <SiMysql />
          </li>
          <li>
            <FaBootstrap />
          </li>
          <li>
            <FaGitAlt />
          </li>
          <li>
            <IoLogoVercel />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <SiVite />
          </li>
          <li>
            <RiNextjsFill />
          </li>
          <li>
            <SiCanva />
          </li>
          <li>
            <FaFigma />
          </li>
          <li>
            <SiVisualstudio />
          </li>
        </ul>
      </aside>
    </section>
  );
}
