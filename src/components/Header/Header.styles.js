import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const { sizes, breakPoints } = styleSettings;

const Container = styled.div`
`;

const Heading = styled.h1`
  text-transform: capitalize;
  font-size: ${sizes.extraLarge};
  margin-bottom: 1rem;
  
  @media (min-width: ${breakPoints.desktop}) {
    font-size: 3rem;
  }
`;

const TotalFollowers = styled.p`
  text-transform: capitalize;
  color: ${({ theme }) => theme.textAlt};
  font-weight: bold;
  font-size: 1.5rem;
`;

const Line = styled.hr`
  margin: 2.5rem 0;
  border: 1px solid ${({ theme }) => theme.textAlt};
  background-color: ${({ theme }) => theme.textAlt};
`;

export {
  Container,
  Heading,
  TotalFollowers,
  Line,
};
