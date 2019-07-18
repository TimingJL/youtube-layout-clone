import React from 'react';
import styled from 'styled-components';

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
  .sidebar-menu__menu-item-icon {
    margin-right: 24px;
    font-size: 18px;
    color: ${(props) => props.theme.sidebar.iconColor};
    width: 24px;
    text-align: center;
  }
  .sidebar-menu__menu-item-text {
    font-size: 14px;
    color: ${(props) => props.theme.sidebar.largeMenuColor};
  }
  &:hover {
    background: ${(props) => props.theme.sidebar.iconBackgroundHover};
  }
  &:active {
    background: ${(props) => props.theme.sidebar.iconBackgroundActive};
  }
`;

const LargeSideBarMenu = () => (
  <>
    <MenuContainer>
      <MenuItem>
        <i className="fas fa-home sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">首頁</div>
      </MenuItem>
      <MenuItem>
        <i className="fab fa-hotjar sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">發燒影片</div>
      </MenuItem>
      <MenuItem>
        <i className="fab fa-youtube sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">訂閱內容</div>
      </MenuItem>
    </MenuContainer>
    <MenuContainer>
      <MenuItem>
        <i className="fas fa-folder sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">媒體庫</div>
      </MenuItem>
      <MenuItem>
        <i className="fas fa-history sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">觀看紀錄</div>
      </MenuItem>
      <MenuItem>
        <i className="fas fa-clock sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">稍後觀看</div>
      </MenuItem>
      <MenuItem>
        <i className="fas fa-thumbs-up sidebar-menu__menu-item-icon" />
        <div className="sidebar-menu__menu-item-text">喜歡的影片</div>
      </MenuItem>
    </MenuContainer>
  </>
);

export default LargeSideBarMenu;
