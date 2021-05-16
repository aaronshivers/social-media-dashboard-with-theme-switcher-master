import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Overview from '../Overview';
import Totals from '../Totals';
import { Container } from './Dashboard.styles';

const Dashboard = ({ theme, setTheme }) => (
  <Container>
    <Header theme={theme} setTheme={setTheme} />
    <Totals />
    <Overview />
  </Container>
);

Dashboard.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Dashboard;
