import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const { breakPoints } = styleSettings;

const Container = styled.div`
  @media (min-width: ${breakPoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px 30px;
    grid-template-areas:
    ". . . ."
    ". . . .";
  }
`;

const Heading = styled.h2`
  margin: 2rem 0;
  color: ${({ theme }) => theme.textAlt};
  
  @media (min-width: ${breakPoints.desktop}) {
    font-size: 2.5rem;
  }
`;

export {
  Container,
  Heading,
};
