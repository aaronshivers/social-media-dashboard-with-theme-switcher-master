import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Change,
  Container,
  Count,
  Row,
  Type,
} from './OverviewCard.style';

const OverviewCard = ({
  type, logo, count, arrow, change, direction,
}) => {
  const [active, setActive] = useState(false);

  return (
    <Container
      active={active}
      onClick={() => setActive((prevState) => !prevState)}
    >
      <Row>
        <Type>{type}</Type>
        <img src={logo} alt="" />
      </Row>
      <Row>
        <Count>{count}</Count>
        <Change direction={direction}>
          <img src={arrow} alt="" />
          <span>
            {change}
          </span>
        </Change>
      </Row>
    </Container>
  );
};

OverviewCard.propTypes = {
  type: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default OverviewCard;
