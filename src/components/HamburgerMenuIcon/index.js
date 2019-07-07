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
    background: #ffffff50;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    &:before {
      content: '';
      position: absolute;
      border-radius: 100%;
      background: white;
      animation: ${bubbleAnimation} 0.25s ease-out;
      animation-fill-mode: forwards;
    }
  }
`;

const HamburgerMenuIcon = ({
  themeType,
}) => (
  <Container themeType={themeType}>
    <i className="fas fa-bars" />
  </Container>
);

HamburgerMenuIcon.propTypes = {
  themeType: PropTypes.string,
};

HamburgerMenuIcon.default = {
  themeType: 'lightTheme',
};

export default HamburgerMenuIcon;
