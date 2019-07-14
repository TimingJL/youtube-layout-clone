/* eslint-disable no-undef */
import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';

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
    isShowLargeMenu,
    setIsShowLargeMenu,
  } = useContext(YoutubeCloneContext);
  const breakValue = getBreakPointValue(BREAK_POINT_XL, breakpoints);
  const handleOnResize = useCallback(() => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth >= breakValue) {
      if (!isShowLargeMenu) {
        setIsShowLargeMenu(true);
      }
    } else if (isShowLargeMenu) {
      setIsShowLargeMenu(false);
    }
  }, [breakValue, isShowLargeMenu, setIsShowLargeMenu]);

  useInitSidebarSize({
    setIsShowLargeMenu,
    breakValue,
  });
  useListenWindowResize({
    handleOnResize,
  });
  return (
    <>
      {
        isShowLargeMenu ?
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
