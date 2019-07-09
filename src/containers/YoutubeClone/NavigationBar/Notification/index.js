import React from 'react';
import PropTypes from 'prop-types';
import { NavIconButton } from 'components/NavIconButton';

const Notification = ({
  themeType,
}) => (
  <NavIconButton themeType={themeType}>
    <i className="fas fa-bell" />
  </NavIconButton>
);

Notification.propTypes = {
  themeType: PropTypes.string,
};

Notification.defaultProps = {
  themeType: 'lightTheme',
};

export default Notification;
