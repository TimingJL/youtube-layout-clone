import { useState, createContext } from 'react';
import {
  lightTheme,
  darkTheme,
} from 'Styled/Settings/theme';

// Context
export const YoutubeCloneContext = createContext();
export const useYoutubeCloneState = () => {
  const [themeType, setThemeType] = useState('lightTheme');
  const [isNavSearchBar, setIsNavSearchBar] = useState(false);
  const [isExtendMenu, setIsExtendMenu] = useState(false);
  const [isExtendFloatMenu, setIsExtendFloatMenu] = useState(false);
  const [isUsingFloatSideMenu, setIsUsingFloatSideMenu] = useState(false);
  const customeTheme = {
    lightTheme,
    darkTheme,
  };
  const themeOptions = [
    {
      id: 'lightTheme',
      name: '預設主題',
    },
    {
      id: 'darkTheme',
      name: '深色主題',
    },
  ];
  const currentTheme = customeTheme[themeType];
  return {
    themeType,
    currentTheme,
    themeOptions,
    setThemeType,
    isNavSearchBar,
    setIsNavSearchBar,
    isUsingFloatSideMenu,
    setIsUsingFloatSideMenu,
    isExtendMenu,
    setIsExtendMenu,
    isExtendFloatMenu,
    setIsExtendFloatMenu,
  };
};
