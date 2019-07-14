/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import zIndices from 'Styled/Settings/zIndices';
import SideBar from './SideBar';
import { SPEED_ANIMATION } from './constants';

const sidebarRootStyle = `
  position: absolute;
  z-index: ${zIndices.Z_FLOAT_SIDE_BAR};
  width: 100vw;
  height: 100vh;
`;

const FloatSideBar = ({
  themeType,
  isShowFloatSideMenu,
  setIsShowFloatSideMenu,
}) => {
  const sidebarRootNode = document.getElementById('sidebar-root');
  useEffect(() => {
    sidebarRootNode.setAttribute('style', sidebarRootStyle);
  }, []);
  useEffect(() => {
    if (!isShowFloatSideMenu) {
      setTimeout(() => {
        sidebarRootNode.style.zIndex = -1;
      }, SPEED_ANIMATION);
    } else {
      sidebarRootNode.style.zIndex = zIndices.Z_FLOAT_SIDE_BAR;
    }
  }, [isShowFloatSideMenu]);
  return ReactDOM.createPortal(
    <SideBar
      themeType={themeType}
      isShowFloatSideMenu={isShowFloatSideMenu}
      setIsShowFloatSideMenu={setIsShowFloatSideMenu}
    />,
    sidebarRootNode,
  );
};

FloatSideBar.propTypes = {
  themeType: PropTypes.string,
  isShowFloatSideMenu: PropTypes.bool,
  setIsShowFloatSideMenu: PropTypes.func,
};

FloatSideBar.defaultProps = {
  themeType: 'lightTheme',
  isShowFloatSideMenu: false,
  setIsShowFloatSideMenu: () => {},
};

export default FloatSideBar;
