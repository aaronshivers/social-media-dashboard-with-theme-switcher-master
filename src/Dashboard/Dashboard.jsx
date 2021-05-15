import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ toggleTheme }) => (
  <div>
    <button type="button" onClick={toggleTheme}>toggle theme</button>
  </div>
);

Dashboard.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Dashboard;
