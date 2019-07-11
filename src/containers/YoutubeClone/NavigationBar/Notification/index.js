import React from 'react';
import PropTypes from 'prop-types';
import { NavIconButton } from 'components/NavIconButton';
import Dropdown from 'components/Dropdown';

const customStyle = {
  right: '0px',
  width: '480px',
};

const Notification = ({
  themeType,
}) => (
  <Dropdown
    menu={<div>menu</div>}
    customStyle={customStyle}
  >
    <NavIconButton themeType={themeType}>
      <i className="fas fa-bell" />
    </NavIconButton>
  </Dropdown>
);

Notification.propTypes = {
  themeType: PropTypes.string,
};

Notification.defaultProps = {
  themeType: 'lightTheme',
};

export default Notification;
