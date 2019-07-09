import React from 'react';
import styled from 'styled-components';
import { down } from 'components/BreakPoints';
import {
  BREAK_POINT_SM,
} from 'Styled/Settings/constants';

// param
import URL_LOGO from 'assets/logo.png';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
  display: flex;
  align-items: center;
  font-family: 'Anton', sans-serif;
  cursor: pointer;
  .youtube-logo__image {
    width: 25px;
    margin-right: 3px;
  }
  ${down(BREAK_POINT_SM)} {
    flex: 1 1 auto;
  }
`;

const YoutubeLogo = () => (
  <Container>
    <img alt="" src={URL_LOGO} className="youtube-logo__image" />
    <div title="Taiming Tube">MeTube</div>
  </Container>
);

export default YoutubeLogo;
