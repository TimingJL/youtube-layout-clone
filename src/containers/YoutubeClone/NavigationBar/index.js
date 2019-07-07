// Packages
import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import HamburgerMenuIcon from 'components/HamburgerMenuIcon';
import YoutubeLogo from 'components/YoutubeLogo';
import SearchBar from 'components/SearchBar';

// Context
import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';

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
      <HamburgerMenuIcon themeType={themeType} />
      <YoutubeLogo />
      <SearchBar themeType={themeType} />
      <div>123123123123</div>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
