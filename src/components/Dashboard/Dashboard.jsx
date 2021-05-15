import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const Dashboard = ({ theme, setTheme }) => (
  <div>
    <Header theme={theme} setTheme={setTheme} />
  </div>
);

Dashboard.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Dashboard;
