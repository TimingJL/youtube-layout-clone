import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isSelected } from './utils';

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
  background: ${(props) => (props.isSelected ? props.theme.sidebar.iconBackgroundHover : '')};
  &:hover {
    background: ${(props) => props.theme.sidebar.iconBackgroundHover};
  }
  &:active {
    background: ${(props) => props.theme.sidebar.iconBackgroundActive};
  }
  .narrow-sidebar__icon {
    font-size: 18px;
    margin-bottom: 6px;
    color: ${(props) => (props.isSelected ? props.theme.sidebar.iconActiveColor : props.theme.sidebar.iconColor)};
  }
  .narrow-sidebar__text {
    font-weight: ${(props) => (props.isSelected ? 600 : 400)};
    color: ${(props) => (props.isSelected ? props.theme.sidebar.iconActiveColor : 'currentColor')}
  }
`;

const NarrowSideBarMenu = ({
  selectedMenuItem,
  handleOnClick,
}) => (
  <>
    <Icon data-menu-item="home" onClick={handleOnClick} isSelected={isSelected('home', selectedMenuItem)}>
      <i className="fas fa-home narrow-sidebar__icon" />
      <div className="narrow-sidebar__text">首頁</div>
    </Icon>
    <Icon data-menu-item="trending" onClick={handleOnClick} isSelected={isSelected('trending', selectedMenuItem)}>
      <i className="fab fa-hotjar narrow-sidebar__icon" />
      <div className="narrow-sidebar__text">發燒影片</div>
    </Icon>
    <Icon data-menu-item="subscriptions" onClick={handleOnClick} isSelected={isSelected('subscriptions', selectedMenuItem)}>
      <i className="fab fa-youtube narrow-sidebar__icon" />
      <div className="narrow-sidebar__text">訂閱內容</div>
    </Icon>
    <Icon data-menu-item="library" onClick={handleOnClick} isSelected={isSelected('library', selectedMenuItem)}>
      <i className="fas fa-folder narrow-sidebar__icon" />
      <div className="narrow-sidebar__text">媒體庫</div>
    </Icon>
  </>
);

NarrowSideBarMenu.propTypes = {
  selectedMenuItem: PropTypes.string,
  handleOnClick: PropTypes.func,
};

NarrowSideBarMenu.defaultProps = {
  selectedMenuItem: '',
  handleOnClick: () => {},
};

export default NarrowSideBarMenu;
