// Packages
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from 'Styled/Settings/theme';

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
  const {
    currentTheme,
  } = value;
  const theme = {
    ...defaultTheme,
    ...currentTheme,
  };
  return (
    <Provider value={value}>
      <ThemeProvider theme={theme}>
        <YoutubeCloneContainer>
          <NavigationBar />
          <MainContentContainer />
        </YoutubeCloneContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default YoutubeClone;
