import React from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';
import MainContent from './MainContent';

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  background: ${(props) => props.theme.mainContent.background};
  color: ${(props) => props.theme.mainContent.color};
`;

const MainContentContainer = () => (
  <Container>
    <SideBar />
    <MainContent />
  </Container>
);

export default MainContentContainer;
