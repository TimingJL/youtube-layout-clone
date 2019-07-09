// Packages
import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import HamburgerMenuIcon from 'components/HamburgerMenuIcon';
import YoutubeLogo from 'components/YoutubeLogo';
import SearchBar from 'components/SearchBar';

import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';

import Avatar from './Avatar';
import Notification from './Notification';
import Message from './Message';
import FunctionMenu from './FunctionMenu';
import UploadLive from './UploadLive';

const HamburgerMenuIconContainer = styled.div`
  margin-right: 16px;
`;

const NavigationBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px;
  height: ${(props) => `${props.theme.navigationBar.height}px;`};
  color: ${(props) => props.theme[props.themeType].navbar.color};
  background: ${(props) => props.theme[props.themeType].navbar.background};
  box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, .06);
`;


const NavigationBar = () => {
  const {
    themeType,
  } = useContext(YoutubeCloneContext);
  return (
    <NavigationBarContainer themeType={themeType}>
      <HamburgerMenuIconContainer>
        <HamburgerMenuIcon themeType={themeType} />
      </HamburgerMenuIconContainer>
      <YoutubeLogo />
      <SearchBar themeType={themeType} />
      <UploadLive themeType={themeType} />
      <FunctionMenu themeType={themeType} />
      <Message themeType={themeType} />
      <Notification themeType={themeType} />
      <Avatar />
    </NavigationBarContainer>
  );
};

export default NavigationBar;
