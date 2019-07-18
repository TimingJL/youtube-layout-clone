import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  height: 76px;
  cursor: pointer;
  color: ${(props) => props.theme.sidebar.color};
  &:hover {
    background: ${(props) => props.theme.sidebar.iconBackgroundHover};
  }
  .narrow-sidebar__icon {
    font-size: 18px;
    margin-bottom: 6px;
    color: ${(props) => props.theme.sidebar.iconColor};
  }
`;

const NarrowSideBarMenu = () => (
  <>
    <Icon>
      <i className="fas fa-home narrow-sidebar__icon" />
      <div>首頁</div>
    </Icon>
    <Icon>
      <i className="fab fa-hotjar narrow-sidebar__icon" />
      <div>發燒影片</div>
    </Icon>
    <Icon>
      <i className="fab fa-youtube narrow-sidebar__icon" />
      <div>訂閱內容</div>
    </Icon>
    <Icon>
      <i className="fas fa-folder narrow-sidebar__icon" />
      <div>媒體庫</div>
    </Icon>
  </>
);

export default NarrowSideBarMenu;
