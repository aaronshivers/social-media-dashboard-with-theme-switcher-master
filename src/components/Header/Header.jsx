import React from 'react';
import PropTypes from 'prop-types';
import 'react-toggle/style.css';
import { useMediaQuery } from 'react-responsive';
import ThemeToggle from '../ThemeToggle';
import { Heading, Line, TotalFollowers } from './Header.styles';
import { Row } from '../../App.styles';

const Header = ({ theme, setTheme }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });

  return (
    <Row direction={isTabletOrMobile ? 'column' : 'row'}>
      <Row direction="column">
        <Heading>
          social media dashboard
        </Heading>
        <TotalFollowers>
          total followers: 23,004
        </TotalFollowers>
      </Row>
      {
        isTabletOrMobile ? <Line /> : null
      }
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </Row>
  );
};

Header.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
