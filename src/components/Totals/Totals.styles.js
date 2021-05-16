import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const { breakPoints } = styleSettings;

const Container = styled.div`
  @media (min-width: ${breakPoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 30px 30px;
    grid-template-areas:
    ". . . .";
  }
`;

export {
  Container,
};
