import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { Container } from './App.styles';
import Dashboard from './components/Dashboard';
import styleSettings from './styleSettings';

const { themes } = styleSettings;

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes[theme]}>
        <Container>
          <Dashboard theme={theme} setTheme={setTheme} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
