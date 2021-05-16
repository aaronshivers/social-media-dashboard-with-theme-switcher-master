import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Arrow,
  Body,
  Border,
  Change,
  Container,
  Count,
  Footer,
  Header,
  Logo,
  Type,
  User,
} from './TotalCard.styles';

const TotalCard = ({
  logo, user, count, change, type, direction, arrow, social,
}) => {
  const [active, setActive] = useState(false);

  return (
    <Border
      social={social}
      onClick={() => setActive((prevState) => !prevState)}
    >
      <Container
        active={active}
      >
        <Header>
          <Logo src={logo} />
          <User>{user}</User>
        </Header>
        <Body>
          <Count>{count}</Count>
          <Type>{type}</Type>
        </Body>
        <Footer direction={direction}>
          <Arrow src={arrow} alt="" />
          <Change>{change}</Change>
        </Footer>
      </Container>
    </Border>
  );
};

TotalCard.propTypes = {
  logo: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired,
};

export default TotalCard;
