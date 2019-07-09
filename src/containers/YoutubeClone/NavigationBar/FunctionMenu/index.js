import React from 'react';
import PropTypes from 'prop-types';
import { NavIconButton } from 'components/NavIconButton';

const FunctionMenu = ({
  themeType,
}) => (
  <NavIconButton themeType={themeType}>
    <i className="fas fa-th" />
  </NavIconButton>
);

FunctionMenu.propTypes = {
  themeType: PropTypes.string,
};

FunctionMenu.defaultProps = {
  themeType: 'lightTheme',
};

export default FunctionMenu;
