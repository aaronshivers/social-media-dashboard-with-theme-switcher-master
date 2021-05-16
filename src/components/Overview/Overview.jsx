import React, { useState } from 'react';
import { Container, Heading } from './Overview.styles';
import { overviews } from '../../assets/data';
import OverviewCard from '../OverviewCard';

const Overview = () => (
  <>
    <Heading>
      Overview - Today
    </Heading>
    <Container>
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
    </Container>
  </>
);

Overview.propTypes = {};

export default Overview;
