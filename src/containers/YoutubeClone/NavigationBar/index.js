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
  display: flex;
  align-items: center;
  height: ${(props) => `${props.theme.navigationBar.height}px;`};
  color: ${(props) => props.theme[props.themeType].navbar.color};
  background: ${(props) => props.theme[props.themeType].navbar.background};
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
    themeType,
    isNavSearchBar,
    setIsNavSearchBar,
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

  useEffect(() => {
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, []);
  return (
    <NavigationBarContainer themeType={themeType}>
      {
        isNavSearchBar ?
          <NavSearchBar themeType={themeType} handleSetIsNavSearchBar={handleSetIsNavSearchBar} /> :
          <NavigationMenuWrapper>
            <HamburgerMenuIconContainer>
              <HamburgerMenuIcon themeType={themeType} />
            </HamburgerMenuIconContainer>
            <YoutubeLogo />
            <SearchBar themeType={themeType} handleSetIsNavSearchBar={handleSetIsNavSearchBar} />
            <UploadLive themeType={themeType} />
            <FunctionMenu themeType={themeType} />
            <Message themeType={themeType} />
            <Notification themeType={themeType} />
            <Avatar />
          </NavigationMenuWrapper>
      }
    </NavigationBarContainer>
  );
};

export default NavigationBar;
