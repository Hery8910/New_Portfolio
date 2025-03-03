import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
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
        <NavBar toggleTheme={toggleTheme} />
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
        <footer>
          <Footer />
        </footer>
      </main>
    </ThemeProvider>
  );
};

export default App;
