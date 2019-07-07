
import {
  HEIGHT_NAVIGATION_BAR,
} from './constants';

const navigationBar = {
  height: HEIGHT_NAVIGATION_BAR,
};

const lightTheme = {
  navbar: {
    color: '#282828',
    background: '#ffffff',
    buttonBackground: '#f8f8f8',
    iconColor: '#606060',
    menuBackgroundColor: '#eeeeee',
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
    iconColor: '#ffffff',
    menuBackgroundColor: '#dddddd',
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
  navigationBar,
  lightTheme,
  darkTheme,
};
