import React from 'react';
import styled from 'styled-components';

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
`;

const YoutubeLogo = () => (
  <Container>
    <img alt="" src={URL_LOGO} className="youtube-logo__image" />
    <div title="Taiming Tube">TaiTube</div>
  </Container>
);

export default YoutubeLogo;
