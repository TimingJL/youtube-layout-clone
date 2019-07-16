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
  isExtendFloatMenu,
  setIsExtendFloatMenu,
}) => {
  const sidebarRootNode = document.getElementById('sidebar-root');
  useEffect(() => {
    sidebarRootNode.setAttribute('style', sidebarRootStyle);
  }, []);
  useEffect(() => {
    if (!isExtendFloatMenu) {
      setTimeout(() => {
        sidebarRootNode.style.zIndex = -1;
      }, SPEED_ANIMATION);
    } else {
      sidebarRootNode.style.zIndex = zIndices.Z_FLOAT_SIDE_BAR;
    }
  }, [isExtendFloatMenu]);
  return ReactDOM.createPortal(
    <SideBar
      themeType={themeType}
      isExtendFloatMenu={isExtendFloatMenu}
      setIsExtendFloatMenu={setIsExtendFloatMenu}
    />,
    sidebarRootNode,
  );
};

FloatSideBar.propTypes = {
  themeType: PropTypes.string,
  isExtendFloatMenu: PropTypes.bool,
  setIsExtendFloatMenu: PropTypes.func,
};

FloatSideBar.defaultProps = {
  themeType: 'lightTheme',
  isExtendFloatMenu: false,
  setIsExtendFloatMenu: () => {},
};

export default FloatSideBar;