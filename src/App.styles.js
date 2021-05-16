import styled, { createGlobalStyle } from 'styled-components';
import styleSettings from './styleSettings';

const { sizes } = styleSettings;

const GlobalStyle = createGlobalStyle`
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
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
`;

export {
  GlobalStyle as default,
  Container,
  Row,
};
