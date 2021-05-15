import styled, { createGlobalStyle } from 'styled-components';
import styleSettings from './styleSettings';

const { sizes, breakPoints } = styleSettings;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: ${sizes.medium};
    font-family: 'Inter', sans-serif;
  }
  button {
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }
`;

const Container = styled.div`
  min-height: 100%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textDefault};
  padding: 5rem 3rem;
  //margin: 0 auto;
  // padding: ${sizes.extraLarge};
  
  // @media(min-width: ${breakPoints.desktop}) {
  //   display: flex;
  //   align-items: center;
  //   width: 75vw;
  //   height: 100vh;
  // }
`;

export {
  GlobalStyle as default,
  Container,
};
