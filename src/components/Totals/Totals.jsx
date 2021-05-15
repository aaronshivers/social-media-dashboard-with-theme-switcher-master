import React from 'react';
import Card from '../Card';
import { totals } from '../../assets/data';

const Totals = (props) => (
  <div>
    {
      totals.map(({
        logo, user, count, change, type, direction, arrow, social,
      }) => (
        <Card
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
  </div>
);

Totals.propTypes = {};

export default Totals;
