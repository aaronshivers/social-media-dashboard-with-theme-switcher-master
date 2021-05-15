import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Line, TotalFollowers } from './Header.styles';
import 'react-toggle/style.css';
import ThemeToggle from '../ThemeToggle';

const Header = ({ theme, setTheme }) => (
  <>
    <Heading>
      social media dashboard
    </Heading>
    <TotalFollowers>
      total followers: 23,004
    </TotalFollowers>
    <Line />
    <ThemeToggle theme={theme} setTheme={setTheme} />
  </>
);

Header.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
