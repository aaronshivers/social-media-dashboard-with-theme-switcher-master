import styled from 'styled-components';
import { darken, lighten } from 'polished';
import styleSettings from '../../styleSettings';

const { breakPoints, colors } = styleSettings;

const Border = styled.div`
  margin: 2rem 0;
  padding-top: .5rem;
  border-radius: .5rem;

  ${({ social }) => {
    switch (social) {
      case 'instagram':
        return `background-image: linear-gradient(to right, ${colors[social].start}, ${colors[social].end})`;
      default:
        return `background-color: ${colors[social]}`;
    }
  }};
  
  @media (min-width: ${breakPoints.desktop}) {
    //width: 322.5px;
    //height: 322.5px;
  }
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 0 0 .5rem .5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  :active {
    background-color: ${({ theme }) => (
    theme.id === 'light' ? (
      darken(0.05, theme.bgCard)
    ) : (
      lighten(0.05, theme.bgCard)
    ))};
  }

  @media (min-width: ${breakPoints.desktop}) {
    //width: 322.5px;
    height: 208px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ direction }) => (direction === 'up' ? colors.limeGreen : colors.brightRed)};
`;

const Logo = styled.img`
  margin-right: 1rem;
`;

const User = styled.span`
  color: ${({ theme }) => theme.textAlt};
  font-weight: bold;
  font-size: 1.3rem;

`;

const Count = styled.span`
  font-size: 5.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textDefault};

`;

const Type = styled.p`
  text-transform: uppercase;
  letter-spacing: .5rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textAlt};
`;

const Arrow = styled.img`
  height: .75rem;
  width: .75rem;
  margin-right: .5rem;
`;

const Change = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

export {
  Border,
  Container,
  Header,
  Body,
  Footer,
  Logo,
  User,
  Count,
  Change,
  Type,
  Arrow,
};
