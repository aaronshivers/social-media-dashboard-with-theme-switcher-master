import React from 'react';
import TotalCard from '../TotalCard';
import { totals } from '../../assets/data';
import { Container } from './Totals.styles';

const Totals = () => (
  <Container>
    {
      totals.map(({
        logo, user, count, change, type, direction, arrow,
        social,
      }) => (
        <TotalCard
          key={social}
          logo={logo}
          user={user}
          count={count}
          change={change}
          type={type}
          direction={direction}
          arrow={arrow}
          social={social}
        />
      ))
    }
  </Container>
);

Totals.propTypes = {};

export default Totals;
