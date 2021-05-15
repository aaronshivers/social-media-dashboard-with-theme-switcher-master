import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Overview from '../Overview';
import Totals from '../Totals';

const Dashboard = ({ theme, setTheme }) => (
  <div>
    <Header theme={theme} setTheme={setTheme} />
    <Totals />
    <Overview />
  </div>
);

Dashboard.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Dashboard;
