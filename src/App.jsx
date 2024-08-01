import React, { useState, useEffect } from 'react';
import {ThemeToggle} from './components/ThemeToggle/ThemeToggle';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Header />
    </ThemeProvider>
  );
};

export default App;
