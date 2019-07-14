/* eslint-disable consistent-return */
import React, { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { SPEED_ANIMATION } from 'components/FloatSideBar/constants';

const fadeOutMaskAnimation = keyframes`
  0% {
    opacity: 0.5;
    display: 'block';
  }
  100% {
    opacity: 0;
    display: 'none';
  }
`;

const fadeInMaskAnimation = keyframes`
  0% {
    opacity: 0;
    display: 'none';
  }
  100% {
    opacity: 0.5;
    display: 'block';
  }
`;

const WIDTH_FLOAT_SIDE_BAR = 240;

const SideBarContainer = styled.div`
  .float-sidebar__mask {
    position: absolute;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    background: black;
    animation: ${(props) => (props.isShowFloatSideMenu ? fadeInMaskAnimation : fadeOutMaskAnimation)} ${SPEED_ANIMATION}ms ease-in-out;
    animation-fill-mode: forwards;
  }
  .float-sidebar__menu-container {
    position: absolute;
    height: 100vh;
    width: ${WIDTH_FLOAT_SIDE_BAR}px;
    background: ${(props) => props.theme[props.themeType].sidebar.background};
    left: ${(props) => (props.isShowFloatSideMenu ? '0px' : `${-1 * (WIDTH_FLOAT_SIDE_BAR)}px`)};
    transition: left 0.15s ease-in-out;
  }
`;

const SideBar = ({
  themeType,
  isShowFloatSideMenu,
  setIsShowFloatSideMenu,
}) => {
  const handleOnCloseFloatSideMenu = useCallback(() => {
    setIsShowFloatSideMenu(false);
  }, [setIsShowFloatSideMenu]);
  return (
    <SideBarContainer
      themeType={themeType}
      isShowFloatSideMenu={isShowFloatSideMenu}
    >
      <div
        role="presentation"
        className="float-sidebar__mask"
        onClick={handleOnCloseFloatSideMenu}
      />
      <div className="float-sidebar__menu-container">menu container</div>
    </SideBarContainer>
  );
};

SideBar.propTypes = {
  themeType: PropTypes.string,
  isShowFloatSideMenu: PropTypes.bool,
  setIsShowFloatSideMenu: PropTypes.func,
};

SideBar.defaultProps = {
  themeType: 'lightTheme',
  isShowFloatSideMenu: false,
  setIsShowFloatSideMenu: () => {},
};

export default SideBar;
