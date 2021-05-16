import React from 'react';
import TotalCard from '../TotalCard';
import { totals } from '../../assets/data';

const Totals = () => (
  <div>
    {
      totals.map(({
        logo, user, count, change, type, direction, arrow, social,
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
  </div>
);

Totals.propTypes = {};

export default Totals;
