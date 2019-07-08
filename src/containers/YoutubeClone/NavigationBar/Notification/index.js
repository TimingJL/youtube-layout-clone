import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
} from '../Styled';

const Notification = ({
  themeType,
}) => (
  <IconButton themeType={themeType}>
    <i className="fas fa-bell" />
  </IconButton>
);

Notification.propTypes = {
  themeType: PropTypes.string,
};

Notification.defaultProps = {
  themeType: 'lightTheme',
};

export default Notification;
