/* eslint-disable no-undef */
// Packages
import React, { useContext, useCallback, useEffect } from 'react';
import styled from 'styled-components';

// Components
import HamburgerMenuIcon from 'components/HamburgerMenuIcon';
import YoutubeLogo from 'components/YoutubeLogo';
import SearchBar from 'components/SearchBar';

import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';

import { down } from 'components/BreakPoints';
import {
  BREAK_POINT_SM,
  breakpoints,
} from 'Styled/Settings/constants';
import zIndices from 'Styled/Settings/zIndices';
import {
  getBreakPointValue,
} from 'Styled/Settings/utils';

import Avatar from './Avatar';
import Notification from './Notification';
import Message from './Message';
import FunctionMenu from './FunctionMenu';
import UploadLive from './UploadLive';
import NavSearchBar from './NavSearchBar';

const HamburgerMenuIconContainer = styled.div`
  margin-right: 16px;
  ${down(BREAK_POINT_SM)} {
    margin-right: 0px;
  }
`;

const NavigationBarContainer = styled.div`
  z-index: ${zIndices.Z_NAV_BAR};
  display: flex;
  align-items: center;
  height: ${(props) => `${props.theme.navigationBar.height}px;`};
  color: ${(props) => props.theme.navbar.color};
  background: ${(props) => props.theme.navbar.background};
  box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, .06);
`;

const NavigationMenuWrapper = styled.div`
  padding: 0px 16px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const NavigationBar = () => {
  const {
    isNavSearchBar,
    isUsingFloatSideMenu,
    setIsNavSearchBar,
    setIsExtendMenu,
    setIsExtendFloatMenu,
  } = useContext(YoutubeCloneContext);
  const breakValue = getBreakPointValue(BREAK_POINT_SM, breakpoints);
  const handleOnResize = useCallback(() => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth > breakValue) {
      setIsNavSearchBar(false);
    }
  }, [breakValue, setIsNavSearchBar]);
  const handleSetIsNavSearchBar = useCallback(() => {
    setIsNavSearchBar((prev) => !prev);
  }, [setIsNavSearchBar]);
  const handleOnMenuToggleClick = useCallback(() => {
    if (isUsingFloatSideMenu) {
      setIsExtendFloatMenu(true);
      return;
    }
    setIsExtendMenu((prev) => !prev);
  }, [setIsExtendMenu, isUsingFloatSideMenu, setIsExtendFloatMenu]);

  useEffect(() => {
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  });
  return (
    <NavigationBarContainer>
      {
        isNavSearchBar ?
          <NavSearchBar handleSetIsNavSearchBar={handleSetIsNavSearchBar} /> :
          <NavigationMenuWrapper>
            <HamburgerMenuIconContainer onClick={handleOnMenuToggleClick}>
              <HamburgerMenuIcon />
            </HamburgerMenuIconContainer>
            <YoutubeLogo />
            <SearchBar handleSetIsNavSearchBar={handleSetIsNavSearchBar} />
            <UploadLive />
            <FunctionMenu />
            <Message />
            <Notification />
            <Avatar />
          </NavigationMenuWrapper>
      }
    </NavigationBarContainer>
  );
};

export default NavigationBar;
