
import {
  HEIGHT_NAVIGATION_BAR,
} from './constants';

const navigationBar = {
  height: HEIGHT_NAVIGATION_BAR,
};

const lightTheme = {
  navbar: {
    color: '#282828',
    background: '#fff',
    buttonBackground: '#f8f8f8',
    iconColor: '#606060',
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
    color: '#fff',
    background: '#282828fa',
    buttonBackground: '#ffffff14',
    iconColor: '#fff',
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
