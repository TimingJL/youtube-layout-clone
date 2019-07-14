import React, { useContext } from 'react';
import styled from 'styled-components';

import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';

import SideBar from './SideBar';
import VideoGrid from './VideoGrid';

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  background: ${(props) => props.theme[props.themeType].mainContent.background};
  color: ${(props) => props.theme[props.themeType].mainContent.color};
`;

const MainContentContainer = () => {
  const {
    themeType,
  } = useContext(YoutubeCloneContext);
  return (
    <Container themeType={themeType}>
      <SideBar />
      <VideoGrid />
    </Container>
  );
};

export default MainContentContainer;
