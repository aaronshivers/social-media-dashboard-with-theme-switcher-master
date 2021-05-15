import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { Container } from './App.styles';
import Dashboard from './Dashboard';
import styleSettings from './styleSettings';

const { themes } = styleSettings;

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (
      prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes[theme]}>
        <Container>
          <Dashboard toggleTheme={toggleTheme} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
