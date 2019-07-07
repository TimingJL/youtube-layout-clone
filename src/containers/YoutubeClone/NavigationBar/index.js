// Packages
import React, { useContext } from 'react';
import styled from 'styled-components';

// Components
import HamburgerMenuIcon from 'components/HamburgerMenuIcon';
import YoutubeLogo from 'components/YoutubeLogo';

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
`;


const NavigationBar = () => {
  const {
    themeType,
  } = useContext(YoutubeCloneContext);
  return (
    <NavigationBarContainer themeType={themeType}>
      <HamburgerMenuIcon themeType={themeType} />
      <YoutubeLogo themeType={themeType} />
    </NavigationBarContainer>
  );
};

export default NavigationBar;
