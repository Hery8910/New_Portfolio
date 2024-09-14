import React, { useState } from "react";
import { Link } from "../Link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Button } from "react-scroll";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import styles from "./Projects.module.css";

export function Projects() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className={styles.main}>
      <section className={styles.card}>
        <div>
          <h2 className={styles.h2}>{projects[currentIndex].name}</h2>
          <img
            className={styles.img}
            src={projects[currentIndex].image}
            alt={projects[currentIndex].name}
          />
        </div>
        <div className={styles.description}>
          <p className={styles.p}>{projects[currentIndex].description}</p>
          <ul className={styles.ul}>
            <li>
              <Link
                href={projects[currentIndex].github}
                ariaLabel={"Link to the project on Github"}
                icon={<FaGithub />}
              />
            </li>
            <li>
              <Link
                href={projects[currentIndex].live}
                ariaLabel={"Link to the live project"}
                icon={<FaExternalLinkAlt />}
              />
            </li>
          </ul>
        </div>
      </section>
      <div>
        <Button className={styles.navButton} onClick={handlePrev}>
          <GrPrevious />
        </Button>
        <Button className={styles.navButton} onClick={handleNext}>
          <GrNext />
        </Button>
      </div>
    </main>
  );
}
