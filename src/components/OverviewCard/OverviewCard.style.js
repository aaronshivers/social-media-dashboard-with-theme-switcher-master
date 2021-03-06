import styled from 'styled-components';
import { darken, lighten } from 'polished';
import styleSettings from '../../styleSettings';

const { breakPoints, colors } = styleSettings;

const Container = styled.div`
  background-color: ${({ active, theme }) => (
    active ? (
      theme.id === 'light' ? (
        darken(0.05, theme.bgCard)
      ) : (
        lighten(0.05, theme.bgCard)
      )
    ) : (
      theme.bgCard
    )
  )};
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  font-size: 1.3rem;

  @media (min-width: ${breakPoints.desktop}) {
    margin: 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  align-items: flex-end;

  &:last-child {
    margin: 0 2rem 2rem
  }
`;

const Count = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

const Type = styled.span`
  color: ${({ theme }) => theme.textAlt};
  font-weight: bold;
`;

const Change = styled.span`
  color: ${({ direction }) => (direction === 'up' ? colors.limeGreen : colors.brightRed)};
  align-items: center;
  display: flex;
  font-weight: bold;

  > img {
    margin-right: .5rem;
    height: .75rem;
    width: .75rem;
  }
`;

export {
  Container,
  Row,
  Count,
  Type,
  Change,
};
