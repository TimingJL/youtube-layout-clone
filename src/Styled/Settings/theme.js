
import {
  HEIGHT_NAVIGATION_BAR,

  // break point
  // BREAK_POINT_XS,
  BREAK_POINT_SM,
  // BREAK_POINT_MD,
  // BREAK_POINT_LG,
  BREAK_POINT_XL,
} from './constants';

const breakpoints = {
  [BREAK_POINT_SM]: '657px',
  // [BREAK_POINT_SM]: '576px',
  // [BREAK_POINT_MD]: '768px',
  // [BREAK_POINT_LG]: '992px',
  [BREAK_POINT_XL]: '1200px',
};

const navigationBar = {
  height: HEIGHT_NAVIGATION_BAR,
};

const lightTheme = {
  navbar: {
    color: '#282828',
    background: '#ffffff',
    buttonBackground: '#f8f8f8',
    buttonHoverBackground: '#f0f0f0',
    iconColor: '#606060',
    menuBackgroundColor: '#888888',
    inputBoxBackgroundColor: '#ffffff',
    inputBoxBorderColor: '#d3d3d3',
  },
  sidebar: {
    background: '#f5f5f5',
    iconColor: '#909090',
  },
  mainContent: {
    background: '#fafafa',
  },
};

const darkTheme = {
  navbar: {
    color: '#ffffff',
    background: '#282828fa',
    buttonBackground: '#ffffff14',
    buttonHoverBackground: '#ffffff24',
    iconColor: '#ffffff',
    menuBackgroundColor: '#ffffff',
    inputBoxBackgroundColor: '#121212',
    inputBoxBorderColor: '#303030',
  },
  sidebar: {
    background: '#1c1c1c',
    iconColor: '#909090',
  },
  mainContent: {
    background: '#121212',
  },
};

export const defaultTheme = {
  breakpoints,
  navigationBar,
  lightTheme,
  darkTheme,
};
