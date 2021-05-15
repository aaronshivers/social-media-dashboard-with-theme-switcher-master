import React from 'react';
import './ThemeToggle.css';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import { Label, Span } from './ThemeToggle.styles';

const ThemeToggle = ({ setTheme }) => {
  const toggleTheme = () => {
    setTheme((prevTheme) => (
      prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Label htmlFor="toggle">
      <Span>{['dark mode']}</Span>
      <Toggle
        id="toggle"
        onChange={toggleTheme}
        icons={false}
      />
    </Label>
  );
};

ThemeToggle.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;
