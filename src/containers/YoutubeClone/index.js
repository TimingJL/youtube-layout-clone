// Packages
import React from 'react';
import styled from 'styled-components';

// Components
import NavigationBar from './NavigationBar';
import MainContentContainer from './MainContentContainer';

// Context
import {
  YoutubeCloneContext,
  useYoutubeCloneState,
} from './Context';

const {
  Provider,
} = YoutubeCloneContext;

const YoutubeCloneContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
`;

const YoutubeClone = () => {
  const value = useYoutubeCloneState();
  return (
    <Provider value={value}>
      <YoutubeCloneContainer>
        <NavigationBar />
        <MainContentContainer />
      </YoutubeCloneContainer>
    </Provider>
  );
};

export default YoutubeClone;
