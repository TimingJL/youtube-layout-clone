import React from 'react';
import PropTypes from 'prop-types';
import { NavIconButton } from 'components/NavIconButton';

const BackButton = ({
  themeType,
}) => (
  <NavIconButton themeType={themeType}>
    <i className="fas fa-arrow-left" />
  </NavIconButton>
);

BackButton.propTypes = {
  themeType: PropTypes.string,
};

BackButton.defaultProps = {
  themeType: 'lightTheme',
};

export default BackButton;
