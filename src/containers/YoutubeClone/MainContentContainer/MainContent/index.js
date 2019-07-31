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
  const [dataNumber, setDataNumber] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const {
    isExtendMenu,
  } = useContext(YoutubeCloneContext);

  const handleOnResize = useCallback(() => {
    setMainContentWidth(mainContentRef.current.clientWidth);
  }, []);

  const handleOnScroll = useCallback(() => {
    const $rDOM = mainContentRef.current;
    const scrollPos = $rDOM.scrollTop + $rDOM.clientHeight;
    const divHeight = $rDOM.scrollHeight;

    if (scrollPos >= divHeight) {
      setIsLoading(true);
      setTimeout(() => {
        setDataNumber((prev) => prev + 3);
        setIsLoading(false);
      }, 1500);
    }
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

  const dataSource = new Array(dataNumber).fill(0).map((item, i) => i);

  return (
    <MainContentContainer ref={mainContentRef} onScroll={handleOnScroll}>
      <GridContainer
        mainContentWidth={mainContentWidth}
        dataSource={dataSource}
        isLoading={isLoading}
      />
    </MainContentContainer>
  );
};

export default MainContent;
