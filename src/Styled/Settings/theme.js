import { COLOR_LOGO } from 'Styled/Settings/colors';
import {
  breakpoints,
} from './constants';

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
    headerColor: '#282828',
    iconColor: '#a2a2a2',
    dateColor: '#606060',
    itemHoverBackground: '#e8e8e8',
    borderColor: '#e8e8e8',
  },
  sidebar: {
    color: '#606060',
    largeMenuColor: '#0d0d0d',
    background: '#f5f5f5',
    iconColor: '#909090',
    iconActiveColor: COLOR_LOGO,
    iconBackgroundHover: '#00000015',
    iconBackgroundActive: '#c3c3c3',
  },
  mainContent: {
    color: '#282828',
    background: '#fafafa',
    borderColor: '#e1e1e1',
    cardTextColor: '#606060',
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
    headerColor: '#ffffff',
    dateColor: '#aaaaaa',
    iconColor: '#909090',
    itemHoverBackground: '#403f40',
    borderColor: '#424242',
  },
  sidebar: {
    color: '#aaaaaa',
    largeMenuColor: '#ffffff',
    background: '#1c1c1c',
    iconColor: '#909090',
    iconActiveColor: '#ffffff',
    iconBackgroundHover: '#ffffff15',
    iconBackgroundActive: '#4b4b4b',
  },
  mainContent: {
    color: '#ffffff',
    background: '#121212',
    borderColor: '#2a2a2a',
    cardTextColor: '#aaaaaa',
  },
};

export const sakuraTheme = {
  navbar: {
    color: '#ffffff',
    background: '#ff7f97',
    buttonBackground: '#ffffff14',
    buttonHoverBackground: '#ffffff24',
    iconColor: '#ffffff',
    menuBackgroundColor: '#ffffff',
    inputBoxBackgroundColor: '#ffffff',
    inputBoxBorderColor: '#ffa6b7',
  },
  dropdown: {
    background: '#ffffff',
    headerBackground: '#ffa6b7',
    color: '#ff6b87',
    headerColor: '#ff6b87',
    dateColor: '#ff6b87',
    iconColor: '#ff6b87',
    itemHoverBackground: '#fff4f6',
    borderColor: '#ffa6b7',
  },
  sidebar: {
    color: '#ffa6b7',
    largeMenuColor: '#ffa6b7',
    background: '#ffffff',
    iconColor: '#ffa6b7',
    iconActiveColor: '#ffa6b7',
    iconBackgroundHover: '#ff6b872b',
    iconBackgroundActive: '#ffcdd7',
  },
  mainContent: {
    color: '#ff6b87',
    background: '#fff4f6',
    borderColor: '#ffa6b7',
    cardTextColor: '#cc9ea7',
  },
};

export const defaultTheme = {
  breakpoints,
};
