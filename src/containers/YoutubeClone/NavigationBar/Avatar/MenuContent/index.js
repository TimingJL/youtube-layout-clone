import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AVATAR_URL } from 'containers/YoutubeClone/NavigationBar/constants';

const MenuContentContainer = styled.div`
  .menu-content__profile-wrapper {
    padding: 16px;
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme[props.themeType].dropdown.borderColor};
  }
  .menu-content__profile-avatar-image {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 16px;
  }
  .menu-content__profile-name {
    font-size: 16px;
    font-weight: 600;
  }
  .menu-content__profile-email {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5rem;
  }
  .menu-content__profile-management {
    font-size: 14px;
    color: #3ea6ff;
    margin: 8px 0px;
    font-weight: 500;
    cursor: pointer;
  }
`;

const MenuContent = ({
  themeType,
}) => (
  <MenuContentContainer themeType={themeType}>
    <div className="menu-content__profile-wrapper">
      <img className="menu-content__profile-avatar-image" src={AVATAR_URL} alt="" />
      <div>
        <div className="menu-content__profile-name">陳泰銘</div>
        <div className="menu-content__profile-email">eefozeo@gmail.com</div>
        <div className="menu-content__profile-management">管理你的 Google 帳戶</div>
      </div>
    </div>
  </MenuContentContainer>
);

MenuContent.propTypes = {
  themeType: PropTypes.string,
};

MenuContent.defaultProps = {
  themeType: 'lightTheme',
};

export default MenuContent;
