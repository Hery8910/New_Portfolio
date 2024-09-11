import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Education.module.css";
import { Button } from "../Button";
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
    <>
      <main className={styles.main}>
        <p className={styles.p}>{t("education.aboutMessage")}</p>
        <div>
          {isOpen ? (
            <div className={styles.showPdf}>
              <Button
                className={styles.closeButton}
                label={"X"}
                onClick={handelClose}
              />
              <iframe
                className={styles.iframe}
                src={t("education.cv.link")}
                width="110%"
                height="100%"
              />
            </div>
          ) : (
            <Button
            className={styles.button}
              label={`${t("education.cv.show")} CV`}
              onClick={handelOpen}
            />
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
    </>
  );
}
