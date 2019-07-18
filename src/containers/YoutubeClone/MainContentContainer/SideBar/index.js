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
import FloatSideBarMenu from './FloatSideBarMenu';
import {
  useInitSidebarSize,
  useListenWindowResize,
} from './customHooks';
import NarrowSideBarMenu from './NarrowSideBarMenu';


const SideBarContainer = styled.div`
  padding: 5px 0px;
  width: 72px;
  background: ${(props) => props.theme.sidebar.background};
  ${down(BREAK_POINT_LG)} {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LargeSideBarContainer = styled.div`
  width: 240px;
  background: ${(props) => props.theme.sidebar.background};
  ${down(BREAK_POINT_LG)} {
    display: none;
  }
`;

const SideBar = () => {
  const {
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
  }, [breakValue, setIsUsingFloatSideMenu, setIsExtendFloatMenu]);

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
          isExtendFloatMenu={isExtendFloatMenu}
          setIsExtendFloatMenu={setIsExtendFloatMenu}
          menu={<FloatSideBarMenu />}
        />
      }
      {
        (!isUsingFloatSideMenu && isExtendMenu) ?
          <LargeSideBarContainer>
            LargeSideBar
          </LargeSideBarContainer> :
          <SideBarContainer>
            <NarrowSideBarMenu />
          </SideBarContainer>
      }
    </>
  );
};

export default SideBar;
