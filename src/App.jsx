import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles/GlobalStyles';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { NavBar } from './components/NavBar'
import {Recommendation} from './components/Recommendation'

const App = () => {
  const [theme, setTheme] = useState('light');
  const { t } = useTranslation();
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <div id="home">
        <Header />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="education">
        <Education />
      </div>
      <div>
      </div>
      {/* <Footer /> */}
    </div>
    </ThemeProvider>
  );
};

export default App;
