
import {
  HEIGHT_NAVIGATION_BAR,

  // break point
  breakpoints,
} from './constants';

const navigationBar = {
  height: HEIGHT_NAVIGATION_BAR,
};

export const lightTheme = {
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
  dropdown: {
    background: '#ffffff',
    headerBackground: '#eeeeee',
    color: '#3f3f3f',
    iconColor: '#a2a2a2',
    dateColor: '#606060',
    itemHoverBackground: '#e8e8e8',
    borderColor: '#e8e8e8',
  },
  sidebar: {
    color: '#606060',
    background: '#f5f5f5',
    iconColor: '#909090',
    iconActiveColor: '#2f9ae6',
    iconBackgroundHover: '#00000015',
  },
  mainContent: {
    color: '#282828',
    background: '#fafafa',
  },
};

export const darkTheme = {
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
  dropdown: {
    background: '#252525',
    headerBackground: '#4f4e50',
    color: '#ffffff',
    dateColor: '#aaaaaa',
    iconColor: '#909090',
    itemHoverBackground: '#403f40',
    borderColor: '#424242',
  },
  sidebar: {
    color: '#aaaaaa',
    background: '#1c1c1c',
    iconColor: '#909090',
    iconActiveColor: '#ffffff',
    iconBackgroundHover: '#ffffff15',
  },
  mainContent: {
    color: '#ffffff',
    background: '#121212',
  },
};

export const defaultTheme = {
  breakpoints,
  navigationBar,
  lightTheme,
  darkTheme,
};
