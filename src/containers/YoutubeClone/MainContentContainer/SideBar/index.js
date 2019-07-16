/* eslint-disable no-undef */
import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';

import FloatSideBar from 'components/FloatSideBar';

import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';
import { down } from 'components/BreakPoints';
import {
  BREAK_POINT_LG,
  BREAK_POINT_XL,
  breakpoints,
} from 'Styled/Settings/constants';
import {
  getBreakPointValue,
} from 'Styled/Settings/utils';
import {
  useInitSidebarSize,
  useListenWindowResize,
} from './customHooks';


const SideBarContainer = styled.div`
  width: 72px;
  background: ${(props) => props.theme[props.themeType].sidebar.background};
  ${down(BREAK_POINT_LG)} {
    display: none;
  }
`;

const LargeSideBarContainer = styled.div`
  width: 240px;
  background: ${(props) => props.theme[props.themeType].sidebar.background};
  ${down(BREAK_POINT_LG)} {
    display: none;
  }
`;

const SideBar = () => {
  const {
    themeType,
    isUsingFloatSideMenu,
    setIsUsingFloatSideMenu,
    isExtendMenu,
    setIsExtendMenu,
    isExtendFloatMenu,
    setIsExtendFloatMenu,
  } = useContext(YoutubeCloneContext);
  const breakValue = getBreakPointValue(BREAK_POINT_XL, breakpoints);
  const handleOnResize = useCallback(() => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth >= breakValue) {
      setIsUsingFloatSideMenu(false);
      setIsExtendFloatMenu(false);
      return;
    }
    setIsUsingFloatSideMenu(true);
  }, [breakValue, setIsUsingFloatSideMenu]);

  useInitSidebarSize({
    breakValue,
    setIsUsingFloatSideMenu,
    setIsExtendMenu,
  });
  useListenWindowResize({
    handleOnResize,
  });

  return (
    <>
      {
        (isUsingFloatSideMenu) &&
        <FloatSideBar
          themeType={themeType}
          isExtendFloatMenu={isExtendFloatMenu}
          setIsExtendFloatMenu={setIsExtendFloatMenu}
        />
      }
      {
        (!isUsingFloatSideMenu && isExtendMenu) ?
          <LargeSideBarContainer themeType={themeType}>
            LargeSideBar
          </LargeSideBarContainer> :
          <SideBarContainer themeType={themeType}>
            SideBar
          </SideBarContainer>
      }
    </>
  );
};

export default SideBar;
