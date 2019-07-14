import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavIconButton } from 'components/NavIconButton';

const IconStyle = styled.div`
  transform: scale(1.1, 0.8);
`;

const HamburgerMenuIcon = ({
  themeType,
}) => (
  <NavIconButton themeType={themeType}>
    <IconStyle className="fas fa-bars" />
  </NavIconButton>
);

HamburgerMenuIcon.propTypes = {
  themeType: PropTypes.string,
};

HamburgerMenuIcon.default = {
  themeType: 'lightTheme',
};

export default HamburgerMenuIcon;
