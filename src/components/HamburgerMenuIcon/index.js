import React from 'react';
import PropTypes from 'prop-types';
import { NavIconButton } from 'components/NavIconButton';

const HamburgerMenuIcon = ({
  themeType,
}) => (
  <NavIconButton themeType={themeType}>
    <i className="fas fa-bars" />
  </NavIconButton>
);

HamburgerMenuIcon.propTypes = {
  themeType: PropTypes.string,
};

HamburgerMenuIcon.default = {
  themeType: 'lightTheme',
};

export default HamburgerMenuIcon;
