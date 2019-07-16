import React from 'react';
import PropTypes from 'prop-types';
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
  color: ${(props) => props.theme[props.themeType].sidebar.color};
  &:hover {
    background: ${(props) => props.theme[props.themeType].sidebar.iconBackgroundHover};
  }
  .narrow-sidebar__icon {
    font-size: 18px;
    margin-bottom: 6px;
    color: ${(props) => props.theme[props.themeType].sidebar.iconColor};
  }
`;

const NarrowSideBarMenu = ({
  themeType,
}) => (
  <>
    <Icon themeType={themeType}>
      <i className="fas fa-home narrow-sidebar__icon" />
      <div>首頁</div>
    </Icon>
    <Icon themeType={themeType}>
      <i className="fab fa-hotjar narrow-sidebar__icon" />
      <div>發燒影片</div>
    </Icon>
    <Icon themeType={themeType}>
      <i className="fab fa-youtube narrow-sidebar__icon" />
      <div>訂閱內容</div>
    </Icon>
    <Icon themeType={themeType}>
      <i className="fas fa-folder narrow-sidebar__icon" />
      <div>媒體庫</div>
    </Icon>
  </>
);

NarrowSideBarMenu.propTypes = {
  themeType: PropTypes.string,
};

NarrowSideBarMenu.defaultProps = {
  themeType: 'lightTheme',
};

export default NarrowSideBarMenu;
