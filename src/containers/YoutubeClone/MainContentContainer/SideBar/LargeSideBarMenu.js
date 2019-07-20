import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isSelected } from './utils';

const MenuContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.dropdown.borderColor};
  padding: 12px 0px;
`;

const MenuItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 24px;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? props.theme.sidebar.iconBackgroundHover : '')};
  .sidebar-menu__menu-item-icon {
    margin-right: 24px;
    font-size: 18px;
    color: ${(props) => (props.isSelected ? props.theme.sidebar.iconActiveColor : props.theme.sidebar.iconColor)};
    width: 24px;
    text-align: center;
  }
  .sidebar-menu__menu-item-text {
    font-size: 14px;
    color: ${(props) => props.theme.sidebar.largeMenuColor};
    font-weight: ${(props) => (props.isSelected ? 600 : 400)};
  }
  &:hover {
    background: ${(props) => props.theme.sidebar.iconBackgroundHover};
  }
  &:active {
    background: ${(props) => props.theme.sidebar.iconBackgroundActive};
  }
`;

const LargeSideBarMenu = ({
  selectedMenuItem,
  handleOnClick,
}) => (
  <>
    <MenuContainer>
      <MenuItem data-menu-item="home" onClick={handleOnClick} isSelected={isSelected('home', selectedMenuItem)}>
        <i className="fas fa-home sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">首頁</div>
      </MenuItem>
      <MenuItem data-menu-item="trending" onClick={handleOnClick} isSelected={isSelected('trending', selectedMenuItem)}>
        <i className="fab fa-hotjar sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">發燒影片</div>
      </MenuItem>
      <MenuItem data-menu-item="subscriptions" onClick={handleOnClick} isSelected={isSelected('subscriptions', selectedMenuItem)}>
        <i className="fab fa-youtube sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">訂閱內容</div>
      </MenuItem>
    </MenuContainer>
    <MenuContainer>
      <MenuItem data-menu-item="library" onClick={handleOnClick} isSelected={isSelected('library', selectedMenuItem)}>
        <i className="fas fa-folder sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">媒體庫</div>
      </MenuItem>
      <MenuItem data-menu-item="history" onClick={handleOnClick} isSelected={isSelected('history', selectedMenuItem)}>
        <i className="fas fa-history sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">觀看紀錄</div>
      </MenuItem>
      <MenuItem data-menu-item="watch-later" onClick={handleOnClick} isSelected={isSelected('watch-later', selectedMenuItem)}>
        <i className="fas fa-clock sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">稍後觀看</div>
      </MenuItem>
      <MenuItem data-menu-item="liked-video" onClick={handleOnClick} isSelected={isSelected('liked-video', selectedMenuItem)}>
        <i className="fas fa-thumbs-up sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">喜歡的影片</div>
      </MenuItem>
    </MenuContainer>
  </>
);

LargeSideBarMenu.propTypes = {
  selectedMenuItem: PropTypes.string,
  handleOnClick: PropTypes.func,
};

LargeSideBarMenu.defaultProps = {
  selectedMenuItem: '',
  handleOnClick: () => {},
};

export default LargeSideBarMenu;
