import React from 'react';
import { NavIconButton } from 'components/NavIconButton';
import Dropdown from 'components/Dropdown';
import MenuContent from './MenuContent';

const customStyle = {
  right: '0px',
  width: '480px',
  height: '642px',
};

const Notification = () => (
  <Dropdown
    id="Notification"
    menu={<MenuContent />}
    customStyle={customStyle}
  >
    <NavIconButton>
      <i className="fas fa-bell" />
    </NavIconButton>
  </Dropdown>
);

export default Notification;
