import React from 'react';
import PropTypes from 'prop-types';
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
  color: ${(props) => props.theme[props.themeType].navbar.color};
  .youtube-logo__image {
    width: 25px;
    margin-right: 3px;
  }
  ${down(BREAK_POINT_SM)} {
    flex: 1 1 auto;
  }
`;

const YoutubeLogo = ({
  themeType,
}) => (
  <Container themeType={themeType}>
    <img alt="" src={URL_LOGO} className="youtube-logo__image" />
    <div title="MeTube">MeTube</div>
  </Container>
);

YoutubeLogo.propTypes = {
  themeType: PropTypes.string,
};

YoutubeLogo.defaultProps = {
  themeType: 'lightTheme',
};

export default YoutubeLogo;
