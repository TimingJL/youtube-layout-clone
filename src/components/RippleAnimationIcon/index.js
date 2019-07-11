// https://codepen.io/hiyangguo/pen/BpRRrz
import styled from 'styled-components';

export const RippleAnimationIcon = styled.div`
  overflow: hidden;
  position: relative;
  transition: background-color .3s linear, border .3s linear;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle,
      ${(props) => `${props.theme[props.themeType] ? props.theme[props.themeType].navbar.menuBackgroundColor : '#000'}`} 10%,
      #00000000 10.01%
    );
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10);
    opacity: 0;
    transition: transform .3s, opacity 1s ease-in-out;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: ${(props) => props.theme[props.themeType].navbar.menuBackgroundColor};
    border-radius: 100%;
  }

  &:active:after {
    transform: scale(0);
    opacity: .5;
    transition: 0s;
  }

  &:active {
    transform: scale(.9);
    transition: 0.07s;
    &:before {
      width: 100%;
      height: 100%;
      opacity: 0.2;
      border-radius: 100%;
      transition: all 0.2s;
    }
  }
`;
