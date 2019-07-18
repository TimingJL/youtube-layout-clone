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
    background: black;
  }
`;

const WIDTH_FLOAT_SIDE_BAR = 240;

const SideBarContainer = styled.div`
  .float-sidebar__mask {
    position: absolute;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    animation: ${(props) => (props.isExtendFloatMenu ? fadeInMaskAnimation : fadeOutMaskAnimation)} ${SPEED_ANIMATION}ms ease-in-out;
    animation-fill-mode: forwards;
  }
  .float-sidebar__menu-container {
    position: absolute;
    height: 100vh;
    width: ${WIDTH_FLOAT_SIDE_BAR}px;
    background: ${(props) => props.theme.sidebar.background};
    left: ${(props) => (props.isExtendFloatMenu ? '0px' : `${-1 * (WIDTH_FLOAT_SIDE_BAR)}px`)};
    transition: left 0.15s ease-in-out;
  }
`;

const SideBar = ({
  menu,
  isExtendFloatMenu,
  setIsExtendFloatMenu,
}) => {
  const handleOnCloseFloatSideMenu = useCallback(() => {
    setIsExtendFloatMenu(false);
  }, [setIsExtendFloatMenu]);
  return (
    <SideBarContainer
      isExtendFloatMenu={isExtendFloatMenu}
    >
      <div
        role="presentation"
        className="float-sidebar__mask"
        onClick={handleOnCloseFloatSideMenu}
      />
      <div className="float-sidebar__menu-container">
        {menu}
      </div>
    </SideBarContainer>
  );
};

SideBar.propTypes = {
  menu: PropTypes.any,
  isExtendFloatMenu: PropTypes.bool,
  setIsExtendFloatMenu: PropTypes.func,
};

SideBar.defaultProps = {
  menu: null,
  isExtendFloatMenu: false,
  setIsExtendFloatMenu: () => {},
};

export default SideBar;
