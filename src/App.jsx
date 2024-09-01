import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import {Recommendation} from './components/Recommendation'
import { Footer } from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const { t } = useTranslation();
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };



  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <main>
        <NavBar toggleTheme={toggleTheme} />
        <section id="home">
          <Header />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="recommendation">
      <h1 style={{paddingLeft: "1rem"}}>{t("recommendations.title")}</h1>
          <Recommendation  name={t("recommendations.recommendation1.name")} title={t("recommendations.recommendation1.title")} recommendation={t('recommendations.recommendation1.recommendation', { returnObjects: true })}/>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </ThemeProvider>
  );
};

export default App;
