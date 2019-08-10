/* eslint-disable no-undef */
import React, {
  useEffect, useCallback, useRef, useState, useContext,
} from 'react';
import styled from 'styled-components';
import { fromJS } from 'immutable';
import {
  HEIGHT_NAVIGATION_BAR,
} from 'Styled/Settings/constants';
import {
  YoutubeCloneContext,
} from 'containers/YoutubeClone/Context';
import { data } from 'assets/data/videos';
import { getSampling } from 'utils/sampling';
import GridContainer from './GridContainer';

const MainContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100vh - ${HEIGHT_NAVIGATION_BAR}px);
  overflow-y: auto;
  overflow-x: hidden;
`;

const MainContent = () => {
  const initSelectedData = getSampling(3, data.length);
  const mainContentRef = useRef();
  const [dataSource, setDataSource] = useState(fromJS(data).filter((item, index) => initSelectedData.indexOf(index) > -1));
  const [mainContentWidth, setMainContentWidth] = useState(0);
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
        const selectedDataIndex = getSampling(3, data.length);
        const selectedData = fromJS(data).filter((item, index) => selectedDataIndex.indexOf(index) > -1);
        setDataSource((prev) => prev.concat(selectedData));
        setIsLoading(false);
      }, 1000);
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
