import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const { sizes, breakPoints } = styleSettings;

const Container = styled.div`
  // height: 100%;
    // background-color: ${({ theme }) => theme.bg};
    // color: ${({ theme }) => theme.textDefault};
  // //margin: 0 auto;
    // // padding: ${sizes.extraLarge};
  //
    // // @media(min-width: ${breakPoints.desktop}) {
  // //   display: flex;
  // //   align-items: center;
  // //   width: 75vw;
  // //   height: 100vh;
  // // }
`;

const Heading = styled.h1`
  text-transform: capitalize;
  font-size: ${sizes.extraLarge};
  margin-bottom: 1rem;
`;

const TotalFollowers = styled.p`
  text-transform: capitalize;
  color: ${({ theme }) => theme.textAlt};
  font-weight: bold;
`;

const Line = styled.hr`
  margin: 2.5rem 0;
  border: 1px solid ${({ theme }) => theme.textAlt};
`;

export {
  Container,
  Heading,
  TotalFollowers,
  Line,
};
