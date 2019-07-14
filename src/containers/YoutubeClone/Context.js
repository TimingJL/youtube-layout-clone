import { useState, createContext } from 'react';

// Context
export const YoutubeCloneContext = createContext();
export const useYoutubeCloneState = () => {
  const [themeType, setThemeType] = useState('lightTheme');
  const [isNavSearchBar, setIsNavSearchBar] = useState(false);
  const [isShowLargeMenu, setIsShowLargeMenu] = useState(false);
  return {
    themeType,
    setThemeType,
    isNavSearchBar,
    setIsNavSearchBar,
    isShowLargeMenu,
    setIsShowLargeMenu,
  };
};
