import React from 'react';
import { Heading } from './Overview.styles';
import { overviews } from '../../assets/data';
import OverviewCard from '../OverviewCard';

const Overview = () => (
  <div>
    <Heading>
      Overview - Today
    </Heading>
    {
      overviews.map(({
        type, logo, count, arrow, change, social, direction,
      }) => (
        <OverviewCard
          key={social + type}
          type={type}
          logo={logo}
          count={count}
          arrow={arrow}
          change={change}
          direction={direction}
        />
      ))
    }
  </div>
);

Overview.propTypes = {};

export default Overview;
