import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const bubbleAnimation = keyframes`
  from {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
  to {
    width: 40px;
    height: 40px;
    opacity: 0.5;
  }
`;

const Container = styled.div`
  font-size: 18px;
  color: ${(props) => {
    if (props.themeType) {
      return props.theme[props.themeType].navbar.color;
    }
    return 'white';
  }};
  width: 40px;
  height: 40px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  cursor: pointer;
  background: #ffffff00;
  transition: all 0.5s;
  &:active {
    transition: all 0.1s;
    background: ${(props) => `${props.theme[props.themeType].navbar.menuBackgroundColor}`}
    width: 40px;
    height: 40px;
    border-radius: 100%;
    &:before {
      content: '';
      position: absolute;
      border-radius: 100%;
      background: #777;
      animation: ${bubbleAnimation} 0.3s ease-out;
      animation-fill-mode: forwards;
    }
  }

  .hamburger-menu-icon__bars {
    z-index: 1;
  }
`;

const HamburgerMenuIcon = ({
  themeType,
}) => (
  <Container themeType={themeType}>
    <i className="fas fa-bars hamburger-menu-icon__bars" />
  </Container>
);

HamburgerMenuIcon.propTypes = {
  themeType: PropTypes.string,
};

HamburgerMenuIcon.default = {
  themeType: 'lightTheme',
};

export default HamburgerMenuIcon;
