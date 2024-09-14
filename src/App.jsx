import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Recommendation } from "./components/Recommendation";
import { Footer } from "./components/Footer";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const { t } = useTranslation();
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <nav>
        <NavBar toggleTheme={toggleTheme} />
      </nav>
      <main>
        <header id="home">
          <Header />
        </header>
        <section id="projects">
          <h1>{t("nav.projects")}</h1>
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="recommendation">
          <h1>{t("recommendations.title")}</h1>
          <Recommendation
            name={t("recommendations.recommendation1.name")}
            title={t("recommendations.recommendation1.title")}
            recommendation={t(
              "recommendations.recommendation1.recommendation",
              { returnObjects: true }
            )}
          />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </ThemeProvider>
  );
};

export default App;
