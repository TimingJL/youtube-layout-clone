/* eslint-disable no-undef */
import React, {
  useEffect, useCallback, useRef, useState, useContext,
} from 'react';
import styled from 'styled-components';
import {
  HEIGHT_NAVIGATION_BAR,
} from 'Styled/Settings/constants';
import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';
import GridContainer from './GridContainer';

const MainContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100vh - ${HEIGHT_NAVIGATION_BAR}px);
  overflow-y: auto;
`;

const MainContent = () => {
  const mainContentRef = useRef();
  const [mainContentWidth, setMainContentWidth] = useState(0);
  const {
    isExtendMenu,
  } = useContext(YoutubeCloneContext);

  const handleOnResize = useCallback(() => {
    setMainContentWidth(mainContentRef.current.clientWidth);
  }, []);

  useEffect(() => {
    setMainContentWidth(mainContentRef.current.clientWidth);
  }, [isExtendMenu]);
  useEffect(() => {
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, [handleOnResize]);

  return (
    <MainContentContainer ref={mainContentRef}>
      <GridContainer mainContentWidth={mainContentWidth} />
    </MainContentContainer>
  );
};

export default MainContent;
